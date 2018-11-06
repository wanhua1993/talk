import * as types from './mutation_types';

export const state = {
  'loginStatus': JSON.parse(localStorage.getItem('loginStatus')) || {},
  'userInfo': JSON.parse(localStorage.getItem('userInfo')) || {}

}

export const mutations = {
  // 设置登录状态
  [types.SET_LOGIN]({
    commit
  }, {
    loginStatus,
    data
  }) {
    state.loginStatus = loginStatus;
    state.userInfo = data;
    localStorage.setItem('loginStatus', JSON.stringify(state.loginStatus));
    localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
    console.log(localStorage.getItem('loginStatus'));
    console.log(localStorage.getItem('userInfo'));
  }
}
