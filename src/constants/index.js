import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Learning to Develope",
    icon: mobile,
  },
  {
    title: "Optimization of workflows",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "Sek E / A Graduation",
    company_name: "SA Auen",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2019 - July 2022",
    points: [
      "While my professional work experience may be limited, I am proud of my academic accomplishments. Last year, I graduated in the highest possible class (Sek E/A) in SA Auen Frauenfeld.",
      "Throughout my academic journey, I consistently maintained commendable grades and demonstrated a strong commitment to perfection.",
      "I also earned a first English diploma, which reflects my proficiency in the language.",
      "Though my work experience is just beginning, my dedication to academic excellence and language proficiency forms a solid foundation for my professional journey.",
    ],
  },
  {
    title: "Apprenticeship as Zeichner/efz Ingenieurbau",
    company_name: "NRPAG",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2022 - March 2023",
    points: [
      "In August 2023, I started with my first apprenticeship as a Zeichner EFZ Fachrichtung Ingenieurbau.",
      "I gained valuable experience working with programs like AUTOCAD, CIVIL, and other 3D CAD software.",
      "While the experience was enriching, I realized that this career path wasn't the perfect fit for me.",
      "After approximately 8 months of working in the NRPAG I made the decision to explore other opportunities that align more closely with my interests and passions.",
    ],
  },
  {
    title: "Web Development",
    company_name: "LT Media",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "After departing from NRPAG, I made the decision to return to school and enrolled in the 10th year of education.",
      "In my journey of exploration, I also ventured into the realm of e-commerce. While engaging with Shopify, I discovered an irresistible fascination with website building and Data Analysis.",
      "During this time,I began freelancing and utilizing my skills to create websites for various companies responsive design and Search engine optimization.",
      "The prospect of becoming a Entwickler became a driving force behind my pursuits, and I became dedicated to developing my expertise in this area.",
    ],z
  },
  {
    title: "Start in Swisscom",
    company_name: "Building mroe Skills",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "I started in August with my Apprenticeship as «Entwickler Digitales Business» in Swisscom, thats when the enlightened flame became a burning Blaze.",
      "In addition to web development, I discovered an interest in Analysis and Project Management. This new found section has driven me to explore and enhance my skills in this creative field.",
      "As part of my pursuit of the Entwickler apprenticeship, I took the initiative to code and design this website. It stands as a compelling representation of my proficiency in web development and video editing. This portfolio serves as a testament to my dedication and commitment to building a career in media and marketing. Implementing responsive design and ensuring cross-browser compatibility.",
      "With this portfolio in hand, I am currently on the lookout for the perfect Swisscom Project opportunity for the year 2025. I am excited to bring my versatile skill set and passion for web, Ai development and more to a dynamic team and contribute meaningfully to the ever-evolving world of media.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as this one, but Tiago proved me wrong.",
    name: "Joyce Carvalho",
    designation: "",
    company: "My Sister",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "He is really hard working, that i can confirm. He helped me out bunch of times when i had Problems with my Company.",
    name: "Tanja Pichler",
    designation: "CMO and Mother of a Friend",
    company: "Dermakos",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "It's my Work and I love it!",
    name: "Tiago Carvalho de Cevallos",
    designation: "Potential Entwickler Digitales Business",
    company: "Swisscom",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LT MEDIA",
    description:
      "Website for LT Media which is currently getting reworked on.",
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
    source_code_link: "https://lt-media.ch/",
  },
  {
    name: "SEO",
    description:
      "Currently helping with SEO for Dermakos.",
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
    source_code_link: "https://dermakos.ch/",
  },
  {
    name: "Fimga Apple Website UI/UX",
    description:
      "Using Figma to create a UI/UX similiar to the apple website for fun",
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
    source_code_link: "https://www.figma.com/community/file/1227655988294353116",
  },
];

export { services, technologies, experiences, testimonials, projects };
