<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  components: { Swiper, SwiperSlide },
  data() {
    return {
      swiperOptions: {
        pagination: { el: '.swiper-pagination', dynamicBullets: true },
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://dimg04.c-ctrip.com/images/0zg1t12000841rwa4439E.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://dimg04.c-ctrip.com/images/0zg6l1200084nq47aA21B.jpg'
        },
        {
          id: '0003',
          imgUrl: 'https://dimg04.c-ctrip.com/images/0zg571200084vlp3y7649.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 0
  width 100%
  overflow hidden
  padding-bottom 17.67%
  background #eee
  .swiper-image
    width 100%
</style>
