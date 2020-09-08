import React, { useState, lazy, Suspense, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import _ from 'lodash';
import mixpanel from 'mixpanel-browser';

import Loading from './Global/Loading';
import Header from './Global/Header';
import Cursor from './Global/Cursor';
import { LinksBg } from './Global/Particles';
import { useWindowDimensions } from '../functions/helper';
import FD from './Global/FormattedDiv';
import '../styles/style.scss';

mixpanel.init("5a38064353748fc70f226574b814d85d");

console.log(`%c
${' '.repeat(33)}
${' '.repeat(7)}Made by Hayden Daly${' '.repeat(7)}
${' '.repeat(33)}
${' '.repeat(2)}Want to see the source code?${' '.repeat(3)}
${' '.repeat(33)}\n`,
    'background: #007aff; color: white'
);
console.log('\nhttps://github.com/haydendaly/haydendaly.github.io\n ')

const Home = lazy(() => import('./Home'));
const Projects = lazy(() => import('./Projects'));
const About = lazy(() => import('./About'));
const Photos = lazy(() => import('./Photos'));
const Project = lazy(() => import('./Project'));

const titles = {
    '/projects': 'Projects - ',
    '/about': 'About - ',
    '/resume': 'Resume - ',
    '/photos': 'Photos - '
}

function App() {
    const [page, setPage] = useState(window.location.pathname);
    const [dark, setDark] = useState(false);
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        fetch("https://api.ipify.org?format=json")
        .then(response => {
            return response.json();
        }, "jsonp")
        .then(async res => {
            mixpanel.identify(res.ip);
            mixpanel.track("Home");
        })
    }, [])

    useEffect(() => {
        if (!page.includes('projects/')) {
            document.title = _.get(titles, page, '') + 'Hayden Daly'
        }
    }, [page])

    const setMode = () => {
        if (dark) {
            document.body.style = 'background: #ffffff'
        } else {
            document.body.style = 'background: #00204a'
        }
        setDark(!dark)
    }

    const PUBLIC_URL = process.env.PUBLIC_URL || '';

    return (
        <div className={'theme ' + (dark ? 'theme--dark' : 'theme--default')} id="main" style={{ height, width }}>
            <Cursor />
            {page === '/' && <LinksBg dark={dark} />}
            <Router
                basename={PUBLIC_URL + '/'}
            >
                <Header page={page} setPage={setPage} dark={dark} setMode={setMode} />
                    <Suspense fallback={<Loading height={height} width={width} />}>
                    <FD height={height}>
                        <Switch>
                            <Route path={PUBLIC_URL + "/projects/:project"}>
                                <Project setPage={setPage} />
                            </Route>
                            <Route path={PUBLIC_URL + "/projects"}>
                                <Projects />
                            </Route>
                            <Route path={PUBLIC_URL + "/about"}>
                                <About />
                            </Route>
                            <Route path={PUBLIC_URL + "/photos"}>
                                <Photos />
                            </Route>
                            <Route exact path="/">
                                <Home height={height}/>
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
};

export default App;