<template>
  <transition name="fade-zoom">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <!-- Contenedor principal -->
      <div
        class="relative bg-gradient-to-br from-emerald-950 via-red-900 to-black rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.5)] p-[2px] max-w-3xl w-[90%] animate-pop"
      >
        <!-- Interior blanco -->
        <div
          class="bg-gradient-to-b from-white via-gray-100 to-gray-200 rounded-2xl overflow-hidden relative"
        >
          <!-- Botón cerrar -->
          <button
            @click="$emit('close')"
            class="absolute top-3 right-3 text-red-700 hover:text-red-500 text-2xl font-bold transition-transform hover:scale-110 cursor-pointer"
          >
            ✕
          </button>

          <div class="flex flex-col md:flex-row gap-6 p-6 items-center">
            <!-- Imagen con animación -->
            <div
              class="relative flex justify-center items-center group transition-transform duration-500"
            >
              <img
                :src="character.img"
                alt="character image"
                class="w-48 h-48 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
              />
              <!-- Aura luminosa -->
              <div
                class="absolute inset-0 rounded-full bg-gradient-to-r from-red-600/40 via-emerald-500/30 to-transparent blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"
              ></div>
            </div>

            <!-- Detalles -->
            <div class="text-gray-900 flex-1 text-center md:text-left">
              <h2
                class="text-3xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-emerald-700 to-black drop-shadow-md"
              >
                {{ character.name }}
              </h2>
              <p class="text-sm md:text-base mb-1">
                <span class="font-semibold text-red-700">Género:</span>
                {{ character.gender || "Desconocido" }}
              </p>
              <p class="text-sm md:text-base mb-3">
                <span class="font-semibold text-red-700">Raza:</span>
                {{ character.race || "Desconocida" }}
              </p>

              <p class="text-sm md:text-base leading-relaxed text-gray-700">
                {{ character.description || "Sin descripción disponible." }}
              </p>
            </div>
          </div>

          <!-- Línea decorativa inferior -->
          <div
            class="h-2 bg-gradient-to-r from-emerald-600 via-red-700 to-black"
          ></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  open: Boolean,
  character: { type: Object, default: () => ({}) },
});
</script>
