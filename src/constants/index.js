import {
  breezetime,
  electro,
  gymapp,
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
  dsl,
  repliq,
  dp,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "WordPress Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Software Developer",
    company_name: "Repliq Limited.",
    icon: repliq,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Drive the implementation of dynamic, responsive user interfaces using JavaScript, React, Next.js.",
      "Collaborate with clients to understand project requirements and translate them into efficient frontend solutions.",
      "Utilize strong problem-solving skills to enhance UI/UX design and overall user satisfaction.",
      "Stay updated on industry trends and integrate new technologies to optimize frontend development processes.",
    ],
  },
  {
    title: "Junior MERN Developer",
    company_name: "DS Legends Pte. Ltd.",
    icon: dsl,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2023",
    points: [
      "Lead the development of dynamic web applications using MongoDB, Express.js, React, and Node.js.",
      "Collaborate with cross-functional teams to gather and implement project requirements efficiently.",
      "Apply problem-solving skills to enhance application functionality and user experience.",
      "Stay current with industry trends, integrating new technologies to optimize the MERN stack development process.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "Digital Planet",
    icon: dp,
    iconBg: "#383E56",
    date: "Nov 2020 - Dec 2021",
    points: [
      "Spearhead the creation and customization of WordPress themes and plugins to deliver dynamic and visually appealing websites.",
      "Collaborate closely with clients to understand their unique requirements and implement tailored solutions.",
      "Apply problem-solving skills to troubleshoot and optimize WordPress sites for enhanced performance.",
      "Stay informed about the latest trends and best practices in WordPress development to ensure the continuous improvement of projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " Absolutely fantastic delivery, both time and deliverable. Have used more than once now and will always continue to only return to Muhbub. Highly recommended !!!!",
    name: "Evan Luis",
    designation: "CEO",
    company: "Investa Garden",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Mahbub is very profressional. I had a pretty complicated task I had to accomplish with a short period of time. Anas quick jumped on board and supported me get the task done to satisfactory standard",
    name: "Chris Brown",
    designation: "COF",
    company: "Ipdental",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Impressive communication and problem-solving skills. The developer kept us informed throughout the project, making sure we were on the same page at all times. They quickly addressed any issues that arose, ensuring a smooth and successful development process.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Marvelstack",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    uid: 1,
    name: "Electro E-Commerce",
    description:
      "Our advanced e-commerce site features a secure authentication system, wishlist functionality, and efficient cart management. The user-friendly dashboard provides concise overviews of products, orders, and customers. With seamless checkout, customers can easily navigate and make secure transactions, ensuring a streamlined shopping experience for all.",
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
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "react-hook-form",
        color: "pink-text-gradient",
      },
      {
        name: "swiper",
        color: "blue-text-gradient",
      },
      // {
      //   name: "axios",
      //   color: "green-text-gradient",
      // },
    ],
    image: electro,
    source_code_link: "https://github.com/mahbubnoyon506/electro",
    live_site: "https://assesment-os.vercel.app/",
  },
  {
    uid: 2,
    name: "Schedule Management",
    description:
      "This project serves as a sophisticated schedule management tool, allowing users to create accounts, select plans, and facilitate payments. Notable features include a robust authentication system, an intuitive dashboard, secure payment processing, JWT-based verification, private routes, email notifications, video chat functionality, user reviews, and a responsive chatbot. The incorporation of time-zone management enhances scheduling precision, providing users with a comprehensive and efficient platform for their planning needs.",
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
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "react-hook-form",
        color: "pink-text-gradient",
      },
      {
        name: "swiper",
        color: "blue-text-gradient",
      },
    ],
    image: breezetime,
    source_code_link: "https://github.com/mahbubnoyon506/breeze-time",
    live_site: "https://breeze-time.vercel.app/",
  },
  {
    uid: 3,
    name: "Gym App",
    description:
      "Welcome to our Gymnastics Center, where users can seamlessly create accounts and purchase packages tailored to their fitness goals. The platform incorporates a robust authentication system to ensure secure access. Additionally, users can leverage the mailing system to conveniently communicate and inquire about any aspects of their gymnastics experience. The inclusion of a verification process further enhances security and trust within the user interface, providing a comprehensive solution for fitness enthusiasts.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "meterial-ui",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "react-hook-form",
        color: "pink-text-gradient",
      },
      {
        name: "swiper",
        color: "blue-text-gradient",
      },
    ],
    image: gymapp,
    source_code_link: "https://github.com/mahbubnoyon506/gym-app-typescript",
    live_site: "https://gym-app-typescript.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
