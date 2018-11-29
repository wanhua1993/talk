<template>
  <div>
    <div class="img_con" v-show="show" @click="closeImg">
      <img :src="img" alt>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["show", "img"],
  mounted() {},
  methods: {
    closeImg() {
      this.$emit("close");
    }
  }
};
</script>
<style scoped>
.img_con {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: #000;
  z-index: 2000;
}

.img_con img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto auto;
  width: 100%;
}
</style>
