<template>
  <div class="the-index">
    <!-- banner -->
    <!-- 产品系列 -->
    <div class="the-index-product">
      <agile
        ref="productSlide"
        class="the-index-product-slide"
        :options="{
          dots: false,
          navButtons: false,
          autoplay: true,
          pauseOnHover: true,
        }"
        @after-change="onProductChange"
      >
        <div
          class="the-index-product-slide-item"
          v-for="(item, index) in productList"
          :key="item.title"
          :style="{ backgroundImage: 'url(' + item.src + ')' }"
        >
          <h1
            :class="{
              'animate__animated animate__fadeInDown':
                productActiveIndex === index,
            }"
          >
            {{ item.title }}
          </h1>
          <h1
            :class="{
              'animate__animated animate__fadeInDown':
                productActiveIndex === index,
            }"
          >
            {{ item.title1 }}
          </h1>
          <h3
            :class="{
              'animate__animated animate__fadeInDown animate__delay-500ms':
                productActiveIndex === index,
            }"
          >
            {{ item.title2 }}
          </h3>
          <h5
            :class="{
              'animate__animated animate__fadeInDown animate__delay-500ms':
                productActiveIndex === index,
            }"
          >
            {{ item.des }}
          </h5>
          <div
            :class="[
              'link_primary',
              {
                'animate__animated animate__fadeInDown animate__delay-1s':
                  productActiveIndex === index,
              },
            ]"
          >
            <span class="gradient_text">
              {{ $t('common.get_details') }}
            </span>

            <img src="@/assets/images/common/triangle.svg" />
          </div>
        </div>
      </agile>
      <div class="the-index-product-thumbnails">
        <div
          v-for="(item, index) in productList"
          :class="[
            'the-index-product-thumbnails-item',
            { 'is-active': productActiveIndex === index },
          ]"
          :key="index"
          @mouseenter="$refs.productSlide.goTo(index)"
        >
          <img :src="item.src" />
          <section>
            <h3>{{ item.title3 }}</h3>
            <p>{{ item.des1 }}</p>
          </section>
        </div>
      </div>
    </div>
    <!-- 客户案例 -->
    <div class="the-index-case">
      <div class="the-index-case-title">
        <h1>{{ $t('home.screen_3.case_title') }}</h1>
        <p>{{ $t('home.screen_3.case_des') }}</p>
      </div>
      <div class="the-index-case-content">
        <div
          v-for="item in caseList"
          :key="item.title"
          :class="['the-index-case-content-item']"
          :style="{ backgroundImage: 'url(' + item.src + ')' }"
        >
          <div class="the-index-case-content-item-text">
            <img :src="item.icon" />
            <img :src="item.activeIcon" />

            <h1>{{ item.title }}</h1>
            <h2>{{ item.des }}</h2>

            <p
              v-for="(k, i) in item.productList"
              :key="i"
              class="is-active gradient_text"
            >
              {{ k }}
            </p>

            <a class="link_primary">
              <span class="gradient_text">
                {{ $t('common.get_details') }}
              </span>

              <img src="@/assets/images/common/triangle.svg" />
            </a>

            <button class="button_primary">
              <span class="gradient_text">
                {{ $t('common.get_more') }}
              </span>

              <img src="@/assets/images/common/triangle.svg" />
            </button>
          </div>
        </div>
      </div>
      <a class="the-index-case-tail link_primary">
        <span class="gradient_text">
          {{ $t('common.get_more') }}
        </span>

        <img src="@/assets/images/common/triangle.svg" />
      </a>
    </div>
    <!-- 新闻 -->
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

          <a :href="newsItem.link" class="link_primary">
            <span class="gradient_text">
              {{ $t('home.screen_4.btn1_txt') }}
            </span>

            <img src="@/assets/images/common/triangle.svg" />
          </a>
        </section>
      </div>
      <button class="the-index-news-button button_primary">
        <span class="gradient_text">
          {{ $t('common.get_more') }}
        </span>

        <img src="@/assets/images/common/triangle.svg" />
      </button>
    </div>
  </div>
</template>
<script>
// import { getSecCatalogs } from '@/service/api'
// import { chkIp } from '@/api/common'

