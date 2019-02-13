<template>
  <div class="crew-member">
    <span class="firstname">{{ member.firstname }}</span>
    <span class="lastname">{{ member.lastname }}</span>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.crew-member
  margin 42px

.firstname
  margin-right 8px
</style>
