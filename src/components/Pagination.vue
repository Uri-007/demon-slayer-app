<template>
  <div class="flex justify-center items-center mt-10 space-x-3">
    <!-- Botón anterior -->
    <button
      @click="$emit('change', currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-4 py-2 rounded-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 disabled:opacity-40 disabled:cursor-not-allowed transform hover:scale-105"
    >
      ← Anterior
    </button>

    <!-- Indicador de página -->
    <span
      class="text-lg font-bold text-ds-red bg-black/30 px-4 py-2 rounded-lg shadow-inner"
    >
      Página {{ currentPage }} / {{ totalPages }}
    </span>

    <!-- Botón siguiente -->
    <button
      @click="$emit('change', currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 rounded-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 disabled:opacity-40 disabled:cursor-not-allowed transform hover:scale-105"
    >
      Siguiente →
    </button>
  </div>
</template>

<script setup>
defineProps({
  currentPage: Number,
  totalPages: Number,
});
</script>
