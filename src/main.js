import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Global Components
import Button from "@/components/Button";

// Styling imports
import "@/assets/styles/index.css";

Vue.config.productionTip = false;
Vue.component("v-button", Button);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
