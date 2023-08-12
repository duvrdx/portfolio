// store.js
import Vue from 'vue';
import Vuex from 'vuex';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        windowIsVisible: false,
    },
    mutations: {
        showWindow(state) {
            state.windowIsVisible = true;
        },
        hideWindow(state) {
            state.windowIsVisible = false;
        },
    }  
});
