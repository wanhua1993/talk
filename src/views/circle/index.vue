<template>
    <div class="cirlce_box">
        <div class="mes_header">
            <p>
                动态
                <!-- <span class="first">
                    <img src="../../assets/fanhui.png" alt="" width="30px" height="30px">
                </span> -->
                <!-- <input id="upload_file" type="file" style="" accept='image/*' name="file"  @change="fileChange($event)"/> -->
                <span class="second">
                    <img src="../../assets/zhaoxiangji.png" alt="" width="32px" height="32px">
                </span>
            </p>
        </div>
        <div class="circle_back" v-bind:style="{backgroundImage:'url(' + back_url + ')'}">

        </div>
        <ul class="circlr_list">
            
        </ul>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/views/common/footer";
export default {
  data() {
    return {
      back_url: require("@/assets/circle_back.jpg")
    };
  },
  components: {
    Footer
  },
  methods: {

}
};
</script>
<style scoped>
.cirlce_box {
  width: 100%;
  min-height: 100%;
  border: 1px solid transparent;
  box-sizing: border-box;
}
.circle_back {
  margin-top: 60px;
  width: 100%;
  height: 200px;
  /* background-size: 100% 100%; */
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
  top: 6px;
  left: 14px;
}
.circlr_list {
  width: 80%;
  margin: 0 auto;
  height: 100%;
  border: 1px solid red;
}
</style>
