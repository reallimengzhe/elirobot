<template>
  <div class="cs">
    <header class="cs-header column-center background_image-cover">
      <h1 class="animate__animated animate__fadeInDown">
        平台级协作机器人，CS系列闪亮登场
      </h1>
      <h2 class="animate__animated animate__fadeInDown animate__delay-500ms">
        艾利特助力用户实现柔性自动化
      </h2>
      <the-button
        class="animate__animated animate__fadeInDown animate__delay-1s"
        >体验样机</the-button
      >
    </header>
    <!-- 介绍 -->
    <div class="cs-intro column-center background_image-cover">
      <h1>
        <b>C</b>
        <span>obot </span>
        <b>S</b>
        <span>uperior = </span>
        <b> CS </b>
        <span>SERIES</span>
      </h1>
      <h2>“C” 意为: 协作机器人Cobot “S” 意为: Superior先进</h2>
      <h3>
        <b class="gradient_text">S</b>
        <span>UPERIOR 先进</span>
      </h3>
      <p>
        更高速的系统总线,更多的IO端口(控制箱24 DI, 24 DO, 2 AI, 2
        AO)、更强大的功率驱动能力
        (控制器24V持续供电能力3A，外接电源6A，工具端24V持续供电能力3A)，更强大的计算能力(独立主
        板计算资源)和更强的通讯能力(1个千兆网，2个百兆网,1个RS485)
      </p>
      <the-button>下载艾利特产品目录</the-button>
    </div>
    <!-- 特点 -->
    <div class="cs-trait background_image-cover">
      <div v-for="trait in traits" :key="trait.name" class="cs-trait-item">
        <img :src="trait.icon" />
        <h1>
          <b>{{ trait.eng }}</b>
          <span> {{ trait.name }} </span>
        </h1>
        <p>{{ trait.desc }}</p>
      </div>
    </div>
    <!-- 特性 -->
    <div class="cs-feats">
      <h4>COBOT SUPERIOR</h4>
      <img
        class="cs-feats-name"
        src="@/assets/images/cs/cs_series.png"
        alt="cs series"
      />
      <h4>放眼全球 蓄力未来</h4>
      <img
        class="cs-feats-img"
        src="https://s3.bmp.ovh/imgs/2022/10/05/3ead57974b588b2e.png"
        alt="cs series"
      />
      <div class="cs-feats-highlight">
        <div
          v-for="feat in feats"
          :key="feat.name"
          class="cs-feats-highlight-item column-center"
        >
          <h2>{{ feat.name }}</h2>
          <p>{{ feat.desc }}</p>
        </div>
      </div>
      <p class="cs-feats-independent">
        全新CS系列协作机器人由艾利特自主研发，除减速机外，
        <b class="gradient_text">
          包括本机机构、伺服驱动、控制器硬件与操作系统、传感、控制算法、编程及交互，二次开发，全都由艾利特研发团队自主开发。
        </b>
        在协作机器人擅长的安全性、易用性、扩展性、维护性、轻便性方面都有所创新，并申请了一系列专利
      </p>
    </div>
    <!-- 全新升级 -->
    <div class="cs-upgrade">
      <h1>全新升级</h1>
      <h3>CS系列软硬件全面升级</h3>
      <li v-for="text in upgradeFeats" :key="text">{{ text }}</li>
      <the-button>预约机器人演示</the-button>
    </div>
    <!-- 控制台 -->
    <div class="cs-console">
      <div class="cs-console-feat">
        <div
          class="cs-console-feat-item column-center"
          v-for="feat in consoleFeats"
          :key="feat.name"
        >
          <h2>{{ feat.name }}</h2>
          <p v-show="feat.desc">{{ feat.desc }}</p>
        </div>
      </div>
      <p class="cs-console-desc">
        通过打造简单易用、安全强大、灵活可拓展的协作机器人本体产品和操作系统，艾利特为用户、集成商、末端执行器和软硬件合作
        伙伴提供一个简单易用的平台化工具，从而简化协作机器人从技术端到应用端的落地，将用户对于自动化的所想，迅速变为工厂中
        可部署的方案。
        <b class="gradient_text">
          全新发售的CS系列包含了轻(CS63)、中(CS66)、高(CS612)
          三个负载，能够满足各类应用场景, 包括汽车零部件、
          3C电子、金属加工、家电、电力、新零售行业在内的协作机器人应用，
        </b>
        例如：物料搬运、视觉检测、组装拧紧、机床上下料、包装
        码垛、焊接、打磨等等。
      </p>
    </div>
    <div class="cs-video">
      <video
        src="https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/F31_HG306_shot-on_CLEAN__10s_V1_2400x1440.mp4"
      ></video>
    </div>
    <!-- 对比 -->
    <div class="cs-compare">
      <h1>
        现在开始<br />
        挑选适合您的协作机器人手臂吧！
      </h1>
      <p>通过比较看看哪一款ELITE机器人更适合您的场景</p>

      <agile :options="options2" class="cs-compare-products">
        <div
          v-for="product in products"
          :key="product.name"
          :class="['cs-compare-products-item']"
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
        class="cs-compare-specification"
        :style="{
          height: products.filter(item => item.checked).length
            ? '2.85rem'
            : '0',
        }"
      >
        <div class="cs-compare-specification-item" key="title">
          <h1></h1>
          <p>工作半径</p>
          <p>负重</p>
          <p>尺寸</p>
          <p>重量</p>
        </div>
        <div
          v-for="product in products.filter(item => item.checked)"
          :key="product.name"
          class="cs-compare-specification-item"
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
    <!-- 其他产品 -->
    <div class="cs-brother">
      <div
        v-for="bro in brothers"
        :key="bro.name"
        class="cs-brother-item"
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
      // 特点
      traits: [
        {
          eng: 'Safe',
          name: '安全',
          desc: '18项安全功能设计,速度、位置、功率、动量等,参照 ISO13849-1 Cat3 PLd,TS/ISO 15066设计;腕部机械无夹点设计;',
          icon: require('@/assets/images/cs/house.png'),
        },
        {
          eng: 'Sustainable',
          name: '可持续的',
          desc: '平台级硬件与软件设计,功能、性能持续扩展,软件免费 升级,保护投资;模块化关节复用,运维效率更高',
          icon: require('@/assets/images/cs/loop.png'),
        },
        {
          eng: 'Simple',
          name: '简便',
          desc: '高效的扁平化、工作流图形界面;模块化程序树编程方式; 末端状态灯环;灵活、易学的Python脚本编程;一体化主板设计、更易拆换的关节设计,维护效率更高;一键式软件升级',
          icon: require('@/assets/images/cs/rocket.png'),
        },
        {
          eng: 'Scalable',
          name: '可扩展',
          desc: '模块化软件框架,支持扩展开发和自定义指令与界面;开放的底层运动接口;提供更强的第三方插件算力(独立主板计算资源),多总线通讯(Profinet,EthernetIP, ModbusRTU/TCP),实时状态监视接口',
          icon: require('@/assets/images/cs/qr.png'),
        },
      ],
      //
      feats: [
        {
          name: '防护等级IP54',
          desc: '机器人和控制器',
        },
        {
          name: '更强大的功率驱动能力',
          desc: '控制器24V持续供带能力3A，外接电源6A',
        },
        {
          name: '末端多色状态灯',
          desc: '工具端24V持续供电能力3A',
        },
        {
          name: '支持RS485串口',
          desc: '',
        },
      ],
      //
      upgradeFeats: [
        'S系列采用多项原创专利技术进一步提升安全性，设计符合EN ISO 10218-1、EN ISO 13849 Cat3 PLd、TS/ISO 15066标准，所有机型 的腕部关节都进行了优化设计，进一步提高了人机协作安全性; ',
        '全新设计的流程图及树形示教和编程界面，提高示教和编程效率; 全新的基于Python的机器人脚本语言，学习成本更低、自由度更高; ',
        '一体化主板设计集成更多IO及通讯方式，一站式软件升级，',
        '更高速的系统总线; ',
        '机器人关节设计更合理，只需 20分钟就可对各关节进行迅速更换; ',
        '支持第三方使用JAVA语言实现扩展包以增强和增多功能， 创建自定义界面。',
      ],
      //
      consoleFeats: [
        { name: '模块化程序树编程方式 基于Python的脚本编程语言', desc: '' },
        { name: '一键式升级', desc: '' },
        { name: '更多的IO端口', desc: '(控制箱24 DI, 24 DO, 2 AI, 2 AO)' },
        {
          name: '高效的扁平化、工作流图形界面， 可拓展GUI，支持自定义图形指令和扩展包',
          desc: '',
        },
        {
          name: '更强大的计算能力(独立主板计算资源) 更强的通讯能力，共3个网口',
          desc: '（一个千兆口 两个百兆口）',
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
.cs {
  color: white;
  &-header {
    height: 5.625rem;

    background-image: url(https://s3.bmp.ovh/imgs/2022/10/04/b097cff2e2849c50.png);

    padding-left: 1.042rem;

    h1 {
      font-size: var(--font-size-48px);

      margin-bottom: var(--font-size-24px);
    }

    h2 {
      font-size: var(--font-size-20px);

      font-weight: normal;

      margin-bottom: var(--font-size-64px);
    }

    button {
      width: 203px;
    }
  }

  &-intro {
    height: 5.625rem;
    background-image: url(https://s3.bmp.ovh/imgs/2022/10/05/3b2f983346d1268f.png);

    padding-left: 1.042rem;
    align-items: flex-start;

    h1 {
      font-size: var(--font-size-48px);

      margin-bottom: var(--font-size-24px);
      display: flex;
      align-items: baseline;
      b {
        color: var(--color-blue);
      }

      span {
        margin-right: var(--font-size-12px);
        &:last-child {
          font-size: var(--font-size-24px);
          margin-left: var(--font-size-12px);
        }
      }
    }

    h2 {
      font-size: var(--font-size-16px);
      background-image: linear-gradient(90deg, #0083ff 0%, #00d1ff 100%);

      margin-bottom: var(--font-size-64px);
      padding: 0.042rem var(--font-size-16px);
    }

    h3 {
      font-size: var(--font-size-24px);
      display: flex;
      margin-bottom: var(--font-size-16px);
    }

    p {
      width: 4.0625rem;
      font-size: var(--font-size-24px);
      margin-bottom: var(--font-size-48px);
      font-family: 'hssl';
    }
  }

  &-trait {
    height: 5.573rem;
    background-image: url(https://s3.bmp.ovh/imgs/2022/10/05/74b14f0459261840.png);

    display: flex;
    justify-content: center;
    align-items: center;

    &-item {
      width: 1.822rem;
      height: 2.604rem;
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.24);
      box-sizing: border-box;
      padding-top: var(--font-size-32px);

      img {
        width: var(--length-100px);
        margin: 0 auto var(--font-size-32px);
      }
      h1 {
        text-align: center;
        font-size: var(--font-size-24px);
        margin-bottom: var(--font-size-12px);
        font-weight: normal;
        b {
          color: var(--color-blue);
        }
      }
      p {
        width: 1.25rem;
        font-size: var(--font-size-20px);
        color: rgba(255, 255, 255, 0.72);
        margin: 0 auto;
      }
      + .cs-trait-item {
        margin-left: var(--font-size-32px);
      }
    }
  }

  &-feats,
  &-upgrade,
  &-console {
    background-color: black;
    padding: var(--length-100px) 1.0625rem;
  }

  &-feats {
    h4 {
      font-size: var(--font-size-20px);
      margin-bottom: var(--font-size-16px);
    }
    &-name {
      width: 1.458rem;
      margin-bottom: var(--font-size-24px);
    }
    &-img {
      width: 5.76rem;
      margin: 0 auto var(--length-80px);
    }
    &-highlight {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--length-80px);
      &-item {
        border: 1px solid rgba(255, 255, 255, 0.24);
        padding: 0 0.458rem;
        height: 0.667rem;
        text-align: center;
        h2 {
          font-size: var(--font-size-20px);
        }
        p {
          margin-top: 0.052rem;
          font-size: var(--font-size-14px);
        }
      }
    }
    &-independent {
      font-size: var(--font-size-18px);
    }
  }

  &-upgrade {
    background-image: url(https://s3.bmp.ovh/imgs/2022/10/05/a6ca37565612a203.png);
    background-position: center right;
    background-repeat: no-repeat;
    h1 {
      font-size: var(--font-size-48px);
      margin-bottom: var(--font-size-24px);
    }
    h3 {
      font-size: var(--font-size-16px);
      background-image: linear-gradient(90deg, #0083ff 0%, #00d1ff 100%);
      padding: 0.042rem var(--font-size-16px);
      margin-bottom: var(--length-50px);
      display: table;
    }
    li {
      width: 5.609375rem;
      font-size: var(--font-size-16px);
      list-style: disc;
      + li {
        margin-top: var(--font-size-14px);
      }
    }
    button {
      margin-top: var(--length-50px);
    }
  }

  &-console {
    &-feat {
      height: 3.21875rem;
      position: relative;
      background-image: url(@/assets/images/cs/console.png);
      background-position: center bottom;
      background-repeat: no-repeat;
      margin-bottom: var(--length-80px);
      &-item {
        width: 2.5rem;
        height: 1.167rem;
        border: 1px solid rgba(255, 255, 255, 0.24);
        box-sizing: border-box;
        padding: 0 var(--length-80px);
        text-align: center;
        h2 {
          font-size: var(--font-size-20px);
          line-height: var(--font-size-32px);
        }
        p {
          font-size: var(--font-size-14px);
          margin-top: 0.052rem;
        }
        position: absolute;
        margin: auto;
        &:first-child {
          top: 0;
          left: 0;
        }
        &:nth-child(2) {
          top: 0;
          right: 0;
          left: 0;
        }
        &:nth-child(3) {
          top: 0;
          right: 0;
        }
        &:nth-child(4) {
          top: 1.729rem;
          left: 0;
        }
        &:nth-child(5) {
          top: 1.729rem;
          right: 0;
        }
      }
    }
    &-desc {
      font-size: var(--font-size-18px);
      text-align: justify;
    }
  }

  &-video {
    width: 100%;
    video {
      width: 100%;
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