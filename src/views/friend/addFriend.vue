<template>
    <div class="add_box">
        <div class="mes_header">
            <p>
                添加
                <span class="first" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="30px" height="30px">
               </span>
            </p>
        </div>
        <div class="w_search">
            <p>
                <input type="text" placeholder="聆语号、手机号">
                <img src="../../assets/sousuo.png" alt="">
            </p>
        </div>
        <div class="findAll" @click="toUser">
            开始寻找
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push("/message");
    },
    toUser() {
      this.$router.push("/usercenter");
    }
  }
};
</script>
<style scoped>
.add_box {
  position: relative;
  width: 100%;
  min-height: 100%;
  border: 1px solid transparent;
  box-sizing: border-box;
  background: rgb(240, 240, 240);
}
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
.w_search {
  width: 100%;
  height: 40px;
  margin-top: 65px;
}
.w_search p {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  line-height: 40px;
}
.w_search p input {
  width: 80%;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  text-align: center;
  font-size: 14px;
  color: rgb(136, 133, 133);
}
.w_search p img {
  position: absolute;
  top: 33%;
  left: 30%;
  width: 16px;
  height: 16px;
}
.findAll {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  width: 100px;
  height: 100px;
  /* background: radial-gradient(#f009d1, #ee71dd, #f009d1); */
  background: #f009d1;
  line-height: 100px;
  color: #fff;
  text-align: center;
  border-radius: 50%;
}
@keyframes living {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
}
.findAll span {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 0;
  bottom: 0;
  background: #fff;
  border-radius: 50%;
  animation: living 3s linear infinite;
  z-index: 0;
}

.live span:nth-child(2) {
  animation-delay: 1.5s;
}
</style>
