import React, { useState, lazy, Suspense } from 'react';
import { isMobile } from 'react-device-detect';
import FD from './FormattedDiv';
import { Link } from "react-router-dom";
import Headroom from 'react-headroom';

function Header({ page, setPage, dark, setMode }) {
    const [show, setShow] = useState(false);

    return (
        <Headroom
            onPin={() => setShow(true)}
            onUnfix={() => setShow(false)}
        >
            <FD styles={show && { backgroundColor: dark ? '#00204a' : '#fff', boxShadow: `1px 0px 1px ${dark ? '#77abb7' : '#393e46'}` }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: 20,
                    paddingBottom: 15,
                }}>
                    <div style={{ width: isMobile ? '35%' : '20%' }}>
                        <Link
                            onClick={() => setPage("/")}
                            to="/"
                            className={`header-text current name`}
                            style={{ ...mobileStyles, paddingLeft: 0, paddingRight: 0 }}>
                            Hayden Daly 🏃🏻‍♂️
                        </Link>
                    </div>
                    <div style={{ width: isMobile ? '65%' : '80%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row' }}>
                        <div>
                            <Link
                                onClick={() => setPage("/projects")}
                                to="/projects"
                                className={`header-text${page === '/projects' ? ' current' : ''}`}
                                style={{ ...mobileStyles, paddingLeft: 0 }}>
                                Projects
                            </Link>
                            <Link
                                onClick={() => setPage("/about")}
                                to="/about"
                                className={`header-text${page === '/about' ? ' current' : ''}`}
                                style={mobileStyles}>
                                About
                            </Link>
                            <Link
                                onClick={() => setPage("/resume")}
                                to="/resume"
                                className={`header-text${page === '/resume' ? ' current' : ''}`}
                                style={mobileStyles}>
                                Resume
                            </Link>
                            {page === '/resume' && (
                                    <a
                                        href={'s3URL'}
                                        className='header-text'
                                        style={mobileStyles}>
                                        PDF Resume
                                    </a>
                            )}
                        </div>
                        <a className='unselectable' style={{ fontSize: 20 }} onClick={setMode}>
                            {dark ? '☀️' : '🌖'}
                        </a>
                    </div>
                </div>
            </FD>
        </Headroom>
    );
};

const mobileStyles = {
    fontSize: isMobile ? 17 : 18,
    paddingLeft: isMobile ? 0 : 20,
    paddingRight: isMobile ? 15 : 20,
}

export default Header;