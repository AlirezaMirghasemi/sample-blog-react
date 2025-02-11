import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/style.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { RouterProvider } from "react-router/dom";
import PostRouter from "./components/PostRouter";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={PostRouter} />
  </StrictMode>
);
