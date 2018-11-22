<template>
    <div class="photos_con">
        <div class="mes_header">
            <p>
                职业
                <span class="first" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="32px" height="32px">
                </span>
                <!-- <span class="second" @click='save()'>
                    保存
                </span> -->
            </p>  
        </div>
        <ul class="avatar_con">
            <li v-for="(item, index) in jobList" >
                <span class="icon">
                    <img :src="item.icon" alt="">
                </span>
                <p @click='select_job(item.job)'>
                    {{item.job}}
                    <span class="w_select" v-show="item.status">
                        <img :src='require("@/assets/duigou.png")' alt="">
                    </span>
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import baseUrl from "@/config/index";
import { setJob } from "@/api/user";
export default {
  data() {
    return {
      avatar: "",
      url: baseUrl.baseUrl.dev,
      sign_con: "",
      jobList: [
        {
          job: "计算机/互联网/通信",
          icon: require("@/assets/jisuanji.png"),
          status: false
        },
        {
          job: "生产/工艺/制造",
          icon: require("@/assets/gongyipin.png"),
          status: false
        },
        {
          job: "医疗/护理/制药",
          icon: require("@/assets/yiliao.png"),
          status: false
        },
        {
          job: "金融/银行/投资/保险",
          icon: require("@/assets/jinrong.png"),
          status: false
        },
        {
          job: "商业/服务业/个体经营",
          icon: require("@/assets/shangye.png"),
          status: false
        },
        {
          job: "文化/广告/传媒",
          icon: require("@/assets/wenhua.png"),
          status: false
        },
        {
          job: "娱乐/艺术/表演",
          icon: require("@/assets/yule.png"),
          status: false
        },
        {
          job: "律师/法务",
          icon: require("@/assets/lvshi.png"),
          status: false
        },
        {
          job: "教育/培训",
          icon: require("@/assets/jiaoyu.png"),
          status: false
        },
        {
          job: "公务员/行政/事业单位",
          icon: require("@/assets/xingzheng.png"),
          status: false
        },
        {
          job: "模特",
          icon: require("@/assets/mote.png"),
          status: false
        },
        {
          job: "空姐",
          icon: require("@/assets/kongjie.png"),
          status: false
        },
        {
          job: "学生",
          icon: require("@/assets/xuesheng.png"),
          status: false
        },
        {
          job: "其他职业",
          icon: require("@/assets/qita.png"),
          status: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    for (let i = 0; i < this.jobList.length; i++) {
      if (this.jobList[i].job == this.userInfo.job) {
        this.jobList[i].status = true;
      }
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    // 选择职业
    select_job(job) {
      setJob({
        user_id: this.userInfo._id,
        job
      })
        .then(res => {
          let value = {
            data: res.data,
            loginStatus: {
              isLogin: true
            }
          };
          this.$store.commit("SET_LOGIN", value);
          this.$router.back();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.photos_con {
  position: relative;
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
  font-size: 16px;
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
.avatar_con {
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;
  padding: 0;
}
.avatar_con li {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}
.avatar_con li p {
  text-align: left;
}
.avatar_con li .icon {
  float: left;
  width: 30px;
  margin: 0 5px;
}
.w_select {
  float: right;
  width: 30px;
  margin: 0 5px;
}
.w_select img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.avatar_con li .icon img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
