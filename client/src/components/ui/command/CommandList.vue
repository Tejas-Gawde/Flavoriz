<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import type { ComboboxContentEmits, ComboboxContentProps } from 'radix-vue'
import { ComboboxContent, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<ComboboxContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    dismissable: false
  }
)
const emits = defineEmits<ComboboxContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxContent
    v-bind="forwarded"
    :class="cn('h-40 max-h-[300px] overflow-y-auto overflow-x-hidden md:h-[300px]', props.class)"
  >
    <div role="presentation">
      <slot />
    </div>
  </ComboboxContent>
</template>
