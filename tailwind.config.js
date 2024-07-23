/** @type {import('tailwindcss').Config} */
module.exports = {
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
      backgroundColor: {
        "dark-default": `#030712`,
        "dark-half": `#111827`,
        "dark-200": `#374151`,
        "dark-900": `#F9FAFB`,
        "dark-100": `#1F2937`,
      },
      colors:{
        "dark-600": `#D1D5DB`,
        "dark-900": `#F9FAFB`,
        "dark-700": `#030712`,
        "dark-50": `#111827`,
        "dark-70": `#E5E7EB`,
      }

    },
  },
  plugins: [],
};
