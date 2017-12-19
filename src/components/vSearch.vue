<template>
  <div class="container">
    <div class="image">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJDMjc1OTcyODRGNDExRTdBQkNERDk2NDM3OEQ0MzAwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJDMjc1OTczODRGNDExRTdBQkNERDk2NDM3OEQ0MzAwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkMyNzU5NzA4NEY0MTFFN0FCQ0REOTY0Mzc4RDQzMDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkMyNzU5NzE4NEY0MTFFN0FCQ0REOTY0Mzc4RDQzMDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz70TGt/AAAEdUlEQVR42uyad2hUWRTGz9hFQmyxskpWRIgVEyxsICKKa1nLimUXG0YiERUV9c/Egn9YV8W1oiiKQUXBtcQaCAgaTQRRo7KrsWCPdVdiI9nvzHyBUWbiK/c9R8mFH8NM3px3v3fuvadMAhUVFfI9jUC1oBgftVLOf1d6pIYP90gFZ0nqtyyoHlgO8kEvks/P6nm2h5ILPNlDKWAHSIry92IwERTGuodqgQVcXklVXJfEaxaC2rHqoSR6JcXm9wrpreJY8ZDamAuKHIipXJ5FtFHja3uoHdhu8PQ6AyaBm357KAAywSXDR3EqbWbyHr4I+gEcB+tBAw9OyAa0fZz38lSQbt7LoL8PAbk/7zXRC0HNwUHul3irxrMSRTJa41wOOBYVz3se5ByMHAqjuASa2p1NYY/Q660ykcUleNz/ufJYKZgG9jn1UGOQA/Y6ERM+fqwvshVRak4bkfrOD+amnEsO52ZL0EBwBYw1mZL83kJkT2eRnvGuTI3l3vrZiqA4sAkcAS292Omt6oqs6xDaX3E1nZsBRznXuGiC0hgDMpzGADtBbGgC1g+81aeRKzMZnHPa54KyQB5I9LMYS6gjsqK9yPy2rswkcu5Z4YJ6+VTsRX7UASNbtGe4oBFgNfC1wfDsA7zzt8jS267MfARLwPDK+kXHOzAbnGAJkOClEH1qh57iCd4Tef3RlanrTGYLop1yuaALOOmVmAd4dNNviCwqcSWmnCuqe7iYaHHoEc/4+eCDKSE6g92wPAYRpOCVK1N4FNKXK6rMamAtZzPjJ/CPWzGa+qSjHl11FzMod7VSN4OubLZE7QFUNS6AZLAOjLc7g8OloSW2/YHIe3fHzX0wBRwzWbF+rRbrLjATvLDapYnV8UQr1+RcORD+YdFAf9tYpoaK6EwxmmXvsfrFWPOQnn8zIGQn3//KWkyLuzF+tbF03DVg4yS9spP1zm6w32qlakqQxoHpTBCngn8d2HjDSnQAxNzTRFxCTcffnEzIzZK7CMZhEtck1M7djA17Wuz16YJ9ONjQPpwWEmvVptss1UnQXwZ6U8wwLrkNeP+Etck88LYKG295TRrFDAZX3YpxEod04hMwiXyu8zWfTaKEATAP3orW6w72smFDl1VD5mRWWlUB08e2btKuFDOEPYdxEYqtU5pZ4Lo76kWQDd6TbHq2OKxvYUXMOS88JMm5wZc/wCwrKRyYrHkXnmqT4L1yg60obZGsBOkWb6ttK20NP/MqsK5gmfHF7hVL4zUQUkYxA9ixsSKmlLFndKUYSx6y8yv41IWfvNWnv0qsdVL1sECKKt1sZAqZ/N4nY1O2d3FomwZCKxkwRjOLYp5r+w6MjCTGj8CqgXAQ20mvXdr6S0K/Aub4HYciHedbXJTuL1hraTx7bKL9Y2rc4abPtJECHQYdWfMYGabLB/XWRpbJeVVc95Ldml/AQ5MT8Koe0oyhHxPXNxE6S52YRRgfXhZ46q0/ubeOsIeWzkPkvlc39aPAu8VUyZdR/f9y1YJ8Hv8LMAC3bi/uZPgfuQAAAABJRU5ErkJggg==">
    </div>
    <div class="search-box">
      <span></span>
      <input type="text" ref="keywords" placeholder="请输入搜索关键词" @click="searchClasses()">
    </div>
    <!--class="history"-->
    <div class="m-search-page z-open" v-show="showPanel">
      <section class="m-search-page__b">
        <header class="m-search-page__h"><i class="icon-font i-hot"></i>热门搜索</header>
        <ul class="m-search-page__hotlist">
          <li class="m-search-page__hotitem f-border-1px" cmd="searchHot">公务员</li>
          <li class="m-search-page__hotitem f-border-1px" cmd="searchHot">考研政治</li>
          <li class="m-search-page__hotitem f-border-1px" cmd="searchHot">产品</li>
          <li class="m-search-page__hotitem f-border-1px" cmd="searchHot">前端开发</li>
          <li class="m-search-page__hotitem f-border-1px" cmd="searchHot">会计</li>
          <li class="m-search-page__hotitem f-border-1px" cmd="searchHot">英语</li>
          <li class="m-search-page__hotitem f-border-1px" cmd="searchHot">excel</li>
          <li class="m-search-page__hotitem f-border-1px" cmd="searchHot">高考数学</li>
          <li class="clearfix"></li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showPanel: false
      }
    },
    methods: {
      searchClasses() {
        this.$refs.keywords.focus();
        this.$refs.keywords.placeholder = '';
        this.showPanel = true;
        this.$emit('showPanel', true);
      },
    }
  }
