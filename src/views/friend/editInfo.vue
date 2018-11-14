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
                        <router-link to='userSing'>签名</router-link>
                    </p>
                </li>
                <li class="info_li">
                    <p>
                        <router-link to='username'>昵称</router-link>
                    </p>
                </li>
                <li class="info_li">
                    <p>
                        <router-link to='sex'>性别</router-link>
                    </p>
                </li>
                <li class="info_li">
                    <p>
                        <router-link to='birth'>生日</router-link>
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
        <div class="info_commit">
            <p>
                提交
            </p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.edit_box {
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
.info_commit {
  width: 100%;
  height: 35px;
  margin-bottom: 20px;
}
.info_commit p {
  width: 30%;
  margin: 0 auto;
  height: 100%;
  line-height: 35px;
  border-radius: 6px;
  background: #f84be1;
  color: #fff;
  font-size: 16px;
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
</style>
