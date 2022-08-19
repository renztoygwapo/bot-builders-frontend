import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    publicRuntimeConfig: {
        baseUrl: process.env.BASE_URL
    },
    css: ["~/assets/css/tailwind.css"],
    build: {
        postcss: {
        postcssOptions: {
            plugins: {
            tailwindcss: {},
            autoprefixer: {},
            },
        },
        },
    },
})
