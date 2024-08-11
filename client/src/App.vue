<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageNavbar from '@/components/PageNavbar.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>
  <header class="sticky top-0 z-[1000]">
    <PageNavbar />
  </header>

  <RouterView class="z-0 flex h-full flex-col items-center pb-10 pt-10" />
  <footer>
    <PageFooter />
  </footer>
</template>
