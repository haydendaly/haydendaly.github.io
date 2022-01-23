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
  init: boolean;
};

export const StyleContext = createContext<StyleContextType>({
  theme: "light",
  isMobile,
  height: 100,
  width: 100,
  nextTheme: () => null,
  init: true,
});

const themes = ["light", "dark", "rainbow"];

export const StyleProvider: FC = ({ children }) => {
  const gradient = useRef(null);
  const [init, setInit] = useState(true);
  const [theme, setTheme] = useState<Theme>("light");
  const { height, width } = useWindowDimensions();
  const { track } = useContext(PageContext);

  const nextTheme = () => {
    const newTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    // @ts-ignore
    changeTheme(newTheme);
    track("Toggled theme");
  };

  const changeTheme = (newTheme: Theme) => {
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
      if (init) {
        setInit(false);
      }
    }
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const G = new Gradient();
    // @ts-ignore
    gradient.current = G;
    const storedTheme = localStorage.getItem("theme");
    // @ts-ignore
    if (storedTheme && themes.includes(storedTheme)) {
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
        init,
      }}
    >
      {init || theme !== "light" ? (
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
