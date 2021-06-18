import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "~/components/App";
import { PageProvider } from "~/functions/Page";
import { StyleProvider } from "~/functions/Style";

ReactDOM.render(
  <PageProvider>
    <StyleProvider>
      <App />
    </StyleProvider>
  </PageProvider>,
  document.getElementById("app")
);
