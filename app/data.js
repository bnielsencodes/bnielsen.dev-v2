import audiophileFeaturedImg from "/public/assets/projects/featuredAudiophile.webp";
import audiophileImg from "/public/assets/projects/audiophile.webp";
import securePassFeaturedImg from "/public/assets/projects/featuredSecurepass.webp";
import securePassImg from "/public/assets/projects/securepass.webp";
import quizzicalFeaturedImg from "/public/assets/projects/featuredQuizzical.webp";
import quizzicalImg from "/public/assets/projects/quizzical.webp";
import dictionaryFeaturedImg from "/public/assets/projects/featuredDictionary.webp";
import dictionaryImg from "/public/assets/projects/dictionary-web-app.webp";
import tenziesImg from "/public/assets/projects/tenzies.webp";
import splitterImg from "/public/assets/projects/splitter.webp";
import planetFactsImg from "/public/assets/projects/planet-facts.webp";
import memeGeneratorImg from "/public/assets/projects/meme-generator.webp";
import notificationsPageImg from "/public/assets/projects/notifications-page.webp";
import huddleImg from "/public/assets/projects/huddle.webp";
import fruitOfTheSeaImg from "/public/assets/projects/fruit-of-the-sea.webp";
import employeeDirectoryImg from "/public/assets/projects/employee-directory.webp";

// eslint-disable-next-line
const projects = [
  {
    id: 1,
    name: "Audiophile",
    img: audiophileImg,
    featuredImg: audiophileFeaturedImg,
    description:
      "A multi-page e-commerce website with cart functionality and a checkout process.",
    classes: ["icon--nextjs", "icon--react", "icon--js"],
    skillOne: "Next",
    skillTwo: "React",
    skillThree: "JavaScript",
    liveSite: "https://audiophile-bnielsencodes.vercel.app",
    sourceCode: "https://github.com/bnielsencodes/audiophile",
  },
  {
    id: 2,
    name: "SecurePass",
    img: securePassImg,
    featuredImg: securePassFeaturedImg,
    description: "A strong random password generator.",
    classes: ["icon--html", "icon--tailwind", "icon--js"],
    skillOne: "HTML",
    skillTwo: "Tailwind",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/securepass",
    sourceCode: "https://github.com/bnielsencodes/securepass",
  },
  {
    id: 3,
    name: "Quizzical",
    img: quizzicalImg,
    featuredImg: quizzicalFeaturedImg,
    description:
      "A quiz app that fetches data from The Open Trivia Database API.",
    classes: ["icon--react", "icon--js", "icon--css"],
    skillOne: "React",
    skillTwo: "JavaScript",
    skillThree: "CSS",
    liveSite: "https://bnielsencodes.github.io/quizzical",
    sourceCode: "https://github.com/bnielsencodes/quizzical",
  },
  {
    id: 4,
    name: "Dictionary Web App",
    img: dictionaryImg,
    featuredImg: dictionaryFeaturedImg,
    description:
      "A dictionary web app that fetches data from the Free Dictionary API.",
    classes: ["icon--react", "icon--js", "icon--css"],
    skillOne: "React",
    skillTwo: "JavaScript",
    skillThree: "CSS",
    liveSite: "https://bnielsencodes.github.io/dictionary-web-app",
    sourceCode: "https://github.com/bnielsencodes/dictionary-web-app",
  },
  {
    id: 5,
    name: "Tenzies",
    img: tenziesImg,
    description: "Easy to learn dice game that players of all ages will enjoy.",
    classes: ["icon--react", "icon--js", "icon--css"],
    skillOne: "React",
    skillTwo: "JavaScript",
    skillThree: "CSS",
    liveSite: "https://bnielsencodes.github.io/tenzies",
    sourceCode: "https://github.com/bnielsencodes/tenzies",
  },
  {
    id: 6,
    name: "Splitter",
    img: splitterImg,
    description: "A web app that allows you to easily split bills/tips.",
    classes: ["icon--html", "icon--tailwind", "icon--js"],
    skillOne: "HTML",
    skillTwo: "Tailwind",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/splitter",
    sourceCode: "https://github.com/bnielsencodes/splitter",
  },
  {
    id: 7,
    name: "Planet Facts",
    img: planetFactsImg,
    description:
      "A fully responsive website that allows you to explore facts about all of the planets in our solar system.",
    classes: ["icon--html", "icon--css", "icon--js"],
    skillOne: "HTML",
    skillTwo: "CSS",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/planet-facts",
    sourceCode: "https://github.com/bnielsencodes/planet-facts",
  },
  {
    id: 8,
    name: "Meme Generator",
    img: memeGeneratorImg,
    description:
      "Generates random meme images using the Imgflip API. You can add text to the generated image.",
    classes: ["icon--react", "icon--js", "icon--css"],
    skillOne: "React",
    skillTwo: "JavaScript",
    skillThree: "CSS",
    liveSite: "https://bnielsencodes.github.io/meme-generator",
    sourceCode: "https://github.com/bnielsencodes/meme-generator",
  },
  {
    id: 9,
    name: "Notifications Page",
    img: notificationsPageImg,
    description: "A notifications page challenge from frontendmentor.io.",
    classes: ["icon--react", "icon--js", "icon--css"],
    skillOne: "React",
    skillTwo: "JavaScript",
    skillThree: "CSS",
    liveSite: "https://bnielsencodes.github.io/notifications-page",
    sourceCode: "https://github.com/bnielsencodes/notifications-page",
  },
  {
    id: 10,
    name: "Huddle",
    img: huddleImg,
    description:
      "Huddle re-imagines the way we build communities. Create connections with your users as you engage in genuine discussion.",
    classes: ["icon--html", "icon--tailwind", "icon--js"],
    skillOne: "HTML",
    skillTwo: "Tailwind",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/huddle",
    sourceCode: "https://github.com/bnielsencodes/huddle",
  },
  {
    id: 11,
    name: "Fruit of the Sea",
    img: fruitOfTheSeaImg,
    description:
      "A fully responsive word guessing game set up to mimic the feel of a game show.",
    classes: ["icon--html", "icon--css", "icon--js"],
    skillOne: "HTML",
    skillTwo: "CSS",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/fruit-of-the-sea",
    sourceCode: "https://github.com/bnielsencodes/fruit-of-the-sea",
  },
  {
    id: 12,
    name: "Employee Directory",
    img: employeeDirectoryImg,
    description:
      "A fully responsive employee directory that allows you to search for specific employees by name. Utilizes Fetch API to access Random User Generator API.",
    classes: ["icon--html", "icon--css", "icon--js"],
    skillOne: "HTML",
    skillTwo: "CSS",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/employee-directory",
    sourceCode: "https://github.com/bnielsencodes/employee-directory",
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
    name: "tailwind",
    tech: "Tailwind",
  },
  {
    id: 4,
    name: "js",
    tech: "JavaScript",
  },
  {
    id: 5,
    name: "vite",
    tech: "Vite",
  },
  {
    id: 6,
    name: "sass",
    tech: "Sass",
  },
  {
    id: 7,
    name: "figma",
    tech: "Figma",
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
    name: "git",
    tech: "Git",
  },
];

export { projects, skills };
