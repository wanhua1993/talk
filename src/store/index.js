import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import { state, mutations } from './mutations';
import warn from './modules/warn';
import message from './modules/message';

Vue.use(Vuex);

export default new Vuex.Store({
    getters,
    mutations,
    state,
    modules: {
        warn,
        message
    }
});