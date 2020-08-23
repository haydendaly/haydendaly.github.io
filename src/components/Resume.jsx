import React from 'react';
import _ from "lodash";
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";

import { useWindowDimensions } from '../functions/helper';
import { projects } from './Global/data';

const Section = ({ projectKey, relatedProject }) => {
    let path;
    if (relatedProject && relatedProject === '') {
        path = ''
    } else if (relatedProject) {
        path = '/projects/' + relatedProject
    } else {
        path = '/projects/' + projectKey
    }

    const { name, role, description, dates, stack, link } = _.find(projects, ['key', projectKey]);

    return (
        <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <Link to={path} className='section' style={{ fontSize: 16, marginBottom: 4 }}>{name}</Link>
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
                    {stack && stack.length > 0 && 'Using ' + stack.join(', ')}
                </p>
            </div>
        </div>
    )
};

const SectionWrapper = ({ projectKey, sectionKey, margin, relatedProject }) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        {sectionKey && <div style={{ width: '8%', marginTop: margin }}>
            <RotatedText text={sectionKey} />
        </div>}
        <div style={{ width: '86%', marginRight: '6%' }}>
            <Section projectKey={projectKey} relatedProject={relatedProject} />
        </div>
    </div>
)

const Edu = ({ }) => {
    return (
        <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <a target='_blank' href='https://stevens.edu' className='section' style={{ fontSize: 16, marginBottom: 4 }}>Stevens Institue of Technology</a>
                    <p className='section' style={{ marginBottom: 8, fontSize: 15 }}>B.E. in Software Engineering</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p className='section' style={{ fontStyle: 'italic', fontSize: 15, marginBottom: 4 }}>August 2018 - Now</p>
                    <p className='section' style={{ fontStyle: 'italic', fontSize: 14, marginBottom: 8 }}>Overall GPA: 3.92</p>
                </div>
            </div>
            <div style={{ marginBottom: -16 }} >
                <p className='section' style={{ fontSize: 14 }}>
                    <p style={{ fontFamily: 'HaasMd', marginBottom: 6 }}>Relevant Coursework:</p>
                    <div style={{ width: '100%', display: 'flex' }}>
                        <p style={{ width: '50%', whiteSpace: 'pre-wrap' }}>
                            {`Agile Methodologies
Advanced Algorithm Design
Applied Data Struct. and Algo.`}
                        </p>
                        <p style={{ width: '50%', whiteSpace: 'pre-wrap' }}>
                            {`Human-Computer Interaction
Deep Learning
Computer Org. and Prog.`}
                        </p>
                    </div>
                </p>
            </div>
        </div>
    )
};

const EduWrapper = ({ sectionKey, margin }) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        {sectionKey && <div style={{ width: '8%', marginTop: margin }}>
            <RotatedText text={sectionKey} />
        </div>}
        <div style={{ width: '86%', marginRight: '6%' }}>
            <Edu />
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
                fontSize: 24,
                marginLeft: -8
            }}
            className='project-italics'
        >
            {text}
        </p>
    )
}

function Resume() {
    const { width } = useWindowDimensions();

    return (
        <div style={{ width: '100%', marginTop: 125, paddingTop: isMobile ? 10 : 15, minHeight: '100%', display: 'flex', flexDirection: isMobile || width * .95 < 750 ? 'column' : 'row' }}>
            <div style={{ width: isMobile || width * .95 < 750 ? '100%' : '50%' }}>
                <SectionWrapper projectKey='exire' sectionKey='Experience' margin={125} />
                <SectionWrapper projectKey='codelab' relatedProject='testbed' />
                <SectionWrapper projectKey='svc' relatedProject='covidhealthhack' />
                <SectionWrapper projectKey='dtva' />
            </div>
            <div style={{ width: isMobile || width * .95 < 750 ? '100%' : '50%' }}>
                <EduWrapper sectionKey='Education' margin={105} />
                <SectionWrapper projectKey='testbed' sectionKey='Projects' margin={90} />
                <SectionWrapper projectKey='babbio' />
                <SectionWrapper projectKey='codeforhoboken' />
                <SectionWrapper projectKey='securemeeting' />
            </div>
        </div>
    );
};

export default Resume;