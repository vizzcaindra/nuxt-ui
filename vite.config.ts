import { defineConfig } from "vite";

import path from "path";

export default defineConfig({
  resolve: {
    alias: [
      { find: '@nuxt-ui', replacement: path.join(__dirname, 'src/runtime') }
    ],
  },
});
