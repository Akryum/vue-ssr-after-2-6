import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state () {
      return {
        crew: null,
        crewDetails: {}
      }
    },
    mutations: {
      setCrew (state, value) {
        state.crew = value
      },

      setCrewDetails (state, member) {
        Vue.set(state.crewDetails, member.id, member)
      }
    }
  })
}
