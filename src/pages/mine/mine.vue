<template>
  <div>
    <v-search></v-search>
    <div class="main" id="main">
      <div class="wrapper">
        <div class="info" id="info">
          <h1 class="info-tit border-bottom">
            <img class="info-tit-logo"
                 src="//thirdqq.qlogo.cn/g?b=sdk&amp;k=PcVhwicO1BiabO3qKOrkUrMA&amp;s=140&amp;t=1503988819">
            <span class="info-tit-name">风中麦浪</span>
            <a href="javascript:;" class="info-tit-link" data-name="chatList">
              <span class="info-tit-point">红包</span>
              <i class="info-tit-msg icon-font i-news"></i>
            </a>
          </h1>
          <ul class="info-list">
            <li class="info-item">
              <a href="javascript:;" class="info-item-link" title="订单管理" data-name="allCourse">
                <i class="icon-font info-item-font i-management"></i>
                <p class="info-item-des">订单管理</p>
              </a>
            </li>
            <li class="info-item">
              <a href="javascript:;" class="info-item-link" title="收藏" data-name="myFav">
                <i class="icon-font info-item-font i-heart-border2"></i>
                <p class="info-item-des">收藏</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="money">
          <ul>
            <li>
              <a class="mint-cell"><span class="mint-cell-mask"></span>
                <div class="mint-cell-left"></div>
                <div class="mint-cell-wrapper">
                  <div class="mint-cell-title"><!----> <span class="mint-cell-text">余额</span> <!----></div>
                  <div class="mint-cell-value is-link"><span>1</span></div>
                  <i class="mint-cell-allow-right"></i></div>
                <div class="mint-cell-right"></div>
              </a>
            </li>
            <li>
              <a class="mint-cell"><span class="mint-cell-mask"></span>
                <div class="mint-cell-left"></div>
                <div class="mint-cell-wrapper">
                  <div class="mint-cell-title"><!----> <span class="mint-cell-text">优惠券</span> <!----></div>
                  <div class="mint-cell-value is-link"><span>0</span></div>
                  <i class="mint-cell-allow-right"></i></div>
                <div class="mint-cell-right"></div>
              </a>
            </li>
          </ul>
        </div>
        <div class="extList">
          <ul>
            <li>
              <a class="mint-cell"><span class="mint-cell-mask"></span>
                <div class="mint-cell-left"></div>
                <div class="mint-cell-wrapper">
                  <div class="mint-cell-title"><!----> <span class="mint-cell-text">QQ会员学习专区</span> <!----></div>
                  <i class="mint-cell-allow-right"></i></div>
                <div class="mint-cell-right"></div>
              </a>
            </li>
            <li>
              <a class="mint-cell"><span class="mint-cell-mask"></span>
                <div class="mint-cell-left"></div>
                <div class="mint-cell-wrapper">
                  <div class="mint-cell-title"><!----> <span class="mint-cell-text">上网流量免费</span> <!----></div>
                  <i class="mint-cell-allow-right"></i></div>
                <div class="mint-cell-right"></div>
              </a>
            </li>
            <li>
              <a class="mint-cell"><span class="mint-cell-mask"></span>
                <div class="mint-cell-left"></div>
                <div class="mint-cell-wrapper">
                  <div class="mint-cell-title"><!----> <span class="mint-cell-text">分销课程</span> <!----></div>
                  <i class="mint-cell-allow-right"></i></div>
                <div class="mint-cell-right"></div>
              </a>
            </li>
          </ul>
        </div>
        <div class="extList">
          <ul>
            <li>
              <a class="mint-cell"><span class="mint-cell-mask"></span>
                <div class="mint-cell-left"></div>
                <div class="mint-cell-wrapper">
                  <div class="mint-cell-title"><!----> <span class="mint-cell-text">反馈建议</span> <!----></div>
                  <i class="mint-cell-allow-right"></i></div>
                <div class="mint-cell-right"></div>
              </a>
            </li>
            <li>
              <a class="mint-cell"><span class="mint-cell-mask"></span>
                <div class="mint-cell-left"></div>
                <div class="mint-cell-wrapper">
                  <div class="mint-cell-title"><!----> <span class="mint-cell-text">设置</span> <!----></div>
                  <i class="mint-cell-allow-right"></i></div>
                <div class="mint-cell-right"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vSearch from '@/components/vSearch.vue'
  export default {
    name: 'mine',
    components: {
      vSearch
    }
  }
</script>

<style scoped>
  .main {
    position: absolute;
    top: 45px;
    right: 0;
    bottom: 50px;
    left: 0;
    background-color: #f2f2f6;
  }
  .wrapper {
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transform: translate3d(0,0,0);
    -webkit-overflow-scrolling: touch;
  }
  .info {
    position: relative;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .info-tit {
    height: 97px;
    line-height: 97px;
    padding: 0 80px 0 20px;
  }
  .info-tit {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
  }
  .border-bottom {
    position: relative;
  }
  .info-tit-logo {
    position: absolute;
    top: 50%;
    margin-top: -30px;
    background-color: #eee;
    border-radius: 30px;
    height: 60px;
    width: 60px;
  }
  .info-tit-name {
    font-size: 24px;
    margin-left: 70px;
  }
  .info-tit-link:hover {
    color: #000;
  }
  a, a:active, a:hover {
    text-decoration: none;
  }
  .info-tit-link {
    position: absolute;
    right: 3.5px;
    color: #000;
    padding: 0 30px;
  }
  .info-list {
    overflow: hidden;
  }
  .info-item {
    width: 50%;
    text-align: center;
    float: left;
  }
  .info-item-link {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #000;
    padding: 14px 0;
  }
  .info-item-font {
    font-size: 24px;
  }
  .icon-font {
    position: relative;
    font-family: mfont;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    vertical-align: -2px;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    speak: none;
  }
  .info-item-des {
    font-size: 14px;
    margin-top: 11px;
  }
  .info-tit-point {
    display: none;
    position: absolute;
    left: 51px;
    top: 30px;
    line-height: 1;
    background: #FE3824;
    border-radius: 10px;
    z-index: 10008;
    color: #fff;
    font-size: 12px;
    padding: 3px 6px;
    box-sizing: content-box;
    transform: translate(-50%,0);
  }
  .extList {
    margin-top: 10px;
  }
</style>
