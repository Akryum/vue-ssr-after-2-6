<template>
  <div class="solar-system-status">
    <img alt="Icon" src="../assets/sun.svg" class="icon">

    <div v-if="status == null" class="pending">Pending...</div>

    <div v-else class="status">{{ status }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getSolarSystemStatus } from '../api'

export default {
  computed: {
    ...mapState([
      'status'
    ])
  },

  async serverPrefetch () {
    await this.loadStatus()
  },

  async mounted () {
    if (this.status == null) {
      this.loadStatus()
    }
  },

  methods: {
    ...mapMutations([
      'setStatus'
    ]),

    async loadStatus () {
      const result = await getSolarSystemStatus()
      console.log(result)
      this.setStatus(result)
    }
  }
}
</script>

<style lang="stylus" scoped>
.solar-system-status
  margin-bottom 42px
  padding 32px
  border-radius 6px
  background #eee
  display flex
  align-items center

.icon
  margin-right 24px
</style>
