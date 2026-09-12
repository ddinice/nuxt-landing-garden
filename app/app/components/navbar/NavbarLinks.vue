<script setup lang="ts">
import type { NavbarItem } from "@/types/navbar";

interface Props {
  links: NavbarItem[];
  isOpen: boolean;
  variant?: "navbar" | "drawer";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "navbar",
});

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>
<template>
  <nav
    :class="{
      'flex flex-row gap-6': props.variant === 'navbar',
      'flex flex-col text-olive-200 px-5 py-3': props.variant === 'drawer',
    }"
  >
    <NuxtLink
      v-for="(link, i) in props.links"
      :key="link.id"
      :to="link.href"
      :style="{ '--i': i }"
      :class="{
        'text-base text-c-green-700 hover:text-c-green-500 transition-all': props.variant === 'navbar',
        'text-3xl drawer__item border-b border-[#f1eee738] py-4 heading leading-none last:border-0 font-thin': props.variant === 'drawer',
      }"
      @click="$emit('close')"
    >
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>
