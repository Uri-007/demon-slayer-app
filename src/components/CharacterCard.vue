<template>
  <div
    ref="cardRef"
    class="group relative rounded-2xl shadow-xl overflow-visible transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-emerald-900 via-red-900 to-black p-[1px] mt-14"
  >
    <div class="bg-white rounded-2xl overflow-visible relative">
      <div
        class="relative flex justify-center -mt-14 transition-transform duration-500"
        :style="{ transform: `translateY(${translateY}px) scale(${scale})` }"
      >
        <img
          :src="character.img"
          alt="character image"
          class="h-44 object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.45)] z-10 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2"
        />
      </div>

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl opacity-70 pointer-events-none"
      ></div>

      <div class="p-5 pt-10 text-gray-900 text-center relative z-20">
        <h3 class="text-lg font-bold mb-1 text-ds-dark">
          {{ character.name }}
        </h3>
        <p class="text-sm">
          <span class="font-semibold">Género:</span>
          {{ character.gender || "Desconocido" }}
        </p>
        <p class="text-sm mb-3">
          <span class="font-semibold">Raza:</span>
          {{ character.race || "Desconocida" }}
        </p>

        <button
          @click="$emit('open', character)"
          class="mt-2 w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-red-700 via-red-600 to-red-400 hover:from-red-600 hover:to-red-300 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Ver más
        </button>
      </div>

      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-red-600/50 blur-xl rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({ character: Object });
const cardRef = ref(null);
const translateY = ref(0);
const scale = ref(1);

const handleScroll = () => {
  if (!cardRef.value) return;
  const rect = cardRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const visible =
    1 -
    Math.abs(rect.top + rect.height / 2 - windowHeight / 2) /
      (windowHeight / 2);
  const clamped = Math.max(0, Math.min(1, visible));

  translateY.value = -clamped * 20; 
  scale.value = 1 + clamped * 0.05; 
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