export default {
  name: 'the-index',
  components: {},
  asyncData() {},
  data() {
    return {
      // banner 列表
      bannerList: [
        {
          title: '艾利特协作机器人复杂应用简单化1',
          des: '安全，灵活，高效，助力企业实现柔性自动化',
          src: 'https://s3.bmp.ovh/imgs/2022/09/22/b57653be396a872e.png',
          link: '',
        },
        {
          title: '艾利特协作机器人复杂应用简单化2',
          des: '安全，灵活，高效，助力企业实现柔性自动化',
          src: 'https://s3.bmp.ovh/imgs/2022/09/27/365c7e92580f48b7.png',
          link: '',
        },
        {
          title: '3',
          des: '789',
          src: 'https://s3.bmp.ovh/imgs/2022/10/04/b097cff2e2849c50.png',
          link: '',
        },
      ],
      bannerActiveIndex: 0,
      // 产品系列列表
      productList: [
        {
          title: '艾利特协作机器人1',
          title1: '经典CS系列',
          title2: 'CS SERIER ',
          title3: 'CS系列机器人',
          des: '为物联网时代下的每一家工厂末端赋能',
          des1: 'CS63 / CS66 / CS612',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/10ded0215ce5b580.png',
          link: '',
        },
        {
          title: '艾利特协作机器人2',
          title1: '经典CS系列',
          title2: 'CS SERIER ',
          title3: 'CS系列机器人',
          des: '为物联网时代下的每一家工厂末端赋能',
          des1: 'CS63 / CS66 / CS612',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/49b63f5b5e0942fb.png',
          link: '',
        },
        {
          title: '艾利特协作机器人3',
          title1: '经典CS系列',
          title2: 'CS SERIER ',
          title3: 'CS系列机器人',
          des: '为物联网时代下的每一家工厂末端赋能',
          des1: 'CS63 / CS66 / CS612',
          src: 'https://s3.bmp.ovh/imgs/2022/09/17/10ded0215ce5b580.png',
          link: '',
        },
      ],
      productActiveIndex: 0,
      // 案例列表
      caseList: [
        {
          icon: require('@/assets/images/index/ic_anli_gongye.svg'),
          activeIcon: require('@/assets/images/index/ic_anli_gongye_color.svg'),
          title: '工业',
          des: '助力企业柔性化生产',
          productList: [
            '无人奶茶站',
            '无人咖啡站',
            '无人啤酒站',
            '智慧厨房',
            '智能餐厅',
          ],
          src: 'https://s3.bmp.ovh/imgs/2022/09/18/3def7358f155dff1.png',
          link: '',
        },
        {
          icon: require('@/assets/images/index/ic_anli_lingshou.svg'),
          activeIcon: require('@/assets/images/index/ic_anli_lingshou_color.svg'),
          title: '新零售',
          des: '创新模式创造价值',
          productList: [
            '无人奶茶站',
            '无人咖啡站',
            '无人啤酒站',
            '智慧厨房',
            '智能餐厅',
          ],
          src: 'https://s3.bmp.ovh/imgs/2022/09/18/3da75fffe47f2d34.png',
          link: '',
        },
        {
          icon: require('@/assets/images/index/ic_anli_fuhe.svg'),
          activeIcon: require('@/assets/images/index/ic_anli_fuhe_color.svg'),
          title: '医疗',
          des: '用科技为医学增添异彩',
          productList: [
            '无人奶茶站',
            '无人咖啡站',
            '无人啤酒站',
            '智慧厨房',
            '智能餐厅',
          ],
          src: 'https://s3.bmp.ovh/imgs/2022/09/18/f28117102d0230c9.png',
          link: '',
        },
        {
          icon: require('@/assets/images/index/ic_anli_yiliao.svg'),
          activeIcon: require('@/assets/images/index/ic_anli_yiliao_color.svg'),
          title: '复合机器人',
          des: '手脚并用 拓宽边界',
          productList: [
            '无人奶茶站',
            '无人咖啡站',
            '无人啤酒站',
            '智慧厨房',
            '智能餐厅',
          ],
          src: 'https://s3.bmp.ovh/imgs/2022/09/18/53d8841808b81c68.png',
          link: '',
        },
      ],
      activeCase: -1,
      // 新闻列表
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
    }
  },
  computed: {},
  created() {
    // 国内外服务器分开后这里不用调用腾讯API接口区分IP来源  by:eli 2021-03-12
    if (process.client && !sessionStorage.getItem('autoLink')) {
      // this.autoLink()
    }
  },
  mounted() {},
  methods: {
    onBannerChange({ currentSlide }) {
      this.bannerActiveIndex = currentSlide
    },

    onProductChange({ currentSlide }) {
      this.productActiveIndex = currentSlide
    },

    // async getCase() {
    //   const { data } = await getSecCatalogs(2)

    //   if (data.code === 200) {
    //     // console.log("think:" + data.data)
    //     this.videoCase = data.data.videoUrl
    //   }
    // },
    // async autoLink() {
    //   console.log('think 1')
    //   const { data } = await chkIp()
    //   console.log('think 4:' + data)
    //   const str = JSON.stringify(data, null, ' ')
    //   console.log('think 5:' + str)

    //   if (data.status === 0) {
    //     console.log('think 6:' + data.status)
    //     process.client && sessionStorage.setItem('autoLink', true)
    //     if (data.result.ad_info.nation !== '中国') {
    //       console.log('think 7')
    //       window.location.href = 'https://www.elibot.cn/en/'
    //     } else {
    //       console.log('think 8')
    //     }
    //     console.log('think 9')
    //   }
    //   console.log('think 10')

    //   // 美国服务器默认跳转英文版，发布版本时如果是美国服务器将以下代码注释放开，中国服务器将以下代码注释
    //   // sessionStorage.setItem('autoLink',true)
    //   // window.location.href = 'https://www.elibot.cn/en/'
    // },
  },
}
</script>
<style lang="scss">
@import '@/assets/styles/common.scss';

