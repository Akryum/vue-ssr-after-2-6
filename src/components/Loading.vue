<template>
  <div class="loading">
    <img alt="Loading..." src="../assets/loader.svg" class="image"/>
  </div>
</template>

<style lang="stylus" scoped>
.loading
  display flex
  align-items center
  justify-content center

  .image
    display block
    animation rotate 2s linear infinite
    opacity .7

@keyframes rotate
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)
</style>
