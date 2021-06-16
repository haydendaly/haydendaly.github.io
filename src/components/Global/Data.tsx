import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tippy";

import { StyleContext } from "../../functions/Style";

import "react-tippy/dist/tippy.css";

const projects = [
  {
    key: "Current",
    category: ["year"],
  },
  {
    key: "expo",
    name: "Expo",
    category: ["Web", "Backend", "Mobile"],
    text: "Interning at Expo \n",
    description: "Just started... nothing so far \n",
    stack: ["React"],
    aspect_ratio: 1280 / 720,
  },
  {
    key: "metrolabs",
    name: "Metro Labs",
    category: ["Web", "Design", "Management"],
    text: "Nonprofit for local environmental focused tech initiatives \n",
    description:
      "Started sustainability focused 501(c)(3) organization with support of local government to bring open-sourced, smart city technology to Hoboken. Forming a collaborative triangle between education, local industry, and municipalities to bring open-sourced solutions locally. Starting with pilot project of local garbage optimization full-stack application to be adopted by the Hoboken Sustainability Office.\n",
    stack: ["React Native", "React", "Node"],
  },
  {
    key: "2021",
    category: ["year"],
  },
  {
    key: "testbed",
    name: "NOS-T Simulation Infrastructure",
    category: ["Web", "Backend", "Management"],
    text: "Distributed simulation infrastructure for NASA ESTO \n",
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
    category: ["Mobile", "Design", "Management"],
    text: "Mental health smart-journaling app \n",
    description:
      "Led team of seven to develop journaling application focused on accessibility and mood tracking. The goal is to gameify the process of journaling by having a visual reward system with flowers growing. The app uses sentiment and semantic analysis to create a cohesive narrative of a user's mood over time. \n",
    stack: ["Node", "React (Native)", "Firebase"],
    link: "https://github.com/HODAS-Senior-Design/mobile",
    aspect_ratio: 1500 / 985,
  },
  {
    key: "babbio",
    name: "Babb.io",
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
    text: "Interned at The Walt Disney Company \n",
    description:
      "Developed full-stack to be used internally within the production of animated content. Restructured GitLab pipelines for automated testing of multiple environments. \n",
    stack: ["React", "Django", "Docker", "MySQL", "Nginx", "Ruby"],
    link: "",
    aspect_ratio: 1280 / 720,
  },
  {
    key: "securemeeting",
    name: "SecureMeeting",
    category: ["Web", "Backend", "Mobile"],
    text: "Developed features for WebRTC chat platform \n",
    description:
      "Worked with fullstack WebRTC platform to improve backend performance, develop frontend features, and start/lead development on a mobile application. \n",
    stack: ["React", "WebRTC", "React Native"],
    link: "https://securemeeting.org",
    aspect_ratio: 1500 / 937,
  },
  {
    key: "covidhealthhack",
    name: "COVID HealthHack",
    category: ["Management"],
    text: "Organized two global Hackathons focused on Coronavirus \n",
    description: (
      <p style={{ marginBottom: 0 }}>
        Hosted the 2020 COVID-19 Hackathon with 600+ global participants to
        address post-COVID life. Received media recognition from{" "}
        <a
          className="link"
          href="https://www.inc.com/a-university-hackathon-tackles-reopening-the-economy-after-covid.html"
          target="_blank"
        >
          Inc. Magazine
        </a>
        ,{" "}
        <a
          className="link"
          href="https://markets.businessinsider.com/news/stocks/infragistics-partners-with-stevens-venture-center-to-support-covid-healthhack-ii-1029182143#"
          target="_blank"
        >
          Business Insider
        </a>
        , and{" "}
        <a
          className="link"
          href="https://finance.yahoo.com/news/infragistics-partners-stevens-venture-center-130000325.html"
          target="_blank"
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
    text: "App to coordinate book clubs \n",
    description:
      "Created full-stack mobile app for iOS/Android that for people to orchestrate reading in groups available on TestFlight. Led 4 others through Node and React Native development teaching and guiding them to build the application. \n",
    stack: ["React Native", "Node", "MongoDB"],
    link: "https://github.com/haydendaly/bookClub",
    aspect_ratio: 1500 / 813,
  },
  {
    key: "2&20",
    name: "Two and Twenty LLP",
    category: ["Backend"],
    text: "Won high frequency trading competition \n",
    description: (
      <p style={{ marginBottom: 0 }}>
        Competed in a high frequency trading competition hosted by Capco and the
        financial engineering department of Stevens. Worked in a VM of a
        simulated trading environment and initially lost a good deal of money
        using traditional HFT algorithms like MACD. Noticed market making in the
        simulation wasn't effective and created a market maker in combination
        with{" "}
        <a
          target="_blank"
          className="link"
          href="https://www.sciencedirect.com/science/article/abs/pii/0304405X76900064"
        >
          Garman's inventory model
        </a>{" "}
        making over 20% profit in the final two days of competition and winning.
      </p>
    ),
    stack: ["Python", "Pandas"],
    link: "https://github.com/JamesLawrence30/TwoAndTwentyLLP",
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
      "React (Native)",
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
      "Worked on global team consiting of faculty/students from University of Cambridge, Carnegie Mellon, and more institutions to construct an open-source site to provide medical doctor-validated COVID-19 related information. Worked on frontend development and a backend notification/update system. Site was eventually taken down due to inability to keep up with constantly changing US policy and information. \n",
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
      title={
        "A mixture of computer science, product, and design under an information science/systems degree."
      }
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
        {`. I did my bachelors in software engineering at Stevens Institute of Tech.  I spend my free time running, reading, and mountain biking.  I competed cross country and track in my undergrad and now am training to run an ultra marathon.
            Some side projects I've done include:  `}
        <Link className="link" to={"/projects/exire"}>
          a startup focused on creating plans for groups
        </Link>
        {" and "}
        <Link className="link" to={"/projects/babbio"}>
          a group chat platform targetting university students.
        </Link>
        {`  I previously did research for the Collective-Design Lab where I developed `}
        <Link className="link" to={"/projects/testbed"}>
          an event-driven infrastructure
        </Link>
        {` for distributed space-system simulations.  I also was the director of Hackathons for the Stevens Venture Center where I hosted 5 competitions.`}
      </p>
    ),
  },
  {
    key: "Focuses",
    text: `Distributed Systems
Performance Engineering
Product Management
Cross-platform Development`,
  },
  {
    key: "Social",
    text: "",
    component: (
      <p className="section" style={{ whiteSpace: "pre-wrap" }}>
        GitHub:{"  "}
        <a
          target="_blank"
          className="link"
          href="https://github.com/haydendaly"
        >
          haydendaly
        </a>
        <br />
        LinkedIn:{"  "}
        <a
          target="_blank"
          className="link"
          href="https://www.linkedin.com/in/haydendaly/"
        >
          haydendaly
        </a>
        <br />
        Strava:{"  "}
        <a
          target="_blank"
          className="link"
          href="https://www.strava.com/athletes/54285809"
        >
          haydendaly
        </a>
        <br />
        Email:{"  "}
        <a target="_blank" className="link" href="mailto:hcd36@cornell.edu">
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
