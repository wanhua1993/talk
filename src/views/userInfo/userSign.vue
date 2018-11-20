<template>
    <div class="photos_con">
        <Warn/>
        <div class="mes_header">
            <p>
                个性签名
                <span class="first" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="32px" height="32px">
                </span>
                <span class="second" @click='save()'>
                    保存
                </span>
            </p>  
        </div>
        <div class="avatar_con" v-bind:style="{backgroundImage:'url(' + back_url + ')'}">
            <textarea name="" id="" cols="25" rows="6" placeholder="请设置你的个性签名" v-model="sign_con"></textarea>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import baseUrl from "@/config/index";
import Warn from "@/components/warn";
import { uploadAvatar, saveSign } from "@/api/user";
export default {
  components: {
    Warn
  },
  data() {
    return {
      back_url: require("@/assets/sign.jpg"),
      avatar: "",
      url: baseUrl.baseUrl.dev,
      sign_con: ""
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    this.avatar = this.url + this.userInfo.avatar;
  },
  methods: {
    back() {
      this.$router.back();
    },
    save() {
      saveSign({
        user_id: this.userInfo._id,
        sign_con: this.sign_con
      })
        .then(res => {
          let value = {
            data: res.data,
            loginStatus: {
              isLogin: true
            }
          };
          this.$store.commit("SET_LOGIN", value);
          this.$store.dispatch("setShowWarn", "保存成功！");
          this.sign_con = "";
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.photos_con {
  position: relative;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.mes_header {
  position: fixed;
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #c00dec, #f84be1);
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
  right: 14px;
  font-size: 16px;
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
.avatar_con {
  position: relative;
  width: 100%;
  height: 2rem;
  margin: 0 auto;
  margin-top: 60px;
  background-size: 100% 100%;
}
.avatar_con textarea {
  margin-top: 20px;
  outline: none;
  border: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  background: #fabfa4;
}
</style>
