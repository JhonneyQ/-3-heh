import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ConProvider from "./components/context/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConProvider>
      <App />
    </ConProvider>
  </BrowserRouter>
);
