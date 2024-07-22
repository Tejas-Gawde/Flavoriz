<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>
<template>
  <div class="h-[200px] w-full rounded-t-3xl bg-primary p-10 text-gray-400">
    <div class="grid h-full w-full grid-cols-3 text-white">
      <div>
        <h1 class="text-3xl font-bold">Flavouriz</h1>
        <span class="text-gray-400">Your personal recipe website.</span>
      </div>
      <div class="flex flex-row">
        <Separator orientation="vertical" class="mr-10" />
        <div class="text-md flex flex-col items-start gap-2 text-zinc-200">
          <span>Links :</span>
          <RouterLink class="underline-offset-4 hover:text-zinc-600 hover:underline" to="/"
            >Home</RouterLink
          >
          <RouterLink class="underline-offset-4 hover:text-zinc-600 hover:underline" to="/about"
            >About</RouterLink
          >
          <RouterLink class="underline-offset-4 hover:text-zinc-600 hover:underline" to="/recipes"
            >Recipes</RouterLink
          >
        </div>
      </div>
      <div class="flex flex-row">
        <Separator orientation="vertical" class="mr-10" />
        <div class="text-md flex flex-col items-start gap-2 text-zinc-200">
          <span>Socials :</span>
          <a>FaceBook</a>
          <a>Instagram</a>
        </div>
      </div>
    </div>
  </div>
</template>
