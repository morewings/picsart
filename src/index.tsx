import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { ReduxProvider } from "./state";

const root = ReactDOM.createRoot(
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals(console.log);
