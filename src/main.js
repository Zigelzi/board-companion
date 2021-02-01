import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";

// Global Components
import Button from "@/components/Button";
Vue.component("v-button", Button);

// Styling imports
import "@/assets/styles/index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
