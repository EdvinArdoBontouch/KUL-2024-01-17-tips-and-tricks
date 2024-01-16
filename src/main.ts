import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import { router } from "./router";
import { reverseDirective } from "./directives/reverse";

const app = createApp(App);
app.use(router);
app.directive<Element, boolean>("reverse", reverseDirective);
app.mount("#app");
