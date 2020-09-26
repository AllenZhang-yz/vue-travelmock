<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png',
          desc: 'Popular'
        },
        {
          id: '0002',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/d706a4d71c57c53ee8863b75a7af30cf.png',
          desc: 'Tickets'
        },
        {
          id: '0003',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/bd121884123cceb4da978047423421ce.png',
          desc: 'Skiing'
        },
        {
          id: '0004',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png',
          desc: 'Zoo'
        },
        {
          id: '0005',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/d706a4d71c57c53ee8863b75a7af30cf.png',
          desc: 'One day trip'
        },
        {
          id: '0006',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/1d15805633ee19ea51246ff7b0ee216d.png',
          desc: 'Natural Scenery'
        },
        {
          id: '0007',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/ba632a670497c3393a864595c5411ca1.png',
          desc: 'Recommended'
        },
        {
          id: '0008',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/b526fe902327e59922374bf24927a87c.png',
          desc: 'Hot Spring'
        },
        {
          id: '0009',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/1d15805633ee19ea51246ff7b0ee216d.png',
          desc: 'Parks'
        }
      ]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icon
  position relative
  overflow hidden
  float left
  height 0
  width 25%
  padding-bottom 25%
  .icon-img
    position absolute
    top 0
    left 0
    right 0
    bottom .44rem
    box-sizing border-box
    padding .1rem
    .icon-img-content
      height 100%
      display block
      margin 0 auto
  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    height .44rem
    line-height .44rem
    color $darkTextColor
    text-align center
    ellipsis()
</style>
