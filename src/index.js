import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "normalize.css";
import "./index.css";
import { AppProvider } from "./context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <AppProvider>
    <App tab="home" />
  </AppProvider>
);
