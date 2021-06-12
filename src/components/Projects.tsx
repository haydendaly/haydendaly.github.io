import React, { useContext, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

import { projects } from "./Global/Data";
import { useCategories } from "../functions/helper";
import { PageContext } from "../functions/Page";
import { ProjectRow } from "./Global/TextComponents";

function Projects() {
  const categories = useCategories();
  const [content, setContent] = useState(projects);
  const { track } = useContext(PageContext);
  document.title = "Projects - Hayden Daly";

  useEffect(() => {
    window.scrollTo(0, 0);
    track("Projects");
  }, []);

  useEffect(() => {
    const filteredData = projects.filter(
      (o) =>
        o.category.includes("year") ||
        o.category.filter((cat) => categories.chosen.includes(cat)).length >
          0 ||
        categories.all
    );
    const len = filteredData.length;
    for (var i = 0; i < len; i++) {
      const next = len != i + 1 && filteredData[i + 1];
      if (
        filteredData[i].category[0] === "year" &&
        (!next || next.category[0] === "year")
      ) {
        delete filteredData[i];
      }
    }
    setContent(filteredData);
  }, [categories.update]);
  return (
    <div style={{ width: "100%", paddingTop: isMobile ? 10 : 15 }}>
      <ProjectRow categories={categories} data={content} />
    </div>
  );
}

export default Projects;
