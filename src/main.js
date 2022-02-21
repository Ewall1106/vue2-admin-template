import Vue from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import "normalize.css/normalize.css";
import "./styles/index.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./icons";
// import "./utils/permission";

import * as filters from "@/filters";
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.use(ElementUI).use(Antd);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
