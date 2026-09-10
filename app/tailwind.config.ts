// tailwind.config.ts
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./app.vue",
    "./.nuxt/components.d.ts",
  ],
  theme: {
    extend: {
      colors: {
        cgreen: {
          50: "var(--c-green-50)",
          500: "var(--c-green-500)",
          700: "var(--c-green-700)",
          900: "var(--c-green-900)",
        }
      }
    },
  },
  plugins: [],
}