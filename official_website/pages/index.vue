<template>
  <div class="the-index">
    <swiper
      class="the-index-content"
      :slides-per-view="1"
      :mousewheel="true"
      :options="mainSwiperOptions"
    >
      <swiper-slide class="swiper-slide">
        <swiper
          ref="banner_swiper"
          :options="swiperOption"
          @slide-change="handleChange"
        >
          <swiper-slide
            v-for="(item, index) in banner_list"
            :key="index"
            class="swiper-slide"
          >
            <div class="banner" @click="openUrl">
              <img :src="item.src" :alt="item.title" width="100%" />
              <div class="swiper_con">
                <h1
                  :class="
                    banner_swiper && banner_swiper.realIndex == index
                      ? item.activeClass
                      : ''
                  "
                >
                  {{ item.title }}
                </h1>
                <p
                  :class="
                    banner_swiper && banner_swiper.realIndex == index
                      ? item.activeClass
                      : ''
                  "
                >
                  {{ item.des }}
                </p>
                <a
                  :class="
                    banner_swiper && banner_swiper.realIndex == index
                      ? item.activeClass + ' link'
                      : 'link'
                  "
                  :href="item.link"
                  >了解详情 <i class="el-icon-caret-right"></i
                ></a>
              </div>
            </div>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <swiper
          ref="pro_swiper"
          :options="swiperOption2"
          @slide-change="handleChange"
        >
          <swiper-slide
            v-for="(item, index) in product_list"
            :key="index"
            class="swiper-slide"
          >
            <div class="banner" @click="openUrl">
              <img :src="item.src" :alt="item.title" width="100%" />
              <div class="swiper_con">
                <h1
                  :class="
                    pro_swiper && pro_swiper.realIndex == index
                      ? item.activeClass
                      : ''
                  "
                >
                  {{ item.title }}
                </h1>
                <h1
                  :class="
                    pro_swiper && pro_swiper.realIndex == index
                      ? item.activeClass
                      : ''
                  "
                >
                  {{ item.title1 }}
                </h1>
                <p
                  :class="[
                    'f_32_r',
                    pro_swiper && pro_swiper.realIndex == index
                      ? item.activeClass
                      : '',
                  ]"
                >
                  {{ item.title2 }}
                </p>
                <p
                  :class="[
                    'f_20_l',
                    pro_swiper && pro_swiper.realIndex == index
                      ? item.activeClass
                      : '',
                  ]"
                >
                  {{ item.des }}
                </p>
                <a
                  :class="
                    pro_swiper && pro_swiper.realIndex == index
                      ? item.activeClass + ' link'
                      : 'link'
                  "
                  :href="item.link"
                  >了解详情 <i class="el-icon-caret-right"></i
                ></a>
              </div>
            </div>
          </swiper-slide>

          <div class="swiper-pagination-c" slot="pagination">
            <div
              :class="[
                'page_item ',
                pro_swiper && pro_swiper.realIndex == index
                  ? 'hover-banner'
                  : '',
              ]"
              v-for="(itemd, index) in product_list"
              :key="index"
              @click="handleSlide(index)"
            >
              <img :src="itemd.src" />
              <div class="right_con">
                <h3>{{ itemd.title3 }}</h3>
                <span>{{ itemd.des1 }}</span>
              </div>
            </div>
          </div>
        </swiper>
      </swiper-slide>
      <swiper-slide class="swiper-slide screen-3">
        <div class="screen-3-bg">
          <p>{{ $t('home.screen_3.case_title') }}</p>
          <p>{{ $t('home.screen_3.case_des') }}</p>
          <button>查看更多<i class="el-icon-caret-right"></i></button>
          <!-- <a href="">查看更多<i class="el-icon-caret-right"></i></a> -->
        </div>
        <swiper
          ref="case_swiper"
          :options="swiperOption3"
          @slide-change="handleChange"
          @mouseover="overHandle"
          @mouseout="outHandle"
        >
          <swiper-slide
            v-for="(item, index) in case_list"
            :key="index"
            class="swiper-slide"
          >
            <div class="banner-3" @click="openUrl">
              <img :src="item.src" :alt="item.title" />
              <div class="swiper_con">
                <h1 :class="['f_32_r']">
                  {{ item.title }}
                </h1>
                <h1 :class="['f_16_l']">
                  {{ item.title1 }}
                </h1>

                <p :class="['f_14_l']" v-for="(k, i) in item.des" :key="i">
                  {{ k }}
                </p>
                <a :class="['link']" :href="item.link"
                  >了解详情 <i class="el-icon-caret-right"></i
                ></a>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="the-index-news">
          <h1>{{ $t('home.screen_4.title') }}</h1>
          <h5>{{ $t('home.screen_4.des') }}</h5>
          <div class="the-index-news-content">
            <section
              v-for="(newsItem, w) in newsList"
              class="the-index-news-content-item"
              :key="w"
            >
              <div
                class="the-index-news-content-item-img"
                :style="{ backgroundImage: 'url(' + newsItem.src + ')' }"
              ></div>
              <h2>{{ newsItem.title }}</h2>
              <p>{{ newsItem.des }}</p>

              <a :href="newsItem.link"
                >{{ $t('home.screen_4.btn1_txt') }}
                <i class="el-icon-caret-right"></i>
              </a>
            </section>
          </div>
          <button class="the-index-news-button">
            {{ $t('home.screen_4.btn2_txt') }}
            <i class="el-icon-caret-right"></i>
          </button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { getSecCatalogs, chkIp } from '@/service/api'

