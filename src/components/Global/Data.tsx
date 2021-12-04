import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";

import { StyleContext } from "~/functions/Style";

import "react-tippy/dist/tippy.css";

const projects = [
  {
    key: "2021",
    category: ["year"],
  },
  {
    key: "expo",
    name: "Expo",
    category: ["Web", "Backend", "Mobile"],
    text: "Interned at Expo \n",
    description:
      "Spearheaded development of internal tools platform. Contributed code to production frontend/backend and created GraphQL type, query, resolver code generation tool.\n",
    stack: [
      "React",
      "React Native",
      "Node",
      "TypeScript",
      "GraphQL",
      "Postgres",
    ],
    link: "https://expo.dev",
    aspect_ratio: 1500 / 748,
  },
  {
    key: "testbed",
    name: "NOS-T Simulation Infrastructure",
    category: ["Web", "Backend", "Management"],
    text: "Distributed simulation infra for NASA ESTO \n",
    description:
      "Led development of simulation infrastructure under contract to support 7 teams from MIT, UIUC, and USC. Got the opportunity to work on cross-disciplinary projects. \n",
    stack: [
      "React",
      "Docker",
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
    category: ["Mobile", "Design", "Management"],
    text: "Mental health smart-journaling app \n",
    description:
      "Led team of seven to develop journaling application focused on accessibility and mood tracking. The goal is to gameify the process of journaling by having a visual reward system with flowers growing. The app uses sentiment and semantic analysis to create a cohesive narrative of a user's mood over time. \n",
    stack: ["Node", "React", "React Native", "Firebase"],
    link: "https://github.com/HODAS-Senior-Design/mobile",
    aspect_ratio: 1500 / 985,
  },
  {
    key: "babbio",
    name: "Babb.io",
    category: ["Mobile", "Design"],
    text: "University-oriented group chat platform \n",
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
    text: "Disney Internship \n",
    description:
      "Developed full-stack tools to be used internally within the production of animated content. Restructured GitLab pipelines for automated testing of multiple environments. \n",
    stack: ["React", "Django", "Docker", "MySQL", "Nginx", "Ruby"],
    aspect_ratio: 1280 / 720,
  },
  {
    key: "securemeeting",
    name: "SecureMeeting",
    category: ["Web", "Backend", "Mobile"],
    text: "WebRTC chat platform features \n",
    description:
      "Worked with fullstack WebRTC platform to improve backend performance, develop frontend features, and start/lead development on a mobile application. \n",
    stack: ["React", "React Native", "WebRTC"],
    link: "https://securemeeting.org",
    aspect_ratio: 1500 / 937,
  },
  {
    key: "covidhealthhack",
    name: "COVID HealthHack",
    category: ["Management"],
    text: "COVID-focused Hackathon series \n",
    description: (
      <p style={{ marginBottom: 0 }}>
        Hosted 2020 COVID-19 Hackathon I and II with 600+ global participants to
        address post-COVID life. Received media recognition from{" "}
        <a
          className="link"
          href="https://www.inc.com/a-university-hackathon-tackles-reopening-the-economy-after-covid.html"
          target="_blank"
          rel="noreferrer"
        >
          Inc. Magazine
        </a>
        ,{" "}
        <a
          className="link"
          href="https://markets.businessinsider.com/news/stocks/infragistics-partners-with-stevens-venture-center-to-support-covid-healthhack-ii-1029182143#"
          target="_blank"
          rel="noreferrer"
        >
          Business Insider
        </a>
        , and{" "}
        <a
          className="link"
          href="https://finance.yahoo.com/news/infragistics-partners-stevens-venture-center-130000325.html"
          target="_blank"
          rel="noreferrer"
        >
          Yahoo Finance.
        </a>
      </p>
    ),
    stack: [],
    link: "https://covidhealthhack.com",
    aspect_ratio: 1500 / 1086,
  },
  {
    key: "atticus",
    name: "Atticus",
    category: ["Mobile", "Backend", "Design", "Management"],
    text: "Book club coordination app \n",
    description:
      "Created full-stack mobile app for iOS/Android that for people to orchestrate reading in groups and deployed on Testflight. Led 4 others through Node and React Native development guiding them to build the application. \n",
    stack: ["React Native", "Node", "MongoDB"],
    link: "https://github.com/haydendaly/atticus",
    aspect_ratio: 1500 / 813,
  },
  {
    key: "2&20",
    name: "Two and Twenty LLP",
    category: ["Backend"],
    text: "High frequency trading competition \n",
    description: (
      <p style={{ marginBottom: 0 }}>
        Competed in a high frequency trading competition hosted by Capco and the
        financial engineering department of Stevens. Worked in a VM of a
        simulated trading environment and initially lost a good deal of money
        using traditional HFT algorithms like MACD. Noticed market making in the
        simulation wasn't effective and created a market maker in combination
        with Garman's inventory model making over 130% profit in the final two days of competition and winning.
      </p>
    ),
    stack: ["Python", "Pandas"],
    link: "https://github.com/haydendaly/experiments/tree/main/algo-trading-contest",
    aspect_ratio: 964 / 629,
  },
  {
    key: "exire",
    name: "Exire.ai",
    category: ["Mobile", "Backend", "Design", "Management"],
    text: "Itinerary creation startup \n",
    description:
      "Built mobile app for iOS/Android that helps groups make plans with conversational AI. Used chatbot micro-service for group communication to help users build plans. \n",
    stack: [
      "Node",
      "React",
      "React Native",
      "Swift",
      "MongoDB",
      "TensorFlow",
      "Redis",
    ],
    link: "https://exire.ai",
    aspect_ratio: 1500 / 771,
  },
  {
    key: "stopthespread",
    name: "stopthespread.info",
    category: ["Web", "Design"],
    text: "COVID-19 information site \n",
    description:
      "Worked on global team consiting of faculty/students from University of Cambridge and Carnegie Mellon to construct an open-source site to provide medical doctor-validated COVID-19 related information. Worked on frontend development and a backend notification/update system. Site was eventually taken down due to inability to keep up with constantly changing US policy and information. \n",
    stack: ["Gatsby", "Node", "GraphQL"],
    link: "https://stopthespread.info",
    aspect_ratio: 1500 / 829,
  },
  {
    key: "2019",
    category: ["year"],
  },
  {
    key: "healthtech",
    name: "2019 HealthTech Hackathon",
    category: ["Management", "Design"],
    text: "Hosted a Hackathon focused on Melanoma survivors and living with RA \n",
    description:
      "Hosted a Hackathon focused on Melanoma survivors and millenials managing Rheumatoid Arthiritus. Fundraised over $45k in sponsorship from Bristol-Meyers Squibb, Quest Diagnostics, Greenberg Traurig, Johnson & Johnson, and many more organizations. Event was successful as many projects were continued after the event and some students receieved internship and full time offers with the sponsoring companies.\n",
    stack: [],
    link: "https://www.stevens.edu/news/stevens-annual-healthtech-hackathon-inspires-student-innovators",
    aspect_ratio: 1500 / 1000,
  },
  {
    key: "bluehack",
    name: "Argo, IBM/United Nations Blue Hack Against Human Trafficking",
    category: ["Management", "Web", "Design"],
    text: "Won a human-trafficking Hackathon and attended an IBM Conference \n",
    description:
      "Competed in a Hackathon to develop solutions to problems surrounding human trafficking. Interviewed stakeholders from the Manhattan DA Office to learn about how they solve cases and put together a tool to parse social media data for insights regarding human trafficking victims. Ended up winning first and attending the IBM AI New Horizons Conference at their research center in Yorktown Heights, NY. \n",
    stack: ["Python", "HTML/CSS"],
    link: "https://www.stevens.edu/news/stevens-students-develop-technologies-fight-human-trafficking",
    aspect_ratio: 852 / 480,
  },
  {
    key: "tatckb",
    name: "Tradespace Analysis Tool for Constellations Knowledge Base",
    category: ["Backend", "Web"],
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
    text: `Designed 3x3x9 Rubik's Cube \n`,
    description: `Designed a 3x3x9 Rubik's cube using SolidWorks and won CAD competition. Made cube function/move, 3d printed, and treated a few of the prototype pieces using ABS plastic.\n`,
    stack: ["SolidWorks"],
    aspect_ratio: 1000 / 657,
  },
];

function CMTooltip() {
  const { isDark } = useContext(StyleContext);
  return (
    <Tooltip
      title="A mixture of computer science, product, and design under an
          information science/systems degree."
      position="bottom"
      size="small"
      animation="fade"
      distance={4}
      theme={isDark ? "dark" : "light"}
    >
      <a className="italic">Connective Media</a>
    </Tooltip>
  );
}

const about = [
  {
    key: "Info",
    component: (
      <p className="section" style={{ whiteSpace: "pre-wrap" }}>
        {`I'm a masters student at Cornell Tech studying `}
        <CMTooltip />
        {`. I did my bachelors in software engineering at Stevens Institute of Tech.  I spend my free time running, reading, and mountain biking.
            Some side projects I've done include:  `}
        <Link className="link" to={"/projects/exire"}>
          an itinerary creation app
        </Link>
        {" for groups and "}
        <Link className="link" to={"/projects/babbio"}>
          a group chat platform
        </Link>
        {` targetting university students.  I previously did research for the Collective-Design Lab where I developed `}
        <Link className="link" to={"/projects/testbed"}>
          an event-driven infrastructure
        </Link>
        {` for distributed space-system simulations.  I also enjoy organizing Hackathons for the Stevens Venture Center where I hosted a handful of interdisciplinary events.`}
      </p>
    ),
  },
  {
    key: "Interests",
    text: `Distributed Systems
Web Performance
Cross-platform Development
Metaprogramming`,
  },
  {
    key: "Social",
    text: "",
    component: (
      <p className="section" style={{ whiteSpace: "pre-wrap" }}>
        GitHub:{"  "}
        <a
          target="_blank"
          rel="noreferrer"
          className="link"
          href="https://github.com/haydendaly"
        >
          haydendaly
        </a>
        <br />
        LinkedIn:{"  "}
        <a
          target="_blank"
          rel="noreferrer"
          className="link"
          href="https://www.linkedin.com/in/haydendaly/"
        >
          haydendaly
        </a>
        <br />
        Strava:{"  "}
        <a
          target="_blank"
          rel="noreferrer"
          className="link"
          href="https://www.strava.com/athletes/54285809"
        >
          haydendaly
        </a>
        <br />
        Email:{"  "}
        <a
          target="_blank"
          rel="noreferrer"
          className="link"
          href="mailto:hcd36@cornell.edu"
        >
          hcd36@cornell.edu
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
          rel="noreferrer"
          href="https://www.goodreads.com/book/show/6751.Consider_the_Lobster_and_Other_Essays"
        >
          <i>Consider the Lobster</i>
        </a>
        <i> by David Foster Wallace</i>
        <br />
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://www.goodreads.com/book/show/22822858-a-little-life"
        >
          <i>A Little Life</i>
        </a>
        <i> by Hanya Yanagihara</i>
        <br />
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore"
        >
          <i>Kafka on the Shore</i>
        </a>
        <i> by Haruki Murikami</i>
        <br />
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://www.goodreads.com/book/show/9915.Less_Than_Zero"
        >
          <i>Less Than Zero</i>
        </a>
        <i> by Bret Easton Ellis</i>
        <br />
      </p>
    ),
  },
];

export { projects, about };
