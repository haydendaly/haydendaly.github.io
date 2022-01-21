import React, { useEffect } from "react";

import { usePage } from "~/functions/Page";
import { useStyle } from "~/functions/Style";

function Hero() {
  const { track } = usePage();
  const { isMobile, theme } = useStyle();

  useEffect(() => {
    track(window.location.pathname);
  }, []);

  return (
    <div style={{ width: "100%", paddingTop: isMobile ? 10 : 15 }}>
      <h1
        className={
          "hero-text" + (theme === "rainbow" ? " translucent-text" : "")
        }
      >
        Developer focused on distributed systems and product development.
      </h1>
      <div className="hero-sub-text-container">
        <p className={"hero-sub-text"}>Interested in working together?</p>
        <a
          href="https://calendly.com/haydencdaly"
          target="_blank"
          rel="noreferrer"
          className={
            "hero-sub-link-text" + (theme !== "rainbow" ? " rainbow-text" : "")
          }
        >
          Let's chat.
        </a>
      </div>
    </div>
  );
}

export default Hero;
