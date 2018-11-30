import axios from '@/lib/api.request';

// 搜寻好友是否存在

export const search_friend = ({
  number
}) => {
  return axios.request({
    url: '/friend/search_friend?number=' + number,
    method: 'get'
  });
}
// 
export const find_one_user = ({
  id
}) => {
  return axios.request({
    url: '/friend/find_one_user?id=' + id,
    method: 'get'
  })
}
// 加为好友
export const addUser = ({
  to_id,
  from_id
}) => {
  return axios.request({
    url: `/friend/addUser?from_id=${from_id}&to_id=${to_id}`,
    method: 'get'
  });
}
// 加载好友请求列表
export const applyList = ({ id }) => {
  return axios.request({
    url: '/friend/applyList?id=' + id,
    method: 'get'
  });
}

// 查看是否 是自己的好友
export const if_friend = ({ _id, userId }) => {
  return axios.request({
    url: `/friend/if_friend?id=${_id}&userId=${userId}`,
    method: 'get'
  });
}

// 点击 接受 好友请求
export const apply_status = ({ _id }) => {
  return axios.request({
    url: `/friend/apply_status?_id=${_id}`,
    method: 'get'
  });
}

// 加载好友列表
export const friends_list = ({ user_id }) => {
  return axios.request({
    url: `/friend/friends_list?user_id=${user_id}`,
    method: 'get'
  });
}
// 加载聊天消息
export const mess_list = ({ user_id }) => {
  return axios.request({
    url: `/friend/mess_list?user_id=${user_id}`,
    method: 'get'
  });
}
export const zhifubao = () => {
  return axios.request({
    url: 'http://zhiyuan.btisl.com/appPay',
    data: {
      money: '0.01',
      out_trade_no: Date.now()
    },
    method: 'post'
  });
}
// 发表
export const publish = ({ formdata }) => {
  return axios.request({
    url: '/friend/publish',
    data: formdata,
    method: 'post'
  });
}
// 加载朋友圈说说
export const load_friCon = ({ user_id, index }) => {
  return axios.request({
    url: `/friend/load_friCon?user_id=${user_id}&index=${index}`,
    method: 'get'
  });
}
// 加载聊天记录
export const loadMess = ({ user_id, other_id }) => {
  return axios.request({
    url: `/friend/loadMess?user_id=${user_id}&other_id=${other_id}`,
    method: 'get'
  });
}
