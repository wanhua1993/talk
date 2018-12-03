<template>
    <div class="mes_box">
        <Header @marked='show_mark' :ifMark='show'></Header>
        <div class="con">
            <div class="w_search">
              <p>
                <input type="text" placeholder="搜索">
                <img src="../../assets/sousuo.png" alt="">
              </p>
            </div>
            <div class="mes_content">
              <ul>
                <li v-for="(item, index) in mess_list" :key='index' @click="toDetail(item.w_id)">
                    <span class="mess_avatar">
                        <img :src="url + item.avatar" alt="头像">
                    </span>
                    <p class="mess_name">{{item.username}}</p>
                    <p class="mess_con">{{item.value}}</p>
                    <span class="mess_time">
                        {{item.time}}
                    </span>
                </li>
              </ul>
            </div>
            <ul class="header_list" v-show="show">
              <li>
                  <span>
                      <img src="../../assets/chuangjianv.png" alt="">
                  </span>
                  创建群聊
              </li>
              <li @click='to_add'>
                  <span>
                      <img src="../../assets/tianjiahaoyou.png" alt="">
                  </span>
                  添加好友
              </li>
              <li>
                  <span>
                      <img src="../../assets/saoyisao1.png" alt="">
                  </span>
                  扫一扫
              </li>
            </ul>
            <span class="sanjiao" v-show="show"></span>
            <div class="mark" @click="btn_mark" v-show="show">

            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from "@/views/common/footer";
import Header from "@/views/common/header";
import baseurl from "@/config/index";
import { mapGetters } from "vuex";
import { mess_list, zhifubao } from "@/api/friend";
import { parseChatTime, parseMessageTime } from "@/lib/parseTime";
export default {
  components: {
    Footer,
    Header
  },
  data() {
    return {
      url: baseurl.baseUrl.dev,
      mess_list: [],
      show: false,
      userId: ""
    };
  },
  computed: {
    ...mapGetters(["userInfo", "allMessage"])
  },
  created() {
    this.userId = this.userInfo._id;
    this.$store.dispatch("getAllMessage", this.userId);
  },
  mounted() {
    // 加载聊天消息
    this.get_messList(this.userId);
    // this.zhifu();
  },
  methods: {
    zhifu() {
      zhifubao()
        .then(res => {
          let form = document.getElementById('form');
          form.innerHTML = res.data.html;
          document.forms["alipaysubmit"].submit();
        })
        .catch(err => {
          console.log(err);
        });
    },
    get_messList(user_id) {
      mess_list({
        user_id
      })
        .then(res => {
          let value = res.data;
          value.forEach((item, index) => {
            value[index].time = parseMessageTime(Date.parse(item.time));
            if (this.userId == item.from_id) {
              value[index]["avatar"] = item.to_user.avatar;
              value[index]["username"] = item.to_user.username;
              value[index]['w_id'] = item.to_user._id;
            } else {
              value[index]["avatar"] = item.from_user.avatar;
              value[index]["username"] = item.from_user.username;
              value[index]['w_id'] = item.from_user._id;
            }
          });
          this.mess_list = value;
        })
        .catch(err => {
          console.log(err);
        });
    },
    toDetail(id) {
      this.$router.push("/chatroom?to_id=" + id);
    },
    show_mark(flag) {
      this.show = flag;
    },
    btn_mark() {
      this.show = false;
    },
    // 添加好友页面
    to_add() {
      this.$router.push("/addFriend");
    }
  }
};
</script>
<style scoped>
.mes_box {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
.con {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(243, 243, 243);
}
.header_list {
  width: 130px;
  position: fixed;
  top: 75px;
  right: 9px;
  background: #fcbcf3;
  padding: 5px 0;
  margin: 0;
  z-index: 9999;
  border-radius: 5px;
}
.header_list li {
  position: relative;
  width: calc(100% - 45px);
  height: 20px;
  margin: 15px 0;
  padding-left: 45px;
  font-size: 14px;
  text-align: left;
}

.header_list li span {
  position: absolute;
  top: 0;
  left: 15px;
  width: 18px;
  height: 18px;
}
.header_list li span img {
  width: 100%;
  height: 100%;
}
.sanjiao {
  position: fixed;
  top: 57px;
  right: 24px;
  width: 0;
  height: 0;
  border-width: 9px;
  border-style: solid;
  border-color: transparent transparent #fcbcf3 transparent;
}
.w_search {
  /* background: rgb(236, 235, 235); */
  width: 100%;
  height: 40px;
  margin-top: 60px;
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
  height: 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  outline: none;
  text-align: center;
  font-size: 14px;
  color: rgb(136, 133, 133);
}
.w_search p img {
  position: absolute;
  top: 33%;
  left: 40%;
  width: 14px;
  height: 14px;
}
.mes_content {
  position: relative;
  width: 100%;
  margin-bottom: 70px;
}
.mark {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.1);
}
.mes_content ul {
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 10px;
}
.mes_content li {
  position: relative;
  width: 96%;
  height: 60px;
  margin: 10px auto;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0.8px 0 0.3px #fcbcf3;
}

.mess_name {
  width: 72%;
  margin-left: 18%;
  height: 33px;
  line-height: 38px;
  font-size: 16px;
  text-align: left;
}
.mess_con {
  width: 72%;
  margin-left: 18%;
  height: 27px;
  font-size: 12px;
  text-align: left;
  color: rgb(151, 146, 146);
}
.mess_time {
  position: absolute;
  top: 18px;
  right: 10px;
  font-size: 14px;
  color: rgb(151, 146, 146);
}
.mess_avatar {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.mess_avatar img {
  width: 100%;
  height: 100%;
}
</style>
