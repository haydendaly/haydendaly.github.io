import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { isMobile } from "react-device-detect";

import { useWindowDimensions, usePrevious } from "~/functions/helper";
import { PageContext } from "~/functions/Page";
import Gradient from "~/functions/gradient";

export type Theme = "light" | "dark" | "rainbow" | "space" | string; // temp

export type StyleContextType = {
  theme: Theme;
  isMobile: boolean;
  height: number;
  width: number;
  nextTheme: () => void;
  checkTheme: (t: string) => void;
  init: boolean;
};

export const StyleContext = createContext<StyleContextType>({
  theme: "light",
  isMobile,
  height: 100,
  width: 100,
  nextTheme: () => null,
  checkTheme: (t: string) => null,
  init: true,
});

export const toggleThemes = ["light", "dark", "rainbow"];
export const allThemes = [...toggleThemes, "space"];

export const themeTable = {
  // "testbed": "space",
  // "tatckb": "space"
};

export const StyleProvider: FC = ({ children }) => {
  const gradient = useRef(null);
  const [toggleIdx, setToggleIdx] = useState(0);
  const [init, setInit] = useState(true);
  const [theme, setTheme] = useState("light");
  const { height, width } = useWindowDimensions();
  const { track } = useContext(PageContext);
  const prev = usePrevious(theme);

  const nextTheme = () => {
    const new_idx = (toggleIdx + 1) % toggleThemes.length;
    const newTheme = toggleThemes[new_idx];
    // @ts-ignore
    changeTheme(newTheme);
    setToggleIdx(new_idx);
    track("Toggled theme");
  };

  const changeTheme = (newTheme: Theme) => {
    if (toggleThemes.includes(newTheme)) {
      setToggleIdx(toggleThemes.indexOf(newTheme));
    }

    setTheme(newTheme);
    if (newTheme === "light") {
      // @ts-ignore
      gradient.current.disconnect();
      // @ts-ignore
      document.body.style = "background: #ffffff";
    } else if (newTheme === "dark") {
      // @ts-ignore
      document.body.style = "background: #121212";
    } else if (newTheme === "space") {
      // @ts-ignore
      document.body.style = "background: #000";
    } else if (newTheme === "rainbow") {
      // @ts-ignore
      document.body.style = "background: rgb(0, 0, 0, 0)";
      // @ts-ignore
      gradient.current.initGradient("#gradient-canvas");
      if (init) {
        setInit(false);
      }
    }
    localStorage.setItem("theme", newTheme);
  };

  const checkTheme = (page: string) => {
    if (themeTable[page]) {
      changeTheme(themeTable[page]);
      return;
    }
    const newTheme = toggleThemes[toggleIdx];
    if (newTheme === theme) {
      return;
    }
    changeTheme(newTheme);
  };

  useEffect(() => {
    const G = new Gradient();
    // @ts-ignore
    gradient.current = G;
    const storedTheme = localStorage.getItem("theme");
    // @ts-ignore
    if (storedTheme && toggleThemes.includes(storedTheme)) {
      // @ts-ignore
      changeTheme(storedTheme);
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
        checkTheme,
        init,
      }}
    >
      {theme === "rainbow" || init || prev !== "rainbow" ? (
        <canvas id="gradient-canvas"></canvas>
      ) : null}
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
