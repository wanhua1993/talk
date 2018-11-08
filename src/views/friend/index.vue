<template>
    <div class="user_con">
        <div class="mes_header">
          <p>
            聆友
            <span class="second">
                <img src="../../assets/jia.png" alt="" width="32px" height="32px">
            </span>
          </p>  
        </div>
        <div class="list_box">
          <p class="new_friends" @click="to_apply_list()">
            <span class="friends_icon">
              <img src="../../assets/friends.png" alt="">
            </span>
            新的朋友
            <span class="applyNums" v-if="applyNums != 0">{{applyNums}}</span>  
          </p>
          <ul class="first_ul">
            <li class="first_li" v-for="(item, index) in userList" :key="index">
              <p>{{item.type}}</p>
              <ul>
                <li v-for="(val, ind) in item.list" :key="ind" @click="to_user()">
                  <img :src="val.avatar" alt="" class="user_avatar">
                  <p class="user_name">
                    {{val.username}}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Footer></Footer>
    </div>   
</template>
<script>
import Footer from "@/views/common/footer";
import { mapGetters } from "vuex";
export default {
  components: {
    Footer
  },
  data() {
    return {
      userList: [
        {
          type: "A",
          list: [
            {
              username: "小天",
              avatar: require("@/assets/meinv1.jpg")
            },
            {
              username: "小花",
              avatar: require("@/assets/meinv2.jpg")
            },
            {
              username: "小胡",
              avatar: require("@/assets/meinv3.jpg")
            }
          ]
        },
        {
          type: "B",
          list: [
            {
              username: "小天",
              avatar: require("@/assets/meinv1.jpg")
            },
            {
              username: "小花",
              avatar: require("@/assets/meinv2.jpg")
            }
          ]
        },
        {
          type: "C",
          list: [
            {
              username: "小天",
              avatar: require("@/assets/meinv1.jpg")
            },
            {
              username: "小花",
              avatar: require("@/assets/meinv2.jpg")
            },
            {
              username: "小胡",
              avatar: require("@/assets/meinv3.jpg")
            },
            {
              username: "小已",
              avatar: require("@/assets/meinv4.jpg")
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["applyNums"])
  },
  methods: {
    to_user() {
      this.$router.push("/usercenter");
    },
    // 点击进入好友申请列表
    to_apply_list() {
      // 点击进去以后 所有的申请 状态清零
      this.$store.commit('REMOVE_APPLY');
      this.$router.push('/applyList');
    }
  }
};
</script>
<style scoped>
.user_con {
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
  top: 10px;
  right: 14px;
}
.mes_header p .first {
  position: absolute;
  top: 4px;
  left: 14px;
}
.list_box ul {
  padding: 0;
}
.first_ul {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  margin-bottom: 70px;
}
.first_ul .first_li {
  width: 100%;
  margin: 20px 0;
}
.first_li p {
  text-align: left;
}
.first_li ul {
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 #fa9eee;
}
.first_li ul li {
  position: relative;
  width: 100%;
  height: 50px;
  text-align: left;
  border-bottom: 1px solid rgb(233, 232, 232);
}
.first_li ul li:last-child {
  border: none;
}
.user_avatar {
  position: absolute;
  top: 5px;
  left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user_name {
  margin-left: 70px;
  height: 50px;
  line-height: 50px;
  display: inline-block;
}
.new_friends {
  position: relative;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  text-align: left;
  margin-top: 70px;
  padding: 0 50px;
}
.applyNums {
  position: absolute;
  top: 50%;
  right: 20px;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  line-height: 20px;
  border-radius: 50%;
  background: fuchsia;
  color: #fff;
  text-align: center;
  font-size: 14px;
}
.friends_icon {
  position: absolute;
  top: 4px;
  left: 20px;
  width: 20px;
  height: 20px;
}
.friends_icon img {
  width: 100%;
  height: 100%;
}
</style>
