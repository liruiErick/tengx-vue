<template>
  <div>
    <h2>你最近学过哪些知识</h2>
    <ul>
      <router-link to="/">
        <li v-for="item in Classitems">{{item.class}}</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: mapGetters ({
        Classitems: 'allClassItems'
    }) ,
    created () {
        this.$store.dispatch('getClassItems')
    }
}
</script>

<style scoped>
h2 {
  margin: 1rem 2.5rem;
  font-size: .5rem;
}
li {
  margin: 0.2rem;
  background-color: #f2f2f2;
  text-align: center;
  display: inline-block;
  width: 3rem;
  height: 1rem;
  line-height: 1rem;
}
</style>
