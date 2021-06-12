import React, { createContext, useEffect } from "react";
import mixpanel from "mixpanel-browser";

export const MixpanelContext = createContext();

/**
 * Provider for Mixpanel logging
 * 
 * @param {component} children
 */
export const MixpanelProvider = ({ children }) => {
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then(async (res) => {
        mixpanel.identify(res.ip);
        mixpanel.track("Home");
      });
  }, []);

  return <MixpanelContext.Provider>{children}</MixpanelContext.Provider>;
};
