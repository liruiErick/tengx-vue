<template>
  <div id="app">
    <ul class="nav-box">
      <router-link tag="li" class="nav-item" to="/">首页</router-link>
      <router-link tag="li" class="nav-item" to="/classify">分类</router-link>
      <router-link tag="li" class="nav-item" to="/classlist">课程表</router-link>
      <router-link tag="li" class="nav-item" to="/mine">我的</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @media screen and (-webkit-min-device-pixel-ratio: 2) {
    .border {
      border: 0.5px solid #999
    }
  }

  @media screen and (-webkit-min-device-pixel-ratio: 3) {
    .border {
      border: 0.333333px solid #999
    }
  }

  *, html, body {
    margin: 0;
    padding: 0;
  }

  .nav-box {
    z-index: 1000;
    position: fixed;
    bottom: 0;
    height: 1.32666667rem;
    width: 100%;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-top: 1px solid transparent;
  }

  .nav-item {
    cursor: pointer;
    line-height: 1.32666667rem;
    font-size: 14px;
    text-align: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    list-style: none;
    color: #8c8c8c;
  }
  .router-link-exact-active{
    color: #ff4411;
  }
</style>
