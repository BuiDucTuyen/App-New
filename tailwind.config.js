module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // ...
  // Các tùy chọn khác của bạn
  // ... theme: {
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease",
      },
      backgroundImage: {
        heroBg: "url('../public/image/cup-near-cloth-twig.jpg')",
        headerBg: "url('../public/image/bggg.avif')",
        "gradient-radial": "radial-gradient(circle, #3498db, transparent 30%)",
      },
    },
  },
  variants: {},
  plugins: [],
};
