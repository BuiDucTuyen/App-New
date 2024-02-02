module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // ...
  // Các tùy chọn khác của bạn
  // ... theme: {
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('../public/image/bggg.avif')",
        "gradient-radial": "radial-gradient(circle, #3498db, transparent 30%)",
      },
    },
  },
};
