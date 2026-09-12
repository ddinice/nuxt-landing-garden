import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],

  appConfig: {
    business: {
      name: 'Edelviane — Jardin',
      logo: '@/assets/images/logo.png',
      phone: '+41 79 584 55 75',
      address: 'Av. de la Vogéaz 5, 1110 Morges',
      hours: 'Lun–Ven 7h30–18h',
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["shadcn-nuxt"],
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui'
  }
});