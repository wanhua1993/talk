<template>
  <div class="cirlce_box">
    <div class="mes_header">
      <p>动态
        <!-- <span class="first">
                      <img src="../../assets/fanhui.png" alt="" width="30px" height="30px">
        </span>-->
        <span class="second" @click="to_release">
          <img src="../../assets/zhaoxiangji.png" alt width="32px" height="32px">
        </span>
      </p>
    </div>
    <p class="drop-down" v-if="dropDown">松手刷新数据...</p>
    <div class="bscroll" ref="bscroll">
      <div class="bscroll-container">
        <div class="circle_back" v-bind:style="{backgroundImage:'url(' + back_url + ')'}"></div>
        <ul class="circle_list">
          <li v-for="(item, index) in mesList" :key="index">
            <span class="circle_avatar">
              <img :src="url + item.user_id.avatar" alt="头像">
            </span>
            <p style="color: #f84be1">{{item.user_id.username}}</p>
            <p>{{item.content}}</p>
            <p v-if="item.photos.length" class="imgUrl">
              <img v-for="(val, index) in item.photos" :key="index" :src="url + val" alt="图片">
            </p>
            <p style="margin: 0; color: #999">{{item.createdAt}}</p>
          </li>
        </ul>
      </div>
    </div>
    <p class="x" v-show="up">加载更多...</p>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/views/common/footer";
import { mapGetters } from "vuex";
import BScroll from "better-scroll";
import { load_friCon } from "@/api/friend";
import baseUrl from "@/config/index";
import { parseChatTime } from "@/lib/parseTime";
export default {
  data() {
    return {
      back_url: require("@/assets/circle_back.jpg"),
      mesList: [],
      url: baseUrl.baseUrl.dev,
      dropDown: false,
      up: false
    };
  },
  components: {
    Footer
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    this.load_con();
    this.initData();
  },
  methods: {
    // 加载说说了
    load_con() {
      load_friCon({
        user_id: this.userInfo._id
      })
        .then(res => {
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].createdAt = parseChatTime(
              Date.parse(res.data[i].createdAt) / 1000
            );
          }
          this.mesList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    to_release() {
      this.$router.push("/release");
    },
    initData() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.bscroll, {
            click: true,
            scrollY: true,
            probeType: 3
          });
        } else {
          this.scroll.refresh();
        }
        this.scroll.on("scroll", pos => {
          //如果下拉超过50px 就显示下拉刷新的文字
          console.log(pos.y);
          if (pos.y > 20) {
            this.dropDown = true;
          } else {
            this.dropDown = false;
          }
          if(pos.y < -500) {
            this.up = true;
          } else {
            this.up = false;
          }
          console.log(this.scroll.maxScrollY);
        });
        //touchEnd（手指离开以后触发） 通过这个方法来监听下拉刷新
        this.scroll.on("touchEnd", pos => {
          // 下拉动作
          if (pos.y > 20) {
            this.dropDown = false;
          }

          //上拉加载 总高度>下拉的高度+10 触发加载更多
          if (this.scroll.maxScrollY > pos.y + 10) {
            this.up = false;
            //使用refresh 方法 来更新scroll  解决无法滚动的问题
            this.scroll.refresh();
          }
        });
      });
    }
  }
};
</script>
<style scoped>
.bscroll {
  width: 100%;
  height: 600px;
  overflow: hidden;
  margin-top: 60px;
}
.drop-down {
  position: absolute;
  top: 70px;
  left: 0px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: rgb(161, 161, 161);
}
.x {
  position: absolute;
  bottom: 55px;
  left: 0px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: rgb(161, 161, 161);
}
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
  width: calc((100% - 18px) / 3);
  margin: 3px;
}
</style>
