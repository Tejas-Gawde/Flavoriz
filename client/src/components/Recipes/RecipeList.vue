<script setup lang="ts">
import { ref } from 'vue'
import FoodCard, { type Item } from '@/components/FoodCard.vue'
import CardSkeleton from '@/components/CardSkeleton.vue'
import TagsInput from './TagsInput.vue'
import { Filter } from 'lucide-vue-next'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { useRoute, useRouter } from 'vue-router'
import { formatTime, parseTags } from '@/helper/Helpers'

const router = useRouter()
const route = useRoute()
const modelValue = ref<string[]>(parseTags(route.query.tags as string[]))
const time = ref([0, 360])

defineProps({
  items: {
    type: Array<Item>
  },
  loading: {
    type: Boolean,
    required: true
  }
})

async function submitSearch() {
  await router.push({
    query: {
      ...route.query,
      tags: modelValue.value
    }
  })
  console.log(route.query)
}
</script>
<template>
  <div class="flex w-11/12 flex-col">
    <span class="hidden text-center text-4xl font-semibold md:block"
      >Your <span class="text-secondary">Search</span> Results
    </span>
    {{ console.log(items) }}
    <div class="mt-8 flex flex-col gap-6 md:flex-row">
      <div class="w-full md:w-[450px]">
        <span class="flex text-center text-2xl font-medium">
          Search&nbsp;<span class="text-secondary">Filters&nbsp;</span>
          <Filter height="35" />
        </span>
        <p class="mb-2">Filter by tags:</p>
        <TagsInput v-model="modelValue" />
        <p class="my-2">Filter by time:</p>
        <p class="rounded-md border p-2">{{ formatTime(time[0]) }} to {{ formatTime(time[1]) }}</p>
        <Slider
          :min-steps-between-thumbs="1"
          class="z-0 my-5"
          v-model="time"
          :max="360"
          :step="30"
        />
        <Button @click="submitSearch">Apply Filters</Button>
      </div>
      <div class="h-[1px] bg-zinc-300 md:h-auto md:w-[1px]"></div>
      <span class="flex text-center text-4xl font-semibold md:hidden"
        >Your <span class="text-secondary">Search</span> Results
      </span>
      <div class="grid h-fit w-full grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3">
        <CardSkeleton v-for="n in 12" v-if="loading"></CardSkeleton>
        <FoodCard v-else v-for="item in items" :item="item" />
      </div>
    </div>
  </div>
</template>
