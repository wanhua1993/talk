import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import {state, mutations} from './mutations';
import warn from './modules/warn';

Vue.use(Vuex);

export default new Vuex.Store({
    getters,
    mutations,
    state,
    modules: {
        warn
    }
});