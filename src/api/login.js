import axios from '@/lib/api.request';
export const upload_blog = ({ title, content }) => {
  const data = {
    title,
    content
  }

  return axios.request({
    url: '/blog/up_blog',
    data,
    method: 'post'
  })
}
export const send_code = ({ phone }) => {
  return axios.request({
    url: '/login/send_code?phone=' + phone,
    method: 'get'
  })
}
// 注册 
export const sign_up = ({ phone, password }) => {
  let data = {
    phone,
    password
  }
  return axios.request({
    url: '/login/sign_up',
    data,
    method: 'post'
  });
}
// 通过手机号查找 用户
export const vali_phone = ({ phone }) => {
  return axios.request({
    url: '/login/vali_phone?phone=' + phone,
    method: 'get'
  });
}
// 登录
export const signIn = ({user}) => {
  let data = user;
  return axios.request({
    url: '/login/signIn',
    data,
    method: 'post'
  });
}
// 修改密码
export const update_pass = ({phone, password}) => {
    return axios.request({
      url: `/login/update_pass?phone=${phone}&password=${password}`,
      method: 'get'
    });
}