<script setup lang="ts">
import Button from "./components/ui/button/Button.vue"
import { ArrowUpIcon } from '@lucide/vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 md:flex-row">
    <Button variant="outline">
      Button
    </Button>
    <Button variant="outline" size="icon" aria-label="Submit">
      <ArrowUpIcon />
    </Button>
  </div>
</template>
