import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import ReverseFix from "./components/ReverseFix.vue";
import ReverseProblem from "./components/ReverseProblem.vue";
import TransitionHeightProblem from "./components/TransitionHeightProblem.vue";
import TransitionHeightFix from "./components/TransitionHeightFix.vue";
import FloatProblem from "./components/FloatProblem.vue";
import FloatFix from "./components/FloatFix.vue";
import DateProblem from "./components/DateProblem.vue";
import DateFix from "./components/DateFix.vue";
import NumberProblem from "./components/NumberProblem.vue";
import NumberFix from "./components/NumberFix.vue";
import ScrollShadow from "./components/ScrollShadow.vue";

export const routes = [
  { path: "/", title: "Home", component: Home },
  {
    path: "/float",
    title: "Float",
    children: [
      { path: "", title: "Problem", component: FloatProblem },
      { path: "fix", title: "Fix", component: FloatFix },
    ],
  },
  {
    path: "/number",
    title: "Number",
    children: [
      { path: "", title: "Problem", component: NumberProblem },
      { path: "fix", title: "Fix", component: NumberFix },
    ],
  },
  {
    path: "/date",
    title: "Date",
    children: [
      { path: "", title: "Problem", component: DateProblem },
      { path: "fix", title: "Fix", component: DateFix },
    ],
  },
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
  {
    path: "/scroll-shadow",
    title: "Scroll shadow",
    component: ScrollShadow,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
