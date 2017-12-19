<template>
  <div class="classify-container">
    <!--<div class="classify-header">分类</div>-->
    <v-search></v-search>
    <nav-classes></nav-classes>
  </div>
</template>

<script>
import NavClasses from '@/components/navClasses';
import vSearch from '@/components/vSearch.vue';
export default {
  name: 'classify',
  components: {
    NavClasses,
    vSearch
  }
}
</script>

<style>
.classify-container {
  background-color: #f2f2f2;
  height: 100%;
}
.classify-header {
  position: fixed;
  width: 100%;
  height: 1.0277778rem;
  line-height: 1.0277778rem;
  text-align: center;
  font-size: .5277778rem;
  border-bottom: 1px solid #e8e8e8;
  z-index: 100;
  background-color: #f2f2f2;
}
</style>
