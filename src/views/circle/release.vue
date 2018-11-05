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
            <textarea name="content" id="content" cols="30" rows="6" placeholder="这一刻的想法..."></textarea>
        </div>
        <ul class="release_photo">
            <li v-for="(item, index) in photo_list" :key="index">
                <img :src="item" alt="">
            </li>
            <div class="clear"></div>
        </ul>
        <div class="upload_photo">
          <p>
            上传图片
                <input id="upload_file" type="file" style="" accept='image/*' name="file"  @change="fileChange($event)"/>
          </p>
        </div>
        <div class="release_btn">
          <p @click="to_circle">
            发表
          </p>
        </div>
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
    },
    to_circle() {
      this.$router.push("/circle");
    },
    fileChange(event) {

    }
  }
};
</script>
<style scoped>

.clear {
  clear: both;
}
.release_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  margin: 10px auto;
  padding: 0;
}
.release_photo li {
  position: relative;
  float: left;
  width: calc((100% - 12px) / 3);
  margin: 2px;
}
.release_photo li img {
  width: 100%;
  height: 100%;
}
.upload_photo {
  width: 100%;
  height: 35px;
  margin: 20px 0;
}
.upload_photo p {
  position: relative;

  width: 30%;
  margin: 0 auto;
  height: 100%;
  line-height: 35px;
  border-radius: 6px;
  background: #f84be1;
  color: #fff;
  font-size: 16px;
}
.release_btn {
  width: 100%;
  height: 35px;
  margin: 20px 0;
}
.release_btn p {
  width: 30%;
  margin: 0 auto;
  height: 100%;
  line-height: 35px;
  border-radius: 6px;
  background: #f84be1;
  color: #fff;
  font-size: 16px;
}
#upload_file {
  position: absolute;
  top: 0;
  left: 0;
  height: 35px;
  width: 100%;
  opacity: 0;
}
</style>
