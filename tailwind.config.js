/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        "simple-white": "#f5f5f5",
        "simple-black": "#4a4a4a",
      },
      backgroundColor: {
        "simple-white": "#f5f5f5",
      },
      keyframes: {
        appear: {
          from: {
            transform: "translateY(200%)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },

        blink: {
          "from, to" : { "border-color": "transparent" },
          "50%" : {"border-color": "white"}
        },

        typing: {
          from : { width: 0 },
          to : { width: "100%"}
        },

        "hide-typing": {
          to : {"border-color": "transparent"}
        }
      },
      animation: {
        appear: "appear forwards .5s ease",
        typing: "typing 2s steps(20, end) forwards, blink .75s step-end infinite",
        "hide-typing" : "typing 2s steps(20, end) forwards, blink .75s step-end infinite, hide-typing forwards step-end 2s"
      },
    },
    plugins: [],
  },
};
