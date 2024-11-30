import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataApi from "./index";
import "./style.css";

const roor = createRoot(document.getElementById("root"));

roor.render(
  <StrictMode>
    <DataApi />
  </StrictMode>
);
