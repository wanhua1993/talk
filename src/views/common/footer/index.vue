<template>
    <div>
        <ul>
            <li v-for="(item, index) in menuList" :key="index" @click='toPath(item.url)'>
                {{item.value}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          value: "耳语",
          url: '/message'
        },
        {
          value: "聆友",
          url: '/friend'
        },
        {
          value: "动态",
          url: '/circle'
        }
      ]
    };
  },
  methods: {
      toPath(path) {
          this.$router.push(path);
      }
  }
};
</script>

<style scoped>
ul {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  padding: 0;
  z-index: 3;
  margin: 0;
  border-top: 1px solid #ddd;
  background: #fff;
}
li {
  width: 60px;
  margin: 0 auto;
  text-align: center;
  list-style: none;
}
</style>


