<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'
import { ChefHat } from 'lucide-vue-next'
import { generateRecipeURL } from '@/helper/Helpers'

export interface Item {
  _id: string
  title: string
  img: string
}

const props = defineProps<{
  item: Item
}>()

const recipeUrl = generateRecipeURL(props.item.title, props.item._id)
</script>

<template>
  <div
    class="flex flex-1 flex-col justify-between rounded-2xl border bg-accent p-3 shadow-xl md:px-5 md:pb-5 md:pt-4"
  >
    <span class="pl-1 text-xl font-medium">{{ props.item.title }}</span>
    <div>
      <div class="relative mt-3 w-full overflow-hidden rounded-xl border pt-[100%]">
        <img
          :alt="props.item.title"
          class="absolute left-0 top-0 h-full w-full object-cover"
          :src="props.item.img"
        />
      </div>
      <RouterLink :to="recipeUrl">
        <Button class="mt-3 w-full rounded-full"> See recipe &nbsp;&nbsp;<ChefHat /> </Button>
      </RouterLink>
    </div>
  </div>
</template>
