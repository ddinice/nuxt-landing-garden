<script setup lang="ts">
const props = defineProps(["isOpen"]);
</script>

<template>
  <Transition name="drawer" :duration="{ enter: 800, leave: 180 }">
    <div
      v-if="props.isOpen"
      class="fixed inset-0 z-50 flex flex-col bg-c-green-700 text-ej-on-brand md:hidden"
    >
      <div>
        <slot name="header"></slot>
      </div>
      <div>
        <slot />
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </Transition>
</template>
