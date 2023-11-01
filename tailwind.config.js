/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "0 0 10px #000000, 0 0 20px #454545, 0 0 50px #5d5d5d, 0 0 200px #888888",
      },
    },
  },
  plugins: [],
};
