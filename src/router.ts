import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Reverse from "./components/Reverse.vue";
import ReverseBuggy from "./components/ReverseBuggy.vue";

export const routes = [
  { path: "/", title: "Home", component: Home },
  { path: "/reverse-buggy", title: "ReverseBuggy", component: ReverseBuggy },
  { path: "/reverse", title: "Reverse", component: Reverse },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
