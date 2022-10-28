<template>
  <button type="button" class="inline-flex items-center rounded border border-transparent bg-teal-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
    <slot />
  </button>
</template>

<script>

import Component from "@nuxt-ui/ui/Component";

export default {

  mixins: [Component],

  data () {
    return {}
  }
}

</script>

<style scoped>

</style>