.the-index {
  // --height-part: calc(100vh - 60px);
  --height-part: 5rem;

  &-banner {
    width: 100%;

    color: white;
    overflow: hidden;

    &-slide {
      height: var(--height-part);
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding-left: 1.042rem;

      background-position: center;
      background-size: cover;

      position: relative;
      overflow: hidden;

      h1 {
        width: 2rem;
        font-size: var(--font-size-48px);
        line-height: 0.35rem;
        margin-bottom: 0.125rem;
      }

      h5 {
        font-size: var(--font-size-20px);
        margin-bottom: 0.3125rem;
      }
    }
  }

  &-product {
    width: 100%;

    color: white;

    position: relative;

    &-slide {
      &-item {
        height: var(--height-part);

        background-position: center;
        background-size: cover;

        // padding-top: 1.74rem;
        padding-left: 1.042rem;

        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          width: 2rem;
          font-size: var(--font-size-48px);
          // line-height: 0.35rem;
          margin-bottom: var(--font-size-24px);
        }

        h3 {
          font-size: var(--font-size-32px);
          margin-bottom: var(--font-size-24px);
        }

        h5 {
          font-size: var(--font-size-20px);
          margin-bottom: 0.3125rem;
        }
      }
    }

    &-thumbnails {
      width: 1.9375rem;
      // height: 0.71875rem;

      position: absolute;
      top: 0;
      right: 1.04rem;
      bottom: 0;

      display: flex;
      flex-direction: column;
      justify-content: center;

      &-item {
        width: 100%;
        // height: 0.71875rem;
        box-sizing: border-box;

        padding: var(--font-size-24px);

        display: flex;
        // justify-content: center;
        align-items: center;

        border: 1px solid transparent;
        border-bottom-color: rgba(255, 255, 255, 0.24);

        &:hover,
        &.is-active {
          border-image: linear-gradient(
              90deg,
              rgba(0, 131, 255, 1),
              rgba(0, 209, 255, 1)
            )
            1 1;
        }

        img {
          width: 0.78125rem;
          height: 0.46875rem;

          margin-right: var(--font-size-24px);
        }

        section {
          h3 {
            font-size: var(--font-size-20px);
            margin-bottom: var(--font-size-20px);
          }

          p {
            font-size: var(--font-size-12px);
          }
        }
      }
    }
  }

  &-case {
    height: var(--height-part);

    display: flex;

    color: white;
    text-align: center;

    position: relative;

    background-color: #000816;

    &-title {
      width: 2.083rem;

      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        margin-bottom: 0.125rem;
        font-size: var(--font-size-48px);
        // line-height: 0.349rem;
      }

      p {
        font-size: var(--font-size-18px);
        letter-spacing: 0.031rem;
        text-align: center;
      }

      button {
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

    &-content {
      width: calc(100% - 2.083rem - 0.78125rem);

      &:hover {
        width: calc(100% - 2.083rem);
      }

      display: flex;

      position: relative;
      z-index: 1;

      transition: width 225ms;

      &-item {
        // width: 22.5%;

        flex: 1;
        overflow: hidden;

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        transition: all 225ms;

        position: relative;

        &-text {
          width: 100%;
          height: 100%;

          position: absolute;
          bottom: 0;
          left: 0;

          color: white;
          background-color: rgba(0, 0, 0, 0.5);

          transition: all 225ms;

          backdrop-filter: grayscale(100%);

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          > img {
            width: 0.208rem;
            height: 0.208rem;
            margin: 0 auto 0.177rem;
          }

          h1 {
            font-size: var(--font-size-32px);
            margin-bottom: var(--font-size-20px);
          }

          h2 {
            font-size: var(--font-size-16px);
            margin-bottom: 0.208rem;
          }

          p {
            font-size: var(--font-size-14px);
            line-height: var(--font-size-32px);

            border-bottom: 1px solid rgba(255, 255, 255, 0.4);

            &:nth-last-of-type(1) {
              margin-bottom: var(--font-size-20px);
            }
          }

          button {
            width: 140px;
            height: 32px;
            background-color: rgba(255, 255, 255, 0.12);
            border: none;

            justify-content: center;
          }

          > img:nth-child(2),
          p {
            display: none;
          }

          button {
            visibility: hidden;
          }
        }

        &:hover {
          flex: 1.5;

          .the-index-case-content-item-text {
            height: 2.583rem;

            backdrop-filter: blur(10px) brightness(50%);

            h1,
            h2 {
              @extend .gradient_text;
            }

            > img:nth-child(1),
            a {
              display: none;
            }

            > img:nth-child(2),
            p {
              display: block;
            }

            button {
              visibility: visible;
            }
          }
        }
      }
    }

    &-tail {
      width: 0.78125rem;
      height: 100%;

      position: absolute;
      right: 0;

      justify-content: center;
    }
  }

  &-news {
    width: 100%;
    height: var(--height-part);

    background-image: url('https://s3.bmp.ovh/imgs/2022/09/17/51fee61bed186225.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: white;
    padding: 0 1.052rem;
    box-sizing: border-box;

    h1 {
      font-size: var(--font-size-48px);
      margin-bottom: var(--font-size-24px);
    }

    h5 {
      font-size: var(--font-size-20px);
      font-weight: normal;
      opacity: 0.7;
      margin-bottom: 0.416rem;
    }

    &-content {
      width: 100%;
      display: flex;
      justify-content: space-between;

      margin-bottom: 0.26rem;

      &-item {
        display: flex;
        width: 1.875rem;
        flex-direction: column;
        // margin-right: 1.052rem;

        &-img {
          width: 1.302rem;
          height: 0.8073rem;
          background-position: center;
          background-size: 100%;
          background-repeat: no-repeat;

          transition: all 225ms;

          margin-bottom: 0.16667rem;

          &:hover {
            background-size: 125%;
          }
        }

        h2 {
          font-size: var(--font-size-24px);
          margin-bottom: 0.104rem;
        }

        p {
          font-size: var(--font-size-14px);
          line-height: 0.114rem;
          margin-bottom: 0.151rem;
        }
      }
    }

    &-button {
      margin-left: auto;
      width: 0.72917rem;
      height: 0.20833rem;
      border-width: 1px;
      background-color: rgba(0, 8, 22, 0.48);
      justify-content: center;
    }
  }
}
</style> 
