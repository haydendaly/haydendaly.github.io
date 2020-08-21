import React, { useState, lazy, Suspense, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import _ from 'lodash';

import Loading from './Global/Loading';
import Header from './Global/Header';
import Cursor from './Global/Cursor';
import { BubblesBg } from './Global/Particles';
import { useWindowDimensions } from '../functions/helper';
import FD from './Global/FormattedDiv';
import '../styles/style.scss';

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
const Resume = lazy(() => import('./Resume'));
const Project = lazy(() => import('./Project'));

const titles = {
    '/projects': 'Projects - ',
    '/about': 'About - ',
    '/resume': 'Resume - ',
}

function App() {
    const [page, setPage] = useState(window.location.pathname);
    const [dark, setDark] = useState(false);
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (page.includes('projects/')) {
            document.title = page.substr(10) + ' - Hayden Daly'
        } else {
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
        <div className={'theme ' + (dark ? 'theme--dark' : 'theme--default')} id="main">
            <Cursor />
            {page === '/' && <BubblesBg dark={dark} />}
            <Router
                basename={PUBLIC_URL + '/'}
            >
                <Header page={page} setPage={setPage} dark={dark} setMode={setMode} />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translate(-50%, 0)',
                        height: '100%',
                        width: '100%',
                        minHeight: height
                    }
                    }>
                    <Suspense fallback={<Loading height={height} width={width} />}>
                        <Switch>
                            <Route path={PUBLIC_URL + "/projects/:project"}>
                                <FD height={height}><Project /></FD>
                            </Route>
                            <Route path={PUBLIC_URL + "/projects"}>
                                <FD height={height}><Projects /></FD>
                            </Route>
                            <Route path={PUBLIC_URL + "/about"}>
                                <FD height={height}><About /></FD>
                            </Route>
                            <Route path={PUBLIC_URL + "/resume"}>
                                <FD height={height}><Resume /></FD>
                            </Route>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/">
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </div>
    );
};

export default App;