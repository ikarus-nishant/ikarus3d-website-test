/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        "2lg": "10px",
        xl: "18px",
        full: "50%",
      },
      backgroundImage: {
        bgcontactus: "url('/public/images/bgimage.png')",
        cadet: "url('/public/images/bgimage.png')",
        "hero-pattern":
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8))",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      boxShadow: {
        models: "0px 0px 10px #989898",
        "ikarus-lg":
          "0 0 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "ikarus-sh": "20px 20px 60px #bebebe,-20px -20px 60px #ffffff",
        whiteshadow: "0 0 15px 3px rgb(255 255 255 / 0.5)",
        blackshadow: "0 0 10px 1px rgb(0 0 0 / 0.2)",
        buttonShadow: "2px 2px 4px rgb(32 40 50 / 0.4)",
        cardShadow: "0 2px 4px rgb(32 40 50 / 0.4)",
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
      },
      colors: {
        "ikarus-darkblue": "#0F134A",
        "ikarus-blue": "#1d75bd",
        "ikarus-black": "#071b2c",
        "ikarus-white": "#f6fafe",
        "ikarus-grey": "#a6b4bf",
        "ikarus-lighterdeepblue":"#1c232c",
        "ikarus-deepblue":"#11141A",
        "ikarus-lighterGray":"#4f5052",
        white: "#FFFFFF",
        black: "#000000",
        linkInactive: "#C8CED6",
        primaryBlue: "#1D75BD",
        primaryBlack: "#0D0E10",
        primaryGrey: "#A6B4BF",
        primaryWhite: "#FFF",
        secondaryWhite: "#B4B4B4",
        lightGrey: "#F7F7F9",
        bgshoes: "#585858",
        bgfurniture: "#7E577C",
        bgeyewear: "#646F79",
        bgavatar: "#985767",
        bgelectronics: "#B4644B",
        bgaccessories: "#485159",
        secondaryBackground: "#F8F9FC",
        darkHeading: "rgb(255 255 255/0.87)",
        darkSubHeading: "rgb(255 255 255/0.70)",
        darkprimaryBackground: "#273240",
        "card-colors": "#5A339B",
        "card2-colors": "#83417F",
        cardBackgroundColor: "#11141A",
        primarysecondBackground: "#1C232C",
        tertiaryBackground: "#10151C",
        secondaryDarkBackground: "#2F3C4C",

        primaryDarkBg: "#0A0C10",
      },
      // darkMode: "media",
      screens: {
        xs: "180px",
        mob: "320px",
        mob_mid: "370px",
        models_mob:"410px",
        models_mob2:"480px",
        mob_old: "360px",
        mob_2: "389px",
        lap_gen: "1022px",
        lap: "1080px",
        desk: "1286px",
        tab: "600px",
        tab_mid: "768px",
        tab_old: "720px",
        md: "960px",
        lg: "1280px",
        xl: "1600px",
        xl_old: "1920px",
        xxl: "1920px",
        xxl_old: "3840px",
        xxxl: "2560px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      // flex: {
      //   2: "2 2 0%",
      // },
      fontWeight: {
        bolder: 750,
      },
      spacing: {
        76: "19rem",
        87: "21rem",
        88: "22rem",
        92: "23rem",
        98: "27rem",
        100: "30rem",
        125: "40rem",
        150: "50rem",
      },
      padding: {
        smCustomHead: "30px",
        mdCustomHead: "60px",
        smCustomSubHead: "15px",
        custom: "4.5rem",
        xlCustom: "9.375rem",
      },
     
      fontSize: {
        "hero-sm": [
          "32px",
          {
            lineHeight: "38px",
            letterSpacing: "-0.54px",
          },
        ],
        "sub-hero-sm": [
          "16px",
          {
            lineHeight: "26px",
            letterSpacing: "-0.24px",
          },
        ],
        "hero-md": [
          "41px",
          {
            lineHeight: "46px",
            letterSpacing: "0.2px",
          },
        ],
        "sub-hero-md": [
          "21px",
          {
            lineHeight: "28px",
          },
        ],
        "hero-lg": [
          "46px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.2px",
          },
        ],
        "sub-hero-lg": [
          "18px",
          {
            lineHeight: "30px",
          },
        ],
        "hero-xl": [
          "52px",
          {
            lineHeight: "62px",
          },
        ],
        "sub-hero-xl": [
          "23px",
          {
            lineHeight: "28px",
          },
        ],
        "hero-xxl": [
          "64px",
          {
            lineHeight: "76px",
          },
        ],
        "sub-hero-xxl": [
          "32px",
          {
            lineHeight: "38px",
          },
        ],
        "button-sm": [
          "16px",
          {
            lineHeight: "22px",
          },
        ],
        "button-lg": [
          "14px",
          {
            lineHeight: "22px",
            letterSpacing: "-0.2px",
          },
        ],
        "button-xl": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
      },
      fontFamily: {
        montserrat: "Montserrat",
        helvetica: "Helvetica",
        gantari: "Gantari, sans-serif",
        frankRuhlLibre: "Frank Ruhl Libre",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
