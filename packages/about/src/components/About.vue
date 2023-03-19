<template>
  <div class="about-container">
    <div class="content">
      <h1>About</h1>
      <div v-for="data in turtle">
        <!-- <LottieAnimation path="{{data}}" /> -->
      </div>
      <iframe
        class="iframe-container"
        src="https://embed.lottiefiles.com/animation/67858"
      ></iframe>
      <p>
        This is a Microfrontend application where there are five sub application
        which are integrated into container main application. Each sub
        application runs in production which container app and can run also run
        in isolation. sub applications are totaly developed Isolated does not
        depend on each other for functining. Each sub application is made using
        Reactjs and Vuejs
      </p>
    </div>
  </div>
</template>
<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // i
import turtle from "./turtle.json";
export default {
  name: "About",
  components: {
    LottieAnimation,
  },
  data() {
    return {
      turtle: turtle,
    };
  },
};
</script>
<style scoped>
.about-container {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica;
}
.about-container h1 {
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0.35em;
  text-align: center;
  font-size: 3.75rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833em;
}
.about-container p {
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 16px;
  text-align: center;
  font-size: 1.5rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.334;
  letter-spacing: 0em;
}
.about-container .content{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  width: 60%;
  margin: 0 auto;
}
.iframe-container {
  margin: 10px auto;
  border: 0;
  width: 60%;
  height: 30vh;
}
</style>
