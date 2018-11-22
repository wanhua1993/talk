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
// 设置性别
export const setSex = ({ user_id, sex }) => {
  return axios.request({
    url: `/info/setSex?user_id=${user_id}&sex=${sex}`,
    method: 'get'
  });
}
// 设置日期
export const setBirth = ({ user_id, birth }) => {
  return axios.request({
    url: `/info/setBirth?user_id=${user_id}&birth=${birth}`,
    method: 'get'
  });
}
// 设置职业
export const setJob = ({ user_id, job }) => {
  return axios.request({
    url: `/info/setJob?user_id=${user_id}&job=${job}`,
    method: 'get'
  })
}
// 设置公司
export const setCompany = ({ user_id, company }) => {
  return axios.request({
    url: `/info/setCompany?user_id=${user_id}&company=${company}`,
    method: 'get'
  })
}
// 设置学校
export const setSchool = ({ user_id, school }) => {
  return axios.request({
    url: `/info/setSchool?user_id=${user_id}&school=${school}`,
    method: 'get'
  })
}
// 设置个人说明
export const setInfo = ({ user_id, info }) => {
  return axios.request({
    url: `/info/setInfo?user_id=${user_id}&info=${info}`,
    method: 'get'
  })
}