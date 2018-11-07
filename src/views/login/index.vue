<template>
    <div class="login_box">
        <Warn></Warn>
        <div class="logo">
          <div>
            <img src="../../assets/logo.png" alt="" class="logo_img">
          </div>
        </div>
        <div class="login_input">
            <div class="w_input">
                <img src="../../assets/denglu.png" alt="" class="input_img">
                <input type="text" v-model='user.phone'  placeholder="聆语号、手机号" ref="phone">
            </div>
            <div  class="w_input">
                <img src="../../assets/mima.png" alt="" class="input_img" >
                <input type="password" v-model='user.password' placeholder="登录密码">
            </div>
        </div>
        <p class="login_p" @click="to_find()">忘记密码?</p>
        <div class="login_enter">
            <p class="sign_in sign" @click='sign_in'>登录</p>
            <p class="sign_up sign" @click='sign_up'>注册</p>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { signIn } from "@/api/login";
import Warn from "@/components/warn";
export default {
  components: {
    Warn
  },
  data() {
    return {
      user: {
        phone: "",
        password: ""
      }
    };
  },
  computed: {
    // 首先获取登录状态
    ...mapGetters(["isLogin"])
  },
  created() {
    this.isLogin && this.$router.push("/message");
  },
  mounted() {
    this.$refs.phone.focus();
  },
  methods: {
    // 点击忘记密码 以后
    to_find() {
      this.$router.push("/findPass");
    },
    sign_in() {
      // 登录
      signIn({
        user: this.user
      })
        .then(res => {
          if (res.data.length) {
            // 登录成功以后 设置登录状态 存储用户信息
            // socket 发送到后台
            // 现在不用写 多账号切换 后续再说。。。
            let value = {
              data: res.data[0],
              loginStatus: {
                isLogin: true
              }
            };
            this.$store.commit("SET_LOGIN", value);
            // 利用 socket 发送后台 设置后台登陆 应该是将用户存储起来。。。
            socket.emit("login", res.data[0]._id);
            this.$router.push("/message");
          } else {
            this.$store.dispatch("setShowWarn", "请输入正确的用户名密码!");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    sign_up() {
      // 注册
      this.$router.push("/register");
    },
    callback() {}
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
  margin-top: 40px;
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
