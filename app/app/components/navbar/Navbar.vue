<script setup lang="ts">
import { ref, watch } from "vue";
import { Leaf } from "@lucide/vue";
import { Button } from "@/components/ui/button";
import Drawer from "@/components/Drawer.vue";
import { navbarlinks } from "@/constants/navbar";
import NavbarLinks from "./NavbarLinks.vue";
import NavbarHeader from "@/components/navbar/NavbarHeader.vue";
import logo from "@/assets/images/logo.png";

const { business } = useAppConfig();

const open = ref(false);
// amination index for the last element
const lastIndex = ref(2);

watch(open, (v) => {
  document.body.style.overflow = v ? "hidden" : "";
});

const handleTogleOpen = () => {
  return (open.value = !open.value);
};
</script>

<template>
  <div class="w-full border-b border-c-sage-900">
    <NavbarHeader :title="business.name" :img="logo" @toggle="handleTogleOpen">
      <div>
        <div class="block md:hidden">
          <Leaf @click="handleTogleOpen" class="w-5 text-c-green-500" />
        </div>
        <div class="hidden md:flex flex-row gap-8 items-center">
          <NavbarLinks :links="navbarlinks" :is-open="open" />
          <Button
            as="a"
            href="#"
            variant="brandGreen"
            size="c-lg"
            class="hidden lg:flex"
          >
            {{ business.phone }}
          </Button>
        </div>
      </div>
    </NavbarHeader>
    <Drawer :is-open="open">
      <template #header>
        <NavbarHeader
          :title="business.name"
          :img="logo"
          theme="dark"
          @toggle="handleTogleOpen"
        >
          <Leaf @click="handleTogleOpen" class="w-5 text-olive-200" />
        </NavbarHeader>
      </template>
      <template #default>
        <NavbarLinks :links="navbarlinks" :is-open="open" variant="drawer" />
      </template>
      <template #footer>
        <div
          class="drawer__item px-5 py-3"
          :style="{ '--i': navbarlinks.length + lastIndex }"
        >
          <p class="uppercase text-olive-300 text-xs">
            Devis gratuit sur place
          </p>
          <a
            :href="`tel:${business.phone}`"
            class="mt-3 block heading text-4xl leading-none font-light text-olive-200"
          >
            {{ business.phone }}
          </a>
          <div class="mt-4 flex gap-2 justify-between w-full">
            <Button as="a" href="#" variant="brandWhite" size="c-lg" class="flex-1">
              WhatsApp
            </Button>
            <Button as="a" href="#" variant="brandOutline" size="c-lg" class="flex-1">
              Messenger
            </Button>
          </div>
          <p class="mt-5 text-xl text-olive-200">
            {{ business.address }}<br />
            {{ business.hours }}<br />
          </p>
        </div>
      </template>
    </Drawer>
  </div>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 180ms var(--ease-brand);
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

:deep(.drawer-enter-active .drawer__item) {
  animation: drawer-item 340ms var(--ease-brand) backwards;
  animation-delay: calc(40ms + var(--i) * 50ms);
}

@keyframes drawer-item {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
