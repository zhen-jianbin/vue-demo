import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./routes";
import "./assets/css/main.css";
import "./assets/css/reset.css";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
