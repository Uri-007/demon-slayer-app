import { defineStore } from "pinia";

export const useCharacterStore = defineStore("characters", {
  state: () => ({
    characters: [],
    pagination: null,
    loading: false,
    error: null,
  }),
  actions: {
    setCharacters(chars) {
      this.characters = chars;
    },
    setPagination(p) {
      this.pagination = p;
    },
  },
});
