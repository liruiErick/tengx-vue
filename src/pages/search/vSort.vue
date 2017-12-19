<template>
  <div class="sort">
    <ul>
      <li v-for="item in sorts" :key="item" v-on:click="changesort(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sorts: ['综合排序','好评率排序','人气排序','价格最低','价格最高']
    }
  },
  methods: {
    changesort: function(item) {
      this.$emit("listenSort",item)
    }
  }
}
</script>

<style scoped>
.sort {
  z-index: 100; 
}
ul {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
li {
  height: 1rem;
  padding-left: 5px;
  line-height: 1rem;
  border-top: 1px solid #e5d9d9;
  color: grey;
}
</style>

  