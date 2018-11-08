<template>
    <div class="apply_box">
        <div class="mes_header">
            <p>
                新的朋友
                <span class="first" @click="back()">
                    <img src="../../assets/fanhui.png" alt="返回">
                </span>
                <span class="second" @click='add_friend()'>
                    添加好友
                </span>
            </p>  
        </div>  
        <div class="apply_list">
            <ul>
                <li v-for="(item, index) in apply_list" :key="index">
                    <p class="apply_avatr">
                        <img :src="url + item.from_id.avatar" alt="">
                    </p>
                    <p class="apply_username">
                        {{item.from_id.username}}
                    </p>
                    <p class="apply_btn" v-if="item.status==0" @click="accept()">
                        接受
                    </p>
                    <p class="" v-if="item.status==1">
                        已接受
                    </p>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import baseUrl from "@/config/";
import { applyList } from "@/api/friend";
export default {
  data() {
    return {
      apply_list: [],
      url: baseUrl.baseUrl.dev
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    // 加载好友请求列表
    let user_id = this.userInfo._id;
    this.load_apply(user_id);
  },
  methods: {
    back() {
      this.$router.back();
    },
    add_friend() {
      this.$router.push("/addFriend");
    },
    // 加载好友请求列表
    load_apply(id) {
      applyList({
        id
      })
        .then(res => {
          this.apply_list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 接受好友请求
    accept() {
        
    }
  }
};
</script>
<style scoped>
.apply_box {
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
  right: 14px;
  font-size: 14px;
}

.mes_header p .first {
  position: absolute;
  top: 8px;
  left: 14px;
}

.mes_header p .first img {
  border-radius: 50%;
  overflow: hidden;
  width: 32px;
  height: 32px;
}
.apply_list {
  width: 100%;
  height: 100%;
  margin-top: 70px;
  margin-bottom: 10px;
}
.apply_list ul {
  width: calc(100% - 40px);
  padding: 0 20px;
  margin: 0;
}
.apply_list ul li {
  float: left;
  margin: 5px;
  width: calc((100% - 30px) / 3);
  height: 140px;
  box-shadow: 0 0 1px 0 #f84be1;
  border-radius: 5px;
}

.apply_avatr {
  margin: 10px auto;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
}
.apply_avatr img {
  width: 100%;
  height: 100%;
}
.apply_username {
  margin: 10px auto;
  font-size: 14px;
}
.apply_btn {
  width: 60px;
  height: 30px;
  line-height: 30px;
  margin: 10px auto;
  background: #3df75c;
  color: rgb(14, 13, 13);
  font-size: 14px;
  border-radius: 5px;
}
.clear {
  clear: both;
}
</style>
