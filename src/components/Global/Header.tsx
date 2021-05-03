import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import FD from "./FormattedDiv";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

function Header(props: {
  page: string;
  setPage: (page: string) => void;
  dark: boolean;
  setMode: () => void;
}) {
  const [show, setShow] = useState(false);

  return (
    <Headroom
      onPin={() => setShow(true)}
      onUnfix={() => setShow(false)}
      style={{ zIndex: 2 }}
    >
      <FD
        styles={
          show && {
            backgroundColor: props.dark ? "#121212" : "#fff",
            boxShadow: `1px 0px 1px ${props.dark ? "#77abb7" : "#393e46"}`,
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
              onClick={() => props.setPage("/")}
              to="/"
              className={`header-text current name`}
              style={{ ...mobileStyles, paddingLeft: 0, paddingRight: 0 }}
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
                onClick={() => props.setPage("/projects")}
                to="/projects"
                className={`header-text${
                  props.page === "/projects" ? " current" : ""
                }`}
                style={{ ...mobileStyles, paddingLeft: 0 }}
              >
                Projects
              </Link>
              <Link
                onClick={() => props.setPage("/about")}
                to="/about"
                className={`header-text${
                  props.page === "/about" ? " current" : ""
                }`}
                style={mobileStyles}
              >
                About
              </Link>
            </div>
            {props.page.includes("projects/") || (
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="color-changer">
                    {props.dark ? "Light Mode" : "Dark Mode"}
                  </Tooltip>
                }
              >
                <a
                  className="unselectable current"
                  style={{ fontSize: 20 }}
                  onClick={props.setMode}
                >
                  {props.dark ? <FiSun /> : <FaMoon />}
                </a>
              </OverlayTrigger>
            )}
          </div>
        </div>
      </FD>
    </Headroom>
  );
}

const mobileStyles = {
  fontSize: isMobile ? 17 : 18,
  paddingLeft: isMobile ? 0 : 20,
  paddingRight: isMobile ? 15 : 20,
};

export default Header;
