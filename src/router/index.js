import { createRouter, createWebHistory } from "vue-router";
import Characters from "../views/Characters.vue";
import MemoryGame from "../views/MemoryGame.vue";

const routes = [
  { path: "/", name: "Characters", component: Characters },
  { path: "/memorama", name: "MemoryGame", component: MemoryGame },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
