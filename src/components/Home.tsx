import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import mixpanel from "mixpanel-browser";

import { useWindowDimensions } from "../functions/helper";
import "../styles/style.scss";

function Home() {
  const { width } = useWindowDimensions();

  useEffect(() => {
    window.scrollTo(0, 0);
    mixpanel.track("Home");
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
