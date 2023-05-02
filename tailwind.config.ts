import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#633ca1"
      }
    },
  },
  plugins: [],
} satisfies Config;
