<template>
  <div id="app">
    <router-view></router-view>
    <!-- <transition :name="direction">
      <router-view class="appView"></router-view>
    </transition> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      direction: "slide-right"
    };
  },

  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (to.path == "/") {
        this.direction = "slide-right";
      } else if (from.path == "/") {
        this.direction = "slide-left";
      } else {
        this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
      }
      if (toDepth == fromDepth) {
        this.direction = "";
      }
    }
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Microsoft Yahei" !important;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
p {
  margin: 0;
}
.router-view {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.slide-right-enter,
.slide-right-enter-active {
  animation: bounce-left-in 500ms;
}
.slide-right-leave-active {
  animation: bounce-left-out 500ms;
}
.slide-left-enter,
.slide-left-enter-active {
  animation: bounce-right-in 500ms;
}
.slide-left-leave-active {
  animation: bounce-right-out 500ms;
}

@keyframes bounce-right-in {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(0px, 0, 0);
  }
}
@keyframes bounce-right-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes bounce-left-in {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0px, 0, 0);
  }
}
@keyframes bounce-left-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
