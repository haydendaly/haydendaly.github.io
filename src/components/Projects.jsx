import React, { useState, useEffect } from "react";
import _ from "lodash";
import { isMobile } from "react-device-detect";
import mixpanel from "mixpanel-browser";

import { projects } from "./Global/data";
import { useCategories } from "../functions/helper";
import { ProjectRow } from "./Global/TextComponents";

function Projects({ height }) {
  const categories = useCategories();
  const [content, setContent] = useState(projects);
  document.title = "Projects - Hayden Daly";

  useEffect(() => {
    window.scrollTo(0, 0);
    mixpanel.track("Projects");
  }, []);

  useEffect(() => {
    let filteredData = projects.filter(
      (o) =>
        (o.category.includes("year") ||
          o.category.filter((cat) => categories.chosen.includes(cat)).length >
            0 ||
          categories.all) &&
        !_.get(o, "isResume")
    );
    for (var i = 0; i < filteredData.length; i++) {
      let next = _.get(filteredData, `[${i + 1}]`);
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
