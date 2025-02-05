import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";  // Certifique-se de que o arquivo está em src/style.css
import "./index.css";  // Caso tenha estilos extras no index.css

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
