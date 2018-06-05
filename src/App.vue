<template>
  <div id="app">
    <div class="controller">
      <div class="controller__button controller__button--top">
        <md-button class="md-fab" @mousedown="startTouch(0, 1)" @touchstart="startTouch(0, 1)">
          <md-icon>arrow_drop_up</md-icon>
        </md-button>
      </div>
      <div class="controller__button  controller__button--bottom">
        <md-button class="md-fab" @mousedown="startTouch(0, -1)" @touchstart="startTouch(0, -1)">
          <md-icon>arrow_drop_down</md-icon>
        </md-button>
      </div>
      <div class="controller__button  controller__button--left">
        <md-button class="md-fab" @mousedown="startTouch(-1, 0)" @touchstart="startTouch(-1, 0)">
          <md-icon>arrow_left</md-icon>
        </md-button>
      </div>
      <div class="controller__button  controller__button--right">
        <md-button class="md-fab" @mousedown="startTouch(1, 0)" @touchstart="startTouch(1, 0)">
          <md-icon>arrow_right</md-icon>
        </md-button>
      </div>
    </div>

    <div class="speedUI">
      <div class="speedUI__title">Speed</div>
      <div class="speedUI__slider">
        <span class="speedUI__value">{{speed}}</span>

        <range-slider
          class="slider"
          min="1"
          max="100"
          v-model="speed">
        </range-slider>
      </div>
    </div>

    <div class="debug">x: {{x}} <br> y: {{y}} <br> touch: {{isTouch}}</div>
    <div class="debug">{{debugText}}</div>
  </div>
</template>

<script>

  import RangeSlider from 'vue-range-slider'
  // you probably need to import built-in style
  import 'vue-range-slider/dist/vue-range-slider.css'

  export default {
    name: 'app',
    components: {
      RangeSlider
    },
    data() {
      return {
        isTouch: false,
        debugText: "",
        x: 0,
        y: 0,
        speed: 10
      }
    },
    methods: {
      reset() {
        this.x = 0;
        this.y = 0;
        this.isTouch = false;
        this.debugText = "";
      },
      startTouch(x, y) {
        this.x = x;
        this.y = y;
        this.isTouch = true;
        this.addEvent();
        this.update();
      },
      addEvent() {
        console.log("[App] addevent");
        window.addEventListener("touchend", this.onEndTouch);
        window.addEventListener("mouseup", this.onEndTouch);
      },
      removeEvent() {
        window.removeEventListener("touchend", this.onEndTouch);
        window.removeEventListener("mouseup", this.onEndTouch);
      },
      onEndTouch() {
        console.log("[App] onEndTouch");
        this.removeEvent();
        this.reset();
      },

      update() {
        if (!this.isTouch) return;

        requestAnimationFrame(this.update);
        this.emit();

      },


      emit() {
        if (this.debugText.length > 32)
          this.debugText = "";
        this.debugText += "+";
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 60px;
  }

  a {
    color: #42b983;
  }

  .controller {
    position: relative;
    width: 100%;
    height: 300px;
  }

  .controller__button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100px;
    margin: auto;
    text-align: center;
  }
  .controller__button > button {
    /*display: block;*/
  }

  .controller__button.controller__button--left {
    right: auto;
    left: 20px;
    top: 100px;
  }

  .controller__button.controller__button--right {
    left: auto;
    right: 20px;
    top: 100px;
  }

  .controller__button.controller__button--bottom {
    top: 200px;
  }

  .speedUI {
    margin-left: 20px;
  }
  .speedUI__slider {
    text-align: center;
    vertical-align: middle;
  }
  .speedUI__slider .slider {
    width: 80%;
  }
</style>
