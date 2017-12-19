<template>
  <div class="type">
    <div class="left">
      <ul>
        <li @click="showCate(Interprod)" class="type-left">
          IT
        </li>
        <li @click="showCate(Intermark)" class="type-left">
          设计
        </li>
        <li @click="showCate(proglang)" class="type-left">
          语言
        </li>
        <li @click="showCate(devlop)" class="type-left">
          职业
        </li>
        <li @click="showCate(mobdev)" class="type-left">
          升学
        </li>
        <li @click="showCate(netOper)" class="type-left">
          兴趣
        </li>
      </ul>
    </div>
    <div class="middle">
      <ul>
        <li class="type-middle" v-for="item in list" @click="changeType(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      list2:[],
        Interprod: [
          '互联网产品',
          '互联网营销',
          '编程语言',
          '前端开发',
          '移动开发',
          '网络与运维'
        ],
        Intermark: [
          '平面设计',
          'UI设计',
          '设计软件',
          '游戏动画设计',
          '绘画创作',
          '网络与运维'
        ],
        proglang: [
          '实用英语',
          '出国留学',
          '国内考试',
          '日语',
          '韩语',
          '小语种'
        ],
        devlop: [
          '公考求职',
          '法学院',
          '财汇金融',
          '微信开医疗卫生发',
          '职业技能',
          '建造工程'
        ],
        mobdev: [
          '考研',
          '大学',
          '高中',
          '初中',
          '小学'
        ],
        netOper: [
          '投资理财',
          '音乐乐器',
          '文艺修养',
          '运动健康',
          '生活百态'
        ]
    }
  },
    methods: {
      showCate(arr) {
        this.list = arr
      },
      changeType(item) {  
        this.$emit("listenType",item)
      }
    }
}
</script>

<style scoped>
.type{
  z-index: 100;
}
.left{
  position: absolute;
  left: 0;
  width: 4.5rem;
  background-color: #ababab;
}
.type-left{
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
}
 .type-left:active,a.type-left:visited,.type-left:hover{
    margin-top: 0;
    color: #188eee;
    background-color: #fff;
  }
.middle .type-middle{
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
}
.middle {
  position: absolute;
  left: 4.5rem;
  width: 5.5rem;
  background-color: #dadada;
}
</style>
