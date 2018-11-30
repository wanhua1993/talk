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
import baseUrl from './config';

Vue.config.productionTip = false
const socket = socketio(baseUrl.baseUrl.dev);

Vue.use(Vuex);
// Vue.use(VueSocketio, socket); //与服务端链接
Vue.use(new VueSocketio({
  debug: true,
  connection: baseUrl.baseUrl.dev,
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  }
}))

// 用于 用户刷新 更改 socketId
const loginStatus = JSON.parse(localStorage.getItem("loginStatus") || '{}');
const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
loginStatus.isLogin && socket.emit('update', userInfo._id);

// 接受好友请求信息
socket.on('receiveFriendApply', (data) => {
  store.commit('APPLY_FRIENDS_NUM');
});
// 接受 私聊信息
socket.on("receiveSingleMessage", (data) => {
// 接收 到消息以后 更新到消息 list中
    console.log(data);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
