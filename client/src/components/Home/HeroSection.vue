<script setup lang="ts">
import { ChefHat, UserRound, Globe, HeartHandshake } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
</script>
<template>
  <div
    class="flex h-96 w-11/12 items-center rounded-3xl border bg-hero bg-cover bg-center px-8 shadow-lg md:h-[600px] md:px-0"
  >
    <div
      class="flex h-auto flex-col justify-between gap-2 rounded-3xl bg-[hsl(0,_0%,_98%)] bg-background p-10 shadow-2xl md:ml-16 md:h-3/5 md:w-2/5 md:gap-0"
    >
      <div>
        <span class="text-2xl font-medium md:text-5xl">Adventure</span>
        <span class="text-2xl font-medium md:text-5xl">
          of <span class="text-secondary">Delicacies</span>.</span
        >
        <p class="text-gray-600 md:mt-5">
          Unlock a world of variety culinary recipies and unleash your inner chef the easy way with
          flavouriz.
        </p>
      </div>

      <Button class="flex w-48 justify-between rounded-full px-5"
        >Explore recipies
        <ChefHat />
      </Button>
    </div>
  </div>
  <div class="flex w-11/12 flex-col justify-between md:flex-row">
    <div class="flex justify-between rounded-3xl bg-gray-100 p-8 shadow-lg lg:w-3/5">
      <div class="w-[30%] pb-5">
        <UserRound />

        <p class="mt-5 font-medium">User-Centered</p>
        <span class="hidden text-ellipsis text-gray-800 md:flex"
          >Your feedback shapes our platform, ensuring a seamless and satifying culinary
          journey.</span
        >
      </div>
      <div class="w-[30%]">
        <Globe />
        <p class="mt-5 font-medium">Diverse Recipes</p>
        <span class="hidden text-gray-800 md:flex"
          >We celebrate diverse culinary traditions from around the world, inspiring you today.
        </span>
      </div>
      <div class="w-[30%]">
        <HeartHandshake />
        <p class="mt-5 font-medium">Fun Community</p>
        <span class="hidden text-gray-800 md:flex"
          >We foster a vibrant foodie community where joy comes with sharing recipes with us.
        </span>
      </div>
    </div>
    <div
      class="hidden w-2/12 flex-col items-start justify-between rounded-3xl border p-8 shadow-lg lg:flex"
    >
      <span class="text-xl font-medium">Know more about our website here.</span>
      <RouterLink class="text-lg underline underline-offset-4 hover:text-secondary" to="/"
        >Let's go</RouterLink
      >
    </div>
    <div
      class="hidden w-2/12 flex-col items-start justify-between rounded-3xl border p-8 shadow-lg lg:flex"
    >
      <div>
        <p class="text-xl font-bold text-secondary">FEATURED</p>
        <span class="text-xl font-bold">Calisbury steak and asparagus</span>
      </div>
      <RouterLink class="text-lg underline underline-offset-4 hover:text-secondary" to="/"
        >See Recipe</RouterLink
      >
    </div>
  </div>
</template>
