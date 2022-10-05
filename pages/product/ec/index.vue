<template>
  <div class="ec">
    <header class="ec-header column-center background_image-cover">
      <h1 class="animate__animated animate__fadeInDown">重塑协作新方式</h1>
      <h2 class="animate__animated animate__fadeInDown animate__delay-500ms">
        渐次自动化助力工厂改革，提高生产效能 300%
      </h2>
    </header>

    <div class="ec-masterpiece">
      <div class="ec-masterpiece-text">
        <h1>艾利特EC经典系列</h1>
        <p>
          人机协作机器人的诞生并非是“机器换人”，相反，ELITE艾利特人机协作从研发到生产、应用始终都关注着人的需求，充分体现对人的尊重。不是所有的机器人都能被称为人机协作机器人，ELITE以其灵活部署、安全可靠、简单易用使得用户的体验比起传统机器人大大
          人机协作机器人最大的优势就是无需安全围栏，可以与人并肩工作，就好比是人类的机器人同事。
        </p>
        <a>
          <span>展开</span>
          <svg-icon icon="arrow_down"></svg-icon>
        </a>

        <button class="button_primary">
          <span class="gradient_text">下载艾利特产品目录</span>
          <img src="@/assets/images/common/triangle.svg" />
        </button>
      </div>

      <agile
        class="ec-masterpiece-slide"
        :options="{
          dots: false,
          autoplay: false,
          navButtons: true,
          pauseOnHover: false,
        }"
      >
        <div
          v-for="product in masterpieces"
          :key="product.name"
          class="ec-masterpiece-slide-item"
        >
          <img :src="product.img" :alt="product.name" />
          <span>{{ product.name }}</span>
        </div>

        <template slot="prevButton">
          <svg-icon icon="arrow_left"></svg-icon>
        </template>
        <template slot="nextButton">
          <svg-icon icon="arrow_right"></svg-icon>
        </template>
      </agile>
    </div>

    <div class="ec-trait">
      <div v-for="trait in traits" :key="trait.name" class="ec-trait-item">
        <svg-icon :icon="trait.icon" />
        <h1>{{ trait.name }}</h1>
        <p>{{ trait.desc }}</p>
      </div>
    </div>

    <div class="ec-compare">
      <h1>
        现在开始<br />
        挑选适合您的协作机器人手臂吧！
      </h1>
      <p>通过比较看看哪一款ELITE机器人更适合您的场景</p>

      <agile :options="options2" class="ec-compare-products">
        <div
          v-for="product in products"
          :key="product.name"
          :class="['ec-compare-products-item']"
        >
          <div
            @click="product.checked = !product.checked"
            :class="[{ 'is-active': product.checked }]"
          >
            <svg-icon icon="close" v-show="product.checked"></svg-icon>
            <h1>{{ product.name }}</h1>
            <img :src="product.img" :alt="product.name" />
          </div>
        </div>
        <template slot="prevButton">
          <svg-icon icon="arrow_left"></svg-icon>
        </template>
        <template slot="nextButton">
          <svg-icon icon="arrow_right"></svg-icon>
        </template>
      </agile>
      <transition-group
        tag="div"
        name="list"
        class="ec-compare-specification"
        :style="{
          height: products.filter(item => item.checked).length
            ? '2.85rem'
            : '0',
        }"
      >
        <div class="ec-compare-specification-item" key="title">
          <h1></h1>
          <p>工作半径</p>
          <p>负重</p>
          <p>尺寸</p>
          <p>重量</p>
        </div>
        <div
          v-for="product in products.filter(item => item.checked)"
          :key="product.name"
          class="ec-compare-specification-item"
        >
          <h1>{{ product.name }}</h1>
          <p>{{ product.radius }}</p>
          <p>{{ product.load }}</p>
          <p>{{ product.size }}</p>
          <p>{{ product.weight }}</p>
          <button class="button_primary">
            <span class="gradient_text">
              {{ $t('common.get_more') }}
            </span>

            <img src="@/assets/images/common/triangle.svg" />
          </button>
        </div>
      </transition-group>

      <h1>准备好开始自动化了吗？</h1>
      <p>了解我们的协作机器人系列，以及协作机器人如何帮助您的业务</p>

      <the-button style="margin: var(--length-40px) auto 0">
        预约专家方案设计
      </the-button>
    </div>

    <div class="ec-brother">
      <div
        v-for="bro in brothers"
        :key="bro.name"
        class="ec-brother-item"
        :style="{ backgroundImage: 'url(' + bro.img + ')' }"
      >
        <h1>{{ bro.name }}</h1>
        <p>{{ bro.desc }}</p>
        <the-button>预约机器人演示</the-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
      masterpieces: [
        {
          name: 'EC66',
          img: 'https://s3.bmp.ovh/imgs/2022/09/26/f6c9c79b7bdee91e.png',
        },
        {
          name: 'EC612',
          img: 'https://s3.bmp.ovh/imgs/2022/09/28/4ec91340e62a5391.png',
        },
      ],
      // 特点
      traits: [
        {
          name: '模块化设计',
          desc: '一体化关节模块设计、易拆装、易维护',
          icon: 'moudle',
        },
        {
          name: '快速安装部署',
          desc: '轻量化设计造型，占地面积小，适应复杂多变的产线环境',
          icon: 'download',
        },
        {
          name: '低成本高回报',
          desc: '“渐次自动化”理念，无需改造生产环境，轻松实现高回报率',
          icon: 'coin',
        },
        {
          name: '快速编程入门',
          desc: '无需编程经验，零基础也能快速入门，轻松掌握操作技巧',
          icon: 'code',
        },
        {
          name: '安全灵活',
          desc: '“在您身边的机器人”，无需围栏隔离，与人共同协作',
          icon: 'shield',
        },
      ],
      //
      products: [
        {
          checked: false,
          name: 'EC66',
          img: 'https://s3.bmp.ovh/imgs/2022/09/26/f6c9c79b7bdee91e.png',
          radius: '1750 mm / 68.9 ins',
          load: '3 kg / 6.6 lbs',
          size: '128 mm',
          weight: '3 kg / 6.6 lbs',
        },
        {
          checked: false,
          name: 'EC612',
          img: 'https://s3.bmp.ovh/imgs/2022/09/28/4ec91340e62a5391.png',
          radius: '1750 mm / 68.9 ins',
          load: '3 kg / 6.6 lbs',
          size: '128 mm',
          weight: '3 kg / 6.6 lbs',
        },
        {
          checked: false,
          name: 'EC613',
          img: 'https://s3.bmp.ovh/imgs/2022/09/28/4ec91340e62a5391.png',
          radius: '1750 mm / 68.9 ins',
          load: '3 kg / 6.6 lbs',
          size: '128 mm',
          weight: '3 kg / 6.6 lbs',
        },
        {
          checked: false,
          name: 'EC614',
          img: 'https://s3.bmp.ovh/imgs/2022/09/28/4ec91340e62a5391.png',
          radius: '1750 mm / 68.9 ins',
          load: '3 kg / 6.6 lbs',
          size: '128 mm',
          weight: '3 kg / 6.6 lbs',
        },
        {
          checked: false,
          name: 'EC615',
          img: 'https://s3.bmp.ovh/imgs/2022/09/28/4ec91340e62a5391.png',
          radius: '1750 mm / 68.9 ins',
          load: '3 kg / 6.6 lbs',
          size: '128 mm',
          weight: '3 kg / 6.6 lbs',
        },
      ],

      options2: {
        autoplay: false,
        centerMode: true,
        dots: false,
        navButtons: true,
        slidesToShow: 4,
      },

      brothers: [
        {
          name: '全新CS系列协作机器人',
          desc: '国际领先水平，中国自主研发的协作机器人现已登陆',
          img: 'https://s3.bmp.ovh/imgs/2022/10/02/065c64b4a46b39a8.png',
        },
        {
          name: '复合机器人',
          desc: '1周完成整站集成 9个月收回成本',
          img: 'https://s3.bmp.ovh/imgs/2022/10/02/e0fb732731e1abaa.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.ec {
  color: white;
  &-header {
    height: 5.625rem;

    background-image: url(https://s3.bmp.ovh/imgs/2022/09/27/365c7e92580f48b7.png);

    padding-left: 1.042rem;

    h1 {
      font-size: var(--font-size-48px);

      margin-bottom: var(--font-size-24px);
    }

    h2 {
      font-size: var(--font-size-20px);

      font-weight: normal;
    }
  }

  &-masterpiece {
    height: 5.625rem;
    background-color: #00030a;

    background-image: url(@/assets/images/ec/stage.png);
    background-repeat: no-repeat;
    background-position: top 0 right 0.417rem;

    background-size: 4.15625rem 5.135rem;

    padding-left: 1.042rem;

    position: relative;

    &-text {
      padding-top: 1.927rem;

      h1 {
        font-size: var(--font-size-48px);
        margin-bottom: var(--font-size-48px);
      }

      p {
        font-size: var(--font-size-20px);
        text-align: justify;
        text-justify: inter-ideograph; /*兼容IE*/

        width: 3.891rem;

        font-family: 'hssl';

        margin-bottom: var(--font-size-20px);
      }

      a {
        font-size: var(--font-size-16px);
        display: flex;
        align-items: center;
        margin-bottom: var(--font-size-48px);

        span {
          margin-right: 0.042rem;
        }

        img {
          width: 0.042rem;
        }
      }

      button {
        padding: 0.068rem 0.141rem;
      }
    }

    &-slide {
      position: absolute;
      top: 0;
      right: 0.417rem;

      width: 4.15625rem;
      // height: 100%;
      height: 5.625rem;

      &-item {
        padding-top: 1.239rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          // width: 100%;
          height: 2.916rem;
          margin-bottom: 0.744rem;
        }
        span {
          padding: var(--font-size-18px) var(--font-size-24px);

          font-size: var(--font-size-20px);
          background-color: rgba(255, 255, 255, 0.08);
        }
      }
      .agile__actions {
        .agile__nav-button {
          width: 0.417rem;
          height: 0.291rem;
          background: rgba(255, 255, 255, 0.08);
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;

          display: flex;
          justify-content: center;
          align-items: center;
          &--prev {
            left: 0;
          }
          &--next {
            right: 0;
          }
          img {
            height: var(--font-size-20px);
          }
        }
      }
    }
  }

  &-trait {
    height: 2.031rem;
    background-image: url(@/assets/images/ec/trait_bg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    &-item {
      text-align: center;
      font-size: var(--length-100px);
      .svg-icon {
        margin-bottom: var(--font-size-32px);
      }
      h1 {
        font-size: var(--font-size-24px);
        margin-bottom: var(--font-size-12px);
        font-weight: normal;
      }
      p {
        width: var(--length-300px);
        font-size: var(--font-size-14px);
        color: rgba(255, 255, 255, 0.72);
      }
      + .ec-trait-item {
        margin-left: var(--font-size-32px);
      }
    }
  }

  &-compare {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    background-color: #00030a;

    > h1 {
      font-size: var(--font-size-48px);
      line-height: 0.354rem;
      text-align: center;
      margin-bottom: var(--font-size-24px);
    }

    > p {
      font-size: var(--font-size-20px);
      text-align: center;
    }

    &-products {
      width: 6.979rem;
      margin: 0.833rem auto 0.417rem;
      &-item {
        padding: 0 0.052rem;
        box-sizing: border-box;
        > div {
          box-sizing: border-box;
          padding-top: 0.291rem;
          padding-bottom: 0.271rem;

          font-size: var(--font-size-16px);
          cursor: pointer;
          position: relative;
          border: 1px solid transparent;
          &.is-active {
            border-color: rgba(255, 255, 255, 0.24);
            background-color: rgba(255, 255, 255, 0.12);
          }

          .svg-icon {
            position: absolute;
            top: var(--font-size-20px);
            right: var(--font-size-20px);
            &:hover {
              color: var(--color-blue);
            }
          }

          h1 {
            font-size: var(--font-size-20px);
            margin-bottom: var(--font-size-24px);
            text-align: center;
          }

          img {
            width: 0.833rem;
            height: 0.833rem;
            object-fit: contain;
            margin: 0 auto;
          }
        }
      }

      .agile__nav-button {
        width: 0.417rem;
        height: 0.291rem;
        background: rgba(255, 255, 255, 0.08);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;

        display: flex;
        justify-content: center;
        align-items: center;

        &--prev {
          left: -0.46875rem;
        }
        &--next {
          right: -0.46875rem;
        }
        img {
          height: var(--font-size-20px);
        }
      }
    }

    &-specification {
      display: flex;
      justify-content: center;
      margin-bottom: 0.625rem;

      transition: height 225ms;
      overflow: hidden;

      &-item {
        width: 1.427rem;

        &:first-child {
          p {
            color: rgba(255, 255, 255, 0.48);
          }
        }
        h1 {
          height: 0.667rem;
          font-size: var(--font-size-48px);
          line-height: 0.667rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.24);
        }
        p {
          font-size: var(--font-size-20px);
          line-height: 0.4375rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.24);
        }

        button {
          width: 1.041rem;
          margin: var(--font-size-32px) auto 0;
        }
      }
    }
  }

  &-brother {
    display: flex;
    &-item {
      flex: 1;
      padding: 0.979rem 0;
      background-repeat: no-repeat;
      background-size: 105%;
      background-position: center;
      h1 {
        font-size: var(--font-size-48px);
        margin-bottom: var(--font-size-20px);
      }
      p {
        font-size: var(--font-size-20px);
        margin-bottom: var(--font-size-32px);
      }
      h1,
      p {
        text-align: center;
      }
      button {
        margin: 0 auto;
      }
    }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>