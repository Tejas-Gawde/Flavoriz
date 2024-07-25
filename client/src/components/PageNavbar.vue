<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
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
      <RouterLink to="/signin">
        <Button>Login</Button>
      </RouterLink>
      <HoverCard :open-delay="100">
        <HoverCardTrigger
          ><div class="size-10 rounded-full bg-secondary hover:cursor-pointer"></div
        ></HoverCardTrigger>
        <HoverCardContent :side-offset="11" class="w flex flex-col rounded-b-lg">
          <RouterLink to="/profile">
            <Button class="w-full border-none" variant="outline">Profile</Button>
          </RouterLink>
          <RouterLink to="/profile">
            <Button class="w-full border-none" variant="outline">Preferences</Button>
          </RouterLink>
          <RouterLink to="/profile">
            <Button class="w-full border-none hover:bg-red-600 hover:text-white" variant="outline"
              >Logout</Button
            >
          </RouterLink>
        </HoverCardContent>
      </HoverCard>
    </div>
  </nav>
</template>
