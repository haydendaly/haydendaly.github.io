import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import { isMobile } from "react-device-detect";

import { TextRow } from "./Global/TextComponents";
import { about } from "./Global/Data";

function About() {
  useEffect(() => {
    mixpanel.track("About");
  }, []);

  const items = about.map((o) => <TextRow data={o} />);
  return (
    <div style={{ width: "100%", paddingTop: isMobile ? 10 : 15 }}>{items}</div>
  );
}

export default About;
