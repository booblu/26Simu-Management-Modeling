import type { LectureId } from "../content/types";

type HrefOptions = {
  presenter?: boolean;
  slide?: number;
};

export function clampSlideIndex(index: number, total: number) {
  if (!Number.isFinite(index)) {
    return 0;
  }

  return Math.min(Math.max(index, 0), total - 1);
}

export function getInitialSlideIndex(total: number) {
  const url = new URL(window.location.href);
  const slide = Number(url.searchParams.get("slide") ?? "1");
  return clampSlideIndex(slide - 1, total);
}

export function getInitialPresenterMode() {
  const url = new URL(window.location.href);
  return url.searchParams.get("presenter") === "1";
}

export function syncLectureQuery(slideIndex: number, presenterMode: boolean) {
  const url = new URL(window.location.href);
  url.searchParams.set("slide", String(slideIndex + 1));

  if (presenterMode) {
    url.searchParams.set("presenter", "1");
  } else {
    url.searchParams.delete("presenter");
  }

  window.history.replaceState({}, "", url.toString());
}

export function homeHref(context: "home" | "lecture", options?: HrefOptions) {
  const href = context === "home" ? "./" : "../../";
  return withQuery(href, options);
}

export function lectureHref(
  lectureId: LectureId,
  context: "home" | "lecture",
  currentLectureId?: LectureId,
  options?: HrefOptions,
) {
  let href: string;

  if (context === "home") {
    href = `./lecture/${lectureId}/`;
    return withQuery(href, options);
  }

  if (currentLectureId === lectureId) {
    href = "./";
    return withQuery(href, options);
  }

  href = `../${lectureId}/`;
  return withQuery(href, options);
}

function withQuery(href: string, options?: HrefOptions) {
  if (!options || (!options.presenter && !options.slide)) {
    return href;
  }

  const params = new URLSearchParams();

  if (options.slide && options.slide > 0) {
    params.set("slide", String(options.slide));
  }

  if (options.presenter) {
    params.set("presenter", "1");
  }

  const query = params.toString();
  return query ? `${href}?${query}` : href;
}
