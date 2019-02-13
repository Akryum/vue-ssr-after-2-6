import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import CrewList from './components/CrewList.vue'
import CrewView from './components/CrewView.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/crew-list',
        name: 'crew-list',
        component: CrewList
      },
      {
        path: '/crew/:id',
        name: 'crew-details',
        component: CrewView
      }
    ]
  })
}
