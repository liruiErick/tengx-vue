<template>
  <div class="related-container">
    <div class="teacher-recom" style="display:block">
      <div class="rel-class__title">老师推荐课程</div>
      <ul class="teacher-recom__list">
        <li class="course list-view__item" v-for="item in recomList">
          <div class="course__cover">
            <img :src="item.img" alt="">
            <span class="course__cover-tips course__cover-tips--status">{{item.status}}</span>
          </div>
          <h3 class="course__name">{{item.name}}</h3>
          <p class="course__info">
            <span class="course__info-item u-message">{{item.info}}</span>
          </p>
          <p class="course__info-item u-price z-free">{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
//   mounted () {
//     this.axios.get('https://www.easy-mock.com/mock/5943d53a8ac26d795f1c9a61/tencent/recomList')
//       .then((response) => {
//         this.recomList = response.data.recomList
//         // console.log(this.recomList)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   },
    data() {
      return {
        recomList: [
          {
            "img": "http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDjsWO3PGrkOzRBp3kiavjCGnt3hrQkz5VAXgTqm7r7D32IsM5EKXQS0IGqnQzfO6TY/220?tp=webp",
            "status": "3万人已报名",
            "name": "MK-linux运维-openstack-saltstack-腾讯官方认证课程",
            "info": "随到随学",
            "price": "免费"
          },
          {
            "img": "http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAfVF1rcUqjnrFjYsXE4cq1oyFjpibbKNGZrva7njWxltgwMe0vrbvrISFzKNZ6RPGc/220?tp=webp",
            "status": "2万人已报名",
            "name": "MK-Linux高级运维 大师级课程 云计算 mysql数据库 centos7",
            "info": "随到随学",
            "price": "免费"
          },
          {
            "img": "http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLA5R6DKqVg2zBXM1StC1BZzpRndIoxlmSCX7qgCL8j5q3k5RyDzllItf16uicyo48AI/220?tp=webp",
            "status": "2万人已报名",
            "name": "While老师-Python自动化运维开发（Django、Flask）-速成课程",
            "info": "随到随学",
            "price": "免费"
          },
          {
            "img": "http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBYfhsQCax4SChWrw7MuHQGpdHuDENtdLUh39go4pgoYsqc5Odw9TXDvxJ032Tc1E8/220?tp=webp",
            "status": "1万人已报名",
            "name": "int老师主讲-高薪就业python自动化运维云计算企业实战课程",
            "info": "随到随学",
            "price": "免费"
          },
          {
            "img": "http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBYfhsQCax4SChWrw7MuHQGpdHuDENtdLUh39go4pgoYsqc5Odw9TXDvxJ032Tc1E8/220?tp=webp",
            "status": "1万人已报名",
            "name": "int老师主讲-高薪就业python自动化运维云计算企业实战课程",
            "info": "随到随学",
            "price": "免费"
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .teacher-recom {
    margin-bottom: 10px;
    background: #fff;
    position: relative;
    top: 40px;
    width: 100%;
    height: 100%;
  }

  .rel-class__title {
    padding: 10px 15px 0;
    position: absolute;
    margin: 10px 0;
    font-size: 18px;
    line-height: 25px;
    color: #000;
    text-align: left;
  }

  .teacher-recom__list {
    position: absolute;
    top: 40px;
    text-align: left;
  }

  .course {

    position: relative;
    padding: 15px 15px 15px 166px;
    height: 80px;
    line-height: 20px;
    background: #fff;
  }

  .course__cover-tips {
    position: absolute;
    height: 16px;
    font-size: 10px;
    line-height: 16px;
    color: #fff;
    background-color: rgba(0, 0, 0, .7);
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

  .course__cover img {
    width: 140px;
    height: 80px;
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

  ul {
    list-style: none;
  }
</style>
