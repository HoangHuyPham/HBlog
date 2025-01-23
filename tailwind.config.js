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
      },
      animation: {
        appear: "appear forwards .5s ease",
      },
    },
    plugins: [],
  },
};
