import React, { useContext, useEffect } from "react";

import { PageContext } from "../functions/Page";
import { StyleContext } from "../functions/Style";

function Home() {
  const { width, isMobile } = useContext(StyleContext);
  const { track } = useContext(PageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    track("Home");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="current unselectable"
        style={{
          fontFamily: "Haas",
          fontSize:
            isMobile || width < 750 ? 28 : width * 0.95 > 1000 ? 48 : 40,
          width: isMobile || width < 800 ? "90%" : "75%",
          textAlign: "center",
          paddingBottom: 120,
        }}
      >
        Hello! I'm Hayden, a student and software engineer.
      </div>
    </div>
  );
}

export default Home;
