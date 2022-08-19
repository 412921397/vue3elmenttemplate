import { createApp } from "vue";
import App from "./App.vue";

import regesiterApp from "./global";
import qlRequest from "./service";
import store from "./store";
import router from "./router";

import "normalize.css";
import "./assets/css/index.css";

interface IDataType {
  args: any;
  headers: { [key: string]: any };
  origin: string;
  url: string;
}

const app = createApp(App);

app.use(regesiterApp);
app.use(store);
app.use(router);
app.mount("#app");

qlRequest.get<IDataType>({ url: "/get", showLoading: false, params: { name: "why", age: 18 } }).then((res) => {
  console.log(res);
  console.log(res.args);
});

console.log(import.meta.env.VITE_APP_BASE_NAME);
