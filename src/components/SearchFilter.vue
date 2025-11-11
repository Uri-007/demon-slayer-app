<template>
  <div
    class="flex flex-wrap gap-4 items-center justify-center mb-10 mt-8 bg-gradient-to-r from-emerald-950 via-black to-red-900 p-5 rounded-2xl shadow-lg border border-red-800/40"
  >
    <!-- Input de búsqueda -->
    <div class="relative flex-1 min-w-[250px]">
      <input
        v-model="q"
        @input="$emit('search', q)"
        placeholder="Buscar personaje..."
        class="w-full px-4 py-2 rounded-lg bg-black/60 text-white placeholder-gray-400 border border-red-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40 outline-none transition-all duration-300 shadow-inner"
      />
      <div
        class="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-r from-transparent via-red-600/10 to-transparent animate-glow"
      ></div>
    </div>

    <!-- Filtro por raza -->
    <div class="relative">
      <select
        v-model="race"
        @change="$emit('filter', race)"
        class="px-4 py-2 rounded-lg bg-black/60 text-white border border-red-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40 outline-none transition-all duration-300 shadow-inner"
      >
        <option value="">Todas las razas</option>
        <option v-for="r in races" :key="r" :value="r">{{ r }}</option>
      </select>
      <div
        class="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-r from-transparent via-red-600/10 to-transparent animate-glow"
      ></div>
    </div>

    <!-- Botón limpiar -->
    <button
      @click="$emit('clear')"
      class="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-red-700 to-emerald-700 hover:from-red-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-md border border-red-800/40"
    >
      Limpiar
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({ races: { type: Array, default: () => [] } });

const q = ref("");
const race = ref("");
</script>
