<template>
  <div
    class="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#1a1a1a] to-[#000] text-white font-sans"
  >
    <main class="p-6">
      <router-view />
    </main>

    <footer
      class="text-center py-4 text-sm opacity-90 border-t border-red-700 mt-10 bg-gradient-to-r from-black via-red-950 to-black text-gray-200"
    >
      <p>
        Proyecto inspirado en
        <span class="text-red-500 font-semibold">Demon Slayer</span> — hecho con
        Amor y <span class="text-emerald-400 font-semibold">Vue.js</span>
      </p>
      <p class="mt-1">
        Datos obtenidos de la
        <a
          href="https://www.demonslayer-api.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-red-400 hover:text-red-300 underline transition-colors duration-200"
        >
          Demon Slayer API
        </a>
        — créditos a su autor
      </p>
    </footer>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>
