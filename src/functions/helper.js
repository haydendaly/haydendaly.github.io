import { useState, useEffect } from "react";

const request = (
  url,
  type = "GET",
  send,
  body = null,
  defaultValue = {},
  format = "json"
) => {
  body = body ? { body: JSON.stringify(body) } : {};
  fetch(url, {
    method: type,
    ...body,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (format === "json") {
        return res.json();
      } else {
        return res.text();
      }
    })
    .then((response) => {
      send(response);
    })
    .catch((err) => {
      send(defaultValue);
    });
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
  const categories = ["Web", "Mobile", "Backend", "DevOps", "Design"];
  const [chosen, setChosen] = useState([]);
  const [all, setAll] = useState(true);
  const [update, setUpdate] = useState(true);

  const categoryPick = (category) => {
    let tempChosen = chosen;
    if (category === "All" && !all || tempChosen.includes(category)) {
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

export { request, useWindowDimensions, useCategories };
