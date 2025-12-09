import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Inicializar AOS después de que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    window.AOS.init();
  }
});
