<script setup lang="ts">
import { Settings2 } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
</script>
<template>
  <section class="w-11/12 overflow-hidden">
    <div class="flex flex-col">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User Cover"
        class="h-[11rem] w-full rounded-3xl border object-cover shadow-md sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[20rem]"
      />

      <div class="mx-auto flex w-[90%] justify-between sm:w-[80%]">
        <div class="flex">
          <img
            src="https://i.pinimg.com/originals/97/32/ca/9732cad6d9e5feaa4b0e401855091b31.jpg"
            alt="User Profile"
            class="outline-3 relative bottom-[3rem] h-[5rem] w-[5rem] rounded-full outline outline-offset-2 outline-secondary sm:bottom-[4rem] sm:h-[7rem] sm:w-[7rem] md:h-[8rem] md:w-[8rem] lg:bottom-[5rem] lg:h-[10rem] lg:w-[10rem]"
          />
          <p
            class="my-4 w-full pl-4 text-left font-serif text-xl text-gray-800 dark:text-white sm:mx-4 sm:text-3xl md:text-3xl lg:text-4xl"
          >
            Tejas Gawde
            <p class="text-xl text-zinc-700">@tejasg2</p>
          </p>
        </div>
        <Button variant="outline" class="mt-5 border-2 px-2.5"><Settings2 /></Button>
      </div>

      <div
        class="relative -top-4 mx-auto flex w-[90%] flex-col items-center gap-4 sm:-top-4 sm:w-[92%] md:-top-6 md:w-[90%] lg:-top-8 lg:w-[90%] xl:w-[80%]"
      >
        <p class="text-md w-fit text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis labore
          consectetur voluptatibus mollitia dolorem veniam omnis ut quibusdam minima sapiente
          repellendus asperiores explicabo, eligendi odit, dolore similique fugiat dolor, doloremque
          eveniet. Odit, consequatur. Ratione voluptate exercitationem hic eligendi vitae animi nam
          in, est earum culpa illum aliquam.
        </p>
      </div>
    </div>
  </section>
</template>
