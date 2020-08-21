import React from 'react';
import _ from "lodash";
import { isMobile } from 'react-device-detect';

import { TextRow } from './Global/TextComponents';
import { about } from './Global/data';

function About() {
    const items = about.map(o => <TextRow data={o} />)
    return (
        <div style={{ width: '100%', marginTop: 125, paddingTop: isMobile ? 10 : 15, minHeight: '100%' }}>
            {items}
        </div>
    );
};

export default About;