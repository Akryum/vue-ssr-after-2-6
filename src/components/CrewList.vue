<template>
  <div class="crew-list">
    <img alt="Crew logo" src="../assets/users.svg" class="logo">

    <Loading v-if="crew == null"/>

    <div v-else class="list">
      <div
        v-for="member of crew"
        :key="member.id"
        class="member"
      >
        <router-link
          :to="{
            name: 'crew-details',
            params: { id: member.id }
          }"
        >
          {{ member.firstname }} {{ member.lastname }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from './Loading.vue'

import { getCrewList } from '../api'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Loading
  },

  computed: {
    ...mapState([
      'crew'
    ])
  },

  // Server only
  async serverPrefetch () {
    await this.loadCrew()
  },

  // Client only
  async mounted () {
    if (this.crew == null) {
      this.loadCrew()
    }
  },

  methods: {
    ...mapMutations([
      'setCrew'
    ]),

    async loadCrew () {
      const list = await getCrewList()
      this.setCrew(list)
    }
  }
}
</script>

<style lang="stylus" scoped>
.member
  margin-bottom 42px
  a
    text-decoration none
    color inherit
</style>
