/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F5F5F5",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F5F5F5",
          600: "#D9D9D9",
          700: "#BDBDBD",
          800: "#A1A1A1",
          900: "#858585",
          950: "#777777",
        },
        secondary: {
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
        tertiary: {
          DEFAULT: "#33372C",
          50: "#919A81",
          100: "#879175",
          200: "#727B62",
          300: "#5D6450",
          400: "#484E3E",
          500: "#33372C",
          600: "#161813",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
       Indigo: {
          DEFAULT: "#C8A1E0",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FEFDFE",
          300: "#ECDEF4",
          400: "#DAC0EA",
          500: "#C8A1E0",
          600: "#AF77D2",
          700: "#974DC4",
          800: "#7936A3",
          900: "#5A2879",
          950: "#4A2164",
        },
      },
      backgroundImage: {
        "custom-black-blue-gradient":
          "linear-gradient(292deg, rgba(0,0,0,1) 0%, rgba(0,0,255,1) 100%)",
        "custom-blacklight-blue-gradient":
          "linear-gradient(292deg, rgba(0,0,0,1) 0%, rgba(100,149,237,1) 100%)",
        "custom-blacktransparent-blue-gradient":
          "linear-gradient(172deg, rgba(0,0,0,1) 0%, rgba(0,0,255,0) 100%)",
        "custom-blacktransparent-blue-gradient-t-b":
          "linear-gradient(346deg, rgba(0,0,0,1) 0%, rgba(0,0,255,0.3) 100%)",
        "custom-light-black-to-blue":
          "linear-gradient(172deg, rgba(55,55,55,1) 0%, rgba(0,0,255,0.3) 100%)",
        "custom-white-with-black-edges":
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,1) 100%)",
        "custom-light-blue-to-black":
          "linear-gradient(180deg, rgba(173,216,230,1) 0%, rgba(0,0,0,1) 100%)",
        "custom-light-black-to-light-blue-center":
          "linear-gradient(180deg, rgba(55,55,55,1) 0%, rgba(173,216,230,1) 50%, rgba(55,55,55,1) 100%)",
        "custom-light-blue-to-transparent-black":
          "linear-gradient(180deg, rgba(173,216,230,1) 0%, rgba(0,0,0,0) 100%)",
        "custom-diagonal-light-blue-to-black":
          "linear-gradient(135deg, rgba(173,216,230,1) 0%, rgba(0,0,0,1) 100%)",
        "custom-light-black-to-light-blue-soft":
          "linear-gradient(180deg, rgba(55,55,55,1) 0%, rgba(173,216,230,0.7) 100%)",
      },
      boxShadow: {
        "3xl": "-1px 34px 47px -29px rgba(137,180,250,1)",
        "4xl": "0vw 0vw 0.5vw 0vw rgba(137,180,250,0.2)",
        "5xl": "0vw 0.5vw 0.5vw 0vw rgba(137,180,250,0.16)",
        glass: "1px 5px 12px 1px rgba(137,180,250,0.37)",
        "glass-card": "4px 4px 4px 4px rgba(137,180,250,0.37)",
        "card-shadow": "0 8px 32px 0 rgba(137,180,250,0.37)",
        "dark-shadow": "10px 10px 5px 0px rgba(137,180,250,0.75)",
      },
      colors: {
        darken: "rgba(0,0,0,0.7)",
        fadedarken: "rgba(0,0,0,0.6)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Varela: ["Varela Round", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
        TitilliumWeb: ["Titillium Web", "sans-serif"],
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
