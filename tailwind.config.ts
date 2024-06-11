import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      animation: {
        slidein: "slidein 1s ease 200ms",
        loopscroll: "loop-scroll 50s linear infinite",

      },
     

      keyframes : {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateX(-30px)"

          },
          to: {
            opacity: "1",
            transform: "translateX(0)"

          }
        },

        loopscroll : {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        }

      },

    

      container : {
        center: true,
        // padding: "15px",
      },

      colors: {
        primary : "#26B86C",
        bgmain : "#0F0F11",
      }
    },
  },
  plugins: [],
};
export default config;
