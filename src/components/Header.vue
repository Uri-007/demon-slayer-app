<template>
  <header
    class="relative bg-gradient-to-r from-emerald-950 via-red-900 to-black text-white shadow-lg overflow-hidden"
  >
    <!-- Efecto de energía detrás del header -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.2),transparent_70%)] animate-pulse-slow"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,200,0.15),transparent_70%)] animate-pulse-slow"
    ></div>

    <!-- Contenido -->
    <div
      class="relative max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"
    >
      <!-- Logo / Título -->
      <h1
        class="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-red-500 via-emerald-400 to-white bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:scale-105 transform transition-transform duration-300"
      >
        Demon Slayer - Fann App
      </h1>

      <!-- Navegación -->
      <nav class="space-x-6 text-lg font-medium">
        <router-link to="/" class="relative group transition-all duration-300">
          <span
            class="pb-1 bg-gradient-to-r from-red-500 to-emerald-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500"
          >
            Personajes
          </span>
        </router-link>

        <router-link
          to="/memorama"
          class="relative group transition-all duration-300"
        >
          <span
            class="pb-1 bg-gradient-to-r from-emerald-400 to-red-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500"
          >
            Memorama
          </span>
        </router-link>
      </nav>
    </div>

    <!-- Línea decorativa inferior -->
    <div
      class="h-[3px] bg-gradient-to-r from-red-600 via-emerald-500 to-black shadow-[0_0_10px_rgba(255,0,0,0.6)]"
    ></div>
  </header>
</template>

<script setup></script>
