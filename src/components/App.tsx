import React, { lazy, Suspense, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Loading from "~/components/Global/Loading";
import Header from "~/components/Global/Header";
import FD from "~/components/Global/FormattedDiv";
import { StyleContext } from "~/functions/Style";

const Projects = lazy(() => import("./Projects"));
const About = lazy(() => import("./About"));
const Project = lazy(() => import("./Project"));

function App() {
  const { height } = useContext(StyleContext);

  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
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
            <Route exact path="/">
              <About />
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
