<template>
  <div class="page-navbar">
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item :id="item.index" v-for="item in items">{{item.type}}</mt-tab-item>
    </mt-navbar>
    <div class="add" @click="addNav()">+</div>
    <!-- <div>
      <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
    </div>   -->

    <!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="item.index" v-for="item in courseItems">
        <h3 class="common-title">{{item.title}}</h3>
        <ul class="common__course-list">
          <li class="common__course-item" v-for="item in item.course">
            <router-link to="/Course/Info" class="common__course-link">
              <div class="common__course-cover-wrap">
                <img :src="item.pic" alt="" class="common__course-cover">
              </div>
              <h3 class="common__course-title">{{item.desc}}</h3>
              <p class="common__course-price">{{item.price}}</p>
            </router-link>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="footer">
      <button @click="find()">查看全部课程</button>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
        selected: '1'
      };
    },
    computed: mapGetters({
      items: 'items',
      courseItems: 'courseItems'
    }),
    created() {
      this.$store.dispatch('getItems')
      this.$store.dispatch('getCourseItems')
    },
    methods: {
      addNav() {
        this.$router.push({
          name: 'addNav'
        })
      },
      find() {
        this.$router.push({
          name: 'search'
        })
      }
    }
  }
</script>
<style scoped>

  .page-navbar {
    display: inline-block;
  }

  .mint-navbar {
    width: 8.8rem;
    overflow: auto;
  }

  .mint-navbar::-webkit-scrollbar {
    display: none;
  }

  .mint-tab-item {
    flex: 0 0 25%;
  }

  .add {
    position: absolute;
    font-size: .711111rem;
    right: 0;
    width: 1rem;
    top: 3.077778rem;
    text-align: center;
  }

  .common-title {
    position: relative;
    height: .305666rem;
    font-size: .222222rem;
    line-height: .305666rem;
    text-align: center;
    letter-spacing: .0555556rem;
    font-weight: 400;
    color: #888;
    padding-top: .222222rem;
  }

  .common-title:before {
    margin-right: .1805556rem;
  }

  .common-title:before, .common-title:after {
    display: inline-block;
    width: 1px;
    height: .125rem;
    background: #cecece;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    content: "";
  }

  .common-title:after {
    margin-left: .125rem;
  }

  .common__course-list {
    margin-top: .2555556rem;
  }

  ul {
    list-style: none;
  }

  .common__course-item {
    display: inline-block;
    margin-bottom: .138889rem;
    width: 48%;
    vertical-align: top;
    margin: .1rem;
  }

  .common__course-item:nth-child(odd) .common__course-link {
    margin-right: 3px;
  }

  .common__course-link {
    display: block;
    border-radius: .0555556rem;
  }

  a, a:active, a:hover {
    text-decoration: none;
  }

  a, div {
    -webkit-tap-highlight-color: transparent;
  }

  .common__course-cover-wrap {
    overflow: hidden;
    position: relative;
    border-radius: .0555556rem;
    padding-top: 56%;
    width: 100%;
  }

  .common__course-cover {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: .0555556rem;
    width: 100%;
    height: 100%;
  }

  .common__course-title {
    margin-top: 7px;
    padding: 3px .0555556rem;
    margin-bottom: .0555556rem;
    height: 1.111111rem;
    font-size: .222222rem;
    line-height: 2.0555556rem;
    color: #000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: 400;
  }

  .common__course-price {
    padding-left: .0555556rem;
    line-height: 1.0555556rem;
    color: #188eee;
    text-align: left;
  }

  .footer button {
    position: relative;
    text-align: center;
    margin: .2rem;
    padding: 0.2rem;
    width: 96%;
    border-radius: .1rem;
    opacity: .7;
  }
</style>
