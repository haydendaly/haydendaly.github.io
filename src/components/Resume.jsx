import React, { useEffect } from 'react';
import _ from "lodash";
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";
import mixpanel from 'mixpanel-browser';

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
                    <Link to={path} className='current' style={{ fontSize: 16, marginBottom: 4 }}>{name}</Link>
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

const SectionWrapper = ({ projectKey, sectionKey, margin, relatedProject, fixSpace = false }) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: fixSpace && !isMobile ? -36 : false }}>
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
                    <a target='_blank' href='https://stevens.edu' className='current' style={{ fontSize: 16, marginBottom: 4 }}>Stevens Institue of Technology</a>
                    <p className='section' style={{ marginBottom: 8, fontSize: 15 }}>B.E. in Software Engineering</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p className='section' style={{ fontStyle: 'italic', fontSize: 15, marginTop: 1, marginBottom: 4 }}>August 2018 - Now</p>
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

const Awards = ({ }) => {
    return (
        <div style={{}}>
            <p className='section' style={{ fontSize: 14 }}>
                <div style={{ width: '100%', display: 'flex' }}>
                    <p style={{ width: '50%' }}>
                        <p style={{ fontSize: 15, marginBottom: 8 }} className='section'>{`Stevens Institute Dean's List\n`}</p>
                        <p style={{ fontSize: 15, marginBottom: 8 }} className='section'>{`Edwin A. Stevens Scholarship\n`}</p>
                        <Link to='/projects/bluehack' style={{ fontSize: 15, marginBottom: 0 }} className='current'>{`IBM/UN BlueHack 1st Place`}</Link>
                    </p>
                    <p style={{ width: '50%' }}>
                        <p style={{ marginBottom: 8 }}><Link to='/projects/2&20' style={{ fontSize: 15 }} className='current'>{`Capco Algo. Trading 1st Place\n`}</Link></p>
                        <p style={{ marginBottom: 8 }}><Link to='/projects/dineknow' style={{ fontSize: 15 }} className='current'>{`VentureHacks Most Creative\n`}</Link></p>
                        <p style={{ marginBottom: 0 }}><Link to='/projects/3x3x9' style={{ fontSize: 15 }} className='current'>{`Stevens CAD Competition Winner`}</Link></p>
                    </p>
                </div>
            </p>
        </div>
    )
};

const AwardsWrapper = ({ sectionKey, margin }) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: -20 }}>
        {sectionKey && <div style={{ width: '8%', marginTop: margin }}>
            <RotatedText text={sectionKey} />
        </div>}
        <div style={{ width: '86%', marginRight: '6%' }}>
            <Awards />
        </div>
    </div>
);

const Activities = ({ }) => {
    return (
        <div style={{}}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <div><p className='section' style={{ fontSize: 15, marginBottom: 8 }}>Guest Lecturer, Entreprenuer Course</p></div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p className='section' style={{ fontStyle: 'italic', fontSize: 14, marginTop: 1 }}>August 2019 - December 2019</p>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <div><p className='section' style={{ fontSize: 15, marginBottom: 8 }}>Mentor, Top of the V Leadership Program</p></div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p className='section' style={{ fontStyle: 'italic', fontSize: 14, marginTop: 1 }}>August 2019 - Now</p>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <div><p className='section' style={{ fontSize: 15 }}>Varsity Athlete, Stevens Cross Country / Track</p></div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p className='section' style={{ fontStyle: 'italic', fontSize: 14, marginTop: 1 }}>August 2018 - Now</p>
                </div>
            </div>
        </div>
    )
};

const ActivitiesWrapper = ({ sectionKey, margin }) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: !isMobile && -20, marginTop: isMobile && 6 }}>
        {sectionKey && <div style={{ width: '8%', marginTop: margin }}>
            <RotatedText text={sectionKey} />
        </div>}
        <div style={{ width: '86%', marginRight: '6%' }}>
            <Activities />
        </div>
    </div>
);

