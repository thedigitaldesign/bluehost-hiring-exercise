// Packages
import axios from 'axios'

// Models
import { DoggoDetails } from '../../models/Doggos'

// Types
type DoggoDetailsState = {
  details: DoggoDetails
}

const state: DoggoDetailsState = {
  details: {
    id: '',
    name: '',
    age: 0,
    breed: '',
    weight: '',
    height: '',
    color: ''
  }
}

const mutations = {
  details(state: DoggoDetailsState, payload: DoggoDetails) {
    state.details = payload
  }
}

const actions = {
  async details({ commit }, id: string) {
    const blob = await axios.get('/data/doggo_details.json')
    const details = blob.data.DoggoDetails.filter((doggo: any) => doggo.id === id)

    commit('details', details[0])
  }
}

const getters = {
  details: () => state.details
}

export const doggo_details = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
