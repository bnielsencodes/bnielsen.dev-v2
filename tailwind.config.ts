import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      neutral: {
        100: "#1a1a1a",
        200: "#272727",
        300: "#555",
        400: "#888",
        500: "#ededed",
        600: "#fafafa",
      },
      accent: {
        100: "#0072bb",
        200: "#22A9FF",
      },
      warning: "#cd2c2c",
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
      boxShadow: {
        navbar: "0 2px 4px rgb(0 0 0 / 15%)",
        custom: "4px 4px 10px 0px rgb(0 0 0 / 0.35)",
        skillHover: "4px 4px 10px 2px rgb(0 0 0 / 0.35)",
      },
      dropShadow: {
        custom: "4px 4px 10px rgb(0 0 0 / 0.35)",
      },
      backgroundImage: {
        avatar: "url('/assets/images/avatar.jpeg')",
      },
      borderRadius: {
        morph: "60% 40% 30% 70%/60% 30% 70% 40%",
      },
      animation: {
        morph: "morph 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
