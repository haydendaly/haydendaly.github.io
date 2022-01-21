import React, { useEffect } from "react";

import { TextRow } from "~/components/Global/TextComponents";
import { about } from "~/components/Global/Data";
import { usePage } from "~/functions/Page";
import { useStyle } from "~/functions/Style";

function About() {
  const { track } = usePage();
  const { isMobile } = useStyle();

  useEffect(() => {
    track(window.location.pathname);
  }, []);

  const items = about.map((o) => <TextRow key={o.key} data={o} />);
  return (
    <div style={{ width: "100%", paddingTop: isMobile ? 10 : 15 }}>{items}</div>
  );
}

export default About;
