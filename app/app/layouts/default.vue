<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';

</script>

<template>
  <div class="max-w-6xl m-auto bg-c-cream-50">
    <div>
      <Navbar />
      <slot />
    </div>
  </div>
</template>
