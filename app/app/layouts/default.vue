<script setup lang="ts">
import Navbar from '@/components/navbar/Navbar.vue';
</script>

<template>
  <div class="max-w-full m-auto bg-c-cream-50 2xl:max-w-[2000px]">
    <div>
      <Navbar />
      <slot />
    </div>
  </div>
</template>
