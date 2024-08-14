<script setup lang="ts">
import FoodCard from '@/components/FoodCard.vue'

const items = [
  {
    img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sandwich',
    _id: '669ab9b1f3c480916e580a95'
  },
  {
    img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sandwich',
    _id: '669ab9b1f3c480916e580a95'
  },
  {
    img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sandwich',
    _id: '669ab9b1f3c480916e580a95'
  },
  {
    img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sandwich',
    _id: '669ab9b1f3c480916e580a95'
  }
]
</script>

<template>
  <div class="w-11/12">
    <span class="text-4xl font-semibold"
      >Popular <span class="text-secondary">Recipes</span> Today</span
    >
    <div class="mt-5 grid grid-cols-2 justify-between gap-10 md:grid-cols-3 lg:grid-cols-4">
      <FoodCard v-for="item in items" :item="item" />
    </div>
  </div>
</template>
