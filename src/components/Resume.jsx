import React from 'react';
import _ from "lodash";
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";

import { projects } from './Global/data';

const Section = ({ projectKey }) => {
    const { name, role, description, dates, stack, link } = _.find(projects, ['key', projectKey]);

    return (
        <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <Link to={`/projects/${projectKey}`} className='section' style={{ fontSize: 16, marginBottom: 4 }}>{name}</Link>
                    <p className='section' style={{ marginBottom: 8, fontSize: 15 }}>{role}</p>
                </div>
                <div>
                    <p className='section' style={{ fontStyle: 'italic', fontSize: 15 }}>{dates}</p>
                </div>
            </div>
            <div>
                <p className='section' style={{ fontSize: 14, marginBottom: 6 }}>
                    {description}
                </p>
                <p className='project-italics' style={{ fontStyle: 'italic', fontSize: 14 }}>
                    {stack && 'Using ' + stack.join(', ')}
                </p>
            </div>
        </div>
    )
};

const SectionWrapper = ({ projectKey, sectionKey }) => (
    <div style={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        {sectionKey && <div style={{ width: '10%', marginTop: 125 }}>
            <RotatedText text={sectionKey} />
        </div>}
        <div style={{ width: '85%', marginRight: '5%' }}>
            <Section projectKey={projectKey} />
        </div>
    </div>
)

const RotatedText = ({ text }) => {
    return (
        <p
            style={{
                transform: 'rotate(-90deg)',
                transformOrigin: 'left top 0',
                float: 'left',
                fontSize: 24
            }}
            className='section'
        >
            {text}
        </p>
    )
}

function Resume() {
    return (
        <div style={{ width: '100%', marginTop: 125, paddingTop: isMobile ? 10 : 15, minHeight: '100%' }}>
            <SectionWrapper projectKey='exire' sectionKey='Experience' />
            {/* <SectionWrapper positionKey='codelab' /> */}
            <SectionWrapper projectKey='dtva' />
        </div>
    );
};

export default Resume;