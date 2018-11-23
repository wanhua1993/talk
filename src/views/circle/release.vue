<template>
    <div class="release_box">
      <Warn/>
        <div class="mes_header">
            <p>
                发表
                <span class="first" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="30px" height="30px">
                </span>
            </p>  
        </div>
        <div class="release_con">
            <textarea name="content" id="content" cols="30" rows="6" placeholder="这一刻的想法..." v-model="content"></textarea>
        </div>
        <ul class="release_photo">
            <li v-for="(item, index) in photo_list" :key="index">
                <img :src="item" alt="">
            </li>
            <div class="clear"></div>
        </ul>
        <div class="upload_photo" v-show="photo_list.length < 9">
          <p>
            上传图片
                <input class='imgFile' id="upload_file" type="file" style="" accept='image/*' name="file"  @change="fileChange()" multiple/>
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
import Warn from "@/components/warn";
import { mapGetters } from "vuex";
import { publish } from "@/api/friend";
export default {
  components: {
    Warn
  },
  data() {
    return {
      photo_list: [],
      content: "", // 输入的内容，
      formdata: null
    };
  },
  created() {
    this.formdata = new FormData();
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    back() {
      this.$router.back();
    },
    // 发表
    to_circle() {
      if (this.content == "") {
        this.$store.dispatch("setShowWarn", "请输入发表内容!");
        return;
      }
      this.formdata.append('content', this.content);
      this.formdata.append('user_id', this.userInfo._id);
      publish({
        formdata: this.formdata
      })
        .then(res => {
          console.log(res);
          // this.$router.push("/circle");
        })
        .catch(err => {
          console.log(err);
        });
    },
    fileChange(event) {
      let that = this;
      let file = document.getElementsByClassName("imgFile")[0];
      window.URL = window.URL || window.webkitURL;
      let file_array = [...file.files];
      if (file_array.length > 9) {
        this.$store.dispatch("setShowWarn", "上传图片请不要超过9张!");
        return;
      }
      for (let i = 0; i < file_array.length; i++) {
        var url = window.URL.createObjectURL(file_array[i]);
        this.photo_list.push(url);
        this.formdata.append("file", file_array[i]);
      }
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
  width: 0.9rem;
  height: 0.9rem;
  margin: calc((100% - 2.7rem) / 6);
  overflow: hidden;
}
.release_photo li img {
  width: 100%;
  position: absolute;
  margin: auto auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
