import React, { useState, useEffect, Suspense, lazy } from 'react';
import _ from "lodash";
import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage as Image } from 'react-lazy-load-image-component';

import { projects } from './Global/Data';
import { ProjectDescription } from './Global/TextComponents';
import { useWindowDimensions } from '../functions/helper';
import temp1 from '../static/temp1.png'
import temp2 from '../static/temp2.png'
import monet from '../static/monet1.png'

const images = [temp1, temp2, monet];

function Project() {
    const { width } = useWindowDimensions();
    const [data, setData] = useState({ key: '', text: '', component: '' });
    let location = useLocation();

    useEffect(() => {
        let project = projects.filter(o => o.key === location.pathname.substr(10))
        if (project !== []) {
            setData(project[0]);
            document.title = project[0].name + ' - Hayden Daly';
        }
    }, [])

    return (
        <div style={{ width: '100%', paddingTop: isMobile ? 10 : 15, marginTop: 125, height: '100%' }}>
            <div className='project-container' style={{ width: '100%', height: width * .95 > 1000 ? 1000 * .95 * .7 : width * .95 * .7, marginBottom: 10 }}>
            <Suspense fallback={<div>Loading</div>}>
            <Image
                height={'100%'}
                src={
                    images[Math.floor(Math.random() * 3)]
                }
                width={'100%'} 
                className='unselectable'
            />
            </Suspense>
            </div>
            <ProjectDescription data={data} />
        </div>
    );
};

export default Project;