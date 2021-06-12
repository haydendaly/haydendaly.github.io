import * as React from "react";
import * as ReactDOM from "react-dom";
import { MixpanelProvider } from "./functions/mixpanel";

import App from "./components/App";

ReactDOM.render(
  <MixpanelProvider>
    <App />
  </MixpanelProvider>,
  document.getElementById("app")
);
