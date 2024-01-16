import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import ReverseFix from "./components/ReverseFix.vue";
import ReverseProblem from "./components/ReverseProblem.vue";
import TransitionHeightProblem from "./components/TransitionHeightProblem.vue";
import TransitionHeightFix from "./components/TransitionHeightFix.vue";

export const routes = [
  { path: "/", title: "Home", component: Home },
  {
    path: "/reverse",
    title: "column-reverse",
    children: [
      { path: "", title: "Problem", component: ReverseProblem },
      { path: "fix", title: "Fix", component: ReverseFix },
    ],
  },
  {
    path: "/transition-height",
    title: "Transition height",
    children: [
      { path: "", title: "Problem", component: TransitionHeightProblem },
      { path: "fix", title: "Fix", component: TransitionHeightFix },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
