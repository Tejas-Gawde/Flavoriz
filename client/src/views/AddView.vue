<script setup lang="ts"></script>
<template>
  <div class="w-full gap-6">
    <p class="mb-10 text-2xl font-semibold">Add Recipe</p>
    <div class="flex w-2/5 flex-col gap-2">
      <label class="text-lg">Recipe Title</label>
      <input type="text" placeholder="Title" class="h-10 rounded-lg bg-gray-200 px-6" />
    </div>
    <div class="flex w-2/5 flex-col gap-2">
      <label class="text-lg">Recipe Image</label>
      <input
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        class="h-10 text-sm text-gray-500 file:mr-5 file:rounded-lg file:border-0 file:bg-secondary-foreground file:px-6 file:py-2 file:text-sm file:font-medium file:text-secondary hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700"
      />
    </div>
    <div class="flex w-2/5 flex-col gap-2">
      <label class="text-lg">Recipe Thumbnail</label>
      <input
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        class="h-10 text-sm text-gray-500 file:mr-5 file:rounded-lg file:border-0 file:bg-secondary-foreground file:px-6 file:py-2 file:text-sm file:font-medium file:text-secondary hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700"
      />
    </div>
    <div class="flex w-2/5 flex-col gap-2">
      <label class="text-lg">Recipe</label>
      <textarea
        style="field-sizing: content"
        type="text"
        placeholder="Recipe"
        class="min-h-10 rounded-lg bg-gray-200 px-6 py-2"
      />
    </div>
  </div>
</template>
