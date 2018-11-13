<template>
    <div class="add_box">
        <div class="mes_header">
            <p>
                添加
                <span class="first" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="30px" height="30px">
               </span>
            </p>
        </div>
        <div class="w_search">
            <p>
                <input type="text" placeholder="聆语号、手机号" v-model="number" @focus="focus()">
                <img src="../../assets/sousuo.png" alt="">
            </p>
            <p class="show" v-show="show">
              该用户不存在，请重新输入！
            </p>
        </div>
        <div class="findAll" @click="toUser">
            开始寻找
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
import { search_friend, if_friend } from "@/api/friend";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      number: "",
      show: false
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    focus() {
      this.show = false;
    },
    back() {
      this.$router.back();
    },
    toUser() {
      // 点击直接搜寻 先看好友是否存在  然后查看好友是否是自己的好友
      if (this.number == "") {
        return false;
      }
      search_friend({
        number: this.number
      })
        .then(async res => {
          if (res.data.length) {
            let _id = res.data[0]._id;
            let flag = await this.if_myfriend(_id, this.userInfo._id);
            if (flag) {
              this.$router.push("/usercenter?_id=" + _id);
            } else {
              this.$router.push("/usercenter?has_id=" + _id);
            }
          } else {
            this.show = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 看看该好友是否存在 在自己的好友列表中
    async if_myfriend(_id, userId) {
      let res = await new Promise(resolve => {
        if_friend({
          _id,
          userId
        })
          .then(res => {
            if (res.data.length) {
              resolve(false);
            } else {
              resolve(true);
            }
          })
          .catch(err => {
            console.log(err);
          });
      });
      return res;
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
.findAll {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  width: 100px;
  height: 100px;
  /* background: radial-gradient(#f009d1, #ee71dd, #f009d1); */
  background: #f009d1;
  line-height: 100px;
  color: #fff;
  text-align: center;
  border-radius: 50%;
}
@keyframes living {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
}
.findAll span {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 0;
  bottom: 0;
  background: #fff;
  border-radius: 50%;
  animation: living 3s linear infinite;
  z-index: 0;
}

.live span:nth-child(2) {
  animation-delay: 1.5s;
}
.w_search .show {
  margin-top: 60px;
}
</style>
