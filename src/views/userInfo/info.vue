<template>
    <div class="photos_con">
        <Warn/>
        <div class="mes_header">
            <p>
                个人说明
                <span class="first" @click='back()'>
                    <img src="../../assets/fanhui.png" alt="" width="32px" height="32px">
                </span>
                <span class="second" @click='save()'>
                    完成
                </span>
            </p>  
        </div>
        <div class="avatar_con">
            <textarea name="" id="" cols="25" rows="10" placeholder="请设置你的个性签名" v-model="info"></textarea>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import baseUrl from "@/config/index";
import Warn from "@/components/warn";
import { setInfo } from "@/api/user";
export default {
  components: {
    Warn
  },
  data() {
    return {
      avatar: "",
      url: baseUrl.baseUrl.dev,
      info: ""
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {},
  methods: {
    back() {
      this.$router.back();
    },
    save() {
      setInfo({
        user_id: this.userInfo._id,
        info: this.info
      })
        .then(res => {
          let value = {
            data: res.data,
            loginStatus: {
              isLogin: true
            }
          };
          this.$store.commit("SET_LOGIN", value);
          this.$store.dispatch("setShowWarn", "保存成功！");
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
  top: 0;
  left: 14px;
}
.mes_header p .first img {
  border-radius: 50%;
  overflow: hidden;
  width: 32px;
  height: 32px;
  vertical-align: middle;
}
.avatar_con {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 60px;
  background: rgb(243, 241, 241);
}
.avatar_con textarea {
  margin: 20px 0;
  padding: 5px;
  width: calc(100% - 10px);
  outline: none;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  background: #fff;
}
</style>
