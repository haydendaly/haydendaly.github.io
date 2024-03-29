import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Loading from '~/components/Global/Loading';
import Header from '~/components/Global/Header';
import FD from '~/components/Global/FormattedDiv';
import { useStyle } from '~/functions/Style';

const Projects = lazy(() => import('./Projects'));
const About = lazy(() => import('./About'));
const Hero = lazy(() => import('./Hero'));
const Project = lazy(() => import('./Project'));

function App() {
  const { height, setTheme } = useStyle();
  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <Header />
      <Suspense fallback={<Loading />}>
        <FD height={height}>
          <Switch>
            <Route path={'/projects/:project'}>
              <Project />
            </Route>
            <Route path={'/projects'}>
              <Projects />
            </Route>
            {/* <Route
              path="/resume"
              component={() => {
                window.location.href =
                  "https://drive.google.com/file/d/1Th76cEVQUyF0LEhlgtqFqAAq633kC81h/view?usp=sharing";
                return null;
              }}
            /> */}
            <Route
              path="/buylist"
              component={() => {
                window.location.href = "https://docs.google.com/spreadsheets/d/1hllNOBiNTgMw52fugrbO0vXEDUIS6pHFno13vXDEcz8/edit?usp=sharing";
                return null;
              }}
            />
            <Route path="/about">
              <About />
            </Route>
            <Route
              path="/redirect"
              component={() => {
                const to = window.location.search.substring(4);
                if (to) {
                  window.location.href = to;
                }
                return <p>Redirecting...</p>;
              }}
            />
            <Route exact path="/">
              <Hero />
            </Route>
            <Route
              path="/:tag"
              component={() => {
                const tag = window.location.pathname.slice(1);
                if (tag === 'hrt') {
                  setTheme(tag);
                }
                return <Redirect to="/" />;
              }}
            />
          </Switch>
        </FD>
      </Suspense>
    </Router>
  );
}

export default App;
