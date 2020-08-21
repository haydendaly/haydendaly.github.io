import React from 'react';
import { Link } from "react-router-dom";

const home = [
    'exire',
    'babbio',
    'securemeeting',
    'testbed',
    'healthhack',
    'codeforhoboken',
    'atticus',
    '3x3x9'
]

const projects = [
    {
        key: 'Current',
        category: ['year'],
    },
    {
        key: 'exire',
        name: 'Exire.ai',
        role: 'Chief Executive Officer',
        dates: 'June 2019 - Present',
        category: ['Mobile', 'ML/AI', 'Backend', 'DevOps'],
        text: 'Working on an AI-concierge app startup. \n',
        description: 'Building mobile app for iOS/Android that helps groups make plans. Rised out of irritation in making plans and incorporated to a C-Corp. Currently developing in small sprints focused around a private beta. \n',
        stack: ['AWS/GCP', 'Node', 'React', 'React Native', 'Swift', 'MongoDB', 'Python', 'TensorFlow'],
        link: 'https://exire.ai',
        color: '#007aff'
    },
    {
        key: 'codeforhoboken',
        name: 'Code for Hoboken',
        category: ['Hardware'],
        text: 'Starting nonprofit for local environmental focused tech initiatives.\n',
        description: '',
        stack: ['React Native'],
        link: '',
        color: '#007aff'
    },
    {
        key: 'testbed',
        name: 'Testbed Simulation Infrastructure',
        category: ['Web', 'Backend', 'DevOps'],
        text: 'Creating infrastructure for distributed trade-space simulations.\n',
        stack: ['React', 'Docker', 'Flask', 'MQTT', 'Python', 'Nginx'],
        link: 'https://github.com/haydendaly/testbed-architecture',
        color: '#007aff'
    },
    {
        key: 'babbio',
        name: 'Babb.io',
        category: ['Mobile'],
        text: 'Building an app for university-oriented group chats.\n',
        stack: ['React Native', 'Node', 'Firebase'],
        link: 'https://babb.io',
        color: '#007aff'
    },
    {
        key: '2020',
        category: ['year'],
    },
    {
        key: 'dtva',
        name: 'Disney TV Animation',
        category: ['Web', 'Backend', 'DevOps'],
        role: 'Software Developer Intern',
        dates: 'June 2020 - August 2020',
        text: 'Interned at Disney Television Animation. \n',
        description: 'Developed full-stack to be used internally within the production of animated content. Restructured GitLab pipelines for automated testing of multiple environments.',
        stack: ['React', 'Django', 'Docker', 'Nginx', 'Ruby'],
        link: '',
        color: '#007aff'
    },
    {
        key: 'securemeeting',
        name: 'SecureMeeting',
        category: ['Web'],
        text: 'Developed a few features for video-chat platform. \n',
        stack: ['React', 'WebRTC', 'React Native'],
        link: 'https://securemeeting.org',
        color: '#007aff'
    },
    {
        key: 'covidhealthhack',
        name: 'COVID HealthHack',
        category: ['Hackathons'],
        text: 'Organized two global Hackathons focused on Coronavirus. \n',
        stack: [],
        link: 'https://covidhealthhack.com',
        color: '#007aff'
    },
    {
        key: 'atticus',
        name: 'Atticus',
        category: ['Mobile', 'Backend'],
        text: 'Lead a team to build full-stack mobile book club app. \n',
        stack: ['React Native', 'Node', 'MongoDB'],
        link: 'https://github.com/haydendaly/bookClub',
        color: '#007aff'
    },
    {
        key: '2&20',
        name: 'Two and Twenty LLP',
        category: ['Backend', 'ML/AI'],
        text: 'Competeted in a high frequency trading competition and won. \n',
        stack: ['Python', 'Pandas'],
        link: 'https://github.com/JamesLawrence30/TwoAndTwentyLLP',
        color: '#007aff'
    },
    {
        key: 'stopthespread',
        name: 'StopTheSpread.info',
        category: ['Web'],
        text: 'Worked on an open-source Coronavirus info site. \n',
        stack: ['Gatsby', 'Node'],
        link: 'https://stopthespread.info',
        color: '#007aff'
    },
    {
        key: '564',
        name: 'NPM Module Recommendation System',
        category: ['ML/AI'],
        text: 'Built a package/library recommendation system for software projects.\n',
        stack: ['Python', 'Sci-kit Learn', 'Pandas'],
        link: '',
        color: '#007aff'
    },
    {
        key: 'finbot',
        name: 'Financial Slack Bot',
        category: ['Backend'],
        text: 'Constructed financially-literate Slack chat bot. \n',
        stack: ['Python'],
        link: 'https://github.com/haydendaly/financial-slack-bot',
        color: '#007aff'
    },
    {
        key: '2019',
        category: ['year'],
    },
    {
        key: 'healthtech',
        name: '2019 HealthTech Hackathon',
        category: ['Hackathons', 'Design'],
        text: 'Hosted a Hackathon focused based on Melanoma survivors and living with RA. \n',
        stack: [],
        link: 'https://www.stevens.edu/news/stevens-annual-healthtech-hackathon-inspires-student-innovators',
        color: '#007aff'
    },
    {
        key: 'refarch',
        name: 'A Reference Software Architecture for Model-centric Engineering Information Systems',
        category: ['Backend', 'DevOps'],
        text: 'Published first paper on Reference Architectures. \n',
        stack: [],
        link: 'https://code-lab.org',
        color: '#007aff'
    },
    {
        key: 'tatckb',
        name: 'Tradespace Analysis Tool for Constellations Knowledge Base',
        category: ['Backend'],
        text: 'Developed backend for model-based satellite information system. \n',
        stack: ['Node', 'JavaScript', 'Docker'],
        link: 'https://tatckb.org/',        
        color: '#007aff'
    },
    {
        key: 'gedcom',
        name: 'GEDCOM Parser',
        category: ['Backend'],
        text: 'Built a GEDCOM parser with varying agile practices.\n',
        stack: ['Python'],
        link: 'https://github.com/haydendaly/GEDCOM-Parser',
        color: '#007aff'
    },
    {
        key: 'butterworth',
        name: 'Butterworth Second-Order Cross-over Frequency Filter',
        category: ['Hardware'],
        text: 'Built crossover frequency filter for AUX to Speaker. \n',
        stack: ['MatLab'],        
        color: '#007aff'
    },
    {
        key: 'iot',
        name: 'IoT Weather Station',
        category: ['Hardware'],
        text: 'Built IoT weather station to collect local data. \n',
        stack: ['C/C++', 'Arduino'],
        color: '#007aff'
    },
    {
        key: 'ibmun',
        name: 'Argo, IBM United Nations Blue Hack Against Human Trafficking',
        category: ['Hackathons', 'Web', 'Design'],
        text: 'Won a human-trafficking Hackathon and attended an IBM Conference. \n',
        stack: ['Python', 'HTML/CSS'],
        link: 'https://github.com/dyc3/data-dump-reader',
        color: '#007aff'
    },
    {
        key: 'quickdraw',
        name: 'Pictionary with a Computer',
        category: ['ML/AI'],
        text: 'Trained CNN with QuickDraw dataset to make a drawing game. \n',
        stack: ['Python', 'TensorFlow'],
        color: '#007aff'
    },
    {
        key: '2018',
        category: ['year']
    },
    {
        key: 'navbot',
        name: 'Autonomously Navigating Arduino Robt',
        category: ['Hardware'],
        text: 'Built Arduino autonomous navigation bot to go through course. \n',
        stack: ['C/C++', 'Arduino'],
        color: '#007aff'
    },
    {
        key: '3x3x9',
        name: "3x3x9 Rubik's Cube CAD Model",
        category: ['Design'],
        text: `Designed a 3x3x9 Rubik's cube and won CAD competition. \n`,
        stack: ['SolidWorks'],
        color: '#007aff'
    },
    {
        key: 'dineknow',
        name: 'DineKnow, VentureHacks 2018',
        category: ['Mobile', 'Hackathons', 'Design'],
        text: 'Did first Hackathon and won with a Dining Hall Application. \n',
        stack: ['Swift'],
        color: '#007aff'
    },
]

