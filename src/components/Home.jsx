import React, { useRef, useEffect } from 'react';
import StackGrid, { transitions } from "react-stack-grid";
import { isMobile } from 'react-device-detect';
import mixpanel from 'mixpanel-browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import { projects, home } from './Global/data';
import FD from './Global/FormattedDiv';
import { useWindowDimensions } from '../functions/helper';
import '../styles/style.scss';
import { contextTypes } from 'react-spinkit';

const { scaleDown } = transitions;
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function Display({ data, width }) {

    return (
        <div key={data.key}
            className='shadow-reg'
            style={{
                width: '100%',
                height: width * .95 > 1000 ? 1000 * .95 * .47 - 7.5 : isMobile ? width * .95 : width * .95 < 600 ? width * .90 : width * .95 * .47,
                backgroundColor: data.color,
                marginTop: isMobile ? 3 : 10,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
            }}
        >
            <p className='display-text' style={{ fontSize: 30, paddingLeft: 30, paddingBottom: 10 }}>
                {data.name}
            </p>
            {/* <IdealImage
                srcSet={[{ src: image, width: '100%' }]}
                alt="doggo"
                width={'100%'}
            /> */}
        </div>
    )
}

function Home() {
    const { height, width } = useWindowDimensions();
    const data = projects.filter(o => home.includes(o.key));
    const workRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        mixpanel.track('Home');
    }, [])

    return (
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <div className="current unselectable" style={{ fontFamily: 'Haas', fontSize: isMobile || width < 750 ? 28 : width * .95 > 1000 ? 48 : 40, width: isMobile || width < 900 ? '90%' : '75%', paddingTop: 40, textAlign: 'center' }}>
                    Hello! I'm Hayden, a software engineering student who enjoys building things.
                </div>
        </div>
    );
};

export default Home;

// initial multi-display container
/* <div ref={workRef}>
            <FD styles={{backgroundColor: 'red' }}>
                <StackGrid
                    appear={scaleDown.appear}
                    appeared={scaleDown.appeared}
                    enter={scaleDown.enter}
                    entered={scaleDown.entered}
                    leaved={scaleDown.leaved}
                    style={{ maxWidth: 1000, width: '100%' }}
                    columnWidth={'100%'}
                >
                    {data.map(o => <Display data={o} width={width} />)}
                </StackGrid>
            </FD>
            </div> */

// down button
/* <a
    className='current'
    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    onClick={() => scrollToRef(workRef)}
>
    <FontAwesomeIcon icon={faArrowDown} size='lg' />
</a> */