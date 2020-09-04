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
        dates: 'June 2019 - Now',
        category: ['Mobile', 'ML/AI', 'Backend', 'DevOps'],
        text: 'Working on an AI-concierge app startup. \n',
        description: 'Building mobile app for iOS/Android that helps groups make plans with conversational AI. Rised out of irritation in making plans and incorporated to a C-Corp. Currently developing in small sprints focused around a private beta. \n',
        stack: ['Node', 'React (Native)', 'Swift', 'MongoDB', 'TensorFlow'],
        link: 'https://exire.ai'
    },
    {
        key: 'codeforhoboken',
        name: 'Code for Hoboken',
        role: 'Co-founder',
        dates: 'May 2020 - Now',
        category: ['Hardware', 'Mobile', 'Hackathons', 'Backend'],
        text: 'Starting nonprofit for local environmental focused tech initiatives.\n',
        description: 'Starting sustainability focused 501(c)(3) organization with support of local government to bring open-sourced, smart city technology to Hoboken. \n',
        stack: ['React Native'],
        thumbnailURL: ''
    },
    {
        key: 'testbed',
        name: 'Testbed Simulation Infrastructure',
        dates: 'April 2020 - Now',
        category: ['Web', 'Backend', 'DevOps'],
        text: 'Creating infrastructure for distributed trade-space simulations.\n',
        description: 'Prototyped Docker simulation architectures to allow researchers to upload components of space systems and optimize models. Developed orchestration with service mesh and gathered requirements from DOD, NASA, and USGS. \n',
        stack: ['React', 'Docker', 'Flask', 'MQTT', 'Python', 'Nginx'],
        link: 'https://github.com/haydendaly/nos-t-infrastructure'
    },
    {
        key: 'babbio',
        name: 'Babb.io',
        dates: 'May 2020 - Now',
        category: ['Mobile'],
        text: 'Building an app for university-oriented group chats.\n',
        description: 'Deployed platform for university-oriented group chats currently starting pilot at Stevens with support for over 1,000 courses. \n',
        stack: ['React Native', 'Node', 'Firebase'],
        link: 'https://babb.io'
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
        description: 'Developed full-stack to be used internally within the production of animated content. Restructured GitLab pipelines for automated testing of multiple environments. \n',
        stack: ['React', 'Django', 'Docker', 'SQL', 'Nginx', 'Ruby'],
        link: ''
    },
    {
        key: 'securemeeting',
        name: 'SecureMeeting',
        category: ['Web', 'Backend', 'Mobile'],
        dates: 'April 2020 - July 2020',
        text: 'Developed features for video-chat platform. \n',
        description: 'Worked with fullstack WebRTC platform to improve backend performance, develop frontend features, and start/lead development on a mobile application. \n',
        stack: ['React', 'WebRTC', 'React Native'],
        link: 'https://securemeeting.org'
    },
    {
        key: 'covidhealthhack',
        name: 'COVID HealthHack',
        category: ['Hackathons'],
        text: 'Organized two global Hackathons focused on Coronavirus. \n',
        stack: [],
        link: 'https://covidhealthhack.com'    
    },
    {
        key: 'atticus',
        name: 'Atticus',
        category: ['Mobile', 'Backend'],
        dates: 'February 2020 - June 2020',
        text: 'Lead a team to build full-stack mobile book club app. \n',
        description: 'Created full-stack mobile app for iOS/Android that for people to orchestrate reading in groups available on TestFlight. \n',
        stack: ['React Native', 'Node', 'MongoDB'],
        link: 'https://github.com/haydendaly/bookClub'
    },
    {
        key: '2&20',
        name: 'Two and Twenty LLP',
        category: ['Backend', 'ML/AI'],
        text: 'Competed in a high frequency trading competition and won. \n',
        description: <p>Competeted in a high frequency trading competition hosted by Capco and the financial engineering department of Stevens. Worked in a VM of a simulated trading environment and initially lost a good deal of money using traditional HFT algorithms like MACD. Noticed market making in the simulation wasn't effectively and created a market maker and in combination with <a target='_blank' className='current' href='https://www.sciencedirect.com/science/article/abs/pii/0304405X76900064'>Garman's inventory model</a> making over 20% profit in the final two days of competition and winning.</p>,
        stack: ['Python', 'Pandas'],
        link: 'https://github.com/JamesLawrence30/TwoAndTwentyLLP'
    },
    {
        key: 'stopthespread',
        name: 'stopthespread.info',
        category: ['Web'],
        text: 'Worked on an open-source Coronavirus info site. \n',
        description: 'Worked with a global team consiting of faculty/students from University of Cambridge, Carnegie Mellon, nad more institutions to construct an open-source site to provide medical doctor-validated COVID-19 related information. Worked on frontend development and a backend notification/update system. Site was eventually taken down due to inability to keep up with constantly changing US policy and information. \n',
        stack: ['Gatsby', 'Node', 'GraphQL'],
        link: 'https://stopthespread.info'
    },
    {
        key: '533',
        name: 'NPM Module Recommendation System',
        category: ['ML/AI'],
        text: 'Built a package/library recommendation system for software projects.\n',
        description: 'Used a basic, tensor-based recommendation system for NPM modules based off a project description with data collected using the GitHub API for open-source JavaScript projects.',
        stack: ['Python', 'Sci-kit Learn', 'Pandas'],
        link: 'https://docs.google.com/document/d/1gyOCGEa7lazRmGwWWK1io5ym2EargMAka0fpsVf9F8M/edit?usp=sharing'
    },
    {
        key: 'finbot',
        name: 'Financial Slack Bot',
        category: ['Backend'],
        text: 'Constructed financially-literate Slack bot. \n',
        description: 'Constructed financially-literate Slack bot based around Alphavantage API to respond to natural language queries for both stock and cryptocurrency alphas. Focused primarily on BBANDs/MACD/other standard alphas for a functional prototype. \n',
        stack: ['Python'],
        link: 'https://github.com/haydendaly/financial-slack-bot'
    },
    {
        key: '2019',
        category: ['year'],
    },
    {
        key: 'healthtech',
        name: '2019 HealthTech Hackathon',
        category: ['Hackathons', 'Design'],
        text: 'Hosted a Hackathon focused on Melanoma survivors and living with RA. \n',
        description: 'Hosted a Hackathon focused on Melanoma survivors and millenials managing Rheumatoid Arthiritus. Fundraised over $45k in sponsorship from Bristol-Meyers Squibb, Quest Diagnostics, Greenberg Traurig, Johnson & Johnson, and many more organizations. Event was successful as many projects were continued after the event and some students receieved internship and full time offers with the sponsoring companies.\n',
        stack: [],
        link: 'https://www.stevens.edu/news/stevens-annual-healthtech-hackathon-inspires-student-innovators'
    },
    {
        key: 'refarch',
        name: 'A Reference Software Architecture for Model-centric Engineering Information Systems',
        category: ['Backend', 'DevOps'],
        text: 'Published first paper on Reference Architectures. \n',
        description: 'Published a paper reference architectures being used to represent systems engineering, model-based information systems and evaluated an example architecture on a tradespace analytics tool. \n',
        stack: [],
        link: 'https://code-lab.org'
    },
    {
        key: 'tatckb',
        name: 'Tradespace Analysis Tool for Constellations Knowledge Base',
        category: ['Backend', 'DevOps'],
        text: 'Developed backend for model-based satellite information system. \n',
        stack: ['Node', 'JavaScript', 'Docker', 'MongoDB'],
        link: 'https://tatckb.org/'        
    },
    {
        key: 'gedcom',
        name: 'GEDCOM Parser',
        category: ['Backend'],
        text: 'Built a GEDCOM parser with varying agile practices.\n',
        stack: ['Python'],
        link: 'https://github.com/haydendaly/GEDCOM-Parser'
    },
    {
        key: 'butterworth',
        name: 'Butterworth Second-Order Cross-over Frequency Filter',
        category: ['Hardware'],
        text: 'Built crossover frequency filter for AUX to Speaker. \n',
        stack: ['MatLab']        
    },
    {
        key: 'iot',
        name: 'IoT Weather Station',
        category: ['Hardware'],
        text: 'Built IoT weather station to collect local data. \n',
        stack: ['C/C++', 'Arduino', 'MQTT'],
        link: 'https://docs.google.com/document/d/1d9J_OK-EI_-PonLnMO0rbKbBFXkRxm4bvkkc8Gl63_E/edit?usp=sharing'
    },
    {
        key: 'bluehack',
        name: 'Argo, IBM/United Nations Blue Hack Against Human Trafficking',
        category: ['Hackathons', 'Web', 'Design'],
        text: 'Won a human-trafficking Hackathon and attended an IBM Conference. \n',
        description: 'Competed in a Hackathon to develop solutions to problems surrounding human trafficking. Interviewed stakeholders from the Manhattan DA Office to learn about how they solve cases and put together a tool to parse social media data for insights regarding human trafficking victims. Ended up winning first and attending the IBM AI New Horizons Conference at their research center in Yorktown Heights, NY. \n',
        stack: ['Python', 'HTML/CSS'],
        link: 'https://www.stevens.edu/news/stevens-students-develop-technologies-fight-human-trafficking'
    },
    {
        key: 'quickdraw',
        name: 'Pictionary with a Computer',
        category: ['ML/AI'],
        text: 'Trained CNN with QuickDraw dataset to make a drawing game. \n',
        description: 'Used the Google QuickDraw dataset to create a game where users are told to draw something and the game tries to guess what it is. Used a relatively standard CNN in TensorFlow and built a GUI using Tkinter. \n',
        stack: ['Python', 'TensorFlow']
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
        stack: ['C/C++', 'Arduino']
    },
    {
        key: '3x3x9',
        name: "3x3x9 Rubik's Cube CAD Model",
        category: ['Design'],
        text: `Designed a 3x3x9 Rubik's cube and won CAD competition. \n`,
        stack: ['SolidWorks']
    },
    {
        key: 'dineknow',
        name: 'DineKnow, VentureHacks 2018',
        category: ['Mobile', 'Hackathons', 'Design'],
        text: 'Did first Hackathon and won with a Dining Hall Application. \n',
        stack: ['Swift']
    },
    // data just for resume
    {
        key: 'svc',
        name: 'Stevens Venture Center',
        role: 'Co-director of Hackathons',
    dates: 'May 2019 - Now',
        category: ['Hackathons'],
        description: 'Setup, manage, and operate multiple Hackathons annually with a budget of \$45k+ from sponsors at the UN, J\&J, IBM, and more. Recently hosted the 2020 COVID-19 Hackathon with 600+ global participants to address post-COVID life.\n',
        stack: [],
        link: 'https://covidhealthhack.com',
        isResume: true
    },
    {
        key: 'codelab',
        name: 'Collective Design Lab',
        role: 'Software Developer Researcher',
        dates: 'May 2019 - Now',
        category: ['Backend', 'DevOps', 'Web'],
        description: 'Developed research-focused projects in the domain of distributed authority, aerospace engineering, and software architecture. Published the paper “A Reference Software Architecture for Model-centric Engineering Information Systems”. \n',
        stack: ['React', 'Docker', 'Node', 'Flask'],
        link: 'https://covidhealthhack.com',
        isResume: true
    },
]

