import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      neutral: {
        100: "#1a1a1a",
        200: "#272727",
        300: "#444",
        400: "#bbb",
        500: "#ededed",
        600: "#fafafa",
      },
      accent: {
        100: "#005e98",
        200: "#1aa7ff",
      },
      warning: "#cd2c2c",
      projects: {
        audiophile: "#d87d4a",
        securepass: "#a4ffaf",
        quizzical: "#4d5b9e",
        dictionary: "#a445ed",
      },
      tech: {
        css: {
          100: "#1572b6",
          200: "#33a9dc",
          300: "#fff",
          400: "#ebebeb",
        },
        figma: {
          100: "#0acf83",
          200: "#a259ff",
          300: "#f24e1e",
          400: "#ff7262",
          500: "#1abcfe",
        },
        git: "#f1512f",
        html: {
          100: "#e44d26",
          200: "#f16529",
          300: "#ebebeb",
          400: "#fafafa",
        },
        javascript: {
          100: "#f0db4f",
          200: "#1a1a1a",
        },
        next: "#fff",
        postgresql: "#336791",
        react: "#62dafb",
        sass: "#c76494",
        tailwind: "#36bdf9",
        typescript: {
          100: "#1a1a1a",
          200: "#007acc",
        },
        vite: {
          100: "#41d1ff",
          200: "#bd34fe",
          300: "#ffea83",
          400: "#ffdd35",
          500: "#ffa800",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-roboto)"],
      mosk: ["var(--font-mosk)"],
    },
    screens: {
      // => @media (min-width: 768px) { ... }
      md: "768px",
      // => @media (min-width: 1024px) { ... }
      lg: "1024px",
      // => @media (min-width: 1440px) { ... }
      xl: "1440px",
    },
    extend: {
      animation: {
        morph: "morph 8s ease-in-out infinite",
        figmaBorder:
          "figmaBgGradientAnimation 3.75s ease 0s infinite normal none",
        viteBorder:
          "viteBgGradientAnimation 3.75s ease 0s infinite normal none",
      },
      backgroundImage: {
        avatar: "url('/assets/images/avatar.jpeg')",
      },
      borderRadius: {
        morph: "60% 40% 30% 70%/60% 30% 70% 40%",
      },
      boxShadow: {
        navbar: "0 2px 4px rgb(0 0 0 / 15%)",
      },
      gridTemplateColumns: {
        blogHome: "2fr 1fr",
      },
      gridTemplateRows: {
        blogHome: "100% 1fr",
      },
    },
  },
  plugins: [],
};
export default config;
