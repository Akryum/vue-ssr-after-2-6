import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state () {
      return {
        crew: null
      }
    },
    mutations: {
      setCrew (state, value) {
        state.crew = value
      }
    }
  })
}
