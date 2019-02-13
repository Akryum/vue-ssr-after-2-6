<template>
  <div class="crew-list">
    <img alt="Crew logo" src="../assets/users.svg" class="logo">

    <Loading v-if="crew == null"/>

    <div v-else class="list">
      <CrewMember
        v-for="(member, index) of crew"
        :key="index"
        :member="member"
      />
    </div>
  </div>
</template>

<script>
import CrewMember from './CrewMember.vue'
import Loading from './Loading.vue'

import { getCrewList } from '../api'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    CrewMember,
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
