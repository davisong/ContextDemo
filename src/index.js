import React from "react";
import ReactDOM from "react-dom";
import { ThemeContextProvider } from "./themeContext";

import App from "./App";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);
