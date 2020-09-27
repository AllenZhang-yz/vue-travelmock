<template>
  <div class="header">
    <router-link to="/">
      <font-awesome-icon icon="chevron-left" class="header-back" />
    </router-link>

    Choose city
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background $bgColor
  font-size .32rem
  .header-back
    position absolute
    left 0
    top 50%
    transform translateY(-50%)
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>
