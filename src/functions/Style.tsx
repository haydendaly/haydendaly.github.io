import React, { FC, createContext, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { useWindowDimensions } from "~/functions/helper";

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

  const onMount = () => {
    const isDarkCached = localStorage.getItem("isDark");
    if (isDarkCached === "true") {
      // @ts-ignore
      document.body.style = "background: #121212";
    } else {
      // @ts-ignore
      document.body.style = "background: #fafafa";
    }
    setIsDark("true" === isDarkCached);
    logDeveloperMessage();
  };

  const toggleTheme = () => {
    if (isDark) {
      // @ts-ignore
      document.body.style = "background: #fafafa";
      localStorage.setItem("isDark", "false");
    } else {
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
