/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bitechalk: ["BiteChalk"],
        bitechalknormal: ["BiteChalkNormal"],
        handcraftChalk: ["HandcraftChalkRegular"],
      },
      textColor: {
        skin: {
          base: "var(--text-primary)",
          accent: "var(--text-accent)",
          inverted: "var(--text-inverted)",
        },
      },
      backgroundColor: {
        skin: {
          bg: "var(--color-bg)",
          muted: "var(--color-muted)",
          accentdark: "var(--color-accent)",
          glow: "var(--color-glow)",
          accent: "var(--color-accent-main)",
        },
      },
      colors: {
        borderglow: "var(--color-glow)",
        bordermain: "var(--color-accent-main)",
        circleredglow: "#EF9475",
        mutedglow: "#454545",
        gamehover: "var(--color-hover-game)",
      },
      boxShadow: {
        "0xl":
          "0 4px 20px -2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
      },
    },
  },
  plugins: [],
}
