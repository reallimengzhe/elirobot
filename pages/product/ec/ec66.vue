<template>
  <div class="ec66">
    <header class="ec66-header background_image-cover">
      <h1>艾利特机器人EC66简介</h1>
      <h2>简单易用 超乎想象</h2>
      <p>
        <span v-for="feat in features" :key="feat">
          <svg-icon icon="checked"></svg-icon>
          <span> {{ feat }} </span>
        </span>
      </p>
      <the-button>体验样机</the-button>
    </header>
    <img
      src="https://s3.bmp.ovh/imgs/2022/10/04/3490ccd22694a601.png"
      style="width: 100%"
    />
    <!-- 视频 -->
    <agile
      ref="video_slider"
      class="ec66-videos"
      :options="{
        centerMode: true,
        navButtons: false,
        slidesToShow: 3,
        dots: false,
      }"
      @after-change="onVideoChange"
    >
      <div
        class="ec66-videos-item"
        v-for="(video, index) in videos"
        :key="video"
        @click="$refs.video_slider.goTo(index)"
      >
        <video :src="video" ref="video"></video>
        <img src="@/assets/images/common/play.svg" @click="handlePlay" />
      </div>
    </agile>
    <!-- 参数 -->
    <div class="ec66-params">
      <div class="ec66-params-thumbnails">
        <div
          v-for="product in products"
          :key="product.thumbnail"
          :class="{ gradient_border: currentProduct.id === product.id }"
          @click="currentProduct = product"
        >
          <img :src="product.thumbnail" />
        </div>
      </div>
      <div class="ec66-params-img">
        <img :src="currentProduct.img" :alt="currentProduct.name" />
      </div>
      <div class="ec66-params-table">
        <h1>{{ currentProduct.name }}</h1>
        <h2>
          <span
            v-for="title in tableTitles"
            :key="title"
            :class="{ 'is-active': currentTitle === title }"
            @click="currentTitle = title"
            >{{ title }}</span
          >
        </h2>
        <h3><span>名称</span><span>参数</span></h3>
        <li>
          <span>自由度</span><span>{{ currentProduct.features.ziyoudu }}</span>
        </li>
        <li>
          <span>重复定位精度</span
          ><span>{{ currentProduct.features.jingdu }}</span>
        </li>
        <li>
          <span>重量</span><span>{{ currentProduct.features.zhongliang }}</span>
        </li>
        <li>
          <span>负载</span><span>{{ currentProduct.features.fuzai }}</span>
        </li>
        <li>
          <span>工作半径</span
          ><span>{{ currentProduct.features.banjing }}</span>
        </li>
        <li>
          <span>典型功耗</span
          ><span>{{ currentProduct.features.gonghao }}</span>
        </li>
        <li>
          <span>工具最大速度</span
          ><span>{{ currentProduct.features.sudu }}</span>
        </li>
      </div>
    </div>
    <div class="ec66-brothers">
      <h1>您还可以看看</h1>
      <div class="ec66-brothers-content">
        <div v-for="bro in brothers" :key="bro.name">
          <img :src="bro.img" :alt="bro.name" />
          <h2>{{ bro.name }}</h2>
          <the-button>{{ $t('common.find_out_more') }}</the-button>
        </div>
      </div>
    </div>
    <div class="ec66-solutions">
      <h1>定制机器人整体解决方案</h1>
      <p>
        艾利特机器人提供一个开放的生态平台，您可以根据需求选配合适的末端执行器、视觉产品和其他配件
      </p>
      <the-button>领取制定方案</the-button>
      <div class="ec66-solutions-videos">
        <div
          class="ec66-solutions-videos-item"
          v-for="video in videos"
          :key="video"
        >
          <video :src="video"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        '可进行轻型负载的自动化任务',
        '有效工作半径最高达624毫米',
        '艾利特协作机器人产品系列中占地面积最小的产品',
      ],
      //
      videos: [
        'https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/F31_HG306_shot-on_CLEAN__10s_V1_2400x1440.mp4',
        'https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/M3P%20shot%20on/F113_HG703_%E5%AE%98%E7%BD%91%E9%A6%96%E9%A1%B5_10s_V4_2400x1440.mp4',
        'https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/HG711-shot%20on/F114_HG711_%E5%AE%98%E7%BD%91%E9%A6%96%E9%A1%B5_10s_V4_2400x1440.mp4',
      ],
      //
      products: [
        {
          id: 1,
          name: '机械臂',
          img: 'https://s3.bmp.ovh/imgs/2022/09/26/f6c9c79b7bdee91e.png',
          thumbnail: 'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
          features: {
            ziyoudu: '6',
            jingdu: '+/-0.03mm',
            zhongliang: '13kg',
            fuzai: '3kg',
            banjing: '624mm',
            gonghao: '普重工况约150W',
            sudu: '2.0m/s',
          },
        },
        {
          id: 2,
          name: '机械臂',
          img: 'https://s3.bmp.ovh/imgs/2022/10/04/cfa5a152bdcea45a.png',
          thumbnail: 'https://s3.bmp.ovh/imgs/2022/10/04/cfa5a152bdcea45a.png',
          features: {
            ziyoudu: '6',
            jingdu: '+/-0.03mm',
            zhongliang: '13kg',
            fuzai: '3kg',
            banjing: '624mm',
            gonghao: '普重工况约150W',
            sudu: '2.0m/s',
          },
        },
        {
          id: 3,
          name: '机械臂',
          img: 'https://s3.bmp.ovh/imgs/2022/10/04/e66741415d652907.png',
          thumbnail: 'https://s3.bmp.ovh/imgs/2022/10/04/e66741415d652907.png',
          features: {
            ziyoudu: '6',
            jingdu: '+/-0.03mm',
            zhongliang: '13kg',
            fuzai: '3kg',
            banjing: '624mm',
            gonghao: '普重工况约150W',
            sudu: '2.0m/s',
          },
        },
      ],
      //
      currentProduct: null,
      //
      tableTitles: ['产品特性', '运动范围', '物理性能'],
      //
      currentTitle: '产品特性',
      //
      brothers: [
        {
          name: 'EC66',
          img: 'https://s3.bmp.ovh/imgs/2022/10/04/583cd04d20e596de.png',
        },
        {
          name: 'EC612',
          img: 'https://s3.bmp.ovh/imgs/2022/10/04/583cd04d20e596de.png',
        },
        {
          name: 'EC616',
          img: 'https://s3.bmp.ovh/imgs/2022/10/04/583cd04d20e596de.png',
        },
      ],
    }
  },
  created() {
    this.currentProduct = this.products[0]
  },
  methods: {
    handlePlay($event) {
      console.log($event.srcElement.previousElementSibling)
      const videoEle = $event.srcElement.previousElementSibling
      videoEle.play()
    },
    //
    onVideoChange() {
      console.log(this.$refs.video)
      this.$refs.video.forEach(video => {
        video.pause()
      })
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/common.scss';

.ec66 {
  &-header {
    height: 5.625rem;
    // height: 1080px;
    background-image: url(https://s3.bmp.ovh/imgs/2022/10/03/f69ff23519c1e406.png);
    padding-top: 2.473rem;
    box-sizing: border-box;
    color: white;
    text-align: center;
    h1 {
      font-size: 0.354rem;
      margin-bottom: 0.901rem;
    }
    h2 {
      font-size: var(--font-size-32px);
      margin-bottom: var(--length-40px);
    }
    p {
      margin-bottom: var(--length-40px);
      display: flex;
      justify-content: center;
      > span {
        font-size: var(--font-size-32px);
        display: flex;
        align-items: center;
        + span {
          margin-left: var(--font-size-32px);
        }
        .svg-icon {
          color: var(--color-blue);
          margin-right: var(--font-size-12px);
        }
        span {
          font-size: var(--font-size-20px);
        }
      }
    }

    button {
      margin: 0 auto;
    }
  }

  &-videos {
    width: 8.448rem;
    height: 2.917rem;
    overflow: hidden;
    margin: 0 auto 1.213rem;

    display: flex;
    align-items: center;

    .agile__list {
      overflow: unset;
    }

    &-item {
      // background-color: black;
      // aspect-ratio: 16 / 9;

      position: relative;
      display: flex;
      align-items: center;
      video {
        width: 100%;
      }

      img {
        display: none;

        width: var(--length-100px);
        height: var(--length-100px);

        position: absolute;
        right: var(--length-40px);
        bottom: var(--length-40px);
        cursor: pointer;
      }

      &.agile__slide--active {
        transform: scale(1.5) !important;
        z-index: 1;
        img {
          display: block;
        }
      }
    }
  }

  &-params {
    // width: 8.448rem;
    display: flex;
    // align-items: center;
    justify-content: center;
    margin: 0 auto 0.745rem;

    &-thumbnails {
      div {
        width: 1.536rem;
        height: 0.77rem;
        box-sizing: border-box;

        border: 1px solid rgba(0, 8, 22, 0.1);
        margin-bottom: 0.26rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: none;
        }
      }
    }
    &-img {
      width: 2.84375rem;
      height: 2.84375rem;
      margin-left: 0.26rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: none;
      }
    }
    &-table {
      margin-left: 0.26rem;
      position: relative;
      h1 {
        font-size: var(--font-size-48px);
        margin-bottom: var(--font-size-32px);
        position: absolute;
        top: -0.521rem;
      }
      h2 {
        display: flex;
        align-items: center;
        font-weight: normal;
        margin-bottom: var(--font-size-16px);
        span {
          color: rgba(0, 8, 22, 0.72);
          font-size: var(--font-size-20px);
          cursor: pointer;
          position: relative;
          &.is-active {
            color: var(--color-blue);
            font-size: var(--font-size-32px);
            border-bottom: 3px solid var(--color-blue);
          }
          + span {
            margin-left: var(--font-size-32px);
            &::before {
              content: '';
              display: block;
              width: 1px;
              height: var(--font-size-20px);
              background-color: #e1e1e1;
              position: absolute;
              left: -0.083rem;
              top: 0;
              bottom: 0;
              margin: auto;
            }
          }
        }
      }
      h3,
      li {
        display: flex;
        font-size: var(--font-size-20px);
        text-align: center;
        span:first-child {
          width: 1.1875rem;
        }
        span:last-child {
          width: 2.421875rem;
          border-left: 1px solid white;
        }
      }
      h3 {
        line-height: var(--font-size-48px);
        // align-items: center;
        text-align: center;
        background-image: linear-gradient(90deg, #0083ff 0%, #00d1ff 100%);
        color: white;
        margin-bottom: var(--length-40px);
      }
      li {
        line-height: 0.354rem;
        &:nth-child(2n) {
          span:last-child {
            background: rgba(243, 245, 248, 0.8);
          }
        }
      }
    }
  }

  &-brothers {
    background-color: #f3f5f8;
    padding: var(--length-120px) 0;
    h1 {
      width: 7.8125rem;
      font-size: var(--font-size-48px);
      margin: 0 auto 0.333rem;
    }
    &-content {
      width: 7.8125rem;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      div {
        width: 2.5rem;
        padding-top: 0.197rem;
        padding-bottom: var(--length-60px);
        background-color: white;
        > img {
          height: var(--length-160px);
          margin: 0 auto var(--length-40px);
        }
        h2 {
          font-size: var(--font-size-32px);
          text-align: center;
          margin-bottom: var(--font-size-24px);
        }
        button {
          margin: 0 auto;
        }
      }
    }
  }

  &-solutions {
    width: 7.8125rem;
    margin: 0 auto;
    padding: var(--length-120px) 0;
    position: relative;
    h1 {
      font-size: var(--font-size-48px);
      margin-bottom: var(--font-size-24px);
    }
    p {
      font-size: var(--font-size-24px);
      margin-bottom: var(--font-size-64px);
    }
    button {
      position: absolute;
      top: 0.796875rem;
      right: 0;
    }
    &-videos {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      &-item {
        width: 50%;
        padding: 6px;
        box-sizing: border-box;
        video {
          width: 100%;
        }
      }
    }
  }
}
</style>