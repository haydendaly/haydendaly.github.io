import React, { useContext, useState } from "react";
import Headroom from "react-headroom";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { FiSun } from "@react-icons/all-files/fi/FiSun";

import { Link } from "react-router-dom";

import FD from "~/components/Global/FormattedDiv";
import { usePage } from "~/functions/Page";
import { StyleContext } from "~/functions/Style";

function Header() {
  const [show, setShow] = useState(false);
  const { page, setPage, track } = usePage();
  const { theme, isMobile, nextTheme } = useContext(StyleContext);

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
            backgroundColor: theme === "dark" ? "#121212" : "#fff",
            boxShadow: `1px 0px 1px ${
              theme === "dark" ? "#77abb7" : "#393e46"
            }`,
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
                onClick={() => setPage("/about")}
                to="/about"
                className={`header-text${page === "/about" ? " current" : ""}`}
                style={{ ...mobileStyles, paddingLeft: 0 }}
              >
                About
              </Link>
              <Link
                onClick={() => setPage("/projects")}
                to="/projects"
                className={`header-text${
                  page === "/projects" ? " current" : ""
                }`}
                style={{ ...mobileStyles, paddingLeft: 16 }}
              >
                Projects
              </Link>
            </div>
            <a
              className="unselectable current header-text header-icon"
              style={{ fontSize: 20 }}
              onClick={nextTheme}
            >
              {theme === "dark" ? (
                <p className="rainbow-emoji">🌈</p>
              ) : theme === "rainbow" ? (
                <FiSun />
              ) : (
                <FaMoon />
              )}
            </a>
          </div>
        </div>
      </FD>
    </Headroom>
  );
}

export default Header;
