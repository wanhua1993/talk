<template>
        <ul>
            <li v-for="(item, index) in menuList" :key="index" @click='toPath(item.url)' >
                {{item.value}} 
                <span v-if="item.apply&&applyNums != 0" class="applyNums">{{applyNums}}</span>
            </li>
        </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menuList: [
        {
          value: "耳语",
          url: "/message",
          apply: false
        },
        {
          value: "聆友",
          url: "/friend",
          apply: true
        },
        {
          value: "动态",
          url: "/circle",
          apply: false
        }
      ],
      nums: 0
    };
  },
  computed: {
    ...mapGetters(["applyNums"])
  },
  mounted() {},
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
  position: relative;
  width: 60px;
  margin: 0 auto;
  text-align: center;
  list-style: none;
}
.applyNums {
  position: absolute;
  top: -5px;
  left: 50%;
  width: 26px;
  height: 26px;
  margin-left: -13px;
  line-height: 26px;
  border-radius: 50%;
  background: fuchsia;
  color: #fff;
}
</style>


