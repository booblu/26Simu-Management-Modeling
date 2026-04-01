import ReactDOM from "react-dom/client";

import { HomeApp } from "./HomeApp";
import "../theme/global.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Home root container not found.");
}

ReactDOM.createRoot(root).render(<HomeApp />);