export default {
  name: 'the-index',
  components: {},
  asyncData() {},
  data() {
    return {
      cooperate: '',
      current: 1,
      banner_list: [
        {
          title: '艾利特协作机器人复杂应用简单化 ',
          des: '安全，灵活，高效，助力企业实现柔性自动化',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/ce413c79b00781f8.png',
          link: '',
          activeClass: 'wow animated jello fast',
        },
        {
          title: '艾利特协作机器人复杂应用简单化 ',
          des: '安全，灵活，高效，助力企业实现柔性自动化',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/ce413c79b00781f8.png',
          link: '',
          activeClass: 'wow animated slideInDown fast',
        },
        {
          title: '3',
          des: '789',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/ce413c79b00781f8.png',
          link: '',
          activeClass: 'wow animated slideInDown fast',
        },
      ],
      product_list: [
        {
          title: '艾利特协作机器人',
          title1: '经典CS系列',
          title2: 'CS SERIER ',
          title3: 'CS系列机器人',
          des: '为物联网时代下的每一家工厂末端赋能',
          des1: 'CS63 / CS66 / CS612',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/10ded0215ce5b580.png',
          link: '',
          activeClass: 'wow animated slideInDown slow',
        },
        {
          title: '艾利特协作机器人',
          title1: '经典CS系列',
          title2: 'CS SERIER ',
          title3: 'CS系列机器人',
          des: '为物联网时代下的每一家工厂末端赋能',
          des1: 'CS63 / CS66 / CS612',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/49b63f5b5e0942fb.png',
          link: '',
          activeClass: 'wow animated slideInDown slow',
        },
        {
          title: '艾利特协作机器人',
          title1: '经典CS系列',
          title2: 'CS SERIER ',
          title3: 'CS系列机器人',
          des: '为物联网时代下的每一家工厂末端赋能',
          des1: 'CS63 / CS66 / CS612',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/10ded0215ce5b580.png',
          link: '',
          activeClass: 'wow animated slideInDown slow',
        },
      ],
      case_list: [
        {
          title: '艾利特协作机器人',
          title1: '经典CS系列',
          des: [
            '无人奶茶站',
            '无人咖啡站',
            '无人啤酒站',
            '智慧厨房',
            '智能餐厅',
          ],
          src: 'https://s3.bmp.ovh/imgs/2022/09/18/3def7358f155dff1.png',
          link: '',
          activeClass: 'wow animated slideInDown slow',
        },
        {
          title: '艾利特协作机器人',
          title1: '经典CS系列',
          des: [
            '无人奶茶站',
            '无人咖啡站',
            '无人啤酒站',
            '智慧厨房',
            '智能餐厅',
          ],
          src: 'https://s3.bmp.ovh/imgs/2022/09/18/3da75fffe47f2d34.png',
          link: '',
          activeClass: 'wow animated slideInDown slow',
        },
        {
          title: '艾利特协作机器人',
          title1: '经典CS系列',
          des: [
            '无人奶茶站',
            '无人咖啡站',
            '无人啤酒站',
            '智慧厨房',
            '智能餐厅',
          ],
          src: 'https://s3.bmp.ovh/imgs/2022/09/18/53d8841808b81c68.png',
          link: '',
          activeClass: 'wow animated slideInDown slow',
        },
        {
          title: '艾利特协作机器人',
          title1: '经典CS系列',
          des: [
            '无人奶茶站',
            '无人咖啡站',
            '无人啤酒站',
            '智慧厨房',
            '智能餐厅',
          ],
          src: 'https://s3.bmp.ovh/imgs/2022/09/18/f28117102d0230c9.png',
          link: '',
          activeClass: 'wow animated slideInDown slow',
        },
        {
          title: '艾利特协作机器人',
          title1: '经典CS系列',
          des: [
            '无人奶茶站',
            '无人咖啡站',
            '无人啤酒站',
            '智慧厨房',
            '智能餐厅',
          ],
          src: 'https://s3.bmp.ovh/imgs/2022/09/18/f28117102d0230c9.png',
          link: '',
          activeClass: 'wow animated slideInDown slow',
        },
      ],
      newsList: [
        {
          title: '探索边缘计算作为云计算的补充',
          des: '处于边缘的基础正在促使人们对基础设施、远程工作以及组织如何从所取得的进步中获得最大收益的方式进行重新思考。在上周由网络智能平台Kentik主办的所取得的进步中获得最大收益的方式进行重新思考。在上周由网络智能平台Kentik主办所取得的进步中获得最络智能平台Kentik主办所取得的进步中获得最大收益...',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/93078cd5159092df.png',
          link: '',
        },
        {
          title: '混合多云环境，保障安全敏捷的企业云架构',
          des: '处于边缘的基础正在促使人们对基础设施、远程工作在上周由网络智能平台Kentik主办的所取得的进步中获得最大收益的方式进行重新思考。在上周由网络智能新思考。在上周由网络智能平台Kentik主办所取得的...',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/36b00ca9bf895907.png',
          link: '',
        },
        {
          title: '云增长思维',
          des: '处于边缘的基础正在促使人们对基础设施、远程工作以及组织如何从所取得的进步中获得最大收益的方式进行重新思考。在上周由网络智能平台Kentik主办的在上周由网络智能平台Kentik主办的所取得的进步中获得新思考。在上周由网络智能平台Kentik主办所取得的',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/aae700b291e987f6.png',
          link: '',
        },
      ],
      videoCase: '',
      swiperOption: {
        nested: true,
        direction: 'horizontal',
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          clickable: true,
        },

        // 开启循环模式
        loop: true,
        autoplay: {
          disableOnInteraction: false,
        },
      },
      swiperOption2: {
        nested: true,
        direction: 'horizontal',
        // 设置点击箭头
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          clickable: true,
        },

        // 开启循环模式
        loop: true,
        autoplay: {
          disableOnInteraction: false,
        },
      },
      swiperOption3: {
        nested: true,
        direction: 'horizontal',
        // 设置点击箭头
        spaceBetween: 0,
        freeMode: true,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        slidesOffsetBefore: 400,
        slidesOffsetAfter: 400,
        // mousewheel: {
        //   releaseOnEdges: true,
        //   sensitivity: 0.1,
        // },
        speed: 6000,
        autoplay: {
          delay: 0, // 自动切换的时间间隔
          disableOnInteraction: true,
          pauseOnMouseEnter: true, // 鼠标置于swiper时暂停自动切换，鼠标离开时恢复自动切换。
        },
        // centeredSlides: true,
      },
      banner_swiper: null,
      pro_swiper: null,
      case_swiper: null,
    }
  },
  computed: {
    // 满屏滚动 Swiper
    mainSwiperOptions: () => {
      return {
        // height: document.client.height,
        spaceBetween: 0,
        direction: 'vertical',
        mousewheel: true,

        loop: false, // 开启循环模式
        autoplay: false,
        speed: 3000,
        parallax: true,
        // freeMode: true
      }
    },
  },
  methods: {
    handleSlide(index) {
      this.pro_swiper.slideToLoop(index, 1000, false)
    },
    getSwiper() {
      this.banner_swiper = this.$refs.banner_swiper.swiper
      this.pro_swiper = this.$refs.pro_swiper.swiper
      this.case_swiper = this.$refs.case_swiper.swiper
    },
    overHandle() {
      this.case_swiper.autoplay.stop()
    },
    outHandle() {
      this.case_swiper.autoplay.start()
    },
    handleChange() {
      // if (this.case_swiper.activeIndex > 0) {
      //   this.mainSwiperOptions.mousewheel = false;
      // }
      // if (this.case_swiper.activeIndex == 0 || this.case_swiper.activeIndex == this.case_swiper.slides.length) {
      //   this.mainSwiperOptions.mousewheel = true;
      // }
      // console.log(this.$refs.banner_swiper.swiper, '9999');
    },
    getSwiperHeight() {
      return window.innerHeight - (60 / 1080) * window.innerHeight
    },
    openUrl() {
      // window.open("http://new.elibot.cn/page/product/compound-robot/index.html");
    },
    async getCooperate() {
      const { data } = await getSecCatalogs(2, 2, 1)
      if (data.code === 200) {
        // console.log("think:" + data.data)
        data.data.forEach(res => {
          if (res.id === 102) {
            this.cooperate = res
            console.log(this.cooperate)
          }
        })
      }
    },
    async getCase() {
      const { data } = await getSecCatalogs(2)

      if (data.code === 200) {
        // console.log("think:" + data.data)
        this.videoCase = data.data.videoUrl
      }
    },
    async autoLink() {
      console.log('think 1')
      const { data } = await chkIp()
      console.log('think 4:' + data)
      const str = JSON.stringify(data, null, ' ')
      console.log('think 5:' + str)

      if (data.status === 0) {
        console.log('think 6:' + data.status)
        process.client && sessionStorage.setItem('autoLink', true)
        if (data.result.ad_info.nation !== '中国') {
          console.log('think 7')
          window.location.href = 'https://www.elibot.cn/en/'
        } else {
          console.log('think 8')
        }
        console.log('think 9')
      }
      console.log('think 10')

      // 美国服务器默认跳转英文版，发布版本时如果是美国服务器将以下代码注释放开，中国服务器将以下代码注释
      // sessionStorage.setItem('autoLink',true)
      // window.location.href = 'https://www.elibot.cn/en/'
    },
  },
  created() {
    // 国内外服务器分开后这里不用调用腾讯API接口区分IP来源  by:eli 2021-03-12
    if (process.client && !sessionStorage.getItem('autoLink')) {
      this.autoLink()
    }
    this.getCooperate()
    this.getCase()
  },
  mounted() {
    this.$nextTick(() => {
      // this.$wow.init();
      this.getSwiper()
    })
  },
}
</script>
<style lang="scss">
.the-index {
  height: 100%;

  &-content {
    // margin-top: 60px;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: var(--color-main-bg);
  }

  .the-index-news {
    width: 100%;
    height: 100%;
    background: url('https://s3.bmp.ovh/imgs/2022/09/17/51fee61bed186225.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    padding: 0 1.052rem;
    box-sizing: border-box;

    // .title_con {
    //   width: 100%;
    //   color: #fff;
    //   margin-top: 0.89583rem;
    // margin-left: 1.052rem;
    // padding-top: 1.208rem;
    // }
    h1 {
      font-size: var(--font-size-48px);
      margin-bottom: 0.167rem;
    }
    h5 {
      @extend.f_20_l;
      font-weight: normal;
      opacity: 0.7;
      // letter-spacing: 2px;
      margin-bottom: 0.416rem;
    }
    &-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      // align-items: flex-start;
      // color: #fff;
      // margin-top: 0.4167rem;
      // padding-left: 1.052rem;
      margin-bottom: 0.26rem;

      &-item {
        display: flex;
        width: 1.875rem;
        flex-direction: column;
        // margin-right: 1.052rem;

        &-img {
          width: 1.302rem;
          height: 0.8073rem;
          margin-bottom: 0.16667rem;
          background-position: center;
          background-size: 100%;
          transition: all 225ms;
          &:hover {
            background-size: 125%;
          }
        }

        h2 {
          @extend .f_24_m;
          margin-bottom: 0.10416667rem;
        }
        p {
          @extend .f_14_l;
          line-height: 0.114583rem;
          margin-bottom: 0.151rem;
        }
        a {
          @extend .f_14_l;
          @extend.font_blue_style;
        }
      }
    }
    &-button {
      // text-align: right;
      margin-left: auto;
      width: 0.72917rem;
      height: 0.20833rem;
      // margin-right: 1.375rem;
      @extend.font_blue_style;
      border: 0.00520833rem solid;
      border-image: linear-gradient(
          90deg,
          rgba(0, 131, 255, 1),
          rgba(0, 209, 255, 1)
        )
        1 1;
    }
  }

  // height: calc(100vh - 0.3125rem);
  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: linear !important;
  }
  .swiper-pagination-bullet {
    background-color: #ffffff;
  }

  .swiper-pagination-bullet-active {
    background-color: #36bdef;
  }

  .font_blue_style {
    background: linear-gradient(90deg, #0083ff 0%, #00d1ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .f_48_b {
    font-size: 0.25rem;
    font-weight: 900;
  }
  .f_32_r {
    font-size: 0.166667rem;
    font-weight: 900;
  }
  .f_24_m {
    font-size: 0.166667rem;
    font-weight: 500;
  }
  .f_16_l {
    font-size: 0.083333rem;
    font-weight: 300;
  }
  .f_14_l {
    font-size: 0.0729rem;
    font-weight: 300;
  }
  .f_20_l {
    font-size: 0.104166667rem;
    font-weight: 300;
  }
  .swiper-slide,
  .banner {
    position: relative;
    overflow: hidden;

    // img {
    //   height: calc(100vh - 0.3125rem);
    // }
    .banner-intro {
      position: absolute;
      top: 0.64rem;
      text-align: center;
      left: 0;
      right: 0;
      margin: auto;

      h5 {
        font-size: 0.36rem;
        color: #ffffff;
        line-height: 0.54rem;
        font-weight: 500;
        letter-spacing: 0.03rem;
      }

      p {
        font-size: 0.22rem;
        color: #e0e0e0;
        line-height: 0.26rem;
      }
    }
    .swiper_con {
      position: absolute;
      top: 1.84375rem;
      left: 1.04166667rem;
      color: #fff;

      .f_32_r {
        font-size: 0.166667rem;
        font-family: 'hscr';
      }
      .f_16_l {
        font-size: 0.083333rem;
        font-family: 'hscl';
        font-weight: 300;
      }
      .f_20_l {
        font-size: 0.104166667rem;
        font-family: 'hscl';
        font-weight: 300;
      }
      h1 {
        width: 2rem;
        font-size: 0.25rem;
        font-family: 'hscblack';
        font-weight: 900;
        line-height: 0.35rem;
      }
      p {
        margin-top: 0.125rem;
        font-size: 0.104166667rem;
        font-family: 'hscr';
        font-weight: 400;
      }
      .link {
        margin-top: 0.2708333rem;
        font-size: 0.07291667rem;
        font-family: 'hscl';
        font-weight: 300;
        @extend .font_blue_style;
        i {
          margin-left: 0.0625rem;
        }
      }
    }
    .swiper-pagination-c {
      display: flex;
      flex-direction: column;
      width: 1.9375rem;
      height: 2.40625rem;
      position: absolute;
      top: 1.55rem;
      right: 1.04rem;
      z-index: 999;
      justify-content: space-between;
      // border: 1px solid red;
      .hover-banner {
        border: 1px solid;
        border-image: linear-gradient(
            90deg,
            rgba(0, 131, 255, 1),
            rgba(0, 209, 255, 1)
          )
          1 1;
        h3,
        span {
          font-family: 'hscb';
          font-weight: bold;
          background: linear-gradient(90deg, #0083ff 0%, #00d1ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .page_item {
        width: 100%;
        height: 0.71875rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.24);
        &:hover {
          @extend .hover-banner;
        }

        img {
          width: 0.78125rem;
          height: 0.46875rem;
        }
        .right_con {
          width: 50%;
          height: 100%;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          h3 {
            font-size: 0.10416rem;
            font-family: 'hscb';
            font-weight: bold;
          }
          span {
            font-size: 0.0625rem;
            font-family: 'hscl';
          }
        }
      }
    }
  }
  .screen-3 {
    @keyframes fadenum {
      100% {
        width: 2.6979rem;
      }
      0% {
        width: 1.8745rem;
      }
    }
    @keyframes toptrans {
      100% {
        top: 50%;
      }
      0% {
        top: 100%;
      }
    }
    .screen-3-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -111;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      p {
        color: #fff;
        margin-bottom: 0.125rem;
        margin-left: 0.54166667rem;
        // & :first-child {
        font-family: 'hscb,hsc';
        font-weight: 900;
        font-size: 0.25rem;
        line-height: 0.349rem;
        // }
        &:nth-child(2) {
          font-family: 'hscl,hsc';
          font-weight: 300;
          font-size: 0.09375rem;
          letter-spacing: 0.031rem;
          text-align: center;
        }
      }
      button {
        @extend .font_blue_style;
        @extend .f_14_l;
        position: absolute;
        right: 100px;
        width: 0.72917rem;
        height: 0.20833rem;
        border: 0.00520833rem solid;
        border-image: linear-gradient(
            90deg,
            rgba(0, 131, 255, 1),
            rgba(0, 209, 255, 1)
          )
          1 1;
      }
    }
    .color_txt {
      background: linear-gradient(90deg, #0083ff 0%, #00d1ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .swiper-slide {
      width: 1.8745rem;
      background: rgba(7, 7, 7, 0.517);
      // z-index: 9999;

      &:hover {
        width: 2.6979rem;
        animation: fadenum 1s;
        .banner-3 {
          width: 2.6979rem;
          img {
            filter: none;
          }
          .swiper_con {
            // background: none;
            top: 50%;
            height: 50%;
            animation: toptrans 1s;

            h1 {
              font-weight: 900;
            }
            p {
              line-height: unset;
              font-weight: 300;
            }
            h1,
            p {
              display: block;
              @extend .color_txt;
            }
          }
        }
      }
    }
    .banner-3 {
      width: 1.8745rem;
      overflow: hidden;
      img {
        filter: grayscale(1);
        // width: 100%;
        object-fit: contain;
      }
      .swiper_con {
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
          text-align: center;
        }
        p {
          display: none;
        }
        .f_14_l {
          font-size: 0.07291rem;
          font-family: 'hscl';
          font-weight: 300;
          @extend .color_txt;
        }
      }
    }
  }
}