const about = [
    {
        key: "Info",
        component: (
        <p className='section' style={{ whiteSpace: 'pre-wrap' }}>
            {`I'm a software engineering student at Stevens Institute in Hoboken, NJ in the iSTEM program. Most of my free time I spend either running, reading, cooking, or coding. I compete on the varsity cross country and track teams at my university and plan to pursue ultra running after graduation.
            I'm currently a full-time student but engaged in several interesting side projects. Some notable projects I'm working on are `}
            <Link
                            className="current"
                            to={"/projects/exire"}    
            >
                my startup which focuses on creating plans for groups, 
            </Link>
            <Link className="current" to={"/projects/babbio"}> a group chat app targetting university students, </Link>
            {`a conversational chatbot providing personalized therapy, `}
            {`and some other ones in that realm. 
            After competing in two Hackathons, I took on the responsibility as co-director of Hackathons for the Stevens Venture Center where I recently hosted a `}
            <Link className="current" to={"/projects/covidhealthhack"}>Hackathon based around adjusting to life after Coronavirus. </Link> 
            {`I also am engaged in systems engineering research for the Collective-Design Lab where i've recently been developing `} 
            <Link className="current" to={"/projects/testbed"}>an infrastructure and control panel</Link>
            {` for distributed space-system simulations.`}
        </p>
        )
    },
    {
        key: "Primary Interests",
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
            <p className='section' style={{ whiteSpace: 'pre-wrap' }}>
GitHub: <a target='_blank' className="current" href="https://github.com/haydendaly">haydendaly</a><br />
LinkedIn: <a target='_blank' className="current" href="https://www.linkedin.com/in/haydendaly/">haydendaly</a><br />
Strava: <a target='_blank' className="current" href="https://www.strava.com/athletes/54285809">Hayden Daly</a><br />
Email: <a target='_blank' className="current" href="mailto:hdaly1@stevens.edu">hdaly1@stevens.edu</a>
            </p>
        )
    },
    {
        key: "Favorite Books",
        text: '',
        component: (
            <p>
                <a className="current" target='_blank' href="https://www.goodreads.com/book/show/6751.Consider_the_Lobster_and_Other_Essays"><i>Consider the Lobster by David Foster Wallace</i></a><br />
                <a className="current" target='_blank' href="https://www.goodreads.com/book/show/22822858-a-little-life"><i>A Little Life by Hanya Yanagihara</i></a><br />
                <a className="current" target='_blank' href="https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore"><i>Kafka and the Shore by Haruki Murikami</i></a><br />
                <a className="current" target='_blank' href="https://www.goodreads.com/book/show/166997.Stoner"><i>Stoner by John Williams</i></a><br />
                <a className="current" target='_blank' href="https://www.goodreads.com/book/show/21480734-dataclysm"><i>Dataclysm by Christian Rudder</i></a><br />
                <a className="current" target='_blank' href="https://www.goodreads.com/book/show/9915.Less_Than_Zero"><i>Less Than Zero by Bret Easton Ellis</i></a><br />
            </p>
        )
    },
]

export {
    home,
    projects,
    about
}