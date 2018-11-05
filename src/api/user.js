import axios from '@/lib/api/request';
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
  export const load_blog = ({ }) => {
    return axios.request({
      url: '/blog/load_blog',
      method: 'get'
    })
  }