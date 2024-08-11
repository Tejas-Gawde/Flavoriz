<script setup lang="ts">
import FoodCard from '../FoodCard.vue'
import type { Item } from '../FoodCard.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
const recipes = ref<Item[]>([])
const loading = ref(false)

const fetchData = async () => {
  try {
    loading.value = true
    const response = await axios.get(`http://localhost:3000/recipes?page=1`, {
      withCredentials: true
    })
    recipes.value = response.data
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
}
onMounted(() => fetchData())
</script>
<template>
  <div class="grid h-fit w-full grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
    <FoodCard v-for="item in recipes" :item="item" />
  </div>
</template>
