<script setup lang="ts">
import HeroSection from '@/components/Home/HeroSection.vue'
import PopularRecipes from '@/components/Home/PopularRecipes.vue'
</script>

<template>
  <div>
    <HeroSection />
    <div>
      <p class="text-center text-5xl font-semibold">
        Become a true <span class="text-secondary">chef</span>
      </p>
      <p class="text-center text-5xl font-semibold">with our recipes</p>
    </div>
    <PopularRecipes />
  </div>
</template>
