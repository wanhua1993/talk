<template>
    <div class="login_box">
        <Warn></Warn>
        <div class='find_header'>
            <p>
                修改密码
                <span class="second" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="32px" height="32px">
                </span>
            </p>
        </div>
        <div class="login_input">
            <div class="w_input">
                <input type="password" v-model='first_pass'  placeholder="输入新密码" ref="password">
            </div>
            <div  class="w_input">
                <input type="password" v-model='second_pass' placeholder="再次输入" @blur='vali_pass()'>
            </div>
        </div>
        <div class="login_enter">
            <p class="sign_in sign" @click='next()'>完成修改</p>
        </div>
    </div>
</template>
<script>
import Warn from "@/components/warn";
import { send_code, update_pass } from "@/api/login";
export default {
  components: {
    Warn
  },
  data() {
    return {
      first_pass: "",
      second_pass: "",
      phone: ""
    };
  },
  mounted() {
    let phone = this.$route.query.phone;
    if (phone) {
      this.phone = phone;
    }
    this.$refs.password.focus();
  },
  methods: {
    back() {
      this.$router.back();
    },
    next() {
      update_pass({
        phone: this.phone,
        password: this.first_pass
      })
        .then(res => {
          this.$store.dispatch("setShowWarn", "修改成功!");
          this.$router.push("login");
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 验证 两次密码是否 输入 一样
    vali_pass() {
      if (this.second_pass == "") {
        return;
      }
      if (this.first_pass == "") {
        this.$store.dispatch("setShowWarn", "请输入密码!");
        return;
      }
      if (this.first_pass != this.second_pass) {
        this.$store.dispatch("setShowWarn", "两次密码输入不一致，请重新输入!");
        return;
      }
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
