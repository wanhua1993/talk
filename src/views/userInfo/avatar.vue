<template>
    <div class="photos_con">
        <Warn/>
        <div class="mes_header">
            <p>
                我的头像
                <span class="first" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="32px" height="32px">
                </span>
                <!-- <span class="second">
                    管理
                </span> -->
            </p>  
        </div>
        <div class="avatar_con" v-bind:style="{backgroundImage:'url(' + back_url + ')'}">
            <span>
                <img :src="avatar" alt="头像">
                <input type="file" name="photo" @change="upload_img()" class="imgFile" accept='image/*'>
            </span>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import Warn from "@/components/warn";
import baseUrl from "@/config/index";
import { uploadAvatar } from "@/api/user";
export default {
  components: {
    Warn
  },
  data() {
    return {
      back_url: require("@/assets/back.jpg"),
      avatar: "",
      url: baseUrl.baseUrl.dev
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
    // 上传图片
    upload_img() {
      let that = this;
      let file = document.getElementsByClassName("imgFile")[0];
      window.URL = window.URL || window.webkitURL;
      let url = window.URL.createObjectURL(file.files[0]);
      let img = new Image();
      img.src = url;
      img.onload = function(e) {};
      let formdata = new FormData();
      formdata.append("file", file.files[0]);
      uploadAvatar({ formdata, user_id: this.userInfo._id })
        .then(res => {
          this.avatar = this.url + res.data.avatar;
          let value = {
            data: res.data,
            loginStatus: {
              isLogin: true
            }
          };
          this.$store.commit("SET_LOGIN", value);
          this.$store.dispatch("setShowWarn", "上传成功！");
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
  height: 3rem;
  margin: 0 auto;
  margin-top: 60px;
  background-size: 100% 100%;
}
.avatar_con span {
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
  overflow: hidden;
  border-radius: 50%;
}
.avatar_con span img {
  width: 100%;
  position: absolute;
  margin: auto auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.avatar_con span input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
}
</style>
