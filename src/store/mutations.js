import * as types from './mutation_types';

export const state = {
  'loginStatus': JSON.parse(localStorage.getItem('loginStatus')) || {},
  'userInfo': JSON.parse(localStorage.getItem('userInfo')) || {},
  'apply_nums': 0
}

export const mutations = {
  // 设置登录状态
  [types.SET_LOGIN](
    state,
    {
      loginStatus,
      data
    }) {
    state.loginStatus = loginStatus;
    state.userInfo = data;
    localStorage.setItem('loginStatus', JSON.stringify(state.loginStatus));
    localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
  },
  // 退出登录
  [types.LOGOUT](state) {
    clear(state);
  },
  // 好友申请消息提示
  [types.APPLY_FRIENDS_NUM](state) {
    state.apply_nums++
    console.log(state.apply_nums);
  },
  // 好友申请消息提示 清零
  [types.REMOVE_APPLY](state) {
    state.apply_nums = 0;
  }
}
function clear(state) {
  // state.friend.hasGetFriendList = 0
  // state.friend.hasGetNewFriends = 0

  // state.sidebar = {
  // 	'isShowSideBar': false,
  // 	'isShowMask': false
  // }
  state.warn = {
    'isShow': false,
    'message': ''
  }
  state.loginStatus = {}
  state.userInfo = {}

  //注意不能清空accounts,即登录过的用户
  localStorage.removeItem("loginStatus")
  localStorage.removeItem("userInfo")
}