<template>
  <div class="nav-product">
    <div
      v-for="series in seriesList"
      :key="series.series"
      class="nav-product-series"
    >
      <nuxt-link class="nav-product-series-head" :to="series.path">
        <h1>{{ series.series }}</h1>
        <img :src="series.thumbnail" :alt="series.series" />
      </nuxt-link>
      <nuxt-link
        v-for="product in series.children"
        :key="product.name"
        class="nav-product-series-children"
        :to="product.path"
      >
        <img :src="series.thumbnail" :alt="series.series" />
        <span>{{ product.name }}</span>
      </nuxt-link>
    </div>

    <div class="nav-product-desc">
      <h1>生态+</h1>
      <p>
        以艾利特协作机器人为核心，生态产品为纽带，配套优秀企业产品，包括末端执行器、视觉及软件，为客户提供即插即用的一站式解决方案，打造协作机器人完整产业生态平台，推进协作机器人行业的发展。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 产品中心二级导航
      seriesList: [
        {
          series: 'EC 系列',
          thumbnail: 'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
          path: '/product/ec',
          children: [
            {
              name: 'EC63 六轴协作机器人',
              thumbnail:
                'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
              path: '/product/ec/ec66',
            },
            {
              name: 'EC66 六轴协作机器人',
              thumbnail:
                'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
              path: '/product/ec/ec66',
            },
            {
              name: 'EC612 六轴协作机器人',
              thumbnail:
                'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
              path: '/product/ec/ec66',
            },
            {
              name: 'EC616 六轴协作机器人',
              thumbnail:
                'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
              path: '/product/ec/ec66',
            },
          ],
        },
        {
          series: 'CS 系列',
          thumbnail: 'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
          path: '/product/cs',
          children: [
            {
              name: 'CS63 六轴协作机器人',
              thumbnail:
                'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
              path: '/product/cs',
            },
            {
              name: 'CS66 六轴协作机器人',
              thumbnail:
                'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
              path: '/product/cs',
            },
            {
              name: 'CS612 六轴协作机器人',
              thumbnail:
                'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
              path: '/product/cs',
            },
          ],
        },
        {
          series: '复合机器人',
          thumbnail: 'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
          path: '/product/cr',
          children: [
            {
              name: 'ECR66 六轴协作机器人',
              thumbnail:
                'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
              path: '/product/cr',
            },
            {
              name: 'ECR612 六轴协作机器人',
              thumbnail:
                'https://s3.bmp.ovh/imgs/2022/09/26/59d402f2da835d21.png',
              path: '/product/cr',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.nav-product {
  display: flex;
  justify-content: center;

  background-image: url(@/assets/images/header/logo_gray.svg);
  background-position: right 1rem bottom -0.172rem;
  background-repeat: no-repeat;

  &-series {
    width: 1.146rem;

    padding-right: var(--length-40px);

    border-right: 0.005rem solid #f3f5f8;

    margin-right: var(--length-40px);

    &-head {
      display: block;
      width: 100%;

      background-color: #f8f8f8;

      padding: var(--font-size-20px) 0;
      margin-bottom: var(--font-size-20px);

      &:hover {
        color: var(--color-blue);
      }

      h1 {
        font-size: var(--font-size-16px);
        margin-bottom: var(--font-size-24px);

        text-align: center;
      }

      img {
        height: 0.458rem;
        margin: 0 auto;
      }
    }

    &-children {
      width: 100%;

      display: flex;

      img {
        width: var(--font-size-32px);
        height: var(--font-size-32px);

        object-fit: contain;

        margin-right: 0.042rem;
      }

      span {
        font-size: var(--font-size-14px);
        line-height: var(--font-size-32px);
        &:hover {
          color: var(--color-blue);
        }
      }

      + .nav-product-series-children {
        margin-top: var(--font-size-20px);
      }
    }
  }

  &-desc {
    width: 1.615rem;

    padding-top: 0.677rem;
    h1 {
      font-size: var(--font-size-24px);
      margin-bottom: var(--font-size-16px);
    }

    p {
      font-size: var(--font-size-12px);
      color: rgba(0, 8, 22, 0.48);
    }
  }
}
</style>