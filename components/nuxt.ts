/*
 * Vixio 
 * Copyright © 2022 - Nuxt 3 Component Contributor
 * Created by Vizzca Indra Pratama
 * Created at 2022-10-26
 */

import { defineNuxtModule } from "@nuxt/kit";
import { fileURLToPath} from "url";

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: fileURLToPath(new URL('./components', import.meta.url)),
        prefix: 'nuxt'
      })
    }
  }
})