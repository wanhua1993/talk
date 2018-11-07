import axios from '@/lib/api.request';

// 搜寻好友是否存在

export const search_friend = ({ number }) => {
    return axios.request({
        url: '/friend/search_friend?number=' + number,
        method: 'get'
    });
}
// 
export const find_one_user = ({ id }) => {
    return axios.request({
        url: '/friend/find_one_user?id=' + id,
        method: 'get'
    })
}