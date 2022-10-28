/*
 * Vixio
 * Copyright © 2022 - Nuxt UI Contributor
 * Created by Vizzca Indra Pratama
 * Created at 2022-10-27
 */

export default {
  darkMode: 'class',
  plugins: [
    require("@tailwindcss/forms")
  ],
  content: [
    `./dist/runtime/components/**/*.{js,ts,vue}`
  ]
}
