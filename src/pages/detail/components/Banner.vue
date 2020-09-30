<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">Dalian Shengya Sea World</div>
        <div class="banner-number">
          <font-awesome-icon icon="images" class="banner-icon" />39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data() {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1905/25/25f5e945d9a1f6f7a3.img.jpg_r_800x800_a315d1ee.jpg',
        'http://img1.qunarzz.com/sight/p0/1906/98/98a16143a4a1c2eca3.img.jpg_r_800x800_663921b1.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }

  .banner-title {
    flex: 1;
    font-size: 0.32rem;
    padding: 0 0.2rem;
  }

  .banner-number {
    padding: 0 0.4rem;
    height: 0.32rem;
    line-height: 0.32rem;
    margin-top: 0.14rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.8);
    font-size: 0.24rem;

    .banner-icon {
      font-size: 0.24rem;
    }
  }
}
</style>
