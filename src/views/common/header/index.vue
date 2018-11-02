<template>
    <div class="mes_header">
        <p>
            聆语
            <span class="first">
                <img src="../../../assets/saomiao.png" alt="" width="18px" height="18px">
            </span>
            <span class="second" @click='btn_show'>
                <img src="../../../assets/jia.png" alt="" width="32px" height="32px">
            </span>
        </p>  
    </div>    
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    btn_show() {
      this.$emit("marked", true);
    }
  }
};
</script>
<style scoped>
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
  top: 4px;
  left: 14px;
}
</style>
