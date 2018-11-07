<template>
    <p class="loading" v-show="is_show">{{message}}</p>    
</template>
<script>
export default {
  data() {
    return {

    };
  },
  computed: {
      is_show() {
          return this.$store.state.warn.isShow;
      },
      message() {
          return this.$store.state.warn.message;
      }
  }
};
</script>
<style scoped>
p.loading {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 10px;
  padding: 0 20px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  color: rgb(12, 12, 12);
  letter-spacing: 1px;
  background: rgb(108, 235, 57);
  opacity: 0.6;
  font-size: 14px;
  border-radius: 2px;
  z-index: 99999;
}
</style>
