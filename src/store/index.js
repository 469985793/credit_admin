import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
Vue.use(Vuex)

// const storagePlugin = store => {
//   store.subscribe((mutation, {activeTabIndex,banner}) => {
//     storage.setItem(STORAGE_KEY, JSON.stringify({activeTabIndex,banner}),event => {
//       console.log('cache success');
//     })
//   })
// }

// storage.getItem(STORAGE_KEY, event => {
//   if (event.result == 'success' && event.data){
//       // 这里可以使用extend等方法，这里仅举例说明
//       var data = JSON.parse(event.data);
//       state.banner = data.banner;
//       state.activeTabIndex = data.activeTabIndex;
//   }
// })

const state = {
  tabHistory: 'find',
  userAccountId: '',
  token: '',
  sideBar: ''
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
