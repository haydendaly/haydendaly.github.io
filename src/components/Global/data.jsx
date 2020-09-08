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

const photos = [
    {
        key: 21,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_21.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_21.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_21.jpg`,
        name: 'First Snow',
        location: 'Hoboken, NJ',
        aspect_ratio: 600/450
    },
    {
        key: 6,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_6.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_6.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_6.jpg`,
        name: 'The Nets',
        location: 'Simi Valley, CA',
        aspect_ratio: 600/450
    },
    {
        key: 43,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_43.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_43.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_43.jpg`,
        name: 'The Arch',
        location: 'San Luis Obispo, CA',
        aspect_ratio: 600/450
    },
    {
        key: 44,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_44.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_44.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_44.jpg`,
        name: 'Nick',
        location: 'San Luis Obispo, CA',
        aspect_ratio: 600/450
    },
    {
        key: 1,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_1.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_1.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_1.jpg`,
        name: 'Caution Sign at LA-88 Nike Missile Base',
        location: 'Chatsworth, CA',
        aspect_ratio: 600/338
    },
    {
        key: 3,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_3.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_3.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_3.jpg`,
        name: 'Spelunking',
        location: 'Joshua Tree, CA',
        aspect_ratio: 600/800
    },
    {
        key: 4,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_4.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_4.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_4.jpg`,
        name: 'Little Sister',
        location: 'Porter Ranch, CA',
        aspect_ratio: 600/450
    },
    {
        key: 5,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_5.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_5.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_5.jpg`,
        name: 'Trees in Aliso Canyon',
        location: 'Granada Hills, CA',
        aspect_ratio: 600/450
    },
    {
        key: 7,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_7.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_7.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_7.jpg`,
        name: 'Oat Mountain',
        location: 'Chatsworth, CA',
        aspect_ratio: 600/450
    },
    {
        key: 8,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_8.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_8.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_8.jpg`,
        name: 'Elizabeth',
        location: 'Simi Valley, CA',
        aspect_ratio: 600/800
    },
    {
        key: 9,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_9.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_9.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_9.jpg`,
        name: '4th of July at Liberty State Park',
        location: 'Jersey City, NJ',
        aspect_ratio: 600/450
    },
    {
        key: 10,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_10.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_10.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_10.jpg`,
        name: 'Flowers at Bee Canyon',
        location: 'Granada Hills, CA',
        aspect_ratio: 600/402
    },
    {
        key: 11,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_11.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_11.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_11.jpg`,
        name: 'Sean',
        location: 'Goleta, CA',
        aspect_ratio: 600/450
    },
    {
        key: 12,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_12.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_12.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_12.jpg`,
        name: 'Crossing the Gap',
        location: 'Goleta, CA',
        aspect_ratio: 600/450
    },
    {
        key: 13,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_13.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_13.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_13.jpg`,
        name: 'Climbing',
        location: 'Goleta, CA',
        aspect_ratio: 600/450
    },
    {
        key: 14,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_14.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_14.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_14.jpg`,
        name: 'Diego in Tree',
        location: 'Goleta, CA',
        aspect_ratio: 600/450
    },
    {
        key: 15,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_15.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_15.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_15.jpg`,
        name: 'Climbing',
        location: 'Goleta, CA',
        aspect_ratio: 600/450
    },
    {
        key: 16,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_16.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_16.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_16.jpg`,
        name: 'Family on Lake',
        location: 'Mammoth Lakes, CA',
        aspect_ratio: 600/450
    },
    {
        key: 17,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_17.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_17.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_17.jpg`,
        name: 'Stony Point',
        location: 'Chatsworth, CA',
        aspect_ratio: 600/450
    },
    {
        key: 18,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_18.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_18.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_18.jpg`,
        name: 'Hiking',
        location: 'Chatsworth, CA',
        aspect_ratio: 600/798
    },
    {
        key: 19,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_19.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_19.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_19.jpg`,
        name: 'First Day at School',
        location: 'Hoboken, NJ',
        aspect_ratio: 600/450
    },
    {
        key: 20,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_20.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_20.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_20.jpg`,
        name: 'One WTC',
        location: 'Manhattan, NYC',
        aspect_ratio: 600/800
    },
    {
        key: 22,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_22.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_22.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_22.jpg`,
        name: 'Dorm',
        location: 'Hoboken, NJ',
        aspect_ratio: 600/450
    },
    {
        key: 23,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_23.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_23.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_23.jpg`,
        name: 'Track Championships',
        location: 'Alfred, NY',
        aspect_ratio: 600/400
    },
    {
        key: 24,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_24.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_24.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_24.jpg`,
        name: 'LA-88 Nike Missile Site',
        location: 'Chatsworth, CA',
        aspect_ratio: 600/401
    },
    {
        key: 25,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_25.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_25.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_25.jpg`,
        name: '4th of July',
        location: 'Jersey City, NJ',
        aspect_ratio: 600/450
    },
    {
        key: 26,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_26.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_26.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_26.jpg`,
        name: 'The Met',
        location: 'Manhattan, NY',
        aspect_ratio: 600/450
    },
    {
        key: 27,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_27.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_27.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_27.jpg`,
        name: 'Rooftop',
        location: 'Hoboken, NJ',
        aspect_ratio: 600/450
    },
    {
        key: 28,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_28.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_28.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_28.jpg`,
        name: 'Central Park',
        location: 'Manhattan, NY',
        aspect_ratio: 600/450
    },
    {
        key: 29,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_29.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_29.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_29.jpg`,
        name: 'Lucky Boy after COSPAR',
        location: 'Pasadena, CA',
        aspect_ratio: 600/450
    },
    {
        key: 30,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_30.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_30.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_30.jpg`,
        name: 'Initial College Visit',
        location: 'Los Angeles, CA',
        aspect_ratio: 600/800
    },
    {
        key: 2,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_2.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_2.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_2.jpg`,
        name: 'Running at Pierce College',
        location: 'Los Angeles, CA',
        aspect_ratio: 600/800
    },
    {
        key: 31,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_31.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_31.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_31.jpg`,
        name: 'Jacob',
        location: 'Santa Barbara, CA',
        aspect_ratio: 600/800
    },
    {
        key: 32,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_32.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_32.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_32.jpg`,
        name: 'Hiking',
        location: 'Joshua Tree, CA',
        aspect_ratio: 600/450
    },
    {
        key: 33,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_33.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_33.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_33.jpg`,
        name: 'Off the Wall Chinese Food',
        location: 'Hoboken, NJ',
        aspect_ratio: 600/400
    },
    {
        key: 34,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_34.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_34.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_34.jpg`,
        name: 'Hiking',
        location: 'Joshua Tree, CA',
        aspect_ratio: 600/450
    },
    {
        key: 35,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_35.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_35.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_35.jpg`,
        name: 'Exploring LA-94 Nike Missile Base',
        location: 'Sylmar, CA',
        aspect_ratio: 600/800
    },
    {
        key: 36,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_36.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_36.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_36.jpg`,
        name: 'Exploring LA-94 Nike Missile Base',
        location: 'Sylmar, CA',
        aspect_ratio: 600/450
    },
    {
        key: 37,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_37.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_37.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_37.jpg`,
        name: 'Exploring LA-94 Nike Missile Base',
        location: 'Sylmar, CA',
        aspect_ratio: 600/450
    },
    {
        key: 38,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_38.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_38.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_38.jpg`,
        name: 'Descanso Gardens',
        location: 'Alta Dena, CA',
        aspect_ratio: 600/450
    },
    {
        key: 39,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_39.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_39.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_39.jpg`,
        name: 'Sunset Over Gas Company',
        location: 'Porter Ranch, CA',
        aspect_ratio: 600/450
    },
    {
        key: 40,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_40.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_40.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_40.jpg`,
        name: 'Kyle',
        location: 'Porter Ranch, CA',
        aspect_ratio: 600/450
    },
    {
        key: 41,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_41.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_41.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_41.jpg`,
        name: 'Mormon Trail',
        location: 'Porter Ranch, CA',
        aspect_ratio: 600/450
    },
    {
        key: 42,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_42.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_42.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_42.jpg`,
        name: 'Overnight Hike',
        location: 'Sylmar, CA',
        aspect_ratio: 600/598
    },
    {
        key: 45,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_45.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_45.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_45.jpg`,
        name: 'Reseda Point',
        location: 'Porter Ranch, CA',
        aspect_ratio: 600/450
    },
    {
        key: 46,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_46.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_46.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_46.jpg`,
        name: 'Sunset in SM',
        location: 'Santa Monica, CA',
        aspect_ratio: 600/450
    },
    {
        key: 47,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_47.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_47.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_47.jpg`,
        name: 'Cool Architecture',
        location: 'Rockefeller Island, NY',
        aspect_ratio: 600/800
    },
    {
        key: 48,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_48.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_48.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_48.jpg`,
        name: 'Night',
        location: 'Hoboken, NJ',
        aspect_ratio: 600/450
    },
    {
        key: 49,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_49.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_49.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_49.jpg`,
        name: 'Jacob',
        location: 'Granada Hills, CA',
        aspect_ratio: 600/598
    },
    {
        key: 50,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_50.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_50.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_50.jpg`,
        name: 'Reading',
        location: 'Rockefeller Island, NY',
        aspect_ratio: 600/450
    },
        {
        key: 51,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_51.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_51.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_51.jpg`,
        name: "O'Melveny",
        location: 'Granada Hills, CA',
        aspect_ratio: 600/450
    },
    {
        key: 52,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_52.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_52.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_52.jpg`,
        name: 'Mission Point',
        location: 'Granada Hills, CA',
        aspect_ratio: 600/450
    },
    {
        key: 53,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_53.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_53.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_53.jpg`,
        name: 'Hummingbird Trail',
        location: 'Simi Valley, CA',
        aspect_ratio: 600/450
    },
    {
        key: 54,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_54.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_54.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_54.jpg`,
        name: 'Floyd-Kleinberg Diphering',
        location: 'Chatsworth, CA',
        aspect_ratio: 600/442
    },
    {
        key: 55,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_55.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_55.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_55.jpg`,
        name: 'Top of Zelzah',
        location: 'Granada Hills, CA',
        aspect_ratio: 600/450
    },
    {
        key: 56,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_56.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_56.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_56.jpg`,
        name: "Bee Canyon",
        location: 'Granada Hills, CA',
        aspect_ratio: 600/450
    },
    {
        key: 57,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_57.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_57.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_57.jpg`,
        name: 'Post Championships',
        location: 'Alfred, NY',
        aspect_ratio: 600/800
    },
    {
        key: 58,
        thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_58.jpg`,
        highres_thumbnail: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_thumb_high_58.jpg`,
        full: `https://hayden-portfolio.s3.us-east-2.amazonaws.com/photo_58.jpg`,
        name: 'Me',
        location: 'Porter Ranch, CA',
        aspect_ratio: 600/450
    },
]

export {
    home,
    projects,
    about,
    photos
}