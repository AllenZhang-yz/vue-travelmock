<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-image" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'CommonGallary',
  components: { Swiper, SwiperSlide },
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observerParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;

  .wrapper {
    background: #fff;
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 75%;

    .gallary-image {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
    }
  }
}
</style>
