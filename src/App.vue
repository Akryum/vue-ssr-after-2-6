<template>
  <div id="app">
    <SolarSystemStatus/>

    <router-view/>
  </div>
</template>

<script>
import SolarSystemStatus from './components/SolarSystemStatus.vue'

export default {
  components: {
    SolarSystemStatus
  }
}
</script>

<style lang="stylus">
body
  margin 0

html,
body,
#app
  height 100%

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-size 32px
  color #2c3e50
  display flex
  align-items center
  justify-content center
  flex-direction column

img
  width 42px
  height @width

.logo
  margin-bottom 100px
  margin-left auto
  margin-right auto
  display block

.button
  text-decoration none
  color #111
  background #ccc
  border-radius 12px
  padding 12px 24px
  display block
  margin auto
</style>
