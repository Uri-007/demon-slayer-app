<template>
  <div>
    <Header />
    <main class="py-8">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>
