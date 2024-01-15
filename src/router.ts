import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";

export const routes = [{ path: "/", title: "Home", component: Home }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
