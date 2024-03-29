import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'text-accent': '#433BFF',
      },
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-15': '-15deg',
      '-10': '-10deg',
      '-5': '-5deg',
      '0': '0',
      '5': '5deg',
      '10': '10deg',
      '15': '15deg',
      '20': '20deg',
      '25': '25deg',
      '30': '30deg',
      '45': '45deg',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg',
      '270': '270deg',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
