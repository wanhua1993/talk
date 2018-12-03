export const userId = state => state.userInfo._id;
export const isLogin = state => state.loginStatus.isLogin;
export const userInfo = state => state.userInfo;
export const accounts = state => state.accounts;
export const applyNums = state => state.apply_nums;

export const allMessage = state => {
    return state.message.allMessage;
};

export const newMessage = state => state.new_message;
