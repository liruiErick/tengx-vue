<template>
  <div class="filter">
      <div class="header">
          <span v-on:click="changeselect(item)" v-for="item in header" :key="item">{{item}}</span>
      </div>
      <div class="prices">
          <p>价格区间</p>
          <div class="price">
              <span v-on:click="changeselect(item)" v-for="item in price" :key="item">{{item}}</span>
          </div>
      </div>
      <div class="contents">
          <p>课程内容包含(可多选)</p>
          <div class="content">
              <span v-on:click="changeselect(item)" v-for="item in content" :key="item">{{item}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            header: ['随叫随到','正在直播','系列课'],
            price: ['免费','50以下','50-100','100-500','500-1000','1000以上','最高价','最低价'],
            content: ['直播授课','录播视频','课件资料','习题测验','可试听']
        }
    },
    methods: {
        changeselect: function(item) {
            this.$emit('listenSelect',item)
        }
    }
}
</script>

<style scoped>
.filter {
    background-color: #fff;
    z-index: 100;
    width: 100%;
    height: 10rem;
}
.header {
    height: 1rem;
    display: flex;
}
span {
    margin: .2rem;
    flex: 0 1 23.333333%;
    text-align: center;
    background-color: #f2f2f2;
    padding: 0.1rem;
    border-radius: .2rem .2rem;
}
.prices {
   height: 4rem;
}
p {
    margin: .3rem;
}
.price,
.content {
    flex-wrap: wrap;
    display: flex;
}
.contents {
    height: 2rem;
}
</style>
