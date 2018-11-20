import axios from '@/lib/api.request';
export const uploadPhotos = ({ formdata, user_id }) => {
  return axios.request({
    url: '/info/uploadPhotos?user_id=' + user_id,
    data: formdata,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    method: 'post'
  })
}
// 加载图片列表
export const photosList = ({ user_id }) => {
  return axios.request({
    url: `info/photosList?user_id=${user_id}`,
    method: 'get'
  });
}
// 删除图片
export const deleteImg = ({ user_id, select_id }) => {
  return axios.request({
    url: 'info/deleteImg',
    data: {
      user_id,
      select_id
    },
    method: 'post'
  });
}
// 上传头像
export const uploadAvatar = ({ formdata, user_id }) => {
  return axios.request({
    url: '/info/uploadAvatar?user_id=' + user_id,
    data: formdata,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    method: 'post'
  })
}
// 设置签名
export const saveSign = ({ user_id, sign_con }) => {
  return axios.request({
    url: `/info/saveSign?user_id=${user_id}&sign_con=${sign_con}`,
    method: 'get'
  });
}
// 设置昵称
export const setUsername = ({ user_id, username }) => {
  return axios.request({
    url: `/info/setUsername?user_id=${user_id}&username=${username}`,
    method: 'get'
  });
}