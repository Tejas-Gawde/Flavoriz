<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronDown, ChevronUp, Plus } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'

const isOpen = ref(false)
const togglePopover = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav
    class="flex h-16 items-center justify-between border-b border-gray-300 bg-background px-5 py-3"
  >
    <span class="flex-1 text-2xl font-medium">Flavou<span class="text-secondary">riz</span> </span>
    <div class="flex flex-1 justify-center gap-5">
      <RouterLink class="hover:text-secondary" to="/">Home</RouterLink>
      <RouterLink class="hover:text-secondary" to="/about">About</RouterLink>
      <RouterLink class="hover:text-secondary" to="/recipes">Recipes</RouterLink>
    </div>
    <div class="flex flex-1 justify-end gap-5">
      <Button as-child><RouterLink to="/signin"> Login </RouterLink></Button>
      <Button as-child size="icon" variant="ghost"
        ><RouterLink to="/addrecipe"> <Plus /> </RouterLink
      ></Button>
      <Popover @update:open="togglePopover">
        <PopoverTrigger as-child>
          <div class="flex cursor-pointer items-center gap-1">
            <div class="size-10 rounded-full bg-secondary"></div>
            <ChevronDown v-if="!isOpen" />
            <ChevronUp v-else="isOpen" />
          </div>
        </PopoverTrigger>
        <PopoverContent class="w-60">
          <div class="grid gap-4">
            <RouterLink
              to="/profile"
              class="h-10 w-full rounded-md border-none px-4 py-2 text-center text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Profile
            </RouterLink>
            <RouterLink
              to="/profile"
              class="h-10 w-full rounded-md border-none px-4 py-2 text-center text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Preferences
            </RouterLink>
            <RouterLink
              to="/profile"
              class="h-10 w-full rounded-md border-none px-4 py-2 text-center text-sm font-medium transition-colors hover:bg-red-600 hover:text-white"
            >
              Logout
            </RouterLink>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  </nav>
</template>
