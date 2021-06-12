import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Loading from "./Global/Loading";
import Header from "./Global/Header";
import { LinksBg as Background } from "./Global/Particles";
import FD from "./Global/FormattedDiv";
import { PageContext } from "../functions/Page";
import { StyleContext } from "../functions/Style";

const Home = lazy(() => import("./Home"));
const Projects = lazy(() => import("./Projects"));
const About = lazy(() => import("./About"));
const Project = lazy(() => import("./Project"));

function App() {
  const { page } = useContext(PageContext);
  const { height, width } = useContext(StyleContext);

  return (
    <Router basename={process.env.PUBLIC_URL || "" + "/"}>
      {page === "/" && <Background />}
      <Header />
      <Suspense fallback={<Loading />}>
        <FD height={height}>
          <Switch>
            <Route path={"/projects/:project"}>
              <Project />
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
  );
}

export default App;
