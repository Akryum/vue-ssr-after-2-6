import { createApp } from './main'

const { app, store } = createApp()

store.replaceState(window.__INITIAL_STATE__)
app.$mount('#app')