const about = [
    {
        key: "Info",
        component: (
        <p style={{ whiteSpace: 'pre-wrap' }}>
            {`I'm a software engineering student at Stevens Institute in Hoboken, NJ in the iSTEM program. Most of my free time I spend either running, reading, cooking, or coding. I compete on the varsity cross country and track teams at my university and want to pursue ultra running after graduation.
            I'm currently a full-time student but engaged in a handful of fun side projects. Some notable ones are `}
            <Link
                            className="current"
                            to={"/projects/exire"}    
            >
                my startup focused on creating plans for groups, 
            </Link>
            <Link className="current" to={"/projects/babbio"}> a group chat app targetting university students, </Link>
            {`a conversational chatbot providing personalized therapy, `}
            {`and some other ones in that realm. 
            After competing in a few Hackathons, I became the co-director of Hackathons for the Stevens Venture Center where I recently held a `}
            <Link className="current" to={"/projects/covidhealthhack"}>Hackathon based around adjusting to life after Coronavirus. </Link> 
            {`I also do systems engineering research for the Collective-Design Lab where i've recently been developing `} 
            <Link className="current" to={"/projects/testbed"}>an infrastructure and control panel</Link>
            {` for distributed space-system simulations.`}
        </p>
        )
    },
    {
        key: "My Interests",
        text: `Human-Computer Interaction
Generative Adversial Networks
Reinforcement Learning
Affective Computing
Sustainability / Smart Cities
Functional Programming
DevOps / Scalability`
    },
    {
        key: "Social",
        text: '',
        component: (
            <p style={{ whiteSpace: 'pre-wrap' }}>
GitHub: <a className="current" href="https://github.com/haydendaly">haydendaly</a><br />
LinkedIn: <a className="current" href="https://www.linkedin.com/in/haydendaly/">haydendaly</a><br />
Strava: <a className="current" href="https://www.strava.com/athletes/54285809">Hayden Daly</a><br />
Email: <a className="current" href="mailto:hdaly1@stevens.edu">hdaly1@stevens.edu</a>
            </p>
        )
    },
    {
        key: "Favorite Books",
        text: '',
        component: (
            <p>
                <a className="current" href="https://www.goodreads.com/book/show/6751.Consider_the_Lobster_and_Other_Essays"><i>Consider the Lobster by David Foster Wallace</i></a><br />
                <a className="current" href="https://www.goodreads.com/book/show/22822858-a-little-life"><i>A Little Life by Hanya Yanagihara</i></a><br />
                <a className="current" href="https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore"><i>Kafka and the Shore by Haruki Murikami</i></a><br />
                <a className="current" href="https://www.goodreads.com/book/show/166997.Stoner"><i>Stoner by John Williams</i></a><br />
                <a className="current" href="https://www.goodreads.com/book/show/21480734-dataclysm"><i>Dataclysm by Christian Rudder</i></a><br />
                <a className="current" href="https://www.goodreads.com/book/show/9915.Less_Than_Zero"><i>Less Than Zero by Bret Easton Ellis</i></a><br />
            </p>
        )
    },
]

export {
    home,
    projects,
    about
}