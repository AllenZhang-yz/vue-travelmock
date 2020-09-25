<template>
  <div class="header">
    <div class="header-left"><font-awesome-icon icon="chevron-left" /></div>
    <div class="header-input">
      <span class="search"><font-awesome-icon icon="search"/></span>Enter cities
      or tourist attractions
    </div>
    <div class="header-right">
      City<span class="caret">
        <font-awesome-icon icon="caret-down" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header {
  line-height: 0.86rem;
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
    width: 1.24rem;
    float: right;
    text-align: center;
    .caret {
      font-size .4rem
      margin-left .1rem
    }
  }
}
</style>
