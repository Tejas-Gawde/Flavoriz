<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const searchQuery = ref(route.query.search ?? '')

function submitSearch() {
  router.push({
    query: {
      ...route.query,
      page: 1,
      search: searchQuery.value
    }
  })
}
</script>

<template>
  <form class="flex h-11 md:flex-row" @submit.prevent="submitSearch">
    <input
      v-model="searchQuery"
      id="Search"
      type="text"
      placeholder="Search..."
      class="h-full w-96 rounded-l-lg border border-accent pl-10 shadow-md outline-none hover:bg-accent md:h-11"
    />
    <Button type="submit" class="h-full rounded-l-none rounded-r-lg shadow-md" variant="default">
      <Search />
    </Button>
  </form>
</template>
