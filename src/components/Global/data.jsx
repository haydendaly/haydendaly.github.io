import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    key: "Current",
    category: ["year"],
  },
  {
    key: "expo",
    name: "Expo",
    role: "Intern",
    dates: "May 2020 - Now",
    category: ["Web", "Backend", "Mobile"],
    text:
      "Interning at Expo \n",
    description:
      "Working on EAS infra \n",
    stack: ["React Native", "React", "Node", "Kubernetes", "Docker"],
  },
  {
    key: "metrolabs",
    name: "Metro Labs",
    role: "Co-founder",
    dates: "May 2020 - Now",
    category: ["Web", "Design"],
    text:
      "Nonprofit for local environmental focused tech initiatives \n",
    description:
      "Starting sustainability focused 501(c)(3) organization with support of local government to bring open-sourced, smart city technology to Hoboken. Forming a collaborative triangle between education, local industry, and municipalities to bring open-sourced solutions locally. Starting with pilot project of local garbage optimization full-stack application to be adopted by the Hoboken Sustainability Office.\n",
    stack: ["React Native", "React", "Node"],
  },
  {
    key: "2021",
    category: ["year"],
  },
  {
    key: "testbed",
    name: "NOS-T Simulation Infrastructure",
    dates: "April 2020 - May 2021",
    category: ["Web", "Backend"],
    text: "Distributed trade-space simulations for NASA ESTO \n",
    description:
      "Prototyped Docker simulation architectures to allow researchers to upload components of space systems and optimize models. Research awarded by the DoD/NASA for 3 year contract project to be implemented in the NASA Private Cloud to be used for distributed simulations. Developed orchestration with service mesh and gathered requirements from DOD, NASA, and USGS on both interfaces and developing communication protocols. \n",
    stack: [
      "React",
      "Docker",
      "Kubernetes",
      "Flask",
      "MQTT",
      "Python",
      "Nginx",
    ],
    link: "https://github.com/haydendaly/nos-t-infrastructure",
    aspect_ratio: 1500 / 819,
  },
  {
    key: "hodas",
    name: "HODAS",
    role: "Tech Lead",
    dates: "August 2020 - April 2021",
    category: ["Mobile", "Design"],
    text: "Mental health smart-journaling app \n",
    description:
      "Led team of seven to develop journaling application focused on accessibility and mood tracking. The goal is the gameify the process of journaling by having a visual reward system with flowers growing. The app uses sentiment and semantic analysis to create a cohesive narrative of a user's mood over time. \n",
    stack: ["Node", "React (Native)", "Firebase"],
    link: "https://github.com/HODAS-Senior-Design/mobile",
    aspect_ratio: 1500 / 985,
  },
  {
    key: "babbio",
    name: "Babb.io",
    dates: "May 2020 - February 2021",
    category: ["Mobile", "Design"],
    text: "Platform for university-oriented group chats \n",
    description:
      "Deployed platform for university-oriented group chats currently starting pilot at Stevens with support for over 2,200 courses. Published React Native mobile application to Apple/Google Play App Stores and pushing out updates in weekly sprints. \n",
    stack: ["React Native", "React", "Node", "Firebase"],
    link: "https://babb.io",
    aspect_ratio: 1500 / 825,
  },
  {
    key: "2020",
    category: ["year"],
  },
  {
    key: "dtva",
    name: "The Walt Disney Company",
    category: ["Web", "Backend"],
    role: "Software Developer Intern",
    dates: "June 2020 - August 2020",
    text: "Interned at The Walt Disney Company \n",
    description:
      "Developed full-stack to be used internally within the production of animated content. Restructured GitLab pipelines for automated testing of multiple environments. \n",
    stack: ["React", "Django", "Docker", "SQL", "Nginx", "Ruby"],
    link: "",
    aspect_ratio: 1280 / 720,
  },
  {
    key: "exire",
    name: "Exire.ai",
    role: "Co-Founder",
    dates: "June 2019 - August 2020",
    category: ["Mobile", "Backend", "Design"],
    text: "Itinerary creation app startup \n",
    description:
      "Building mobile app for iOS/Android that helps groups make plans with conversational AI. Rised out of irritation in making plans. Used chatbot micro-service for group communication to help users build plans. \n",
    stack: ["Node", "React (Native)", "Swift", "MongoDB", "TensorFlow"],
    link: "https://exire.ai",
    aspect_ratio: 1500 / 771,
  },
  {
    key: "atticus",
    name: "Atticus",
    category: ["Mobile", "Backend", "Design"],
    dates: "February 2020 - June 2020",
    text: "Mobile book club app \n",
    description:
      "Created full-stack mobile app for iOS/Android that for people to orchestrate reading in groups available on TestFlight. Lead 4 others through Node and React Native development teaching and guiding them to build the application. \n",
    stack: ["React Native", "Node", "MongoDB"],
    link: "https://github.com/haydendaly/bookClub",
    aspect_ratio: 1500 / 813,
  },
  {
    key: "stopthespread",
    name: "stopthespread.info",
    category: ["Web", "Design"],
    text: "COVID-19 info site \n",
    description:
      "Worked with a global team consiting of faculty/students from University of Cambridge, Carnegie Mellon, nad more institutions to construct an open-source site to provide medical doctor-validated COVID-19 related information. Worked on frontend development and a backend notification/update system. Site was eventually taken down due to inability to keep up with constantly changing US policy and information. \n",
    stack: ["Gatsby", "Node", "GraphQL"],
    link: "https://stopthespread.info",
    aspect_ratio: 1500 / 829,
  },
  {
    key: "2019",
    category: ["year"],
  },
  {
    key: "tatckb",
    name: "Tradespace Analysis Tool for Constellations Knowledge Base",
    category: ["Backend", "DevOps"],
    text: "Model-based satellite information system \n",
    description:
      "Developed backend for model-based satellite information system. Worked with other research labs from institutions such as NASA Goddard, Texas A&M, and MIT to build component for larger architecture of the tradespace analysis tool for constellations. \n",
    stack: ["Node", "JavaScript", "Docker", "MongoDB"],
    link: "https://tatckb.org/",
    aspect_ratio: 1500 / 809,
  },
  {
    key: "2018",
    category: ["year"],
  },
  {
    key: "3x3x9",
    name: "3x3x9 Rubik's Cube CAD Model",
    category: ["Design"],
    text: `3x3x9 Rubik's cube \n`,
    description: `Designed a 3x3x9 Rubik's cube using SolidWorks and won CAD competition. Made cube function/move, 3d printed, and treated a few of the prototype pieces using ABS plastic.\n`,
    stack: ["SolidWorks"],
    aspect_ratio: 1000 / 657,
  },
];

