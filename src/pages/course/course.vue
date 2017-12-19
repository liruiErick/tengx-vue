<template>
  <div class="global">
    <div class="video">
      <div class="video-task__player">
        <img class="header__distinctImg" src="https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCZzI6OFKOicFwfhk8mtbGLmYXHmxz0PbEyB2bAwwEvwDeSp7YMkUQqr5g0PZGZeHU4/510?tp=webp">
      </div>
    </div>
    <div class="course-info">
      <ul class="info-list">
        <li class="info">
          <router-link to="/Course/Info" class="tabbar__item" id="tabbar__item1" @click.native="setIndex(1)">
            <p v-if="selected != 1" class="icon">详情</p>
            <p v-if="selected === 1" class="icon__active">详情</p>
          </router-link>
        </li>
        <li class="directory">
          <router-link to="/Course/Directory" class="tabbar__item" id="tabbar__item2" @click.native="setIndex(2)">
            <p v-if="selected != 2" class="icon">目录</p>
            <p v-if="selected === 2" class="icon__active">目录</p>
          </router-link>
        </li>
        <li class="related">
          <router-link to="/Course/Related" class="tabbar__item" id="tabbar__item3" @click.native="setIndex(3)">
            <p v-if="selected != 3" class="icon">相关课程</p>
            <p v-if="selected === 3" class="icon__active">相关课程</p>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('/Course/Info')
  },
  data () {
    return {
      selected: 1
    }
  },
  methods: {
    setIndex (n) {
      this.selected = n
    }
  },
  watch: {
    selected: function (value) {
      // console.log(value)
      this.$emit('switchNav', value)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.video{
  width: 100%;
  background-size: 100%;
  position: relative;
  right: 0;
  left: 0;
  z-index: 60;
  text-align: center;
}
.video-task__player{
  width: 100%;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.video img{
  width: 375px;
  height: 200px;
}
.course-info{
  width: 100%;
  background-color: #fff;
  position: relative;
  right: 0;
  left: 0;
  z-index: 60;
  text-align: center;
}
ul{
  list-style: none;
}
ul li{
  float: left;
  width: 33.3333%;
  line-height: 45px;
}
.info,.directory,.related{
  background-color: #fff;
}
a{
  text-decoration: none;
}
.icon{
  color:gray;
}
.icon__active{
  color:#188fee;
}
.icon__active:before {
  content: "";
  border-top: 1px solid #188fee;
  display: block;
  width: 100%;
  position: relative;
  top:44px;
  bottom: 0;
  left: 0;
  z-index: 2;
}
</style>
