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