import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import ReverseFix from "./components/ReverseFix.vue";
import ReverseProblem from "./components/ReverseProblem.vue";

export const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/reverse",
    name: "column-reverse",
    children: [
      { path: "", name: "Problem", component: ReverseProblem },
      { path: "fix", name: "Fix", component: ReverseFix },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
