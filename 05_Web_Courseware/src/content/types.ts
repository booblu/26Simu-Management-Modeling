export type LectureId = "l1" | "l2" | "l3" | "l4" | "l5" | "l6" | "l7" | "l8";

export type SlideKind =
  | "cover"
  | "position"
  | "illusion"
  | "contract"
  | "concept"
  | "case"
  | "pitfall"
  | "lab"
  | "bridge"
  | "summary";

export type SlideVisualHint =
  | "diagram"
  | "equation"
  | "table"
  | "quote"
  | "checklist";

export type LectureAct = "第一幕" | "第二幕" | "第三幕";

export type Slide = {
  id: string;
  kind: SlideKind;
  title: string;
  bodyMd: string;
  speakerNotesMd: string;
  sourceRefs?: string[];
  visualHint?: SlideVisualHint;
};

export type LectureManifest = {
  id: LectureId;
  title: string;
  shortTitle: string;
  act: LectureAct;
  blackboardLine: string;
  sourcePaths: string[];
  slides: Slide[];
};

export type CourseAct = {
  id: LectureAct;
  title: string;
  summary: string;
  lectures: LectureId[];
};

export type LectureHomeMeta = {
  anchorQuestion: string;
  positioning: string;
  bridgeLine: string;
};

export type LectureSectionKind =
  | "outline"
  | "introduction"
  | "framework"
  | "case"
  | "pitfall"
  | "lab"
  | "document";

export type LectureSection = {
  id: string;
  kind: LectureSectionKind;
  label: string;
  title: string;
  summary: string;
  contentMd: string;
  sourcePath: string;
};

export type LecturePage = {
  id: LectureId;
  title: string;
  shortTitle: string;
  act: LectureAct;
  blackboardLine: string;
  sourcePaths: string[];
  anchorQuestion: string;
  positioning: string;
  bridgeLine: string;
  sections: LectureSection[];
};
