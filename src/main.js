// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store';
import 'vue2-animate/dist/vue2-animate.min.css';
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';

Vue.config.productionTip = false
const socket = socketio('http://192.168.0.87:3001/');
Vue.use(Vuex);
Vue.use(VueSocketio, socket);//与服务端链接
// 用于 用户刷新 更改 socketId
const loginStatus = JSON.parse(localStorage.getItem("loginStatus") || '{}');
const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
loginStatus.isLogin && socket.emit('update', userInfo._id);

socket.on('reciveFriendApply', (data) => {
  store.commit('APPLY_FRIENDS_NUM');
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
