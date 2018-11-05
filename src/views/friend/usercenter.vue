<template>
    <div class="add_box">
        <div class="mes_header">
            <p>
                {{title}}
                <span class="first" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="30px" height="30px">
                </span>
            </p>
        </div>
        <div class="user_back" v-bind:style="{backgroundImage:'url(' + back_url + ')'}">
            <div class="user_avatar">
                <img :src="avatar" alt="">
            </div>
            <div class="user_info">
                <p>
                    {{username}}
                </p>
                <p>
                    聆语号：{{id}}
                </p>
            </div>
        </div>
        <div class="user_photo" ref="tab">
            <ul ref="tabsWrapper">
                <li v-for="(item, index) in menuList" :key="index">
                    <img :src="item.url" alt="">
                </li>
            </ul>
        </div>
        <div class="infos">
            <p class="user_title">座右铭</p>
            <p class="user_val">心有多大，舞台就有多大</p>
            <p class="user_title">她的等级</p>
            <p class="user_val">111111111</p>
            <p class="user_title">所在地</p>
            <p class="user_val">中国 北京 朝阳</p>
        </div>
        <div class="user_btn">
            <p class="btn" v-if="my_id" @click="editInfo()">编辑信息</p>
            <p class="btn" v-if="my_id" @click='login_out()'>退出登录</p>
            <p class="btn" v-else-if="user_id">加为好友</p>
            <p class="btn" v-else @click="toroom">发送消息</p>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      back_url: require("@/assets/user_back.png"),
      username: "爱吃番茄柿",
      id: "20181102",
      avatar: require("@/assets/meinv1.jpg"),
      menuList: [
        {
          value: "耳语",
          url: require("@/assets/meinv1.jpg")
        },
        {
          value: "聆友",
          url: require("@/assets/meinv2.jpg")
        },
        {
          value: "今说",
          url: require("@/assets/meinv3.jpg")
        },
        {
          value: "aa",
          url: require("@/assets/meinv4.jpg")
        },
        {
          value: "耳语",
          url: require("@/assets/meinv1.jpg")
        },
        {
          value: "聆友",
          url: require("@/assets/meinv2.jpg")
        }
      ],
      user_id: "",
      my_id: "",
      title: "她的资料"
    };
  },
  mounted() {
    let { id } = this.$route.query;
    if (id) {
      this.my_id = id;
      this.title = "个人中心";
    }
    this.initScroll();
  },
  methods: {
    back() {
      this.$router.back();
    },
    initScroll() {
      let width = this.menuList.length * 100;
      this.$refs.tabsWrapper.style.width = width + "px";
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.tab, {
          start: 0,
          click: true,
          scrollY: false,
          scrollX: true,
          eventPassthrough: "vertical" // 忽略这个实例对象的垂直滑动事件
        });
      } else {
        this.scroll.refresh();
      }
    },
    toroom() {
      this.$router.push("/chatroom");
    },
    // 编辑信息
    editInfo() {
      this.$router.push("/editInfo");
    },
    login_out() {
      this.$router.push('/login');
    }
  }
};
</script>
<style scoped>
.add_box {
  position: relative;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  background: rgb(240, 240, 240);
  overflow: hidden;
}
.mes_header {
  position: fixed;
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #c00dec, #f84be1);
  border: 1px solid transparent;
  box-sizing: border-box;
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
.w_search {
  width: 100%;
  height: 40px;
  margin-top: 65px;
}
.w_search p {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  line-height: 40px;
}
.w_search p input {
  width: 80%;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  text-align: center;
  font-size: 14px;
  color: rgb(136, 133, 133);
}
.w_search p img {
  position: absolute;
  top: 33%;
  left: 30%;
  width: 16px;
  height: 16px;
}
.user_back {
  margin-top: 70px;
  width: calc(100% - 2px);
  height: 210px;
  border: 1px solid rgb(240, 240, 240);
}
.user_avatar {
  width: 100px;
  height: 100px;
  margin: 20px auto;
  background: #fff;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid transparent;
}
.user_avatar img {
  width: 100%;
  height: 100%;
}
.user_info {
  color: #fff;
}
.user_info p {
  margin-bottom: 10px;
}
.user_photo {
  white-space: nowrap;
  width: 100%;
  height: 80px;
  margin: 20px 0;
  overflow: hidden;
}
.user_photo ul {
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.user_photo ul li {
  width: 80px;
  height: 100%;
  margin: 0 10px;
  float: left;
  text-align: center;
  list-style: none;
  border-radius: 10px;
  overflow: hidden;
}
.user_photo ul li img {
  width: 100%;
  height: 100%;
}
.infos {
  margin: 20px 0;
}
.infos p {
  font-size: 14px;
}
.infos .user_title {
  font-size: 16px;
  margin: 10px 0;
  font-weight: 700;
}
.user_btn {
  width: 100%;
}
.user_btn p {
  width: 40%;
  margin: 0 auto;
  height: 100%;
  line-height: 35px;
  background: #db7df3;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
