<template>
    <div class="login_box">
        <div class="logo">
          <div>
            <img src="../../assets/logo.png" alt="" class="logo_img">
          </div>
        </div>
        <div class="login_input">
            <div class="w_input">
                <img src="../../assets/denglu.png" alt="" class="input_img">
                <input type="text" v-model='user.username'  placeholder="用户名、手机号">
            </div>
            <div  class="w_input">
                <img src="../../assets/mima.png" alt="" class="input_img" >
                <input type="password" v-model='user.password' placeholder="登录密码">
            </div>
        </div>
        <p class="login_p">忘记密码?</p>
        <div class="login_enter">
            <p class="sign_in sign" @click='sign_in'>登录</p>
            <p class="sign_up sign" @click='sign_up'>注册</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        usename: "",
        password: ""
      }
    };
  },
  methods: {
    sign_in() {
      // 登录
      this.$router.push('/message');
    },
    sign_up() {
      // 注册
      this.$router.push('/register');
    }
  }
};
</script>
<style scoped>
.logo {
  width: 100%;
  height: 35%;
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
  margin-top: 3%;
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
  height: 100%;
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

</style>
