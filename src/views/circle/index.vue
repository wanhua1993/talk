<template>
    <div class="cirlce_box">
        <div class="mes_header">
            <p>
                动态
                <!-- <span class="first">
                    <img src="../../assets/fanhui.png" alt="" width="30px" height="30px">
                </span> -->
                <span class="second"  @click='to_release'>
                    <img src="../../assets/zhaoxiangji.png" alt="" width="32px" height="32px">
                </span>
            </p>
        </div>
        <div class="circle_back" v-bind:style="{backgroundImage:'url(' + back_url + ')'}">

        </div>
        <ul class="circle_list">
            <li v-for='(item, index) in mesList' :key='index'>
                <span class="circle_avatar">
                  <img :src="item.avatar" alt="头像">
                </span>
                <p style="color: #f84be1">{{item.username}}</p>
                <p>{{item.content}}</p>
                <p v-if='item.imgUrl.length' class="imgUrl">
                  <img v-for='(val, index) in item.imgUrl' :key="index" :src="val" alt="图片" >
                </p>
                <p style="margin: 0; color: #999">{{item.time}}</p>
            </li>
        </ul>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@/views/common/footer";
export default {
  data() {
    return {
      back_url: require("@/assets/circle_back.jpg"),
      mesList: [
        {
          avatar: require("@/assets/meinv1.jpg"),
          username: "小天",
          content:
            "今天天气这么好，不出去玩就白瞎了！今天天气这么好，不出去玩就白瞎了！今天天气这么好，不出去玩就白瞎了！",
          time: "2018-11-02",
          imgUrl: []
        },
        {
          avatar: require("@/assets/meinv2.jpg"),
          username: "小天",
          content: "今天天气这么好，不出去玩就白瞎了！",
          time: "2018-11-02",
          imgUrl: [
            require("@/assets/meinv1.jpg"),
            require("@/assets/meinv2.jpg"),
            require("@/assets/meinv3.jpg"),
            require("@/assets/meinv4.jpg")
          ]
        },
        {
          avatar: require("@/assets/meinv3.jpg"),
          username: "小施",
          content:
            "今天天气这么好，不出去玩就白瞎了！今天天气这么好，不出去玩就白瞎了！",
          time: "2018-11-02",
          imgUrl: []
        },
        {
          avatar: require("@/assets/meinv4.jpg"),
          username: "小胡",
          content: "今天天气这么好，不出去玩就白瞎了！",
          time: "2018-11-02",
          imgUrl: []
        },
        {
          avatar: require("@/assets/meinv1.jpg"),
          username: "小天",
          content:
            "今天天气这么好，不出去玩就白瞎了！今天天气这么好，不出去玩就白瞎了！",
          time: "2018-11-02",
          imgUrl: [
            require("@/assets/meinv1.jpg"),
            require("@/assets/meinv2.jpg"),
            require("@/assets/meinv3.jpg")
          ]
        },
        {
          avatar: require("@/assets/meinv3.jpg"),
          username: "小花",
          content: "今天天气这么好，不出去玩就白瞎了！",
          time: "2018-11-02",
          imgUrl: []
        }
      ]
    };
  },
  components: {
    Footer
  },
  methods: {
    to_release() {
      this.$router.push('/release');
    }
  }
};
</script>
<style scoped>
.cirlce_box {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding-bottom: 60px;
  overflow: hidden;
}
.circle_back {
  margin-top: 60px;
  width: 100%;
  height: 200px;
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
.circle_list {
  margin: 0 auto;
  padding: 0;
  margin-top: 20px;
}
.circle_list li {
  position: relative;
  width: calc(100%-40px);
  border-bottom: 1px solid rgb(221, 217, 220);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0 20px 20px 50px;
}
.circle_list li p {
  text-align: left;
  margin-bottom: 20px;
}
.circle_avatar {
  position: absolute;
  top: -5px;
  left: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.circle_avatar img {
  width: 100%;
  height: 100%;
}
.imgUrl img {
  width: calc((100% - 18px)/3);
  margin: 3px;
}
</style>
