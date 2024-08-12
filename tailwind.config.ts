import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        half: "50vh",
      },
    },
    fontFamily: {
      sans: ["Annie Use Your Telescope", "sans-serif"],
      mono: ["Major Mono Display", "monospace"],
      Hand: ["Edu AU VIC WA NT Hand", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
