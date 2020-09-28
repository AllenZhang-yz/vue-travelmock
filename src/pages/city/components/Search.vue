<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="Enter city name"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          No Match Contents
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: []
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 16)
    }
  },
  updated() {
    setTimeout(() => {
      this.scroll = new Bscroll(this.$refs.search)
    }, 200)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height .72rem
  padding 0 .1rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height .62rem
    padding 0 .1rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #666
.search-content
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  z-index 1
  .search-item
    line-height .62rem
    padding-left .2rem
    color #666
    background #fff
</style>
