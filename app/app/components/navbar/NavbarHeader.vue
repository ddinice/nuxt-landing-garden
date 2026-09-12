<script setup lang="ts">

interface Props {
  title: string;
  img: string;
  theme?: "light" | "dark";
}

const props = withDefaults(defineProps<Props>(), {
  theme: "light",
});

const emit = defineEmits<{
  (e: "toggle"): void;
}>();
</script>

<template>
  <div class="flex justify-between items-center px-5 py-3 md:py-0 md:h-20">
    <div class="flex gap-2 items-center">
      <img v-if="props.img" class="w-7 md:w-15" :src="props.img" />
      <span
        :class="`heading md:text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`"
      >
        {{ props.title ? props.title : "" }}
      </span>
    </div>
    <slot />
  </div>
</template>
