import { createApp } from 'vue'
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index";

import MyDirective from "./utils/directive";

const app = createApp(App);

app.use(MyDirective);

app.use(router);
app.use(ElementPlus);
app.mount("#app");
