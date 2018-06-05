import Vue from 'vue'
import App from './App.vue'
import Util from "./Util"
Util.init();

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial);

// import RangeSlider from 'vue-range-slider'
// import 'vue-range-slider/dist/vue-range-slider.css'

new Vue({
  el: '#app',
  render: h => h(App)
});
