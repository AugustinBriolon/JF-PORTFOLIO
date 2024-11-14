import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './layout/default.tsx'
  ],
  theme: {
    extend: {
      colors: {
        blue: '#28648e',
      },
      boxShadow: {
        right: '3px 0 3px rgba(0, 0, 0, 0.4)',
        up: '0 -3px 3px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
};
export default config;
