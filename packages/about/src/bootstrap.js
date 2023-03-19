import { createApp } from "vue";
import About from "./components/About.vue";

const mount = (el) => {
  const app = createApp(About);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#about-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
