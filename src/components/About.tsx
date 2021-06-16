import React, { useContext, useEffect } from "react";

import { TextRow } from "./Global/TextComponents";
import { about } from "./Global/Data";
import { PageContext } from "../functions/Page";
import { StyleContext } from "../functions/Style";

function About() {
  const { track } = useContext(PageContext);
  const { isMobile } = useContext(StyleContext);

  useEffect(() => {
    track("About");
  }, []);

  const items = about.map((o) => <TextRow data={o} />);
  return (
    <div style={{ width: "100%", paddingTop: isMobile ? 10 : 15 }}>{items}</div>
  );
}

export default About;
