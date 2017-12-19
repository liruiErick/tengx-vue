<template>
  <div class="swipe">
    <mt-swipe :auto="1500">
      <mt-swipe-item v-for="(banner, index) in banners" :key="index">
        <img :src="banner.imageurl" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'vSwipe',
  data () {
    return {
      banners: this.$store.state.banners
    }
  }
}
</script>

<style scoped>
.swipe {
  width: 100%;
  height: 2.972222rem;
}
.swipe img {
  width: 100%;
  height: 100%;
}
</style>
