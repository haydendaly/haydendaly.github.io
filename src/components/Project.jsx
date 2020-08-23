import React, { useState, useEffect, Suspense, lazy } from 'react';
import _ from "lodash";
import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage as Image } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { projects } from './Global/Data';
import Loading from './Global/Loading';
import { ProjectDescription } from './Global/TextComponents';
import { useWindowDimensions } from '../functions/helper';

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
            <div style={{ width: '100%', minHeight: width * .95 > 1000 ? 1000 * .95 * .5 : width * .95 * .5, marginBottom: 10 }}>
            <Suspense fallback={<Loading height='100%' width='100%' />}>
            <Image
                width={'100%' }
                alt={`https://hayden-portfolio.s3.us-east-2.amazonaws.com/${data.key}_thumb.png`}
                src={`https://hayden-portfolio.s3.us-east-2.amazonaws.com/${data.key}.png`}
                className='unselectable'
                effect="blur"
            />
            </Suspense>
            </div>
            <ProjectDescription data={data} />
        </div>
    );
};

export default Project;