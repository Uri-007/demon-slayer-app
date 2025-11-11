<template>
  <MainLayout>
    <div class="max-w-6xl mx-auto px-4">
      <SearchFilter
        :races="races"
        @search="onSearch"
        @filter="onFilter"
        @clear="clear"
      />

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
      >
        <CharacterCard
          v-for="c in displayed"
          :key="c.id"
          :character="c"
          @open="openModal"
        />
      </div>

      <CharacterModal
        :open="modalOpen"
        :character="selected"
        @close="modalOpen = false"
      />
      <Pagination
        v-if="store.pagination"
        :current-page="store.pagination.currentPage"
        :total-pages="store.pagination.totalPages"
        @change="changePage"
      />
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import CharacterCard from "../components/CharacterCard.vue";
import CharacterModal from "../components/CharacterModal.vue";
import SearchFilter from "../components/SearchFilter.vue";
import MainLayout from "../layouts/MainLayout.vue";
import { useCharacterStore } from "../store";
import { fetchCharacters } from "../services/api";
import Pagination from "../components/Pagination.vue";

const store = useCharacterStore();
const selected = ref(null);
const modalOpen = ref(false);
const query = ref("");
const raceFilter = ref("");
const races = ref([]);

async function load() {
  store.loading = true;
  try {
    const data = await fetchCharacters();
    const list = data?.content || [];
    store.setCharacters(list);
    store.setPagination(data.pagination);
    races.value = [...new Set(list.map((i) => i.race).filter(Boolean))];
  } catch (e) {
    store.error = e;
  } finally {
    store.loading = false;
  }
}

function openModal(c) {
  selected.value = c;
  modalOpen.value = true;
}

function onSearch(q) {
  query.value = q;
}

function onFilter(r) {
  raceFilter.value = r;
}

function clear() {
  query.value = "";
  raceFilter.value = "";
}

const displayed = computed(() => {
  return store.characters.filter((c) => {
    const matchesQuery =
      !query.value || c.name.toLowerCase().includes(query.value.toLowerCase());
    const matchesRace = !raceFilter.value || c.race === raceFilter.value;
    return matchesQuery && matchesRace;
  });
});

async function changePage(page) {
  if (page < 1 || page > store.pagination.totalPages) return;

  store.loading = true;
  try {
    const data = await fetchCharacters(page);
    const list = data?.content || [];
    store.setCharacters(list);
    store.setPagination(data.pagination);
  } catch (e) {
    store.error = e;
  } finally {
    store.loading = false;
  }
}

onMounted(load);
</script>
