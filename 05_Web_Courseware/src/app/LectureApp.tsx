import { startTransition, useEffect, useRef, useState } from "react";

import { MarkdownBlock } from "../components/MarkdownBlock";
import { lectureOrder, lecturePages } from "../content/courseware";
import type { LectureAct, LectureId, LectureSection, LectureSectionKind } from "../content/types";
import { homeHref, lectureHref } from "../utils/navigation";

type LectureAppProps = {
  lectureId: LectureId;
};

const actLabels: Record<LectureAct, string> = {
  第一幕: "Act I",
  第二幕: "Act II",
  第三幕: "Act III",
};

const sectionKindLabels: Record<LectureSectionKind, string> = {
  outline: "课程总纲",
  introduction: "引言",
  framework: "核心心法",
  case: "案例演练",
  pitfall: "高管雷区",
  lab: "实验接口",
  document: "正文",
};

const presenterCueMap: Record<LectureSectionKind, string> = {
  outline: "先交代本讲在整门课中的位置，再强调本讲要击碎的旧认知与交付契约。",
  introduction: "这一段的任务不是解释技术细节，而是先把学生原有的直觉打碎。",
  framework: "这里要把术语讲准，慢一点，确保学生知道哪些变量和边界真正会改写系统命运。",
  case: "案例不要讲成故事复述，要不断把它拉回状态、事件、资源、规则与死法。",
  pitfall: "语气要冷，不要温和提醒。这里是在给学生划不能踩的坑，而不是给建议集锦。",
  lab: "务必把下午实验和仓库交付说清楚，让学生知道今天下课后到底要做什么。",
  document: "这一段重点在于把讲义里的抽象推进关系讲出来，而不是逐字朗读。",
};

function getInitialPresenterMode() {
  const url = new URL(window.location.href);
  return url.searchParams.get("presenter") === "1";
}

function getRequestedSectionId(sections: LectureSection[]) {
  const url = new URL(window.location.href);
  const sectionId = url.searchParams.get("section");
  const hashId = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  const slideParam = Number(url.searchParams.get("slide") ?? "");

  if (sectionId && sections.some((section) => section.id === sectionId)) {
    return sectionId;
  }

  if (hashId && sections.some((section) => section.id === hashId)) {
    return hashId;
  }

  if (Number.isFinite(slideParam) && slideParam > 0 && slideParam <= sections.length) {
    return sections[slideParam - 1]?.id ?? sections[0].id;
  }

  return sections[0]?.id ?? "";
}

function syncLectureQuery(sectionId: string, presenterMode: boolean) {
  const url = new URL(window.location.href);
  url.searchParams.set("section", sectionId);

  if (presenterMode) {
    url.searchParams.set("presenter", "1");
  } else {
    url.searchParams.delete("presenter");
  }

  url.hash = sectionId;
  window.history.replaceState({}, "", url.toString());
}

