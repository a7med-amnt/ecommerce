import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "#app/App";
import eruda from "eruda";
eruda.init()
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
