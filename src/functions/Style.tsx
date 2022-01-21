import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { isMobile } from "react-device-detect";

import { useWindowDimensions } from "~/functions/helper";
import { PageContext } from "~/functions/Page";
import Gradient from "~/functions/gradient";

export type Theme = "light" | "dark" | "rainbow";

export type StyleContextType = {
  theme: Theme;
  isMobile: boolean;
  height: number;
  width: number;
  nextTheme: () => void;
};

export const StyleContext = createContext<StyleContextType>({
  theme: "light",
  isMobile,
  height: 100,
  width: 100,
  nextTheme: () => null,
});

const themes = ["light", "dark", "rainbow"];

export const StyleProvider: FC = ({ children }) => {
  const gradient = useRef(null);
  const [theme, setTheme] = useState<Theme>("light");
  const { height, width } = useWindowDimensions();
  const { track } = useContext(PageContext);

  const nextTheme = () => {
    const newTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    // @ts-ignore
    changeTheme(newTheme);
    track("Toggled theme");
  };

  const changeTheme = (newTheme: Theme, init = false) => {
    setTheme(newTheme);
    if (newTheme === "light") {
      // @ts-ignore
      gradient.current.disconnect();
      // @ts-ignore
      document.body.style = "background: #ffffff";
    } else if (newTheme === "dark") {
      // @ts-ignore
      document.body.style = "background: #121212";
    } else {
      // @ts-ignore
      document.body.style = "background: rgb(0, 0, 0, 0)";
      // @ts-ignore
      gradient.current.initGradient("#gradient-canvas");
    }
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // @ts-ignore
    gradient.current = new Gradient();
    const storedTheme = localStorage.getItem("theme");
    // @ts-ignore
    if (storedTheme && themes.includes(storedTheme)) {
      // @ts-ignore
      changeTheme(storedTheme, true);
    }
    logDeveloperMessage();
  }, []);

  return (
    <StyleContext.Provider
      value={{
        theme,
        isMobile,
        height,
        width,
        nextTheme,
      }}
    >
      {theme === "light" ? null : <canvas id="gradient-canvas"></canvas>}
      <div
        className={`theme theme--${theme}`}
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
