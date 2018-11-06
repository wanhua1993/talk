import * as types from '../mutation_types';

const state = {
    isShow: false,
    message: ''
}

const mutations = {
    [types.SHOW_WARN](state, { isShow, message }) {
        state.isShow = isShow;
        state.message = message;
    }
}
// 定义异步方法
const actions = {
    setShowWarn({ commit }, message) {
        // 首先设置 显示，并且赋予 值
        let warn = {
            isShow: true,
            message: message
        }
        commit(types.SHOW_WARN, warn);
        setTimeout(() => {
            warn = {
                isShow: false,
                message: ''
            }
            commit(types.SHOW_WARN, warn);
        }, 2000);
    }
}

export default {
    state,
    mutations,
    actions
}