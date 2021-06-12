import { useState, useEffect } from "react";

const getTitle = (path: string): string => {
  const titles: { [key: string]: string } = {
    "/projects": "Projects - ",
    "/about": "About - ",
  };
  let title = "";
  if (titles.hasOwnProperty(path)) {
    title += titles[path];
  }
  return title + "Hayden Daly";
};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const useCategories = () => {
  const categories = ["Web", "Mobile", "Backend", "Design", "Management"];
  const [chosen, setChosen] = useState<string[]>([]);
  const [all, setAll] = useState(true);
  const [update, setUpdate] = useState(true);

  const categoryPick = (category: string) => {
    let tempChosen = chosen;
    if ((category === "All" && !all) || tempChosen.includes(category)) {
      setAll(true);
      setChosen([]);
    } else if (category !== "All") {
      setChosen([category]);
      setAll(false);
    }
    setUpdate(!update);
  };

  return {
    categories,
    chosen,
    categoryPick,
    all,
    update,
  };
};

export { getTitle, useWindowDimensions, useCategories };
