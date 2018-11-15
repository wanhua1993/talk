<template>
    <div class="photos_con">
        <div class="mes_header">
            <p>
                照片墙({{nums}})
                <span class="first" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="32px" height="32px">
                </span>
                <span class="second" @click='edit_img()'>
                    管理
                </span>
            </p>  
        </div>
        <ul class="photos_list">
            <li class="list_li" v-for="(item, index) in photos" :key="index">
                <p>
                    <img :src="item.img" alt="照片">
                </p>
                <span :class='item.show == true ? show : ""' class="clicle" v-show="show_circle" @click='select_cir(index)'></span>
            </li>
            <div class="clear"></div>
        </ul> 
        <div class="upload_photo">
            上传到图片墙中
            <input type="file" name="photo" @change="upload_img()" class="imgFile" accept='image/*'>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import baseUrl from "@/config/index";
import { uploadPhotos, photosList } from "@/api/user";
export default {
  data() {
    return {
      avatar: "",
      url: baseUrl.baseUrl.dev,
      nums: 0,
      photos: [
        {
          img: require("@/assets/meinv1.jpg"),
          show: false
        },
        {
          img: require("@/assets/meinv2.jpg"),
          show: false
        },
        {
          img: require("@/assets/meinv3.jpg"),
          show: false
        },
        {
          img: require("@/assets/meinv4.jpg"),
          show: false
        }
      ],
      show_circle: false,
      show: "w_show",
      w_height: ""
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    // 加载图片
    this.load_photos();
  },
  methods: {
    load_photos() {
      photosList({
        user_id: this.userInfo._id
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    edit_img() {
      this.show_circle = !this.show_circle;
    },
    back() {
      this.$router.back();
    },
    select_cir(index) {
      this.photos[index].show = !this.photos[index].show;
    },
    upload_img() {
      let that = this;
      let file = document.getElementsByClassName("imgFile")[0];
      window.URL = window.URL || window.webkitURL;
      let url = window.URL.createObjectURL(file.files[0]);
      let img = new Image();
      img.src = url;
      img.onload = function(e) {
        that.photos.push({
          img: this.src,
          show: false
        });
      };
      let formdata = new FormData();
      formdata.append("file", file.files[0]);
      uploadPhotos({ formdata, user_id: this.userInfo._id })
        .then(res => {
          console.log(res);
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
.photos_list {
  width: 96%;
  height: 100%;
  margin: 70px auto;
  padding: 0;
}
.photos_list li {
  position: relative;
  float: left;
  width: 1rem;
  height: 1rem;
  margin: calc((100% - 3rem) / 6);
  overflow: hidden;
}
.photos_list li p {
  position: relative;
  width: 100%;
  height: 100%;
}
.photos_list li p img {
  width: 100%;
  position: absolute;
  margin: auto auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.clicle {
  position: absolute;
  bottom: 10px;
  right: 5px;
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #000;
  opacity: 0.5;
}
.clear {
  clear: both;
}
.w_show {
  background: #c00dec;
}
.upload_photo {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #f84be1;
  color: #fff;
  font-size: 16px;
}
.upload_photo input {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>