export function LectureApp({ lectureId }: LectureAppProps) {
  const lecture = lecturePages[lectureId];
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [presenterMode, setPresenterMode] = useState(getInitialPresenterMode);
  const [copyState, setCopyState] = useState<"idle" | "done" | "failed">("idle");
  const [activeSectionId, setActiveSectionId] = useState(() =>
    getRequestedSectionId(lecture.sections),
  );

  const currentLectureIndex = lectureOrder.indexOf(lectureId);
  const previousLectureId =
    currentLectureIndex > 0 ? lectureOrder[currentLectureIndex - 1] : null;
  const nextLectureId =
    currentLectureIndex < lectureOrder.length - 1
      ? lectureOrder[currentLectureIndex + 1]
      : null;
  const activeSection =
    lecture.sections.find((section) => section.id === activeSectionId) ?? lecture.sections[0];
  const activeSectionIndex = lecture.sections.findIndex(
    (section) => section.id === activeSection?.id,
  );

  function setSectionRef(sectionId: string) {
    return (node: HTMLElement | null) => {
      sectionRefs.current[sectionId] = node;
    };
  }

  function scrollToSection(sectionId: string, behavior: ScrollBehavior = "smooth") {
    const target = sectionRefs.current[sectionId];

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior,
      block: "start",
      inline: "nearest",
    });
  }

  function jumpToSection(sectionId: string) {
    startTransition(() => {
      setActiveSectionId(sectionId);
    });
    scrollToSection(sectionId);
  }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyState("done");
    } catch {
      setCopyState("failed");
    }
  }

  async function handleFullscreenToggle() {
    if (!document.fullscreenEnabled) {
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await document.documentElement.requestFullscreen();
  }

  useEffect(() => {
    const requestedSectionId = getRequestedSectionId(lecture.sections);

    if (!requestedSectionId) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      scrollToSection(requestedSectionId, "auto");
      setActiveSectionId(requestedSectionId);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [lecture.id]);

  useEffect(() => {
    syncLectureQuery(activeSectionId, presenterMode);
  }, [activeSectionId, presenterMode]);

  useEffect(() => {
    function handleScroll() {
      let nextSectionId = lecture.sections[0]?.id ?? "";
      let bestTop = Number.NEGATIVE_INFINITY;

      lecture.sections.forEach((section) => {
        const element = sectionRefs.current[section.id];

        if (!element) {
          return;
        }

        const top = element.getBoundingClientRect().top;

        if (top <= 180 && top > bestTop) {
          bestTop = top;
          nextSectionId = section.id;
        }
      });

      if (bestTop === Number.NEGATIVE_INFINITY) {
        let nearestDistance = Number.POSITIVE_INFINITY;

        lecture.sections.forEach((section) => {
          const element = sectionRefs.current[section.id];

          if (!element) {
            return;
          }

          const distance = Math.abs(element.getBoundingClientRect().top - 180);

          if (distance < nearestDistance) {
            nearestDistance = distance;
            nextSectionId = section.id;
          }
        });
      }

      setActiveSectionId((current) => (current === nextSectionId ? current : nextSectionId));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [lecture.sections]);

  useEffect(() => {
    if (copyState === "idle") {
      return;
    }

    const timer = window.setTimeout(() => {
      setCopyState("idle");
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [copyState]);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPresenterMode((current) => !current);
      }

      if (event.key.toLowerCase() === "f") {
        event.preventDefault();
        void handleFullscreenToggle();
      }

      if (
        event.key === "ArrowRight" ||
        event.key === "PageDown" ||
        event.key.toLowerCase() === "j"
      ) {
        event.preventDefault();
        const nextSection = lecture.sections[activeSectionIndex + 1];

        if (nextSection) {
          jumpToSection(nextSection.id);
        }
      }

      if (
        event.key === "ArrowLeft" ||
        event.key === "PageUp" ||
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        const previousSection = lecture.sections[activeSectionIndex - 1];

        if (previousSection) {
          jumpToSection(previousSection.id);
        }
      }

      if (event.key === "Home") {
        event.preventDefault();
        jumpToSection(lecture.sections[0]?.id ?? "");
      }

      if (event.key === "End") {
        event.preventDefault();
        jumpToSection(lecture.sections[lecture.sections.length - 1]?.id ?? "");
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [activeSectionIndex, lecture.sections]);

  return (
    <div className={`lecture-page lecture-page--reader lecture-page--${lecture.act}`}>
      <header className="reader-topbar">
        <a
          className="topbar-link"
          href={homeHref("lecture", { presenter: presenterMode })}
        >
          返回总首页
        </a>
        <div className="topbar-course">
          <span>{actLabels[lecture.act]}</span>
          <strong>{lecture.shortTitle}</strong>
        </div>
        <div className="topbar-actions">
          <button
            className="topbar-button"
            onClick={() => {
              void handleCopyLink();
            }}
            type="button"
          >
            复制当前段落链接
          </button>
          <button
            className="topbar-button"
            onClick={() => {
              void handleFullscreenToggle();
            }}
            type="button"
          >
            全屏
          </button>
          <button
            className={`topbar-button ${presenterMode ? "is-active" : ""}`}
            onClick={() => setPresenterMode((current) => !current)}
            type="button"
          >
            讲师模式
          </button>
        </div>
      </header>

      <section className="reader-hero">
        <div className="reader-hero__copy">
          <p className="reader-hero__eyebrow">
            {lecture.act} · {actLabels[lecture.act]}
          </p>
          <h1>{lecture.title}</h1>
          <p className="reader-hero__question">{lecture.anchorQuestion}</p>
          <blockquote>{lecture.blackboardLine}</blockquote>
          <p className="reader-hero__positioning">{lecture.positioning}</p>
        </div>
        <div className="reader-hero__meta">
          <div className="hero-stat">
            <span>讲义形态</span>
            <strong>长篇讲授型</strong>
          </div>
          <div className="hero-stat">
            <span>原始来源</span>
            <strong>{lecture.sections.length} 个正文模块</strong>
          </div>
          <div className="hero-stat">
            <span>课堂目标</span>
            <strong>讲得深，而不是页数整齐</strong>
          </div>
          <div className="hero-status">
            {copyState === "done"
              ? "当前段落链接已复制"
              : copyState === "failed"
                ? "复制失败，请直接复制地址栏"
                : presenterMode
                  ? "讲师模式已开启"
                  : "当前为学生视图"}
          </div>
        </div>
      </section>

      <div className={`reader-shell ${presenterMode ? "has-presenter" : ""}`}>
        <aside className="reader-sidebar">
          <div className="sidebar-block">
            <p className="sidebar-kicker">本讲章节</p>
            <div className="section-nav">
              {lecture.sections.map((section, index) => (
                <button
                  className={`section-nav__item ${
                    activeSectionId === section.id ? "is-current" : ""
                  }`}
                  key={section.id}
                  onClick={() => jumpToSection(section.id)}
                  type="button"
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{section.title}</strong>
                    <p>{section.label}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-block">
            <p className="sidebar-kicker">全课坐标</p>
            <div className="course-jumps">
              {previousLectureId ? (
                <a
                  className="outline-link"
                  href={lectureHref(previousLectureId, "lecture", lectureId, {
                    presenter: presenterMode,
                  })}
                >
                  ← 上一讲
                </a>
              ) : (
                <span className="outline-link is-disabled">← 上一讲</span>
              )}

              {nextLectureId ? (
                <a
                  className="outline-link"
                  href={lectureHref(nextLectureId, "lecture", lectureId, {
                    presenter: presenterMode,
                  })}
                >
                  下一讲 →
                </a>
              ) : (
                <span className="outline-link is-disabled">下一讲 →</span>
              )}
            </div>
            <p className="sidebar-bridge">{lecture.bridgeLine}</p>
          </div>
        </aside>

        <main className="reader-main">
          {lecture.sections.map((section, index) => (
            <article
              className={`reader-section reader-section--${section.kind} ${
                activeSectionId === section.id ? "is-current" : ""
              }`}
              id={section.id}
              key={section.id}
              ref={setSectionRef(section.id)}
            >
              <div className="reader-section__topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{sectionKindLabels[section.kind]}</p>
              </div>
              <header className="reader-section__header">
                <h2>{section.title}</h2>
                <p>{section.summary}</p>
              </header>
              <MarkdownBlock content={section.contentMd} tone="reader" />
              <footer className="reader-section__footer">
                <span>来源文件</span>
                <code>{section.sourcePath}</code>
              </footer>
            </article>
          ))}
        </main>

        {presenterMode ? (
          <aside className="reader-presenter">
            <div className="presenter-block">
              <p className="sidebar-kicker">当前段落</p>
              <strong>{activeSection?.title}</strong>
              <p>{activeSection?.summary}</p>
            </div>

            <div className="presenter-block">
              <p className="sidebar-kicker">讲授提醒</p>
              <p>{presenterCueMap[activeSection?.kind ?? "document"]}</p>
            </div>

            <div className="presenter-block">
              <p className="sidebar-kicker">本讲锚点</p>
              <p>{lecture.anchorQuestion}</p>
              <blockquote>{lecture.blackboardLine}</blockquote>
            </div>

            <div className="presenter-block">
              <p className="sidebar-kicker">操作提示</p>
              <p>J / K 或方向键切换段落，P 切讲师模式，F 进入全屏。</p>
            </div>

            <div className="presenter-block presenter-block--source">
              <p className="sidebar-kicker">当前来源</p>
              <code>{activeSection?.sourcePath}</code>
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}
