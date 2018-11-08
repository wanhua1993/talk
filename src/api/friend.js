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
export const if_friend = ({ _id }) => {
  return axios.request({
    url: '/friend/if_friend?id=' + _id,
    method: 'get'
  });
}
