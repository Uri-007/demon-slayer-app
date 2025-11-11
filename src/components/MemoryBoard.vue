<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center"
  >
    <div
      v-for="card in cards"
      :key="card.uuid"
      class="relative w-32 h-40 cursor-pointer perspective"
      @click="flip(card)"
    >
      <!-- Contenedor 3D -->
      <div
        class="transition-transform duration-500 transform-style-preserve-3d relative w-full h-full"
        :class="{ 'rotate-y-180': isFlipped(card) || isMatched(card) }"
      >
        <!-- Reverso -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-900 via-red-900 to-black rounded-xl shadow-xl backface-hidden flex items-center justify-center"
        >
          <img
            src="https://logolook.net/wp-content/uploads/2021/12/Demon-Slayer-Logo.png"
            alt="Kimetsu no Yaiba Logo"
            class="w-24 h-24 object-contain opacity-90 drop-shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </div>

        <!-- Anverso -->
        <div
          class="absolute inset-0 rounded-xl overflow-hidden transform rotate-y-180 backface-hidden"
        >
          <img :src="card.img" alt="card" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  cards: Array,
  flipped: Array,
  matched: Array,
});

const emit = defineEmits(["flip"]);

function flip(card) {
  emit("flip", card);
}

// Helpers para saber si la carta está volteada o emparejada
function isFlipped(card) {
  return props.flipped.some((f) => f.uuid === card.uuid);
}
function isMatched(card) {
  return props.matched.includes(card.uuid);
}
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}
.transform-style-preserve-3d {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
