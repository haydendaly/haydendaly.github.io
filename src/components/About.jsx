import React, { useEffect } from 'react';
import _ from "lodash";
import { isMobile } from 'react-device-detect';
import mixpanel from 'mixpanel-browser';

import { TextRow } from './Global/TextComponents';
import { about } from './Global/data';

function About({ height }) {

    useEffect(() => {
        window.scrollTo(0, 0);
        mixpanel.track('About')
    }, []);

    const items = about.map(o => <TextRow data={o} />)
    return (
        <div style={{ width: '100%', paddingTop: isMobile ? 10 : 15 }}>
            {items}
        </div>
    );
};

export default About;