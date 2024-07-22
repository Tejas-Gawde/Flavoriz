<script setup lang="ts">
import FoodCard from '@/components/FoodCard.vue'

const items = [
  {
    title: 'Spicy Vermicilli noodles salad',
    img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: ''
  },
  {
    title: 'Spicy Vermicilli noodles salad',
    img: 'https://img.freepik.com/free-photo/thai-food-mixed-spicy-pork-sausage-salad-with-vermicelli-noodle_1150-38128.jpg?t=st=1720909496~exp=1720913096~hmac=345715cc3c242e4a517576537c9a6a00d0dfe0351891ae132d444ebaf7c0799a&w=1060',
    link: ''
  },
  {
    title: 'Spicy Vermicilli noodles salad',
    img: 'https://sugaryums.com/wp-content/uploads/2023/03/Baechu-Kimchi-Cabbage-Kimchi-Recipe-SugarYums-2.jpg',
    link: ''
  },
  {
    title: 'Spicy Vermicilli noodles salad',
    img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: ''
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
