<template>
    <div class="edit_box">
        <div class="mes_header">
            <p>
                编辑资料
                <span class="first" @click='back()'>
                                                                                                        <img src="../../assets/fanhui.png" alt="" width="30px" height="30px">
                                                                                                    </span>
            </p>
        </div>
        <div class="info_list">
            <ul class="info_ul">
                <li class="info_li">
                    <p>
                        <router-link to='userInfo'>照片墙</router-link>
                    </p>
                </li>
                <li class="info_li">
                    <p>
                        <router-link to='avatar'>头像</router-link>
                    </p>
                </li>
                <li class="info_li">
                    <p>
                        <router-link to='userSign'>
                            签名
                            <span class="sign_span">{{userInfo.signature}}</span>
                        </router-link>
                    </p>
                </li>
                <li class="info_li">
                    <p>
                        昵称
                        <input type="text" name="username" v-model='username' class="sign_input" @blur='onBlur()'>
                    </p>
                </li>
                <li class="info_li">
                    <p @click='showSex'>
                        性别
                        <span class="sign_span">{{sex}}</span>
                    </p>
                </li>
                <li class="info_li">
                    <p @click='showBirth'>
                        生日
                        <span class="sign_span">{{birth}}</span>
                    </p>
                </li>
                <li class="info_li">
                    <p>
                        <router-link to='job'>职业</router-link>
                    </p>
                </li>
                <li class="info_li">
                    <p>
                        <router-link to='company'>公司</router-link>
                    </p>
                </li>
                <li class="info_li">
                    <p>
                        <router-link to='school'>学校</router-link>
                    </p>
                </li>
                <li class="info_li">
                    <p>
                        <router-link to='address'>所在地</router-link>
                    </p>
                </li>
                <li class="info_li">
                    <p>
                        <router-link to='info'>个人说明</router-link>
                    </p>
                </li>
            </ul>
        </div>
        <transition name='slide-top'>
            <div class="select_sex" v-if='show'>
                <p @click="querySex()">完成</p>
                <ul>
                    <li v-for="(item, index) in sexList" @click='select(index)' :class="{active: item.status}">{{item.sex}}</li>
                </ul>
            </div>
        </transition>
        <transition name='slide-top'>
            <div class="select_birth" v-if='showBir'>
                <!-- <Calendar ref='Calender'
                        @choseDay="clickDay"
                        @changeMonth="changeDate"
                        :agoDayHide=agoDayHide
                        >
                        </Calendar> -->
                <vue-calendar :originDateValue="originSetDateValue" :tipsData="tipsData" @set-Calendar="setCalendar" :startYear="startYear" :endYear="endYear">
                </vue-calendar>
            </div>
        </transition>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { setUsername, setSex, setBirth } from "@/api/user";
import Calendar from "vue-calendar-component";
import vueCalendar from "@/components/calendar";
export default {
  components: {
    Calendar,
    vueCalendar
  },
  data() {
    return {
      username: "",
      sex: "",
      active: "active",
      sexList: [
        {
          sex: "男",
          status: true
        },
        {
          sex: "女",
          status: false
        }
      ],
      show: false,
      showBir: false,
      birth: "",
      agoDayHide: "",

      today: 0,
      originSetDateValue: "", //设置初始日期
      startYear: 1970, //起始年份
      endYear: 2050, //结束年份
      tipsData: {
        //传入的日历数据，必须以日期为键值格式为2008-8-8
        "2017-7-6": [
          {
            contest: "hellohello"
          },
          {
            task: ["100", "200"]
          }
        ],
        "2017-7-5": [
          {
            contest: "pk"
          },
          {
            task: ["100", "200"]
          }
        ],
        "2017-7-9": [
          {
            contest: "nba"
          },
          {
            task: ["100", "200"]
          }
        ],
        "2017-8-5": [
          {
            contest: "hello world"
          },
          {
            task: ["100", "200"]
          }
        ],
        "2017-9-5": [
          {
            contest: "hello world"
          },
          {
            task: ["100", "200"]
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    this.username = this.userInfo.username;
    this.sex = this.userInfo.sex;
    this.originSetDateValue = this.birth = this.userInfo.birth;
    if (this.sex == "男") {
      this.select(1);
    } else {
      this.select(0);
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    // 设置昵称
    onBlur() {
      setUsername({
        user_id: this.userInfo._id,
        username: this.username
      })
        .then(res => {
          this.setLogin(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    showSex() {
      this.show = !this.show;
    },
    showBirth() {
      this.showBir = !this.showBir;
    },
    // 设置 性别
    querySex() {
      this.show = false;
      setSex({
        user_id: this.userInfo._id,
        sex: this.sex
      })
        .then(res => {
          this.setLogin(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 选择 性别
    select(index) {
      for (let i = 0; i < 2; i++) {
        if (i != index) {
          this.sexList[i].status = false;
        } else {
          this.sexList[i].status = true;
          this.sex = this.sexList[i].sex;
        }
      }
    },
    // 重置用户信息
    setLogin(data) {
      let value = {
        data: data,
        loginStatus: {
          isLogin: true
        }
      };
      this.$store.commit("SET_LOGIN", value);
    },
    // 日期
    setCalendar(val) {
      let date = val.join("-");
      this.originSetDateValue = this.birth = date;
      this.showBir = false;
      setBirth({
        user_id: this.userInfo._id,
        birth: this.birth
      })
        .then(res => {
          console.log(res);
          this.setLogin(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.edit_box {
  position: relative;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  background: rgb(243, 243, 243);
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
  top: 8px;
  left: 14px;
}
.info_list {
  margin-top: 70px;
  width: 100%;
  height: 100%;
}
.info_list .info_ul {
  width: 100%;
  height: 100%;
  padding: 0;
}
.info_li {
  width: 100%;
  height: 40px;
  border-top: 1px solid #ddd;
  background: #fff;
}
.info_li:first-child,
.info_li:nth-child(3),
.info_li:nth-child(6),
.info_li:nth-child(10),
.info_li:nth-child(11) {
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}
.info_li p {
  height: 100%;
  line-height: 40px;
  margin-left: 20px;
  text-align: left;
  font-size: 14px;
}
.info_li p a {
  display: block;
  color: #000;
}
.sign_span {
  display: inline-block;
  margin-left: 20px;
}
.sign_input {
  display: inline-block;
  width: 70%;
  outline: none;
  border: none;
  margin-left: 20px;
}
.select_sex {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
  background: rgb(240, 238, 238);
  z-index: 1;
  border-top: 1px solid #ddd;
}
.select_birth {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgb(240, 238, 238);
  z-index: 1;
  border-top: 1px solid #ddd;
}
.select_sex ul {
  width: 100%;
  padding: 0;
  margin: 0.3rem 0;
}
.select_sex ul li {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
}
.select_sex ul .active {
  background: #fc7aea;
  color: #fff;
}
.select_sex p {
  padding: 0 30px;
  margin: 0;
  height: 0.4rem;
  line-height: 0.4rem;
  border-bottom: 1px solid #ddd;
  text-align: right;
  color: #f84be1;
  font-size: 0.14rem;
}
.slide-top-enter-active {
  transition: all 0.3s ease;
}
.slide-top-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-top-enter,
.slide-top-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