const about = [
  {
    key: "Info",
    component: (
      <p className="section" style={{ whiteSpace: "pre-wrap" }}>
        {`I'm a currently a full-time Connective Media masters student at Cornell Tech in NYC. Before this, I did a bachelors in Software Engineering at Stevens Institute in Hoboken, NJ. Most of my free time I spend either running, reading, cooking, or coding. I compete on the varsity cross country and track teams at my university and plan to pursue ultra running after graduation.
            I'm also involved in side projects—some are:  `}
        <Link className="link" to={"/projects/exire"}>
          a startup focused on creating plans for groups
        </Link>
        {", "}
        <Link className="link" to={"/projects/babbio"}>
          a group chat platform targetting university students
        </Link>
        {", "}
        <Link className="link" to={"/projects/hodas"}>
          and a smart-journaling app focused on mental health
        </Link>
        {`. After competiting in 4 hackathons, I became a director of Hackathons for the Stevens Venture Center where I hosted 5 different Hackathons. I was previously engaged in systems engineering research for the Collective-Design Lab where I developed `}
        <Link className="link" to={"/projects/testbed"}>
          an infrastructure, protocol, and operator system
        </Link>
        {` for distributed space-system simulations.`}
      </p>
    ),
  },
  {
    key: "Primary Interests",
    text: `Distributed Systems
Software Architecture
Product Management
Frontend Development
Mobile Development`,
  },
  {
    key: "Social",
    text: "",
    component: (
      <p className="section" style={{ whiteSpace: "pre-wrap" }}>
        GitHub:{" "}
        <a
          target="_blank"
          className="link"
          href="https://github.com/haydendaly"
        >
          haydendaly
        </a>
        <br />
        LinkedIn:{" "}
        <a
          target="_blank"
          className="link"
          href="https://www.linkedin.com/in/haydendaly/"
        >
          haydendaly
        </a>
        <br />
        Strava:{" "}
        <a
          target="_blank"
          className="link"
          href="https://www.strava.com/athletes/54285809"
        >
          Hayden Daly
        </a>
        <br />
        Email:{" "}
        <a target="_blank" className="link" href="mailto:hdaly1@stevens.edu">
          hdaly1@stevens.edu
        </a>
      </p>
    ),
  },
  {
    key: "Favorite Books",
    text: "",
    component: (
      <p>
        <a
          className="link"
          target="_blank"
          href="https://www.goodreads.com/book/show/6751.Consider_the_Lobster_and_Other_Essays"
        >
          <i>Consider the Lobster by David Foster Wallace</i>
        </a>
        <br />
        <a
          className="link"
          target="_blank"
          href="https://www.goodreads.com/book/show/22822858-a-little-life"
        >
          <i>A Little Life by Hanya Yanagihara</i>
        </a>
        <br />
        <a
          className="link"
          target="_blank"
          href="https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore"
        >
          <i>Kafka on the Shore by Haruki Murikami</i>
        </a>
        <br />
        <a
          className="link"
          target="_blank"
          href="https://www.goodreads.com/book/show/166997.Stoner"
        >
          <i>Stoner by John Williams</i>
        </a>
        <br />
        <a
          className="link"
          target="_blank"
          href="https://www.goodreads.com/book/show/9915.Less_Than_Zero"
        >
          <i>Less Than Zero by Bret Easton Ellis</i>
        </a>
        <br />
      </p>
    ),
  },
];

export { projects, about };
