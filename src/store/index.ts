import Vue from 'vue'
import Vuex from 'vuex'

// Store Modules
import { doggo_details, doggos } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    doggo_details,
    doggos
  },
})
