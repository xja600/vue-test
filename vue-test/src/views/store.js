import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    collapsed: false, // 左侧导航折叠状态
    topNavState: 'home',
    leftNavState: 'dispatch'
}
export default new Vuex.Store({
    state
})