<template>
  <MainLayout>
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-4 text-center text-ds-red">
        Memorama - Demon Slayer
      </h2>

      <div
        class="flex justify-between items-center mb-4 bg-black/20 p-3 rounded-lg"
      >
        <div class="text-lg font-semibold">Tiempo: {{ time }}s</div>
        <div class="text-lg font-semibold">Puntos: {{ points }}</div>
        <button
          @click="reset"
          class="px-4 py-2 rounded-lg bg-gradient-to-r from-red-700 to-red-500 text-white hover:scale-105 transition-transform duration-200"
        >
          Reiniciar
        </button>
      </div>

      <MemoryBoard
        :cards="cards"
        :flipped="flipped"
        :matched="matched"
        @flip="flipCard"
      />

      <div
        v-if="won"
        class="mt-8 p-6 bg-gradient-to-br from-emerald-900 via-red-900 to-black rounded-xl text-center text-white animate-pulse"
      >
        <h3 class="text-2xl font-bold mb-2">
          ¡Felicidades, cazador de demonios!
        </h3>
        <p class="mb-4">
          Has completado el memorama con {{ points }} puntos en
          {{ time }} segundos.
        </p>
        <button
          @click="reset"
          class="py-2 px-6 rounded-lg bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 transition-all duration-200"
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import { useCharacterStore } from "../store";
import { shuffleArray } from "../utils/shuffle";
import MemoryBoard from "../components/MemoryBoard.vue";

const store = useCharacterStore();

const time = ref(0);
const timer = ref(null);
const points = ref(0);
const won = ref(false);
const cards = ref([]);
const flipped = ref([]);
const matched = ref([]);

function buildCards() {
  const pool = store.characters.slice(0, 5); // usa 5 para emparejar 10 cartas
  const pairCards = pool.flatMap((c) => [
    { ...c, uuid: c.id + "-a" },
    { ...c, uuid: c.id + "-b" },
  ]);
  cards.value = shuffleArray(pairCards);
}

function flipCard(card) {
  if (
    flipped.value.some((f) => f.uuid === card.uuid) ||
    matched.value.includes(card.uuid)
  )
    return;
  if (flipped.value.length === 2) return;

  flipped.value.push(card);

  if (flipped.value.length === 2) {
    const [a, b] = flipped.value;
    if (a.id === b.id) {
      matched.value.push(a.uuid, b.uuid);
      points.value += 10;

      if (matched.value.length === cards.value.length) {
        won.value = true;
        clearInterval(timer.value);
      }

      flipped.value = [];
    } else {
      setTimeout(() => {
        flipped.value = [];
      }, 1000);
    }
  }
}

function reset() {
  time.value = 0;
  points.value = 0;
  won.value = false;
  flipped.value = [];
  matched.value = [];
  buildCards();
  startTimer();
}

function startTimer() {
  clearInterval(timer.value);
  timer.value = setInterval(() => {
    time.value++;
  }, 1000);
}

onMounted(() => {
  if (store.characters.length === 0) {
    setTimeout(buildCards, 1000);
  } else {
    buildCards();
  }
  startTimer();
});

onBeforeUnmount(() => clearInterval(timer.value));
</script>
