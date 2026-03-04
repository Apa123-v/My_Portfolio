import {
  mobile,
  backend,
  embedded,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  python,
  sql,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  favicon,
  arduino,
  fire,
  netflix,
  spotify,
  task,
} from "../assets/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Embeddded Systems ",
    icon: embedded,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
   {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "PASSMAN– Full Stack Password Manager",
    
    icon: favicon,
    iconBg: "#ffffff",
    
    points: [
      "• Developed a MERN-based password manager with full CRUD functionality to add, edit, and delete passwords using MongoDB, Express.js, React.js, Node.js, and EJS",
      "• Implemented password encryption and copy-to clipboard functionality to enhance security and usability.",
      "• Improved task efficiency by 40% optimized UI flows.",
      
    ],
  },
  {
    title: "Task Tracker Application",
    
    icon: task,
    iconBg: "#E6DEDD",
    
    points: [
      "• Developed a task tracking system handling 50+ concurrent task records with persistent database storage",
      "• Reduced data inconsistency by 30% through structured relational schemas and JDBC integration.",
      "• Improved code maintainability by applying SOLID and OOP design patterns.",
      "• Implemented CRUD operations, user-friendly interface, and efficient data handling for productivity tracking.",
    ],
  },
  {
    title: "Spotify Frontend Clone",
    icon: spotify,
    iconBg: "#383E56",
   
    points: [
      "• Developed a fully responsive Spotify-inspired web media player using HTML, CSS, and JavaScript, implementing core playback controls and an intuitive, user-friendly interface.",
      "• Built a responsive UI system supporting mobile, tablet, and desktop breakpoints (480px–1200px), ensuring seamless cross-device performance and accessibility.",
      "• Improved page interaction responsiveness by 35% through optimized DOM manipulation and efficient rendering strategies.",
      "• Achieved pixel-perfect, consistent layouts using reusable components and modular CSS architecture for scalable front-end development.",
    ],
  },
  {
    title: "Netflix Clone",
    icon: netflix,
    iconBg: "#E6DEDD",

    points: [
      "• Designed and developed a Netflix-inspired landing page using HTML5 and CSS3, replicating modern UI layouts with pixel-perfect styling and responsive design.",
      "• Implemented reusable CSS components and flexbox/grid layouts to achieve a visually consistent, cross-device user experience.",
      
    ],
  },
   {
    title: "Automatic Extinguisher System ",
    icon: fire,
    iconBg: "#E6DEDD",
    points: [
      "• Developed a PCB-based residential safety system using ATmega328P crocontroller, Infrared Thermal Sensors.  CO₂ and H₂S analog gas sensors to detect early fire hazards and automatically trigger an extinguishing unit, minimizing risk and damage. ",
      
    ],
  },{
   title: "Automatic Irrigation System",
    icon: arduino,
    iconBg: "#E6DEDD",
    points: [
      "• Developed an IoT-based irrigation system using ESP32, soil-moisture sensor, AHT25 temperature & humidity sensor, and relay modules to monitor soil conditions and automatically control water supply, optimizing resource use and reducing manual effort. ",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Undertook intensive Java Full-Stack training, gaining hands-on experience in backend development, database integration, and real-world project building, complemented by soft skills development and industry-oriented interview preparation.",
    name: "JAVA Training",
    
  },
  {
    testimonial:
      "Participated in both software and hardware hackathons, collaborating in team environments to build innovative solutions and strengthen problem-solving skills.",
    name: "Hackathons ",
   
  },
  {
    testimonial:
      "A passionate reader exploring diverse genres and applying practical insights to real life. Motto: “When in doubt, read a book.” Inspired by Steve Jobs’ philosophy: “Think Different.”",
    name: "Avid Reader",
    
  },
   {
    testimonial:
      "Coder by passion, athlete by mindset — badminton for discipline, chess for strategy, and less screen time for a clearer mind.",
    name: "Sports & Mind Training",
    
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };