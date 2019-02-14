import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state () {
      return {
        crew: null,
        crewDetails: {},
        status: null
      }
    },
    mutations: {
      setCrew (state, value) {
        state.crew = value
      },

      setCrewDetails (state, member) {
        Vue.set(state.crewDetails, member.id, member)
      },

      setStatus (state, value) {
        state.status = value
      }
    }
  })
}
