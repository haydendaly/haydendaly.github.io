import * as React from "react";
import * as ReactDOM from "react-dom";

import { PageProvider } from "./functions/Page";
import { StyleProvider } from "./functions/Style";

import App from "./components/App";

ReactDOM.render(
  <PageProvider>
    <StyleProvider>
      <App />
    </StyleProvider>
  </PageProvider>,
  document.getElementById("app")
);