hr {
  width: 100%;
  height: 0.16rem;
  background-color: #f5f5f5;
  border: none;
}

.btn-more {
  margin: 0.6rem auto 0.34rem auto;
}

.out-swiper {
  position: relative;
}

.video-swiper {
  width: 8rem;
}

.swiper-prev,
.swiper-next {
  font-size: 0.6rem;
  color: #36bdef;
  position: absolute;
  top: 50%;
  margin-top: -0.3rem;
  z-index: 10;
  cursor: pointer;
}

.swiper-next {
  right: 0;
}

.swiper-prev.swiper-button-disabled,
.swiper-next.swiper-button-disabled {
  color: #a7a8aa;
}

/* 手机或小平板 phone */
@media screen and (max-width: 768px) {
  .swiper-slide,
  .banner {
    position: relative;

    .banner-intro {
      position: absolute;
      top: 0.3rem;
      text-align: center;
      left: 0;
      right: 0;
      margin: auto;

      h5 {
        font-size: 0.24rem;
        color: #ffffff;
        line-height: 0.36rem;
        font-weight: 500;
        letter-spacing: 0.01rem;
      }

      p {
        font-size: 0.16rem;
        color: #e0e0e0;
        line-height: 0.26rem;
      }
    }
  }
  .robot-box .robot-box-item {
    margin: 0.2rem auto;
    width: 100%;
  }
}
</style>
<style>
.el-row--flex {
  flex-wrap: wrap;
}
</style>
