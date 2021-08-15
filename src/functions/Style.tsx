import React, { FC, createContext, useContext, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { useWindowDimensions } from "~/functions/helper";
import { PageContext } from "~/functions/Page";

export type StyleContextType = {
  isDark: boolean;
  isMobile: boolean;
  height: number;
  width: number;
  toggleTheme: () => void;
};

export const StyleContext = createContext<StyleContextType>({
  isDark: false,
  isMobile,
  height: 100,
  width: 100,
  toggleTheme: () => null,
});

export const StyleProvider: FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const { height, width } = useWindowDimensions();
  const { track } = useContext(PageContext);

  const onMount = () => {
    const isDarkCached = localStorage.getItem("isDark");
    if (isDarkCached === "true") {
      // @ts-ignore
      document.body.style = "background: #121212";
    } else {
      // @ts-ignore
      document.body.style = "background: #ffffff";
    }
    setIsDark("true" === isDarkCached);
    logDeveloperMessage();
  };

  const toggleTheme = () => {
    if (isDark) {
      track("Light mode");
      // @ts-ignore
      document.body.style = "background: #fafafa";
      localStorage.setItem("isDark", "false");
    } else {
      track("Dark mode");
      // @ts-ignore
      document.body.style = "background: #121212";
      localStorage.setItem("isDark", "true");
    }
    setIsDark(!isDark);
  };

  useEffect(onMount, []);

  return (
    <StyleContext.Provider
      value={{
        isDark,
        isMobile,
        height,
        width,
        toggleTheme,
      }}
    >
      <div
        className={"theme " + (isDark ? "theme--dark" : "theme--default")}
        id="main"
        style={{ height, width }}
      >
        {children}
      </div>
    </StyleContext.Provider>
  );
};

export const useStyle = () => {
  return useContext(StyleContext);
}

const logDeveloperMessage = () => {
  console.log(
    `%c
${" ".repeat(33)}
${" ".repeat(7)}Made by Hayden Daly${" ".repeat(7)}
${" ".repeat(33)}
${" ".repeat(2)}Want to see the source code?${" ".repeat(3)}
${" ".repeat(33)}\n`,
    "background: #007aff; color: white"
  );
  console.log("\nhttps://github.com/haydendaly/haydendaly.github.io\n ");
};