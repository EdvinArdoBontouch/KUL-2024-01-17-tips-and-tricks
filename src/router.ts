import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import ReverseFix from "./components/ReverseFix.vue";
import ReverseProblem from "./components/ReverseProblem.vue";
import TransitionHeightProblem from "./components/TransitionHeightProblem.vue";
import TransitionHeightFix from "./components/TransitionHeightFix.vue";

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
  {
    path: "/transition-height",
    name: "Transition height",
    children: [
      { path: "", name: "Problem", component: TransitionHeightProblem },
      { path: "fix", name: "Fix", component: TransitionHeightFix },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
