// Packages
import axios from 'axios'

// Models
import { Doggo } from '../../models/Doggos'

// Types
type DoggoState = {
  list: Doggo[]
}

const state: DoggoState = {
  list: []
}

const mutations = {
  doggos(state: DoggoState, payload: []) {
    state.list = payload
  }
}

const actions = {
  async doggos({ commit }) {
    const blob = await axios.get('/data/doggos.json')
    commit('doggos', blob.data.Doggos)
  }
}

const getters = {
  doggos: () => state.list
}

export const doggos = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
