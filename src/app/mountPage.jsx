import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/global.css";

export function mountPage(PageComponent) {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <PageComponent />
    </StrictMode>
  );
}
