<template>
  <div class="index">
    <v-search></v-search>
    <div class="content">
      <v-swipe></v-swipe>
      <v-navbar></v-navbar>
    </div>
    <div v-show="showPanel" class="mask" :showPanel="showPanel"></div>
  </div>
</template>

<script>
import vSearch from '@/components/vSearch.vue'
import vSwipe from '@/components/vSwipe.vue'
import vNavbar from '@/components/vNavbar.vue'
export default {
  name: 'index',
  data(){
    return {
      showPanel:false
    }
  },
  components: {
    vSearch,
    vSwipe,
    vNavbar
  },
  methods: {
  }
}
</script>

<style>
.content {
  position: relative;
  top: 1.3rem;
  margin-bottom: 1.2rem;
}
.mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0,0,0,.3);
}
</style>
