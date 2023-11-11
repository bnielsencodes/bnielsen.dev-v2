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
        200: "#00c8f5",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        mono: ["var(--font-roboto-mono)"],
      tech: {
        css: {
          100: "#1572b6",
          200: "#33a9dc",
          300: "#fff",
          400: "#ebebeb",
          500: "#fff",
          600: "#ebebeb",
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
          200: "#272727",
        },
        next: "#fff",
        react: "#62dafb",
        sass: "#c76494",
        tailwind: "#36bdf9",
        vite: {
          100: "#41d1ff",
          200: "#bd34fe",
          300: "#ffea83",
          400: "#ffdd35",
          500: "#ffa800",
        },
      },
    },
    screens: {
      md: "768px",
      // => @media (min-width: 1440px) { ... }
      lg: "1024px",
      // => @media (min-width: 1440px) { ... }
      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
export default config;
