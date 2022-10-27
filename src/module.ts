/*
 * Vixio
 * Copyright © 2022 - Nuxt UI Contributor
 * Created by Vizzca Indra Pratama
 * Created at 2022-10-26
 */

import { defineNuxtModule } from "@nuxt/kit";
import { fileURLToPath } from "node:url";

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: fileURLToPath(new URL('./runtime/components', import.meta.url)),
        prefix: 'nuxt'
      })
    }
  }
})
