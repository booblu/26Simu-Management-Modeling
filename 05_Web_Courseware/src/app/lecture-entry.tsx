import ReactDOM from "react-dom/client";

import { LectureApp } from "./LectureApp";
import type { LectureId } from "../content/types";
import "../theme/global.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Lecture root container not found.");
}

const lectureId = root.getAttribute("data-lecture-id") as LectureId | null;

if (!lectureId) {
  throw new Error("Lecture id not found in page dataset.");
}

ReactDOM.createRoot(root).render(<LectureApp lectureId={lectureId} />);
