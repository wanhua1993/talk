<template>
    <div class="reg_box">
        <p class="reg_head">
            注册
            <span class="reg_back" @click="back">
                <img src="../../assets/fanhui.png" alt="">
            </span>
        </p>
        <div class="reg_content">
            <div class="reg_input">
                <img src="../../assets/shouji.png" alt="" class="input_img" >
                <input type="text" placeholder="手机号">
            </div>
            <div class="reg_input">
                <img src="../../assets/ziyuan.png" alt="" class="input_img" >
                <input type="text" placeholder="验证码">
                <span class="get_code">获取验证码</span>
            </div>
            <div class="reg_input">
                <img src="../../assets/yanjing.png" alt="" class="input_img" >
                <input type="password" placeholder="登录密码">
            </div>
            <div class="reg_input">
                <img src="../../assets/yanjing.png" alt="" class="input_img" >
                <input type="password" placeholder="确认密码">
            </div>
        </div>
        <div class="reg_btn">
            <p class="register">完成注册</p>
        </div>

        <p class="reg_footer">
            已有账号?
            <router-link to='/login'>立即登录</router-link>
        </p>
    </div>    
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.reg_box {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(#c00dec, #f84be1); /* 标准的语法 */
  border: 1px solid transparent;
  box-sizing: border-box;
}
.reg_head {
  margin: 27px 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  position: relative;
  font-size: 18px;
  color: #fff;
}
.reg_head .reg_back {
  position: absolute;
  top: 0;
  left: 10px;
}
.reg_back img {
  width: 30px;
  height: 30px;
}
.reg_content {
  width: 70%;
  margin: 60px auto;
}
.reg_content .reg_input {
  position: relative;
  margin: 30px 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.reg_input input {
  height: 100%;
  width: calc(100% - 30px);
  width: 100%;
  border: 0px;
  outline: none;
  /* padding-left: 30px; */
  border-bottom: 0.6px solid #fff;
  background: transparent;
  font-size: 16px;
  color: #fff;
  text-align: center;
}
.reg_btn {
  width: 70%;
  margin: 0 auto;
  margin-top: 80px;
}
.register {
  width: calc(100% - 2px);
  border: 1px solid #fff;
  height: 40px;
  line-height: 40px;
  border-radius: 40px;
  color: #fff;
  text-align: center;
}
.input_img {
  position: absolute;
  top: 10px;
  left: 0;
  width: 20px;
  height: 20px;
}
.reg_footer {
  position: absolute;
  bottom: 30px;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 14px;
}
.get_code {
  position: absolute;
  top: 5px;
  right: 0;
  color: #fff;
  font-size: 14px;
  border: 1px solid #fff;
  border-radius: 14px;
  padding: 0 5px;
  height: 28px;
  line-height: 28px;
}
</style>
