import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/libs/bootstrap/bootstrap-4.6.min.css"
import "./assets/css/styles.min.css"
import Vue3EasyDataTable from 'vue3-easy-data-table';
import { FontAwesomeIcon } from './plugins/font-awesome'

import setupInterceptors from './services/setupInterceptors';

setupInterceptors(store);

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component('EasyDataTable', Vue3EasyDataTable)
  .mount("#app");
