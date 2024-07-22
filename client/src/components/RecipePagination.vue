<script setup lang="ts">
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev
} from '@/components/ui/pagination'

import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const pageParam = Array.isArray(route.query.page) ? route.query.page[0] : route.query.page
const page = parseInt(pageParam ?? '1', 10)
const currentPage = ref<number>(page)

const handlePageChange = (newPage: number) => {
  currentPage.value = newPage
}

const submitSearch = (number: number) => {
  router.push({
    query: {
      ...route.query,
      page: number.toString()
    },
    hash: '#Search'
  })
  console.log(route)
}
</script>

<template>
  <Pagination
    @update:page="handlePageChange"
    v-slot="{ page }"
    :total="200"
    :sibling-count="1"
    show-edges
    :default-page="currentPage"
  >
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationPrev class="border-accent shadow-md" @click="submitSearch(page - 1)" />
      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
          <Button
            @click="submitSearch(item.value)"
            class="h-10 w-10 border-0 p-0"
            :variant="item.value === page ? 'default' : 'outline'"
          >
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis class="text-secondary" v-else :key="item.type" :index="index" />
      </template>
      <PaginationNext class="border-accent shadow-md" @click="submitSearch(page + 1)" />
    </PaginationList>
  </Pagination>
</template>
