<template>
  <div>
      <div class="header" v-model="selected">
        <ul v-bind:class="active">
            <li class="sort" @click="makeActive('sort','1')" v-html='sortItem'></li>
            <li class="type" @click="makeActive('type','2')" v-html='typeItem' ></li>
            <li class="select" @click="makeActive('select','3')" v-html='selectItem' ></li>
        </ul>
        <v-sort v-show="Show" v-if="selected==1" v-on:listenSort="showMessage"></v-sort>
        <v-type v-show="Show" v-if="selected==2" v-on:listenType="showMessage1"></v-type>
        <v-select v-show="Show" v-if="selected==3" v-on:listenSelect="showMessage2"></v-select>
    </div>
    <div class="teacher-recom" style="display:block">
      <ul class="teacher-recom__list">
        <router-link to="/Course/Info">
          <li class="course list-view__item" v-for="item in recomList">
            <div class="course__cover">
              <img :src="item.img">
              <span class="course__cover-tips course__cover-tips--status">{{item.status}}</span>
            </div>
            <h3 class="course__name">{{item.name}}</h3>
            <p class="course__info">
              <span class="course__info-item u-message">{{item.info}}</span>
            </p>
            <p class="course__info-item u-price z-free">{{item.price}}</p>
          </li>
        </router-link>
      </ul>
      </div>
  </div>
</template>

<script>
import vSort from './vSort.vue'
import vType from './vType.vue'
import vSelect from './vSelect.vue'
import {mapActions,mapGetters} from 'Vuex'
    export default {
        data() {
        return {
            active:'sort',
            selected: 1,
            Show:false,
            sortItem: '全部排序',
            typeItem: '产品策划',
            selectItem: '筛选'
        }
    },
    computed: mapGetters ({
        recomList: 'recomList'
    }) ,
    created () {
        this.$store.dispatch('getRecomList')
    },
    methods:{
        makeActive:function(str,n){
            this.active = str;
            this.selected = n;
            this.Show = !this.Show;
        },
        showMessage: function(item) {
            this.sortItem = item;
            this.Show = false;
        },
        showMessage1: function(item) {
            this.typeItem = item;
            this.Show = false;
        },
        showMessage2: function(item) {
            this.selectItem = item;
            this.Show = false;
        }
    },
    components: {
        vSort,
        vType,
        vSelect
    }
    }
</script>
<style scoped>

.header {
    width: 100%;
    height: 1rem;
    position: fixed;
    top:0;
    z-index: 100;
}
.header ul {
    background-color: #f2f2f2;
    display: flex;
}
.header ul li {
    border: 1px solid #f2f2f2;
    flex: 0 1 33.3%;
    font-size: .388889rem;
    padding: 0.2rem 0.5rem;
}
.header ul li::after {
    position: absolute;
    content: '<';
    transform: rotate(-90deg);
}
ul.sort .sort,
ul.type .type,
ul.select .select{
    color:blue;
}
.teacher-recom{
  margin-bottom: .66667rem;
  position: relative;
  width: 100%;
  height:100%;
}
.teacher-recom__list{
  margin-bottom: 1.32666667rem;
  position: absolute;
  text-align: left;
}
.course {
    position: relative;
    padding: 15px 15px 15px 166px;
    height: 80px;
    line-height: 20px;
}
.course__cover-tips {
    position: absolute;
    height: 16px;
    font-size: 10px;
    line-height: 16px;
    color: #fff;
    background-color: rgba(0,0,0,.7);
}
.course__cover-tips--status {
    bottom: 0;
    left: 0;
    width: 100%;
    text-indent: 4px;
}
.course__cover {
    overflow: hidden;
    position: absolute;
    top: 15px;
    left: 15px;
    border-radius: 4px;
    width: 140px;
    height: 80px;
}
.course__cover img{
    width: 140px;
    height: 80px;
    background-size: 140px 80px;
}
.course__name {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    height: 40px;
    width: 100%;
    max-height: 40px;
    font-size: 16px;
    line-height: 20px;
    white-space: inherit;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    word-break: break-word;
    -webkit-line-clamp: 2;
}
.course__info {
    overflow: hidden;
    margin: 1px 0;
    max-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
}
.u-message {
    display: inline-block;
    margin-right: 20px;
    height: 12px;
    font-size: 12px;
    line-height: 12px;
    color: #bbb;
}
.u-price.z-free {
    color: #5fb41b;
    font-size: 16px;
}
</style>
