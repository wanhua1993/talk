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
                <input type="text" placeholder="手机号" @blur='on_blur' v-model="phone_number">
            </div>
            <div class="reg_input">
                <img src="../../assets/ziyuan.png" alt="" class="input_img" >
                <input type="text" placeholder="验证码" v-model="code">
                <span class="get_code" @click='getCode()'>{{title}}</span>
            </div>
            <div class="reg_input">
                <img src="../../assets/yanjing.png" alt="" class="input_img" >
                <input type="password" placeholder="登录密码" v-model="first_pass">
            </div>
            <div class="reg_input">
                <img src="../../assets/yanjing.png" alt="" class="input_img" >
                <input type="password" placeholder="确认密码" v-model="second_pass">
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
import { send_code } from "@/api/login";
export default {
  data() {
    return {
      phone_number: "",
      code: "",
      first_pass: "",
      second_pass: "",
      time: 60,
      title: "获取验证码",
      flag: true,
      timer: ""
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    on_blur() {
      let flag = this.isEnable(this.phone_number);
      if (!flag && this.phone_number != "") {
        this.phone_number = ""; // 清空手机号
        alert("请输入正确的手机号码！");
      }
    },
    // 验证手机号是否正确
    isEnable(phone) {
      return /^(13|14|15|16|17|18)[\d]{9}$/.test(phone);
    },
    // get code
    getCode() {
      if (this.flag) {
        this.flag = false;
        let timer = setInterval(() => {
          this.title = `剩余 ${this.time} 秒`;
          this.time--;
          if (this.time <= 0) {
            clearInterval(timer);
            this.title = "发送验证码";
            this.time = 60;
            this.flag = true;
          }
        }, 1000);

        // 向手机发送验证码;
        send_code({})
          .then(res => {
            console.log(res);
          })
          .catch(err => {});
      }
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
  box-sizing: border-box;
  overflow: hidden;
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
.register:active {
  box-shadow: 0 0 3px #000;
  background: rgb(243, 214, 86);
}
.input_img {
  position: absolute;
  top: 10px;
  left: 0;
  width: 20px;
  height: 20px;
}
.reg_footer {
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
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
  width: 70px;
  line-height: 28px;
}
</style>
