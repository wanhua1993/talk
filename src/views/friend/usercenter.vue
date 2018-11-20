<template>
    <div class="add_box">
      <Warn></Warn>
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
                <img :src="user.avatar" alt="">
            </div>
            <div class="user_info">
                <p>
                    {{user.username}}
                </p>
                <p>
                    聆语号：{{user.iden_num}}
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
            <p class="user_val">{{user.signature}}</p>
            <p class="user_title">她的等级</p>
            <p class="user_val">111111111</p>
            <p class="user_title">所在地</p>
            <p class="user_val">{{user.address}}</p>
        </div>
        <div class="user_btn">
            <p class="btn" v-if="my_id" @click="editInfo()">编辑信息</p>
            <p class="btn" v-if="my_id" @click='login_out()'>退出登录</p>
            <p class="btn" v-else-if="user_id" @click='add_user()'>加为好友</p>
            <p class="btn" v-else @click="toroom">发送消息</p>
        </div>
    </div>
</template>
<script>
import Warn from "@/components/warn";
import BScroll from "better-scroll";
import { find_one_user, addUser } from "@/api/friend";
import baseUrl from "@/config/index";
import { mapGetters } from "vuex";
import { uploadPhotos, photosList, deleteImg } from "@/api/user";
export default {
  components: {
    Warn
  },
  data() {
    return {
      back_url: require("@/assets/user_back.png"),
      username: "爱吃番茄柿",
      id: "20181102",
      avatar: require("@/assets/meinv1.jpg"),
      menuList: [],
      user_id: "",
      my_id: "",
      title: "她的资料",
      user: {},
      url: baseUrl.baseUrl.dev
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    let { id, _id, has_id } = this.$route.query;
    if (id) {
      // id  存在 说明 是自己的个人中心
      this.my_id = id;
      this.title = "个人中心";
      this.find_friend(this.my_id);
    }
    if (_id) {
      // _id 存在 说明 是别人的个人中心
      // 通过 _id 来获取这个人 的 个人信息
      this.user_id = _id;
      this.find_friend(this.user_id);
    }
    if (has_id) {
      // has_id 存在 说明 是已经加过好友 可以直接聊天
      this.find_friend(has_id);
    }
    this.load_img();
  },
  methods: {
    back() {
      this.$router.back();
    },
    // 加载图片库
    load_img() {
      photosList({
        user_id: this.userInfo._id
      })
        .then(res => {
          if (res.data.length) {
            res.data.forEach((item, index) => {
              res.data[index].url = this.url + res.data[index].url;
            });
          }
          this.menuList = res.data;
          this.initScroll();
        })
        .catch(err => {
          console.log(err);
        });
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
      this.$store.commit("LOGOUT");
      this.$router.push("/login");
    },
    // 个人中心 个人信息
    find_friend(id) {
      find_one_user({
        id
      })
        .then(res => {
          this.user = res.data[0];
          this.user.avatar = baseUrl.baseUrl.dev + this.user.avatar;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 点击 加为好友  并且要实时告诉到对方
    async add_user() {
      // 0 首先判断是否已经向这个好友发送过请求 并且确定是否操作，如果操作了则可以重复发 否则提醒 已经发过请求
      // 1 先发送 好友申请请求
      await this.to_user();
    },
    async to_user() {
      addUser({
        to_id: this.user_id,
        from_id: this.userInfo._id
      })
        .then(res => {
          if (res.data.code == 1) {
            this.$store.dispatch("setShowWarn", res.data.msg);
          } else {
            this.$store.dispatch("setShowWarn", "好友请求 发送成功!");
            // 2 实时告诉对方
            this.$socket.emit("addFriend", this.user._id);
          }
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
  margin-top: 60px;
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
