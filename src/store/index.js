import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  userId:''
  },
  mutations: {
	  getuserid(state,v){
		  state.userId = v
	  }
  },
  actions: {
  },
  modules: {
  }
})
