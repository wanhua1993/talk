<template>
    <div class="mes_header">
        <p>
            聆语
            <span class="first" @click='user_center()'>
                <img :src="avatar" alt="头像">
            </span>
            <span class="second" @click='btn_show'>
                <img src="../../../assets/jia.png" alt="" width="32px" height="32px">
            </span>
        </p>  
    </div>    
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      show: false,
      avatar: require("@/assets/meinv1.jpg")
    };
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    btn_show() {
      this.$emit("marked", true);
    },
    // 跳转到个人中心页面
    user_center() {
      this.$router.push('/usercenter?id=' + this.userInfo._id);
    }
  }
};
</script>
<style scoped>
.mes_header {
  position: fixed;
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #c00dec, #f84be1);
  border: 1px solid transparent;
  box-sizing: border-box;
  z-index: 1;
}

.mes_header p {
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 60px;
  margin: 0;
  color: #fff;
  font-size: 18px;
}
.mes_header p .second {
  position: absolute;
  top: 10px;
  right: 14px;
}
.mes_header p .first {
  position: absolute;
  top: 8px;
  left: 14px;
}
.mes_header p .first img {
  border-radius: 50%;
  overflow: hidden;
  width: 32px;
  height: 32px;
}
</style>
