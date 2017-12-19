<template>
  <div>
    <v-search></v-search>
    <div class="list-wrapper">
      <div id="js-duration" class="duration" style="display: block;"><p class="duration-tit">今天上课</p>
        <p class="duration-des"><span> <span class="duration-des-time">0</span>分钟 </span> <i class="duration-split"></i>
          <span>赶紧开始上课吧！</span></p><a class="duration-btn" data-duration="0" data-total="339"
                                      href="//m.ke.qq.com/scholarship.html?_bid=167&amp;_wv=5123">时长兑奖励</a></div>
      <ul class="course-list">
        <router-link to="/Course/Info" tag="li" class="course-item list-view-item clear">
          <div class="course-cover"></div>
          <div class="course-progress">
            <div class="course__progress">
              <div class="course__progress-term-rect course__progress-term-rect1" style="left: 25px;">
                <div class="course__progress-term-circle course__progress-term-circle1"
                     style="clip: rect(0px 25px 50px 0px); transform: rotate(25.2deg); border-color: rgba(255, 255, 255, 0.4); left: -25px; transition: -webkit-transform 126ms linear;"></div>
              </div>
              <div class="course__progress-term-rect course__progress-term-rect2" style="">
                <div class="course__progress-term-circle course__progress-term-circle2" style=""></div>
              </div>
              <div class="course__progress-bg-circle"></div>
              <div class="course__progress-my-rect course__progress-my-rect1" style="left: 25px;">
                <div class="course__progress-my-circle course__progress-my-circle1"
                     style="clip: rect(0px 20px 40px 0px); transform: rotate(3.6deg); border-color: rgba(35, 184, 255, 0.2); left: -20px; transition: -webkit-transform 18ms linear;"></div>
              </div>
              <div class="course__progress-my-rect course__progress-my-rect2" style="">
                <div class="course__progress-my-circle course__progress-my-circle2" style=""></div>
              </div>
              <p class="course__progress-wording">1<span class="course__progress-wording-unit">%</span></p></div>
          </div>
          <div class="course-cnt">
            <h2 class="course-cnt-tit">开课吧技术学院《Blue带你玩前端》系列直播公开课</h2>
            <p class="course-cnt-des">
              <i class="course-cnt-icon icon-font i-course-live"></i>
              <span class="course-cnt-progress">继续学习：第2节 Node.js电商比价爬虫开发</span>
            </p>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import vSearch from '@/components/vSearch.vue';

  export default {
    name: "classlist",
    components: {
      vSearch
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .clear:after {
    content: '';
    display: block;
    clear: both;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .list-wrapper {
    height: 80%;
    overflow: hidden;
    position: absolute;
    top: 1.2rem;
    right: 0;
    bottom: 6rem;
    left: 0;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-overflow-scrolling: touch;
  }

  .duration {
    position: relative;
    padding: 20px 15px;
  }

  .duration-tit {
    color: #777;
    font-size: 12px;
  }

  .duration-des {
    color: #000;
    font-size: 12px;
    margin-top: 10px;
  }

  .duration-des-time {
    font-size: 28px;
  }

  .duration-split {
    height: 10px;
    display: inline-block;
    border-left: 1px solid #bbb;
    margin: 0 5px;
  }

  .duration-btn {
    position: absolute;
    right: 15px;
    bottom: 21px;
    display: inline-block;
    width: 88px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border: 1px solid #23b8ff;
    border-radius: 3px;
    background: #fff;
    font-size: 14px;
    color: #23b8ff;
  }

  .course-list {
    padding-left: 10px;
    background-color: #fff;
    border-top: 1px solid #e1e1e1;
  }

  .course-item {
    position: relative;
    padding: 20px 10px 20px 0;
    overflow: hidden;
    margin: 0;
    width: 100%;
    border-bottom: 1px solid #e1e1e1;
  }

  .course-progress {
    position: absolute;
    top: 25px;
    right: 15px;
    text-align: center;
  }

  .course-progress .course__progress {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    vertical-align: middle;
    color: #23b8ff;
  }

  .course-progress .course__progress-term-rect {
    width: 25px;
    height: 50px;
  }

  .course__progress-term-rect {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .course__progress .course__progress-term-circle {
    border-radius: 25px;
    width: 42px;
    height: 42px;
    clip: rect(0px 25px 50px 0px);
    transform: rotate(25.2deg);
    border-color: rgba(255, 255, 255, 0.4);
    left: -25px;
    transition: -webkit-transform 126ms linear;
  }

  .course-progress .course__progress-bg-circle {
    border-radius: 20px;
    width: 38px;
    height: 38px;
  }

  .course-progress .course__progress-bg-circle {
    border-color: rgba(24, 142, 238, .1);
  }

  .course__progress-bg-circle {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 2;
    border: 1px solid rgba(255, 255, 255, .2);
    border-radius: 24px;
    width: 46px;
    height: 46px;
  }
  .course-cover {
    float: left;
    width: 110px;
    height: 62px;
    position: relative;
    background-image: url(//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAia6tBIXdXtBIWs9XbialDscucWgQ8ltmOWTVdvkr81NkQzJm6p5OHy9XY3DBgByOx4/220?tp=webp220&tp=webp);
    background-size: 110px 62px;
  }
  .course-cnt {
    margin-left: 120px;
    /*margin-right: 60px;*/
    width: 180px;
  }
  .course-cnt-tit {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
    font-size: 16px;
    color: #000;
  }
  .course-cnt-des {
     margin-top: 5px;
     font-size: 12px;
     color: #777;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
   }
  .course-cnt-icon {
    vertical-align: middle;
    font-size: 14px;
    color: #d1e8fc;
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
</style>
