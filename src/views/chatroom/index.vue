<template>
    <div class="chat">
        <div class="mes_header">
            <p>
                {{username}}
                <span class="first" @click="back()">
                    <img src="../../assets/fanhui.png" alt="" width="30px" height="30px">
                </span>
                <span class="second">
                    <img src="../../assets/fenxiang.png" alt="" width="20px" height="20px">
                </span>
            </p>    
        </div>  
        <div class="chat_list">
            <ul>
                <li v-for="(item, index) in chat_list" :key="index">
                    <span class="chat_avatar" :class="[item.location=='left' ? chat_left : chat_right]">
                        <img :src="item.avatar" alt="头像">
                    </span>
                    <!-- 文本 -->
                    <p v-if="item.type=='txt'" class="chat_one" :class="[item.location=='left' ? left : right]" >
                        {{item.content}}
                        <span :class="[item.location=='left' ? left_span : right_span]"></span> 
                    </p>
                    <!-- 图片 -->
                    <p v-else-if="item.type=='img'"class="chat_img" :class="[item.location=='left' ? left : right]" >
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
                <img src="../../assets/yuyin.png" alt="">
            </span>
            <input type="text" v-model='content'>
            <span class="wenjian">
                <img src="../../assets/tianjia.png" alt="" v-if='if_con'>
                <img src="../../assets/fasong.png" alt="" v-else @click='send_con()'>
            </span>
            <span class="biaoqing">
                <img src="../../assets/biaoqing.png" alt="" >
            </span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      username: "爱吃番茄柿",
      chat_list: [
        {
          avatar: require("@/assets/meinv1.jpg"),
          content: "在吗？",
          username: "小万",
          location: "left",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv1.jpg"),
          content:
            "你在干嘛呢？你在干嘛呢？你在干嘛呢？你在干嘛呢？你在干嘛呢？",
          username: "小万",
          location: "left",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv2.jpg"),
          content: "没干嘛啊",
          username: "小天",
          location: "right",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv1.jpg"),
          content: "一起去吃饭吧",
          username: "小万",
          location: "left",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv2.jpg"),
          content: require("@/assets/meinv1.jpg"),
          username: "小天",
          location: "right",
          type: "img"
        },
        {
          avatar: require("@/assets/meinv1.jpg"),
          content: "那你准备下。。。",
          username: "小万",
          location: "left",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv2.jpg"),
          content: "我准备好了。。。",
          username: "小天",
          location: "right",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv2.jpg"),
          content: "你在哪呢？？？",
          username: "小天",
          location: "right",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv1.jpg"),
          content: "我现在在你们楼下。。",
          username: "小万",
          location: "left",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv2.jpg"),
          content: "好吧，那我下来了!",
          username: "小天",
          location: "right",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv1.jpg"),
          content: require("@/assets/meinv2.jpg"),
          username: "小万",
          location: "left",
          type: "img"
        },
        {
          avatar: require("@/assets/meinv2.jpg"),
          content: "咱们今天去哪吃饭呀？",
          username: "小天",
          location: "right",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv1.jpg"),
          content: "你想吃什么呢？？？",
          username: "小万",
          location: "left",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv2.jpg"),
          content: "小龙虾吧",
          username: "小天",
          location: "right",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv1.jpg"),
          content: "可以啊，我知道一家店。",
          username: "小万",
          location: "left",
          type: "txt"
        },
        {
          avatar: require("@/assets/meinv2.jpg"),
          content: "10分钟就能到的。。。",
          username: "小天",
          location: "right",
          type: "txt"
        }
      ],
      chat_left: "chat_left",
      chat_right: "chat_right",
      left: "left",
      right: "right",
      left_span: "left_span",
      right_span: "right_span",
      content: ""
    };
  },
  computed: {
    if_con() {
      if (this.content) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    back() {
      this.$router.push("/message");
    },
    send_con() {
      if (this.content) {
        let value = {
          avatar: require("@/assets/meinv2.jpg"),
          content: this.content,
          username: "小天",
          type: "right"
        };
        this.chat_list.push(value);
        this.content = "";
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
  border: 1px solid transparent;
  box-sizing: border-box;
  background: rgb(240, 240, 240);
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
