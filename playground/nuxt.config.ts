import { defineNuxtConfig } from 'nuxt/config'
import NuxtUI from '..'
import path from "path";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    NuxtUI
  ],

  myModule: {
    addPlugin: true
  },

  tailwindcss: {
    cssPath: "assets/css/tailwind/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: true,
    injectPosition: 0,
    viewer: false,
  },

  vite: {
    plugins: [

    ],
    resolve: {
      alias: [
        {find: '@nuxt-ui', replacement: path.join(__dirname, '../src/runtime')}
      ],
    },
  }
})
