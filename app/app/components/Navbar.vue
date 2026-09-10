<script setup lang="ts">
import { Leaf } from "@lucide/vue";
import { ref, watch } from "vue";
import { Button } from "@/components/ui/button";

const open = ref(false);
const links = [
  { label: "Prestations", href: "#prestations" },
  { label: "Avant / après", href: "#avant-apres" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

watch(open, (v) => {
  document.body.style.overflow = v ? "hidden" : "";
});

// Escape closes.
if (import.meta.client) {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") open.value = false;
  });
}
</script>

<template>
  <div class="w-full border-b border-c-sage-900">
    <div class="px-5 py-3 flex justify-between">
      <div class="flex gap-2 items-center">
        <img class="w-7" src="../assets/images/logo.png" />
        <span class="heading"
          >Edelviane <span class="text-c-sage-400">—</span> Jardin</span
        >
      </div>
      <Leaf @click="open = !open" class="w-5" color="#1f3a2b" />
    </div>
    <Transition name="ej-menu" :duration="{ enter: 1200, leave: 180 }">
      <div
        v-if="open"
        id="menu-mobile"
        class="ej-menu fixed inset-0 z-50 flex flex-col bg-c-green-700 text-ej-on-brand md:hidden"
      >
        <div class="px-5 py-3 flex justify-between border-b border-[#f1eee738]">
          <div class="flex gap-2 items-center">
            <img class="w-7" src="../assets/images/logo.png" />
            <span class="heading text-white"
              >Edelviane <span class="text-c-sage-400">—</span> Jardin</span
            >
          </div>
          <Leaf @click="open = !open" class="w-5 text-gray-100" />
        </div>

        <nav class="flex flex-col px-5 py-3">
          <a
            v-for="(link, i) in links"
            :key="link.href"
            :href="link.href"
            :style="{ '--i': i }"
            class="ej-menu__item border-b border-[#f1eee738] py-4 heading text-3xl leading-none text-olive-200 last:border-0 font-thin"
            @click="open = false"
            >{{ link.label }}</a
          >
        </nav>

        <div
          class="ej-menu__item px-5 py-3 mt-10"
          :style="{ '--i': links.length + 2 }"
        >
          <p class="uppercase text-olive-300 text-xs">
            Devis gratuit sur place
          </p>
          <a
            href="tel:+41795845575"
            class="mt-3 block heading text-4xl leading-none font-light text-olive-200"
          >
            079 584 55 75
          </a>
          <div class="mt-4 flex gap-2">
            <Button as="a" href="#" variant="brandWhite" size="c-lg">WhatsApp</Button>
            <Button as="a" href="#" variant="brandOutline" size="c-lg">Messenger</Button>
          </div>
          <p
            class="mt-5 text-xl text-olive-200"
          >
            Av. de la Vogéaz 5, 1110 Morges<br />
            Lun–Ven 7h30–18h<br />
            Sam sur rendez-vous
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* ── 1. the panel ─────────────────────────────────── */
.ej-menu-enter-active,
.ej-menu-leave-active {
  transition: opacity 180ms var(--ease-brand);
}
.ej-menu-enter-from,
.ej-menu-leave-to {
  opacity: 0;
}

/* ── 2. the children, staggered ───────────────────── */
.ej-menu-enter-active .ej-menu__item {
  animation: ej-menu-item 340ms var(--ease-brand) backwards;
  animation-delay: calc(40ms + var(--i) * 50ms);
}

@keyframes ej-menu-item {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
