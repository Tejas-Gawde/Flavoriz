<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronDown, ChevronUp, Plus, Menu } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { computed, onMounted, ref } from 'vue'

const isOpen = ref(false)
const isMenuOpen = ref(false)

const isAuthenticated = ref(false)

// Check for authentication on component mount
onMounted(async () => {
  try {
    const response = await fetch('/api/auth/check', {
      credentials: 'include' // Important for cookies
    })
    isAuthenticated.value = response.ok
  } catch (error) {
    isAuthenticated.value = false
  }
})

function togglePopover() {
  isOpen.value = !isOpen.value
}
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

const nav = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Recipes',
    path: '/recipes'
  }
]

const variantClass = computed(() => (isMenuOpen.value ? 'opacity-100' : 'opacity-0'))
</script>

<template>
  <nav
    class="mx-auto border-b border-gray-300 bg-background px-5 py-3 md:flex md:items-center md:justify-between"
  >
    <div class="flex flex-1 items-center justify-between">
      <RouterLink class="flex-1" to="/recipes">
        <span class="text-2xl font-medium">Flavou<span class="text-secondary">riz</span> </span>
      </RouterLink>
      <div class="hidden flex-1 justify-center gap-5 sm:flex">
        <RouterLink
          class="rounded-md p-2 transition-colors hover:bg-accent/50 hover:text-secondary"
          v-for="(item, i) in nav"
          :key="i"
          :to="item.path"
        >
          {{ item.label }}
        </RouterLink>
      </div>
      <div class="hidden flex-1 justify-end gap-5 sm:flex">
        <Button as-child><RouterLink to="/signin"> Login </RouterLink></Button>
        <Button as-child size="icon" variant="ghost"
          ><RouterLink to="/add-recipe"> <Plus /> </RouterLink
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
      <Button @click="toggleMenu" class="flex sm:hidden" variant="ghost" size="icon"
        ><Menu
      /></Button>
    </div>
    <div :class="isMenuOpen ? 'flex' : 'hidden'" class="mt-8 flex flex-col space-y-4 sm:hidden">
      <RouterLink
        class="rounded-md p-2 transition-colors hover:bg-accent/50 hover:text-secondary"
        v-for="(item, i) in nav"
        :key="i"
        :to="item.path"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </nav>
</template>
