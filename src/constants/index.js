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
  airbnbclone,
  movieapp,
  coffeestore
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Reactjs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Quick Learner",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  }
];

const experiences = [
  {
    title: "No Experience Yet", 
    iconBg: "#383E56",
    icon: reactjs,
    points: [],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // }
];

const projects = [
  {
    name: "Airbnb Clone",
    description:
      "A comprehensive fully responsive platform that allows users to Book, Favorite, Manage, Search and Filter Properties from around the globe by Category, Location and Number of Guests/Rooms. Users can also Log their own properties into the Database.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      }
    ],
    image: airbnbclone,
    source_code_link: "https://github.com/fadini1/bonfire-travel",
  },
  {
    name: "Movie App",
    description:
      "A minimalistic Web Application that allows users to browse through the Top Films of the moment by Trending, Top-Rated and Genre. Users can also access the general details of each individual Film, such as Trailer, Summary, Year of Release and Rating.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://github.com/fadini1/bonfire-movie-app",
  },

  // {
  //   name: "E-Commerce Store",
  //   description:
  //     "A fully functional E-Commerce for a Coffee Shop. It includes sections such as Featured Products, About Us, Testimonials and Contact, as well as a Dark Mode feature. With an integrated Stripe Checkout, customers can add any number of Products to the Cart and buy them right away!",
  //   tags: [
  //     {
  //       name: "typescript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "stripe",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "orange-text-gradient",
  //     }
  //   ],
  //   image: coffeestore,
  //   source_code_link: "https://github.com/fadini1/coffee-store",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
