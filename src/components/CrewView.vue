<template>
  <div class="crew-list">
    <img alt="Crew logo" src="../assets/user.svg" class="logo">

    <Loading v-if="member == null"/>

    <div v-else>
      {{ member.firstname }} {{ member.lastname }}
    </div>
  </div>
</template>

<script>
import Loading from './Loading.vue'

import { getCrewDetails } from '../api'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Loading
  },

  computed: {
    ...mapState([
      'crewDetails'
    ]),

    member () {
      return this.crewDetails[this.$route.params.id]
    }
  },

  // Server only
  async serverPrefetch () {
    await this.loadDetails()
  },

  // Client only
  async mounted () {
    if (this.member == null) {
      this.loadDetails()
    }
  },

  methods: {
    ...mapMutations([
      'setCrewDetails'
    ]),

    async loadDetails () {
      const result = await getCrewDetails(this.$route.params.id)
      this.setCrewDetails(result)
    }
  }
}
</script>
