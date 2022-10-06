<template>
  <div class="dealer background_image-cover">
    <h1>查找经销商</h1>
    <h2>
      输入经销商公司名（全名或关键词），验证其是否是艾利特机器人的授权经销商。
    </h2>
    <h3>如您需要帮助或希望代理 ELITE 产品</h3>
    <h4>
      <span> 请咨询：4001899358/0512-83951898 </span>
      <span> 邮件：market@elibot.cn </span>
    </h4>
    <div class="dealer-search">
      <popper :options="popperOptions">
        <ul class="dealer-search-related">
          <li v-for="item in related" :key="item">{{ item }}</li>
        </ul>
        <div slot="reference" class="dealer-search-input">
          <svg-icon icon="search"></svg-icon>
          <input type="text" />
          <button @click="showResult">{{ $t('common.search') }}</button>
        </div>
      </popper>
    </div>
  </div>
</template>

<script>
// import Popper from 'vue-popperjs'

export default {
  // components: {
  //   popper: Popper,
  // },
  data() {
    return {
      popperOptions: {
        modifiers: { offset: { offset: '0, 10px' } },
      },
      //
      related: ['日出江花红胜火', '春来江水绿如蓝'],
    }
  },
  methods: {
    showResult() {},
  },
}
</script>

<style lang="scss">
.dealer {
  background-image: url(https://s3.bmp.ovh/imgs/2022/10/06/b44bfa9465a191ee.png);
  height: 100vh;
  padding-top: 0.864rem;
  box-sizing: border-box;
  h1,
  h2,
  h3,
  h4 {
    color: white;
    text-align: center;
    font-weight: normal;
  }
  h1 {
    font-size: var(--font-size-48px);
    margin-bottom: var(--font-size-32px);
  }
  h2 {
    font-size: var(--font-size-16px);
    margin-bottom: var(--font-size-32px);
  }
  h3,
  h4 {
    font-size: var(--font-size-14px);
  }
  h3 {
    margin-bottom: var(--font-size-20px);
  }
  h4 {
    margin-bottom: var(--length-40px);
    span + span {
      margin-left: var(--length-60px);
    }
  }

  &-search {
    width: 2.71875rem;
    margin: 0 auto;
    position: relative;

    &-input,
    &-related {
      background-color: white;
    }

    &-input {
      // height: var(--font-size-36px);
      // box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
      border-radius: 0.5rem;
      border: 0.036rem solid white;
      font-size: var(--font-size-32px);
      display: flex;
      align-items: center;

      .svg-icon {
        color: #e1e1e1;
        margin: 0 var(--font-size-20px);
      }
      input {
        flex: 1;
        border: none;
        outline: none;
        font-size: var(--font-size-14px);
      }
      button {
        font-size: var(--font-size-14px);
        padding: var(--font-size-12px) var(--font-size-32px);
        border-radius: 0.13rem;
        background-color: var(--color-blue);
        color: white;
      }
    }

    &-related {
      position: absolute;
      top: var(--length-60px);
      width: 100%;
      box-sizing: border-box;
      border-radius: var(--font-size-12px);
      padding: var(--font-size-12px) var(--font-size-64px);
      li {
        font-size: var(--font-size-14px);
        line-height: var(--font-size-36px);
      }
    }
  }
}
</style>