<template>
    <div class="release_box">
        <div class="mes_header">
            <p>
                发表
                <span class="first" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="30px" height="30px">
                </span>
            </p>  
        </div>
        <div class="release_con">
            <textarea name="content" id="content" cols="30" rows="8" placeholder="这一刻的想法..."></textarea>
        </div>
        <ul class="release_photo">
            <li v-for="(item, index) in photo_list" :key="index">
                <img :src="item" alt="">
            </li>
            <li class="last_li">
                <img src="../../assets/jia_1.png" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      photo_list: [
        require("@/assets/meinv1.jpg"),
        require("@/assets/meinv2.jpg"),
        require("@/assets/meinv3.jpg"),
        require("@/assets/meinv4.jpg")
      ]
    };
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.release_box {
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  box-sizing: border-box;
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
.release_con {
  margin-top: 70px;
}
.release_con #content {
  outline: none;
  width: 90%;
  font-size: 18px;
  border: none;
  background: transparent;
}
.release_photo {
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  padding: 0;
}
.release_photo li {
  float: left;
  width: 32.7%;
  margin: 0.5px;
}
.release_photo li img {
  width: 100%;
  height: 100%;
}
.release_photo .last_li img {
  width: 20px;
  height: 20px;
}
</style>
