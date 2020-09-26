<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomeSwiper',
  props: { list: Array },
  components: { Swiper, SwiperSlide },
  data() {
    return {
      swiperOptions: {
        pagination: { el: '.swiper-pagination', dynamicBullets: true },
        loop: true
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 0
  width 100%
  overflow hidden
  padding-bottom 31.25%
  background #eee
  .swiper-image
    width 100%
</style>
