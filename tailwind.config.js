// tailwind.config.js (amélioré PRO)
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#0ea5e9",      // bleu électrique
        primaryLight: "#38bdf8",
        dark: "#0f172a",         // bleu nuit
        darkLight: "#1e293b",
        darker: "#020617",       // presque noir
        accent: "#4ade80",       // vert success
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(2,6,23,0.9) 50%, rgba(2,6,23,1) 100%)",
      },
      animation: {
        fade: "fadeIn 1s ease-in-out",
        slide: "slideUp 0.8s ease-out",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(4px)" },
        },
      },
    },
  },
  plugins: [],
};