const Skills = ({ }) => {
    return (
        <div style={{ marginBottom: 4 }}>
            <p className='section' style={{ fontSize: 14 }}>
                <div style={{ marginBottom: -10, display: 'flex', flexDirection: 'row' }}>
                    <p style={{ fontFamily: 'HaasMd', paddingRight: 5 }}>Languages:</p>
                    <p style={{ fontFamily: 'Haas' }}>Python, JS/TS, C/C++, Java, Ruby</p>
                </div>
                <div style={{ marginBottom: -10, display: 'flex', flexDirection: 'row' }}>
                    <p style={{ fontFamily: 'HaasMd', paddingRight: 5 }}>Frameworks:</p>
                    <p style={{ fontFamily: 'Haas' }}>React, React Native, Express, Flask, Django</p>
                </div>
                <div style={{ marginBottom: -10, display: 'flex', flexDirection: 'row' }}>
                    <p style={{ fontFamily: 'HaasMd', paddingRight: 5 }}>Libraries:</p>
                    <p style={{ fontFamily: 'Haas' }}>TensorFlow, NumPy, Pandas, MQTT</p>
                </div>
                <div style={{ marginBottom: -10, display: 'flex', flexDirection: 'row' }}>
                    <p style={{ fontFamily: 'HaasMd', paddingRight: 5 }}>Tools:</p>
                    <p style={{ fontFamily: 'Haas' }}>Docker, Kubernetes, MongoDB, SQL, TravisCI, Git, Redis, AWS</p>
                </div>
            </p>
        </div>
    )
};

const SkillsWrapper = ({ sectionKey, margin }) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        {sectionKey && <div style={{ width: '8%', marginTop: margin }}>
            <RotatedText text={sectionKey} />
        </div>}
        <div style={{ width: '86%', marginRight: '6%' }}>
            <Skills />
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

    useEffect(() => {
        window.scrollTo(0, 0);
        mixpanel.track('Resume');
    }), []

    if (isMobile || width * .95 < 800) {
        return (
            <div style={{ width: '100%', marginTop: 125, paddingTop: 10, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
                <EduWrapper sectionKey='Education' margin={105} />
                <SkillsWrapper sectionKey='Skills' margin={55} />
                <SectionWrapper projectKey='exire' sectionKey='Experience' margin={125} />
                <SectionWrapper projectKey='codelab' fixSpace relatedProject='testbed' />
                <SectionWrapper projectKey='svc' relatedProject='covidhealthhack' />
                <SectionWrapper projectKey='dtva' />
                <SectionWrapper projectKey='babbio' sectionKey='Projects' margin={90} />
                <SectionWrapper projectKey='codeforhoboken' />
                <SectionWrapper projectKey='testbed' />
                <SectionWrapper projectKey='securemeeting' />
                <AwardsWrapper sectionKey='Awards' margin={80} />
                <ActivitiesWrapper sectionKey='Activities' margin={95} />
            </div>
        );
    } else {
        return (
            <div style={{ width: '100%', marginTop: 125, paddingTop: 15, minHeight: '100%', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '50%' }}>
                    <SectionWrapper projectKey='exire' sectionKey='Experience' margin={125} />
                    <SectionWrapper projectKey='codelab' relatedProject='testbed' />
                    <SectionWrapper projectKey='svc' relatedProject='covidhealthhack' />
                    <SectionWrapper projectKey='dtva' />
                    <AwardsWrapper sectionKey='Awards' margin={80} />
                    <ActivitiesWrapper sectionKey='Activities' margin={95} />
                </div>
                <div style={{ width: '50%' }}>
                    <EduWrapper sectionKey='Education' margin={105} />
                    <SkillsWrapper sectionKey='Skills' margin={55} />
                    <SectionWrapper projectKey='babbio' sectionKey='Projects' margin={90} />
                    <SectionWrapper projectKey='codeforhoboken' />
                    <SectionWrapper projectKey='testbed' />
                    <SectionWrapper projectKey='securemeeting' />
                </div>
            </div>
        );
    }
};

export default Resume;