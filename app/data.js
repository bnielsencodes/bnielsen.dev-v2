// Project mockups
import audiophileMockup from "/public/assets/images/mockups/audiophile/audiophile.png";
import securepassMockup from "/public/assets/images/mockups/securepass/securepass.png";
import quizzicalStartMockup from "/public/assets/images/mockups/quizzical/quizzical-start.png";
import quizzicalQuizMockup from "/public/assets/images/mockups/quizzical/quizzical-quiz.png";
import dictionaryDarkMockup from "/public/assets/images/mockups/dictionary-web-app/dictionary-dark.png";
import dictionaryLightMockup from "/public/assets/images/mockups/dictionary-web-app/dictionary-light.png";

// eslint-disable-next-line
const projects = [
  {
    id: 1,
    name: "Audiophile",
    description:
      "A multi-page e-commerce website with cart functionality and a checkout process.",
    img: audiophileMockup,
    alt: "Audiophile website displayed on an Apple MacBook.",
    img2: audiophileMockup,
    alt2: "",
    imgWidth: 2110,
    imgHeight: 1286,
    liveSite: "https://audiophile-woad.vercel.app",
    sourceCode: "https://github.com/bnielsencodes/audiophile",
  },
  {
    id: 2,
    name: "SecurePass",
    description: "A strong random password generator.",
    img: securepassMockup,
    alt: "SecurePass web app displayed on an Apple iPhone.",
    img2: securepassMockup,
    alt2: "",
    imgWidth: 430,
    imgHeight: 883,
    liveSite: "https://bnielsencodes.github.io/securepass",
    sourceCode: "https://github.com/bnielsencodes/securepass",
  },
  {
    id: 3,
    name: "Quizzical",
    description:
      "A quiz app that fetches data from The Open Trivia Database API. Multiple game options like difficulty and category are available for the user to choose from.",
    img: quizzicalStartMockup,
    alt: "Quizzical web app start page displayed on an Apple iPad.",
    img2: quizzicalQuizMockup,
    alt2: "Quizzical web app quiz page displayed on an Apple iPad.",
    imgWidth: 700,
    imgHeight: 1019,
    liveSite: "https://quizzical-v2-tau.vercel.app",
    sourceCode: "https://github.com/bnielsencodes/quizzical-v2",
  },
  {
    id: 4,
    name: "Dictionary Web App",
    description:
      "A dictionary web app that fetches data from the Free Dictionary API.",
    img: dictionaryDarkMockup,
    alt: "Dictionary web app displayed in dark theme mode on an Apple iPad.",
    img2: dictionaryLightMockup,
    alt2: "Dictionary web app displayed in dark theme mode on an Apple iPad.",
    imgWidth: 700,
    imgHeight: 1019,
    liveSite: "https://bnielsencodes.github.io/dictionary-web-app",
    sourceCode: "https://github.com/bnielsencodes/dictionary-web-app",
  },
];

const skills = [
  {
    id: 1,
    name: "react",
    tech: "React",
  },
  {
    id: 2,
    name: "next",
    tech: "Next.js",
  },
  {
    id: 3,
    name: "vite",
    tech: "Vite",
  },
  {
    id: 4,
    name: "javascript",
    tech: "JavaScript",
  },
  {
    id: 5,
    name: "typescript",
    tech: "TypeScript",
  },
  {
    id: 6,
    name: "postgresql",
    tech: "PostgreSQL",
  },
  {
    id: 7,
    name: "tailwind",
    tech: "Tailwind",
  },
  {
    id: 8,
    name: "sass",
    tech: "Sass",
  },
  {
    id: 9,
    name: "git",
    tech: "Git",
  },
  {
    id: 10,
    name: "html",
    tech: "HTML",
  },
  {
    id: 11,
    name: "css",
    tech: "CSS",
  },
  {
    id: 12,
    name: "figma",
    tech: "Figma",
  },
];

const skillsLg = [
  {
    id: 1,
    name: "react",
    tech: "React",
  },
  {
    id: 2,
    name: "next",
    tech: "Next.js",
  },
  {
    id: 3,
    name: "javascript",
    tech: "JavaScript",
  },
  {
    id: 4,
    name: "typescript",
    tech: "TypeScript",
  },
  {
    id: 5,
    name: "tailwind",
    tech: "Tailwind",
  },
  {
    id: 6,
    name: "sass",
    tech: "Sass",
  },
  {
    id: 7,
    name: "postgresql",
    tech: "PostgreSQL",
  },
  {
    id: 8,
    name: "html",
    tech: "HTML",
  },
  {
    id: 9,
    name: "css",
    tech: "CSS",
  },
  {
    id: 10,
    name: "vite",
    tech: "Vite",
  },
  {
    id: 11,
    name: "git",
    tech: "Git",
  },
  {
    id: 12,
    name: "figma",
    tech: "Figma",
  },
];

const socials = [
  {
    id: 1,
    name: "linkedIn",
    link: "https://linkedin.com/in/bnielsencodes",
  },
  {
    id: 2,
    name: "github",
    link: "https://github.com/bnielsencodes",
  },
  {
    id: 3,
    name: "email",
    link: "mailto:brandon@bnielsen.dev",
  },
];

export { projects, skills, skillsLg, socials };
