import React, { useState, useEffect, Suspense } from 'react';
import _ from "lodash";
import { isMobile } from 'react-device-detect';
import { useLocation, Redirect } from 'react-router-dom';
import { LazyLoadImage as Image } from 'react-lazy-load-image-component';
import mixpanel from 'mixpanel-browser';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { projects } from './Global/Data';
import Loading from './Global/Loading';
import { ProjectDescription } from './Global/TextComponents';
import { useWindowDimensions } from '../functions/helper';

function Project({ setPage }) {
    let location = useLocation();
    const { height } = useWindowDimensions();
    const [loaded, setLoaded] = useState(true);
    const [data, setData] = useState({ key: '', text: '', component: '', name: '' });
    const [hover, setHover] = useState(false);
    const [image, setImage] = useState(location.pathname.substr(10));
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setPage('projects/');
        let project = projects.filter(o => o.key === location.pathname.substr(10))
        if (project.length !== 0) {
            setData(project[0]);
            document.title = project[0].name + ' - Hayden Daly';
            mixpanel.track(`Project ${project[0].name}`)
        } else {
            setRedirect(true);
        }
    }, []);

    let link = _.get(data, 'link');

    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to='/' />
        }
    }

    return (
        <div style={{ paddingTop: isMobile ? 10 : 15 }}>
            <div style={{ marginBottom: 10 }}>
                {renderRedirect()}
                <Suspense fallback={<Loading height='100%' width='100%' />}>
                        <div className='project-container'>
                            <a target='_blank' href={link}>
                                <Image
                                    width={'100%'}
                                    alt={data.name}
                                    loaded={loaded}
                                    src={`https://hayden-portfolio.s3.us-east-2.amazonaws.com/${image}.png`}
                                    placeholderSrc={`https://hayden-portfolio.s3.us-east-2.amazonaws.com/${image}_thumb.png`}
                                    className='selectable'
                                    style={hover ? { opacity: '75%', maxHeight: height * .9 } : { maxHeight: height * .9 }}
                                    onMouseOut={() => link && link !== '' && setHover(false)}
                                    onMouseOver={() => link && link !== '' && setHover(true)}
                                    effect='blur'
                                    onError={e => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://hayden-portfolio.s3.us-east-2.amazonaws.com/fallback_image.png';
                                        setImage('fallback_image');
                                        setLoaded(false);
                                    }}
                                />
                            </a>
                        </div>
                </Suspense>
            </div>
            <ProjectDescription data={data} />
        </div>
    );
};

export default Project;