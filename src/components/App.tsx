import React, { useState, lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import _ from "lodash";
import mixpanel from "mixpanel-browser";

import Loading from "./Global/Loading";
import Header from "./Global/Header";
import { LinksBg as Particles } from "./Global/Particles";
import { useWindowDimensions } from "../functions/helper";
import FD from "./Global/FormattedDiv";
import "../styles/style.scss";

mixpanel.init("5a38064353748fc70f226574b814d85d");

console.log(
  `%c
${" ".repeat(33)}
${" ".repeat(7)}Made by Hayden Daly${" ".repeat(7)}
${" ".repeat(33)}
${" ".repeat(2)}Want to see the source code?${" ".repeat(3)}
${" ".repeat(33)}\n`,
  "background: #007aff; color: white"
);
console.log("\nhttps://github.com/haydendaly/haydendaly.github.io\n ");

const Home = lazy(() => import("./Home"));
const Projects = lazy(() => import("./Projects"));
const About = lazy(() => import("./About"));
const Project = lazy(() => import("./Project"));

const titles = {
  "/projects": "Projects - ",
  "/about": "About - ",
};

function App() {
  const [page, setPage] = useState(window.location.pathname);
  const [dark, setDark] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => {
        return response.json();
      })
      .then(async (res) => {
        mixpanel.identify(res.ip);
        mixpanel.track("Home");
      });
  }, []);

  useEffect(() => {
    if (!page.includes("projects/")) {
      document.title = _.get(titles, page, "") + "Hayden Daly";
    }
  }, [page]);

  const setMode = () => {
    if (dark) {
      // @ts-ignore
      document.body.style = "background: #ffffff";
    } else {
      // @ts-ignore
      document.body.style = "background: #121212";
    }
    setDark(!dark);
  };
  return (
    <div
      className={"theme " + (dark ? "theme--dark" : "theme--default")}
      id="main"
      style={{ height, width }}
    >
      {page === "/" && <Particles dark={dark} />}
      <Router basename={process.env.PUBLIC_URL || "" + "/"}>
        <Header page={page} setPage={setPage} dark={dark} setMode={setMode} />
        <Suspense fallback={<Loading height={height} width={width} />}>
          <FD height={height}>
            <Switch>
              <Route path={"/projects/:project"}>
                <Project setPage={setPage} />
              </Route>
              <Route path={"/projects"}>
                <Projects />
              </Route>
              <Route path={"/about"}>
                <About />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/">
                <Redirect to="/" />
              </Route>
            </Switch>
          </FD>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
