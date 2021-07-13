import React, { useContext, useState } from "react";
import Headroom from "react-headroom";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { FiSun } from "@react-icons/all-files/fi/FiSun";

import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";

import "react-tippy/dist/tippy.css";

import FD from "~/components/Global/FormattedDiv";
import { PageContext } from "~/functions/Page";
import { StyleContext } from "~/functions/Style";

function Header() {
  const [show, setShow] = useState(false);
  const { page, setPage, track } = useContext(PageContext);
  const { isDark, isMobile, toggleTheme } = useContext(StyleContext);

  function toggleDark() {
    track("Toggle dark theme");
    toggleTheme();
  }

  const mobileStyles = {
    fontSize: isMobile ? 17 : 18,
    paddingLeft: isMobile ? 0 : 20,
    paddingRight: isMobile ? 15 : 20,
  };

  return (
    <Headroom
      onPin={() => setShow(true)}
      onUnfix={() => setShow(false)}
      style={{ zIndex: 2 }}
    >
      <FD
        styles={
          show && {
            backgroundColor: isDark ? "#121212" : "#fff",
            boxShadow: `1px 0px 1px ${isDark ? "#77abb7" : "#393e46"}`,
          }
        }
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            paddingTop: 20,
            paddingBottom: 15,
          }}
        >
          <div style={{ width: isMobile ? "35%" : "20%" }}>
            <Link
              onClick={() => setPage("/")}
              to="/"
              className={`header-text current name`}
            >
              Hayden Daly 🏃🏻‍♂️
            </Link>
          </div>
          <div
            style={{
              width: isMobile ? "65%" : "80%",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <Link
                onClick={() => setPage("/projects")}
                to="/projects"
                className={`header-text${
                  page === "/projects" ? " current" : ""
                }`}
                style={{ ...mobileStyles, paddingLeft: 0 }}
              >
                Projects
              </Link>
              <Link
                onClick={() => setPage("/about")}
                to="/about"
                className={`header-text${page === "/about" ? " current" : ""}`}
                style={mobileStyles}
              >
                About
              </Link>
            </div>
            <Tooltip
              title={isDark ? "Light Mode" : "Dark Mode"}
              position="bottom"
              size="small"
              animation="fade"
              distance={4}
              theme={isDark ? "dark" : "light"}
            >
              <a
                className="unselectable current header-text"
                style={{ fontSize: 20 }}
                onClick={toggleDark}
              >
                {isDark ? <FiSun /> : <FaMoon />}
              </a>
            </Tooltip>
          </div>
        </div>
      </FD>
    </Headroom>
  );
}

export default Header;
