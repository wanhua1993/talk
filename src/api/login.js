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
export const send_code = ({ }) => {
    return axios.request({
      url: '/login/send_code',
      method: 'get'
    })
}