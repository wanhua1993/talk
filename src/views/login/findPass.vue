<template>
    <div class="login_box">
        <Warn></Warn>
        <div class='find_header'>
            <p>
                找回密码
                <span class="second" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="32px" height="32px">
                </span>
            </p>
        </div>
        <div class="login_input">
            <div class="w_input">
                <!-- <img src="../../assets/denglu.png" alt="" class="input_img"> -->
                <input type="text" v-model='phone'  placeholder="手机号" ref="phone" @blur='on_blur()'>
            </div>
            <div  class="w_input">
                <!-- <img src="../../assets/mima.png" alt="" class="input_img" > -->
                <input type="text" v-model='code' placeholder="验证码" @blur='vali_code()'>
                <span @click='getCode()'>{{title}}</span>
            </div>
        </div>
        <div class="login_enter">
            <p class="sign_in sign" @click='next()'>下一步</p>
        </div>
    </div>
</template>
<script>
import Warn from "@/components/warn";
import { send_code, vali_phone } from "@/api/login";
export default {
  components: {
    Warn
  },
  data() {
    return {
      phone: "",
      code: "",
      time: 60,
      title: "获取验证码",
      flag: true,
      timer: "",
      query_Code: ""
    };
  },
  mounted() {
    this.$refs.phone.focus();
  },
  methods: {
    back() {
      this.$router.back();
    },
    next() {
      //   this.$router.push("/updatePass?phone=" + this.phone);
      if (this.code && this.phone) {
        this.$router.push("/updatePass?phone=" + this.phone);
      } else {
        this.$store.dispatch("setShowWarn", "请输入完整信息!");
        return false;
      }
    },
    on_blur() {
      // 验证手机号是否合格
      let flag = this.isEnable(this.phone);
      if (!flag && this.phone != "") {
        this.phone = ""; // 清空手机号
        this.$store.dispatch("setShowWarn", "请输入正确的手机号码!");
      }
      this.vali_tel(this.phone);
    },
    // 验证手机号是否正确
    isEnable(phone) {
      return /^(13|14|15|16|17|18)[\d]{9}$/.test(phone);
    },
    // 获取 code 码
    getCode() {
      if (this.phone == "") {
        this.$store.dispatch("setShowWarn", "请输入正确的手机号!");
        this.$refs.phone.focus();
        return;
      }
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
          phone: this.phone
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
        this.$store.dispatch("setShowWarn", "验证码输入有误!");
        this.code = "";
      }
    },
    // 验证手机号是否注册
    vali_tel(phone) {
      vali_phone({
        phone
      })
        .then(res => {
          if (res.data == 1) {
            this.$store.dispatch(
              "setShowWarn",
              "该手机号已被注册，请重新输入!"
            );
            this.phone = "";
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
.logo {
  width: 100%;
}
.logo div {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  padding-top: 100px;
}
.logo_img {
  width: 100px;
  height: 100px;
}
.login_box {
  width: 100%;
  height: 100%;
  background: linear-gradient(#c00dec, #f84be1);
  border: 1px solid transparent;
  box-sizing: border-box;
}
.login_input {
  width: 70%;
  margin: 0 auto;
  margin-top: 80px;
}
.login_p {
  width: 70%;
  margin: 0 auto;
  margin-top: 10px;
  text-align: right;
  color: #fff;
  font-size: 15px;
}
.login_input .w_input {
  height: 40px;
  line-height: 40px;
  position: relative;
  margin-top: 20px;
}

.w_input input {
  position: relative;
  height: 100%;
  width: 100%;
  border: 0px;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: #fff;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 44px;
}
.w_input span {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  color: #fff;
}
.login_enter {
  width: 70%;
  margin: 0 auto;
  margin-top: 80px;
}
.login_enter .sign {
  width: calc(100% - 2px);
  border: 1px solid #fff;
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
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
.find_header {
  width: 100%;
  height: 60px;
}
.find_header p {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 60px;
  color: #fff;
  font-size: 18px;
}
.find_header p span {
  position: absolute;
  top: 8px;
  left: 14px;
}
</style>
