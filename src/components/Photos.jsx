import React, { useEffect, Suspense, useState } from 'react';
import StackGrid, { transitions } from "react-stack-grid";
import { isMobile } from 'react-device-detect';
import { LazyLoadImage as Image } from 'react-lazy-load-image-component';
import mixpanel from 'mixpanel-browser';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { photos } from './global/data';

import Loading from './Global/Loading';
import { useWindowDimensions } from '../functions/helper';
import '../styles/style.scss';

const { scaleDown } = transitions;

function Photo({ data, width }) {
    const [loaded, setLoaded] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <div key={data.key}
            className='project-container'
            style={{
                width: '100%',
                marginTop: 5,
                height: width / (data.aspect_ratio ? data.aspect_ratio : 1)
            }}
        >
            <Suspense fallback={<div className='project-container' style={{ width: '100%' }} />}>
                <Image
                    width={'100%'}
                    alt={data.name}
                    loaded={loaded}
                    src={data.highres_thumbnail}
                    placeholderSrc={data.thumbnail}
                    className='selectable'
                    style={hover ? { opacity: '75%' } : {}}
                    onMouseOut={() => setHover(false)}
                    onMouseOver={() => setHover(true)}
                    effect='blur'
                    onError={e => {
                        e.target.onerror = null;
                        e.target.src = 'https://hayden-portfolio.s3.us-east-2.amazonaws.com/fallback_image.png';
                        setImage('fallback_image');
                        setLoaded(false);
                    }}
                />
            </Suspense>
        </div>
    )
}

function Photos() {
    const { width } = useWindowDimensions();
    const data = photos;
    console.log(data.length)

    useEffect(() => {
        window.scrollTo(0, 0);
        mixpanel.track('Photos');
    }, [])

    return (
        <StackGrid
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}
            style={{ minWidth: '100%' }}
            columnWidth={width * .95 > 1000 ? (1000 / 2) - 10 : (width * .95 < 750 || isMobile) ? width * .95 - 10 : (width * .95 / 2) - 10}
            gutterWidth={10}
        >
            {data.map(o => <Photo data={o} width={width * .95 > 1000 ? (1000 / 2) - 10 : (width * .95 < 750 || isMobile) ? width * .95 - 10 : (width * .95 / 2) - 10} />)}
        </StackGrid>
    );
};

export default Photos;