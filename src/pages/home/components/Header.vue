<template>
  <div class="header">
    <div class="header-left"><font-awesome-icon icon="chevron-left" /></div>
    <div class="header-input">
      <span class="search"><font-awesome-icon icon="search"/></span>Enter cities
      or tourist attractions
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="city">
          {{ this.city }}
        </span>
        <span class="caret">
          <font-awesome-icon icon="caret-down" />
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.header {
  line-height: $headerHeight;
  display: flex;
  background: $bgColor;
  color: #fff;

  .header-left {
    font-size .4rem
    width: 0.64rem;
    float: left;
    text-align center
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    background: #fff;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    color: #ccc;
    .search {
      font-size 0.3rem
      margin 0 .2rem 0 .2rem
    }
  }

  .header-right {
    display flex
    min-width: 1.04rem;
    padding 0 .1rem
    float: right;
    text-align: center;
    color #fff
    .caret {
      font-size .4rem
      margin-left .1rem
    }
  }
}
</style>
