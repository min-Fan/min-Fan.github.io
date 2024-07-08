/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: { max: "960px" }, // 移动端
      xm: { min: "961px" }, // 平板
      lg: { max: "1280px" }, // 适配header最小宽度
      xl: { max: "1680px" }, // pc大屏
    },
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
