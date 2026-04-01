import { courseActs, lectureHomeMeta, lectureOrder, lecturePages } from "../content/courseware";
import { homeHref, lectureHref } from "../utils/navigation";
import type { LectureAct } from "../content/types";

const actLabels: Record<LectureAct, string> = {
  第一幕: "Act I",
  第二幕: "Act II",
  第三幕: "Act III",
};

export function HomeApp() {
  const presenterMode =
    new URL(window.location.href).searchParams.get("presenter") === "1";

  return (
    <div className="home-page">
      <header className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">26春 · 管理建模与仿真</p>
          <h1>八讲网页版课件</h1>
          <p className="hero-subtitle">
            一套为课堂投屏、讲师讲解与课后复盘而设计的演示型课件站。
          </p>
          <div className="hero-actions">
            <a
              className="primary-link"
              href={lectureHref("l1", "home", undefined, {
                presenter: presenterMode,
              })}
            >
              从第一讲开始
            </a>
            <a className="secondary-link" href="#acts">
              查看三幕剧结构
            </a>
            <a
              className="secondary-link"
              href={homeHref("home", { presenter: !presenterMode })}
            >
              {presenterMode ? "切到学生模式" : "进入讲师模式"}
            </a>
          </div>
        </div>
        <div className="hero-poster">
          <p className="poster-kicker">课程核心迁移</p>
          <div className="poster-line">从流程图讲述者</div>
          <div className="poster-line">到状态机架构师</div>
          <div className="poster-line">再到规则设计者</div>
        </div>
      </header>

      <main className="home-main">
        <section className="acts-section" id="acts">
          <div className="section-heading">
            <p className="section-kicker">Three Acts</p>
            <h2>三幕剧总地图</h2>
          </div>
          <div className="acts-rail">
            {courseActs.map((act) => (
              <article className={`act-band act-band--${act.id}`} key={act.id}>
                <div className="act-topline">
                    <span>{actLabels[act.id]}</span>
                  <strong>{act.id}</strong>
                </div>
                <h3>{act.title}</h3>
                <p>{act.summary}</p>
                <ol>
                  {act.lectures.map((lectureId) => {
                    const lecture = lecturePages[lectureId];
                    return <li key={lectureId}>{lecture.shortTitle}</li>;
                  })}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section className="lecture-index">
          <div className="section-heading">
            <p className="section-kicker">Lecture Entry</p>
            <h2>八讲导航</h2>
          </div>
          <div className="lecture-list">
            {lectureOrder.map((lectureId, index) => {
              const lecture = lecturePages[lectureId];
              const meta = lectureHomeMeta[lectureId];

              return (
                <a
                  className={`lecture-strip lecture-strip--${lecture.act}`}
                  href={lectureHref(lectureId, "home", undefined, {
                    presenter: presenterMode,
                  })}
                  key={lectureId}
                >
                  <div className="lecture-strip__index">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="lecture-strip__body">
                    <div className="lecture-strip__topline">
                      <span>{lecture.act}</span>
                      <span>{lecture.shortTitle}</span>
                    </div>
                    <h3>{lecture.title}</h3>
                    <p className="lecture-strip__question">{meta.anchorQuestion}</p>
                    <p className="lecture-strip__positioning">{meta.positioning}</p>
                    <blockquote>{lecture.blackboardLine}</blockquote>
                    <p className="lecture-strip__bridge">{meta.bridgeLine}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="home-footer-note">
          <p>
            课件演示层面向课堂投屏；讲师模式通过 URL 参数
            <code>?presenter=1</code> 打开备注层。
          </p>
          <a href={homeHref("home", { presenter: presenterMode })}>返回首页顶部</a>
        </section>
      </main>
    </div>
  );
}
