import * as types from '../mutation_types';
import { mess_list } from '@/api/friend';

const state = {
    'allMessage': []
}

const mutations = {
    [types.GET_ALL_MESSAGE](state, data) {
        state.allMessage = data.allMessage;
    }
}

const actions = {
    async getAllMessage({ commit }, user_id) {
        let res = await new Promise(reslove => {
            mess_list({
                user_id
            }).then(res => {
                reslove(res);
            }).catch(err => {
                console.log(err)
            });
        });
        const data = {allMessage: res.data}
        commit(types.GET_ALL_MESSAGE, data);
    }
}
export default {
    state,
    mutations,
    actions
}