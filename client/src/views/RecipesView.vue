<script setup lang="ts">
import RecipeHero from '@/components/Recipes/RecipeHero.vue'
import RecipeList from '@/components/Recipes/RecipeList.vue'
import SearchBar from '@/components/SearchBar.vue'
import RecipePagination from '@/components/Recipes/RecipePagination.vue'
import axios from 'axios'
import { ref, watch } from 'vue'
import { useRoute, type LocationQuery } from 'vue-router'
import type { Item } from '@/components/FoodCard.vue'

const recipes = ref<Item[]>([])
const searchQuery = ref<LocationQuery>()
const route = useRoute()
const loading = ref(false)

const fetchData = async () => {
  try {
    loading.value = true
    console.log(loading.value)
    const response = await axios.get(`http://localhost:3000${route.fullPath}`, {
      withCredentials: true
    })
    recipes.value = response.data
    console.log(recipes.value)
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
}

watch(
  () => route.query,
  () => {
    fetchData()
  },
  { immediate: true }
)
</script>
<template>
  <div class="gap-14">
    <RecipeHero />
    <SearchBar v-model="searchQuery" />
    <RecipeList :loading="loading" :items="recipes" />
    <RecipePagination />
  </div>
</template>
