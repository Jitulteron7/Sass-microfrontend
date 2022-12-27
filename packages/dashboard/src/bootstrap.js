import { createApp } from "vue";
import DashBoard from "./components/Dashboard.vue";

const mount = (el) => {
  const app = createApp(DashBoard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
