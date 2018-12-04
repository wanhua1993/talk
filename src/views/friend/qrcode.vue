<template>
  <div class="qrcodeCon">
    <div class="mes_header">
      <p>
        二维码名片
        <span class="first" @click="back()">
          <img src="../../assets/fanhui.png" alt width="32px" height="32px">
        </span>
        <!-- <span class="second" @click='btn_show'>
                    <img src="../../assets/jia.png" alt="" width="32px" height="32px">
        </span>-->
      </p>
    </div>
    <div class="qrcodeBox">
      <div class="qr">
        <div class="qr_header">
          <span class="mess_avatar">
            <img :src="url + userInfo.avatar" alt="头像">
          </span>
          <p class="mess_name">{{userInfo.username}}</p>
          <p class="mess_con">{{userInfo.address}}</p>
        </div>
        <!-- <div > -->
        <vue-q-art :config="config" :downloadButton="downloadButton" class="qr_img"></vue-q-art>
        <!-- </div> -->
        <p class="qr_footer">扫一扫上面的二维码图案，加我聆语号</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import baseUrl from "@/config/index";
import VueQArt from "vue-qart";
export default {
  components: {
    VueQArt
  },
  data() {
    return {
      show: false,
      url: baseUrl.baseUrl.dev,
      // config: {
      //   value: "https://www.baidu.com",
      //   // imagePath: this.url + this.userInfo.avatar,
      //   imagePath: require('@/assets/meinv4.jpg'),
      //   filter: "color"
      // },
      downloadButton: false
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
    config() {
      return {
         value: 'http://192.168.0.87:8080/#/usercenter?_id=' + this.userInfo._id,
        // imagePath: this.url + this.userInfo.avatar,
        imagePath: require('@/assets/meinv4.jpg'),
        filter: "color",
      }
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.qrcodeCon {
  position: relative;
  width: 100%;
  height: 100%;
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
  top: 10px;
  right: 14px;
}
.mes_header p .first {
  position: absolute;
  top: 8px;
  left: 14px;
}
.qrcodeBox {
  position: relative;
  width: 100%;
  height: 100%;
  background: #ff5df1;
}
.qr {
  position: absolute;
  width: 2.4rem;
  height: 3rem;
  top: 50%;
  left: 50%;
  margin-left: -1.2rem;
  margin-top: -1.5rem;
  background: #fff;
}
.qr_header {
  position: relative;
}
.mess_name {
  width: 72%;
  margin-left: 70px;
  height: 33px;
  line-height: 45px;
  font-size: 16px;
  text-align: left;
}
.mess_con {
  width: 72%;
  margin-left: 70px;
  height: 27px;
  line-height: 27px;
  font-size: 12px;
  text-align: left;
  color: rgb(151, 146, 146);
}
.mess_avatar {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  /* border-radius: 50%; */
  overflow: hidden;
}
.mess_avatar img {
  width: 100%;
  height: 100%;
}
.qr_img {
  /* width: 2rem;
  height: 2rem; */
  margin: 0.2rem auto;
  /* background: #ff5df1; */
}
</style>
