import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      screens:{
        xxs: "320px",
        xs: "375px",
      },
      fontSize: {
        'xs': ['0.65rem', { lineHeight: 'calc(1 / 0.65)' }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        shimmer: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        fadeInBlur: {
          "0%": {
            opacity: "0",
            filter: "blur(8px)",
            color: "gold", // start as gold
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
            color: "var(--foreground)", // end on the foreground color
          },
        },
      },
      animation: {
        shimmer: 'shimmer 1s linear infinite',
        fadeInBlur: "fadeInBlur 1s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
