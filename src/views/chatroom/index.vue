<template>
  <div class="chat">
    <div class="mes_header">
      <p>
        {{username}}
        <span class="first" @click="back()">
          <img src="../../assets/fanhui.png" alt width="30px" height="30px">
        </span>
        <span class="second">
          <img src="../../assets/fenxiang.png" alt width="20px" height="20px">
        </span>
      </p>
    </div>
    <div class="chat_list">
      <ul>
        <li v-for="(item, index) in chat_list" :key="index">
          <span class="chat_avatar" :class="[item.location=='left' ? chat_left : chat_right]">
            <img :src="url + item.avatar" alt="头像">
          </span>
          <!-- 文本 -->
          <p v-if="item.type=='0'" class="chat_one" :class="[item.location=='left' ? left : right]">
            {{item.content}}
            <span :class="[item.location=='left' ? left_span : right_span]"></span>
          </p>
          <!-- 图片 -->
          <p
            v-else-if="item.type=='1'"
            class="chat_img"
            :class="[item.location=='left' ? left : right]"
          >
            <img :src="item.content" alt="图片" width="150px" height="150px">
            <span :class="[item.location=='left' ? left_span : right_span]"></span>
          </p>
          <!-- 语音 -->
          <!-- 文件 -->
        </li>
      </ul>
    </div>

    <div class="chat_footer">
      <span class="yuyin">
        <img src="../../assets/yuyin.png" alt>
      </span>
      <input type="text" v-model="content">
      <span class="wenjian">
        <img src="../../assets/tianjia.png" alt v-if="if_con">
        <img src="../../assets/fasong.png" alt v-else @click="send_con()">
      </span>
      <span class="biaoqing">
        <img src="../../assets/biaoqing.png" alt>
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { loadMess } from "@/api/friend";
import baseUrl from "@/config/index";
export default {
  data() {
    return {
      url: baseUrl.baseUrl.dev,
      username: "爱吃番茄柿",
      chat_list: [],
      chat_left: "chat_left",
      chat_right: "chat_right",
      left: "left",
      right: "right",
      left_span: "left_span",
      right_span: "right_span",
      content: "",
      other_id: ""
    };
  },
  computed: {
    if_con() {
      if (this.content) {
        return false;
      } else {
        return true;
      }
    },
    ...mapGetters(["userInfo"])
  },
  created() {
    let id = this.$route.query.to_id;
    if (id) {
      this.other_id = id;
    }
    // 加载聊天记录
    this.load_message();
  },
  methods: {
    load_message() {
      loadMess({
        user_id: this.userInfo._id,
        other_id: this.other_id
      })
        .then(res => {
          if (res.data.length) {
            this.chat_list = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    back() {
      this.$router.push("/message");
    },
    send_con() {
      if (this.content) {
        let value = {
          avatar: this.userInfo.avatar,
          content: this.content,
          location: "right",
          username: "小天",
          type: "0",
          from_id: this.userInfo._id,
          to_id: this.other_id
        };
        this.chat_list.push(value);
        this.content = "";
        this.$socket.emit('send_message', value);
      } else {
        alert("输入内容不能为空！");
      }
    }
  }
};
</script>
<style scoped>
.chat {
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
  background: linear-gradient(to right, #c00dec, #f84be1); /* 标准的语法 */
  z-index: 1;
}
.chat_footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #f8f6f8;
  box-shadow: 0 0 0 1px #fcbcf3;
}
.chat_footer input {
  width: 60%;
  height: 100%;
  background: transparent;
  outline: none;
  border: none;
  font-size: 16px;
}
.yuyin {
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  width: 30px;
  height: 30px;
}
.yuyin img {
  width: 100%;
  height: 100%;
}
.biaoqing {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  z-index: 3;
}
.biaoqing img {
  width: 100%;
  height: 100%;
}
.wenjian {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  z-index: 3;
}
.wenjian img {
  width: 100%;
  height: 100%;
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
  top: 4px;
  right: 14px;
}
.mes_header p .first {
  position: absolute;
  top: 8px;
  left: 14px;
}
.chat_list {
  width: 96%;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 60px;
}
.chat_list ul {
  width: 100%;
  margin: 0;
  padding: 0;
}
.chat_list ul li {
  position: relative;
  display: table;
  width: 100%;
  margin: 10px 0;
}
.chat_left {
  float: left;
}
.chat_right {
  float: right;
}
.chat_avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.chat_avatar img {
  width: 100%;
  height: 100%;
}
.chat_one {
  position: relative;
  max-width: 70%;
  line-height: 30px;
  padding: 0 10px;
  margin-top: 5px;
  background: #fff;
  text-align: left;
  font-size: 14px;
  border-radius: 8px;
}

.chat_one span {
  position: absolute;
  top: 8px;
  width: 0;
  height: 0;
  border-width: 6px;
  border-style: solid;
}
.left {
  float: left;
  margin-left: 15px;
  box-shadow: 0 0.8px 0 0.3px #fcbcf3;
}
.right {
  float: right;
  margin-right: 15px;
  background: #fdc3f5;
  box-shadow: 0 0.8px 0 0.3px #fff;
}
.chat_img {
  background: #fff;
  box-shadow: none;
}
.left_span {
  left: -12px;
  border-color: transparent #fff transparent transparent;
}
.right_span {
  right: -12px;
  border-color: transparent transparent transparent #fdc3f5;
}
</style>
