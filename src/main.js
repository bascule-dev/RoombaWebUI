import Vue from 'vue'
import App from './App.vue'
import Config from "./Config"
Config.init();

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial);

// import RangeSlider from 'vue-range-slider'
// import 'vue-range-slider/dist/vue-range-slider.css'

const app = new Vue({
  el: '#app',
  render: h => h(App)
});


window.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 38: app.$children[0].startTouch(0, 1); break; // up
    case 40: app.$children[0].startTouch(0, -1); break; // down
    case 37: app.$children[0].startTouch(-1, 0); break; // left
    case 39: app.$children[0].startTouch(1, 0); break; // right
  }
});
window.addEventListener("keyup", ()=> {
  app.$children[0].onEndTouch();
});

