<template>
  <div class="navclasses-content">
    <mt-navbar class="navclasses-left" v-model="selectId">
      <mt-tab-item :id="item.index" v-for="item in _classes_left" class="left-nav">
        {{item.type}}
      </mt-tab-item>
    </mt-navbar>

    <mt-tab-container class="navclasses-right" v-model="selectId">
      <mt-tab-container-item :id="items.index" v-for="items in _classes_right">
        <ul>
          <li v-for="item1 in items.body">
            <h3>{{item1.title}}</h3>
            <ul>
              <li>
                <span @click="searchClasses()" v-for="item2 in item1.content" class="content">{{item2}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data () {
        return {
            selectId: '1'
        }
    },
    computed: mapGetters ({
        _classes_left: '_classes_left',
        _classes_right: '_classes_right',
        // selectId: 'selectId'
    }) ,
    created () {
        this.$store.dispatch('getAllclasses')
    },
    methods: {
        searchClasses () {
            this.$router.push({
                name: 'search'
            })
        }
    }
}
</script>

<style scoped>
.navclasses-content {
    position: absolute;
    top: 1.0277778rem;
    color: #000;
}
.mint-tab-container-item{
    margin-bottom: 2.6rem;
}
.navclasses-left {
    position: fixed;
    height: 100%;
    width: 2.5rem;
    background-color: #f2f2f2;
    flex-direction: column;
}
.navclasses-left .left-nav{
    flex:0;
    height: .666667rem;
    font-size: .361111rem;
    text-align: center;
    line-height: .666667rem;
}
.mint-navbar .mint-tab-item.is-selected {
    background-color: #fff;
}
.navclasses-right {
    position: absolute;
    background-color: #fff;
    left: 2.5rem;
    width: 7.5rem;
}
.navclasses-right li {
    /*height: 5.05556rem;*/
}
.navclasses-right li h3 {
    font-size: .444444rem;
    margin-bottom: .2rem;
    padding-top: .5rem;
    margin-left: .472222rem;
}
.navclasses-right li .content {
    display: inline-block;
    margin: 0.222222rem;
    width: 2.033333rem;
    height: 1.44444rem;
    background-color: #f2f2f2;
    text-align: center;
    line-height: 1.44444rem;
    border-radius: .1666667rem;
}
.mint-tab-item-label {
    font-size: 17px;
}
</style>