</script>
<style scoped>
  .container {
    position: fixed;
    z-index: 100;
    background-color: #fff;
    width: 100%;
    display: flex;
  }

  .container .image {
    width: .8rem;
    height: .8rem;
    margin: .25rem .3055556rem .25rem .3611111rem;
  }

  .container .image img {
    width: 100%;
    height: 100%;
  }

  .search-box {
    display: inline-block;
    position: relative;
    width: 8.5rem;
  }

  /*.search-box span {*/
    /*position: absolute;*/
    /*right: .5rem;*/
    /*top: .5rem;*/
    /*background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJlSURBVFhH7ZfRShRRHMb3Jkqzm7wJSrqIIDBxX6C0a62H6C7oqq4ixYreQMmMHkXbjLQeIYgyQuqiyIuotKDt923fyLCszv/MzF5EDnzs2T3/7zffOXNm5myjcXDUOAOtVquJ7qOn6AP6ZamtQ33NGk/ZG8VJJtEaagf1XJ7agwEdRI9zIT7RnkdT6Iz7VaO2flPf51z9I9oDtQQDNIxeGv6Nz9voaBFcNa79bu8LsYp8+/Z75FmYN3w/nwqUB204lFiDqYzd+txlek37RFkQ3pNIjDZaKsXBeMkATfloKUjOBGMMifUbXUzmYVp3oFvJ5j0M8GbNXEtiYtJzRtOru6lwAUfhsIZQdveNR30NTPccaD5sChbCXTD7btDSUCAdmqGpsClYCHPa7CdBSyeQXgEKNBI2BQthnjX7Y9DSCfTTpkNhU7AQ7jGzd4KWvgc67EDbKYH6eclOO9BmSqBsUU+HTcFCwJcdaCVo6Vyy7LZfCJuChbAfONCdoKUTKHsw6iE2FDYWFIqFthxoLImLSZsr3fqzScZ9isUyczWZiXEC6UWoF2LaaHqcDcY4+mHmheRAMmBe8oje8nmqFOQvZwS9N2uxLEcgbUuzDdpGmZnyzLxzGG3yqm1lARxH2VZEUz6DChc6NXoia83I087pRukZyozAjqCHvv6Cf0GL6Ao655MrgNr6TX1bDqF1qO/Xcv7qobymJoA+6xpxfvTd7VVqdxcw7au1h3IwbUfn0DJ6hb6ibbSJVtzX8w9B30JVWQf/QqibVQZYm7drpg5C7TmzuZnSI6JZ2yWoAnKo61UY/5f3Dy7dC4CdAEhQAAAAAElFTkSuQmCC*/
    /*);*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
  /*}*/

  .search-box input {
    float: left;
    width: 96%;
    height: 0.666667rem;
    border: none;
    border-radius: .1rem;
    font-size: .30555556rem;
    line-height: 0.666667rem;
    font-weight: 800;
    margin-top: .3rem;
    background-color: #f2f2f2;
    text-align: center;
  }

  .download {
    flex: 0 0 80px;
    text-align: center;
    margin: .3rem .1rem;
    box-sizing: content-box;
    border-radius: 4px;
  }

  .history {
    position: relative;
    top: 40px;
    left: 55px;
    width: 82%;
    z-index: 12;
  }

  .m-search-page {
    display: block;
    position: relative;
    top: 45px;
    left: -20px;
    width: 100%;
  }

  .m-search-page__h {
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    color: #909090;
  }

  .m-search-page__h .icon-font {
    line-height: 40px;
    margin-right: 5px;
    vertical-align: baseline;
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

  .i-hot:before {
    content: "\f01d";
  }

  .m-search-page__hotlist {
    padding: 0 0 2px;
    overflow: hidden;
  }

  .m-search-page__hotitem {
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid #d2deec;
    border-radius: 11px;
    padding: 0 16px;
    height: 23px;
    font-size: 14px;
    line-height: 23px;
    color: #404040;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2)
    .f-border-1px:after {
      right: -100%;
      bottom: -100%;
      -webkit-transform: scale(0.5);
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 1.5)
      .f-border-1px:after {
        right: -42.857%;
        bottom: -42.857%;
        -webkit-transform: scale(0.7);
      }

      .f-border-1px:after {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        -webkit-transform: scale(1);
        -webkit-transform-origin: 0 0;
        content: '';
        pointer-events: none;
      }
</style>
