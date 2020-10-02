<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [
        {
          title: 'Adult ticket'
        },
        {
          title: 'Student ticket'
        },
        {
          title: 'Child ticket'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped></style>
