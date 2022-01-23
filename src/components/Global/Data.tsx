import React, { useContext } from "react";
import { Tooltip } from "react-tippy";

import { StyleContext } from "~/functions/Style";

import "react-tippy/dist/tippy.css";

const projects = [
  // {
  //   key: "Current",
  //   category: ["year"]
  // },
  {
    key: "2021",
    category: ["year"],
  },
  {
    key: "testbed",
    name: "NOS-T Simulation Infrastructure",
    category: ["Web", "Systems", "Management"],
    text: "NOS-T:  Distributed space-mission simulation infrastructure \n",
    description:
      "Built implementation-agnostic, event-driven architecture for executing space mission simulations. Managed a team of 4 engineers to support 7 teams from NASA, MIT, UIUC, and USC. \n",
    stack: ["React", "Docker", "Flask", "MQTT", "Python", "Nginx"],
    link: "https://esto.nasa.gov/forums/estf2021/Presentations/June10/Grogan_NOST_ESTF2021.pdf",
    aspect_ratio: 1500 / 819,
  },
  {
    key: "minitorch",
    name: "Minitorch",
    category: ["Systems"],
    text: "Minitorch:  Implementation of the Torch API \n",
    description:
      "Built Python tensor library including CUDA optimized tensor operations. Was course project for CS 5781: Machine Learning Engineering at Cornell Tech. \n",
    stack: ["Python", "CUDA"],
    link: "https://github.com/haydendaly/experiments/tree/761a86f6f50907eefed56a5e1b4242e8fe883ed9/minitorch",
    aspect_ratio: 1500 / 819,
  },
  {
    key: "babbio",
    name: "babb.io",
    category: ["Mobile", "Design"],
    text: "babb.io:  University-oriented group chats \n",
    description:
      "Deployed platform for university-oriented group chats currently starting pilot at Stevens with support for over 2,200 courses. Published React Native mobile application to Apple/Google Play App Stores and pushing out updates in weekly sprints. \n",
    stack: ["React Native", "React", "Node", "Firebase"],
    link: "https://babb.io",
    aspect_ratio: 1500 / 825,
  },
  {
    key: "lilypad",
    name: "LilyPad",
    category: ["Mobile", "Design", "Management"],
    text: "LilyPad:  Mental health smart-journaling \n",
    description:
      "Led team of seven to develop journaling application focused on accessibility and mood tracking. The goal is to gameify the process of journaling by having a visual reward system with flowers growing. The app uses sentiment and semantic analysis to create a cohesive narrative of a user's mood over time. \n",
    stack: ["Node", "React", "React Native", "Firebase"],
    link: "https://github.com/LilyPad-Journaling/mobile",
    aspect_ratio: 1500 / 985,
  },
  {
    key: "2020",
    category: ["year"],
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
    category: ["Mobile", "Systems", "Design", "Management"],
    text: "Atticus:  Book clubs \n",
    description:
      "Created full-stack mobile app for iOS/Android that for people to orchestrate reading in groups and deployed on Testflight. Led 4 others through Node and React Native development guiding them to build the application. \n",
    stack: ["React Native", "Node", "MongoDB"],
    link: "https://github.com/haydendaly/atticus",
    aspect_ratio: 1500 / 813,
  },
  {
    key: "2&20",
    name: "Two and Twenty LLP",
    category: ["Systems"],
    text: "High frequency trading competition \n",
    description: (
      <p style={{ marginBottom: 0 }}>
        Competed in a high frequency trading competition hosted by Capco and the
        financial engineering department of Stevens. Worked in a VM of a
        simulated trading environment and initially lost a good deal of money
        using traditional HFT algorithms like MACD. Noticed market making in the
        simulation wasn't effective and created a market maker in combination
        with Garman's inventory model making over 130% profit in the final two
        days of competition and winning.
      </p>
    ),
    stack: ["Python", "Pandas"],
    link: "https://github.com/haydendaly/experiments/tree/main/algo-trading-contest",
    aspect_ratio: 964 / 629,
  },
  {
    key: "exire",
    name: "Exire.ai",
    category: ["Mobile", "Systems", "Design", "Management"],
    text: "Exire.ai:  Itinerary creation for groups \n",
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
    text: "stopthespread.info:  COVID-19 information site \n",
    description:
      "Worked on global team consiting of faculty/students from University of Cambridge and Carnegie Mellon to construct an open-source site to provide medical doctor-validated COVID-19 related information. Worked on frontend development and a backend notification/update system. Site was eventually taken down due to inability to keep up with constantly changing US policy and information. \n",
    stack: ["Gatsby", "Node", "GraphQL"],
    link: "https://stopthespread.info",
    aspect_ratio: 1500 / 829,
  },
  // {
  //   key: "songshare",
  //   name: "Songshare",
  //   category: ["Web", "Design"],
  //   text: " \n",
  //   description:
  //     "Worked with Spotify API to create fullstack Twitter clone for users to share music. \n",
  //   stack: ["React", "Node", "MongoDB", "Docker", "Redis"],
  //   link: "https://github.com/haydendaly/cs554-music-platform",
  //   aspect_ratio: 1500 / 829,
  // },
  {
    key: "2019",
    category: ["year"],
  },
  {
    key: "healthtech",
    name: "2019 HealthTech Hackathon",
    category: ["Management", "Design"],
    text: "Organized Hackathon focused on Melanoma survivors \n",
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
    text: "Won IBM BlueHack Hackathon \n",
    description:
      "Competed in a Hackathon to develop solutions to problems surrounding human trafficking. Interviewed stakeholders from the Manhattan DA Office to learn about how they solve cases and put together a tool to parse social media data for insights regarding human trafficking victims. Ended up winning first and attending the IBM AI New Horizons Conference at their research center in Yorktown Heights, NY. \n",
    stack: ["Python", "HTML/CSS"],
    link: "https://www.stevens.edu/news/stevens-students-develop-technologies-fight-human-trafficking",
    aspect_ratio: 852 / 480,
  },
  {
    key: "tatckb",
    name: "Tradespace Analysis Tool for Constellations Knowledge Base",
    category: ["Systems", "Web"],
    text: "tatckb.org:  Model-based satellite information system \n",
    description:
      "Developed backend for model-based satellite information system. Worked with other research labs from institutions such as NASA Goddard, Texas A&M, and MIT to build component for larger architecture of the tradespace analysis tool for constellations. \n",
    stack: ["Node", "JavaScript", "Docker", "MongoDB"],
    link: "https://tatckb.org/",
    aspect_ratio: 1500 / 809,
  },
  {
    key: "securemeeting",
    name: "SecureMeeting",
    category: ["Web", "Systems", "Mobile"],
    text: "securemeeting.org: WebRTC chat platform \n",
    description:
      "Worked with fullstack WebRTC platform to improve backend performance, develop frontend features, and start/lead development on a mobile application. \n",
    stack: ["React", "React Native", "WebRTC"],
    link: "https://securemeeting.org",
    aspect_ratio: 1500 / 937,
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
  const { theme } = useContext(StyleContext);
  return (
    <Tooltip
      title="A mixture of computer science, product, and design under an
          information science/systems degree."
      position="bottom"
      size="small"
      animation="fade"
      distance={4}
      theme={theme === "dark" ? "dark" : "light"}
    >
      <a className="italic">Connective Media</a>
    </Tooltip>
  );
}

const Experience = ({ name, dates, role, link }) => {
  return (
    <div className="experience">
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="link experience-title"
      >
        {name}
      </a>
      <p className="experience-role">{role}</p>
      <p className="experience-dates">{dates}</p>
    </div>
  );
};

const about = [
  {
    key: "Info",
    component: (
      <p className="section" style={{ whiteSpace: "pre-wrap" }}>
        {`I am an NYC-based developer pursuing a masters at Cornell Tech in `}
        <CMTooltip />
        {`.  I did my bachelors in software engineering at Stevens Institue of Tech.  In my free time, I am an avid runner, reader, and mountain biker.`}
      </p>
    ),
  },
  {
    key: "Experience",
    component: (
      <div className="section" style={{ whiteSpace: "pre-wrap" }}>
        {/* <Experience role='Software Engineer Intern' name='Stripe' dates='May - Aug 2022' link='https://stripe.com/' /> */}
        <Experience
          role="Freelance Software Developer"
          name="Kanopy Labs"
          dates="2021 - Present"
          link="mailto:hayden@kanopylabs.com"
        />
        <Experience
          role="Software Engineer Intern"
          name="Expo"
          dates="May - Aug 2021"
          link="https://expo.dev/"
        />
        {/* <Experience role='Contract Software Engineer' name='NASA' dates='2020 - 2021' link='https://esto.nasa.gov/' /> */}
        <Experience
          role="Research Assistant"
          name="Collective-Design Lab"
          dates="2019 - 2021"
          link="https://code-lab.org/"
        />
        <Experience
          role="Software Developer Intern"
          name="Disney"
          dates="May - Aug 2020"
          link="https://disney.com/"
        />
      </div>
    ),
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
];

export { projects, about };
