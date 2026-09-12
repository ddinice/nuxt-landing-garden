export interface Business {
  name: string
  logo: string
  phone: string
  address: string
  hours: string
}

declare module '@nuxt/schema' {
  interface AppConfig {
    business: Business
  }
}
