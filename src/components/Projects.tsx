import React, { useState, useEffect } from "react";

import { usePage } from "~/functions/Page";
import { useStyle } from "~/functions/Style";
import { ProjectRow } from "~/components/Global/TextComponents";
import { useCategories } from "~/functions/helper";
import { projects } from "~/components/Global/Data";

function Projects() {
  const categories = useCategories();
  const [content, setContent] = useState(projects);
  const { track } = usePage();
  const { isMobile } = useStyle();
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
    for (let i = 0; i < len; i++) {
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
