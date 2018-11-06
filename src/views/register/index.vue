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
                <input type="text" placeholder="验证码" v-model="code" @blur='vali_code()'>
                <span class="get_code" @click='getCode()'>{{title}}</span>
            </div>
            <div class="reg_input">
                <img src="../../assets/yanjing.png" alt="" class="input_img" >
                <input type="password" placeholder="登录密码" v-model="first_pass">
            </div>
            <div class="reg_input">
                <img src="../../assets/yanjing.png" alt="" class="input_img" >
                <input type="password" placeholder="确认密码" v-model="second_pass" @blur='vali_pass()'>
            </div>
        </div>
        <div class="reg_btn">
            <p class="register" @click="to_register()">完成注册</p>
        </div>

        <p class="reg_footer">
            已有账号?
            <router-link to='/login'>立即登录</router-link>
        </p>
    </div>    
</template>
<script>
import { send_code, sign_up, vali_phone } from "@/api/login";
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
      timer: "",
      query_Code: ""
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    on_blur() {
      // 验证手机号是否合格  同时验证手机号是否已经被注册过
      let flag = this.isEnable(this.phone_number);
      if (!flag && this.phone_number != "") {
        this.phone_number = ""; // 清空手机号
        this.$store.dispatch('setShowWarn', '请输入正确的手机号码!');
      }
      this.vali_tel(this.phone_number);
    },
    // 验证手机号是否正确
    isEnable(phone) {
      return /^(13|14|15|16|17|18)[\d]{9}$/.test(phone);
    },
    // 获取 code 码
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
        send_code({
          phone: this.phone_number
        })
          .then(res => {
            this.query_Code = res.data.code;
          })
          .catch(err => {});
      }
    },
    // 验证 code 是否正确
    vali_code() {
      if (this.code == "") {
        return;
      }
      if (this.code == this.query_Code) {
      } else {
        this.$store.dispatch('setShowWarn', '验证码输入有误!');
        this.code = "";
      }
    },
    // 验证 两次输入的密码是否一致
    vali_pass() {
      if (this.second_pass == "") {
        return;
      }
      if (this.first_pass == "") {
        this.$store.dispatch('setShowWarn', '请输入密码!');
        return;
      }
      if (this.first_pass != this.second_pass) {
        this.$store.dispatch('setShowWarn', '两次密码输入不一致，请重新输入!');
        return;
      }
    },
    // 点击完成注册
    to_register() {
      // 用户注册以后 给每一个人分配 聆语 号
      if (
        this.phone_number != "" &&
        this.code != "" &&
        this.first_pass != "" &&
        this.second_pass != ""
      ) {
        sign_up({
          phone: this.phone_number,
          password: this.first_pass
        })
          .then(res => {
            if (res.status == 200) {
              this.$store.dispatch('setShowWarn', '注册成功');
              setInterval(() => {
                this.$router.push("login");
              }, 1000);
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$store.dispatch('setShowWarn', '请填写完整信息!');
      }
    },
    // 验证手机号是否注册
    vali_tel(phone) {
      vali_phone({
        phone
      })
        .then(res => {
          if (res.data == 1) {
            this.$store.dispatch('setShowWarn', '该手机号已被注册，请重新输入!');
            this.phone_number = "";
          }
        })
        .catch(err => {
          console.log(err);
        });
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
