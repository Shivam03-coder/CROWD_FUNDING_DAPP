/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      greatBlue: {
        DEFAULT: "#2A669F",
        50: "#E4F7F8",
        100: "#CCEEF2",
        200: "#9CD7E5",
        300: "#6CB9D8",
        400: "#3B94CB",
        500: "#2A669F",
        600: "#234B83",
        700: "#1B3366",
        800: "#14204A",
        900: "#0C102E",
      },
      buttercup: {
        DEFAULT: "#F59E0B",
        50: "#FCE4BB",
        100: "#FBDCA8",
        200: "#FACD81",
        300: "#F8BD59",
        400: "#F7AE32",
        500: "#F59E0B",
        600: "#C07C08",
        700: "#8A5906",
        800: "#543603",
        900: "#1E1401",
        950: "#030200",
      },
      blueCharcoal: {
        DEFAULT: "#021526",
        50: "#0B75D4",
        100: "#0A6BC1",
        200: "#08559A",
        300: "#064074",
        400: "#042A4D",
        500: "#021526",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
        950: "#000000",
      },
      darken: "rgba(0,0,0,0.7)",
      fadedarken: "rgba(0,0,0,0.6)",
    },
    extend: {
      backgroundImage: {
        "custom-green-gradient":
          "linear-gradient(292deg, rgba(186,255,228,1) 0%, rgba(255,255,255,1) 100%)",
        "custom-greenlight-gradient":
          "linear-gradient(292deg, rgba(52,191,103,1) 0%, rgba(255,255,255,1) 100%)",
        "custom-greentransparent-gradient":
          "linear-gradient(172deg, rgba(52,191,103,1) 0%, rgba(82,66,12,0) 100%)",
        "custom-greentransparent-gradient-t-b":
          "linear-gradient(346deg, rgba(122,255,171,1) 0%, rgba(241,241,241,0.26094187675070024) 100%)",
        "custom-light-green-to-white":
          "linear-gradient(172deg, rgba(122,255,171,1) 0%, rgba(255,210,56,0.26094187675070024) 100%)",
        "custom-white-with-light-green-edges":
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(186,255,228,0.4) 70%, rgba(186,255,228,1) 100%)",
        "custom-light-yellow-to-light-green":
          "linear-gradient(180deg, rgba(255,255,204,1) 0%, rgba(186,255,228,1) 100%)",
        "custom-light-green-to-light-yellow-center":
          "linear-gradient(180deg, rgba(186,255,228,1) 0%, rgba(255,255,204,1) 50%, rgba(186,255,228,1) 100%)",
        "custom-light-yellow-to-transparent-green":
          "linear-gradient(180deg, rgba(255,255,204,1) 0%, rgba(186,255,228,0) 100%)",
        "custom-diagonal-light-yellow-to-light-blue":
          "linear-gradient(135deg, rgba(255,255,204,1) 0%, rgba(137,180,250,1) 100%)", // Updated colors here
        "custom-light-green-to-light-yellow-soft":
          "linear-gradient(180deg, rgba(186,255,228,1) 0%, rgba(255,255,204,0.7) 100%)",
      },
      boxshadow: {
        "3xl": "-1px 34px 47px -29px rgba(137,180,250,1)",
        "4xl": "0vw 0vw 0.5vw 0vw rgba(137,180,250,0.2)",
        "5xl": "0vw 0.5vw 0.5vw 0vw rgba(137,180,250,0.16)",
        glass: "1px 5px 12px 1px rgba(137,180,250,0.37)",
        "glass-card": "4px 4px 4px 4px rgba(137,180,250,0.37)",
        "card-shadow": "0 8px 32px 0 rgba(137,180,250,0.37)",
        "dark-shadow": "10px 10px 5px 0px rgba(137,180,250,0.75)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".flex-center": {
          "@apply flex justify-center items-center": {},
        },
        ".overlay-content": {
          "@apply absolute h-full w-full top-0 left-0": {},
        },
      });
    },
    require("tailwindcss-animate"),
  ],
};
