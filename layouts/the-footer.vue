<template>
  <div class="the-footer">
    <div class="the-footer-top">
      <div class="the-footer-left">
        <h5>服务热线</h5>
        <h2>
          <span>400-189-9358</span>
          <span>0512-83951898</span>
        </h2>
        <p>周一至周五 09:00-18:00</p>
        <h5 class="the-footer-icons">
          <span>关注我们</span>
          <popper :options="popperOptions">
            <img src="@/assets/images/footer/qr_wechat.png" alt="wechat" />
            <svg-icon slot="reference" icon="wechat"></svg-icon>
          </popper>
          <popper :options="popperOptions">
            <img
              src="@/assets/images/footer/qr_xiaochengxu.png"
              alt="xiaochengxu"
            />
            <svg-icon slot="reference" icon="xiaochengxu"></svg-icon>
          </popper>
          <popper :options="popperOptions">
            <img
              src="@/assets/images/footer/qr_shipinhao.png"
              alt="shipinhao"
            />
            <svg-icon slot="reference" icon="shipinhao"></svg-icon>
          </popper>
          <popper :options="popperOptions">
            <img src="@/assets/images/footer/qr_douyin.png" alt="douyin" />
            <svg-icon slot="reference" icon="tiktok"></svg-icon>
          </popper>
        </h5>
      </div>
      <div class="the-footer-links" style="margin-left: auto">
        <h3>产品系列</h3>
        <p>EC系列机器人</p>
        <p>CS系列机器人</p>
        <p>复合机器人</p>
      </div>
      <div class="the-footer-links">
        <h3>关于艾利特</h3>
        <p>EC系列机器人</p>
        <p>CS系列机器人</p>
        <p>复合机器人</p>
      </div>
      <div class="the-footer-links">
        <h3>服务资源</h3>
        <p>EC系列机器人</p>
        <p>CS系列机器人</p>
        <p>复合机器人</p>
      </div>
    </div>
    <p class="the-footer-copyright">
      苏州艾利特机器人有限公司. All rights reserved.
    </p>
    <p class="the-footer-copyright">Copyright © 2022 苏ICP备19018707号-1</p>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      popperOptions: {
        modifiers: { offset: { offset: '0, 10px' } },
      },
    }
  },
}
</script>

<style lang="scss">
.the-footer {
  height: 2.083rem;

  padding: 0.483rem 0.625rem 0;

  background-color: #00030a;
  background-image: url('@/assets/images/footer/logo.svg');
  background-position: center bottom;
  background-size: 1.755rem;
  background-repeat: no-repeat;

  color: white;
  &-top {
    display: flex;

    padding-bottom: 0.104rem;

    border-bottom: 0.005rem solid rgba($color: #fff, $alpha: 0.2);

    margin-bottom: 0.104rem;
  }
  &-left {
    h5 {
      font-size: var(--font-size-14px);
      margin-bottom: 0.104rem;
    }
    h2 {
      font-size: var(--font-size-24px);
      margin-bottom: 0.042rem;
      span:not(:first-child) {
        margin-left: 0.208rem;
      }
    }
    p {
      font-size: var(--font-size-12px);
      margin-bottom: 0.167rem;
      opacity: 0.5;
    }
  }
  &-icons {
    display: flex;
    align-items: center;
    span + span {
      margin-left: 0.104rem;
    }
  }

  &-links {
    margin-left: 0.417rem;
    h3 {
      font-size: var(--font-size-16px);
      margin-bottom: 0.104rem;
    }
    p {
      font-size: var(--font-size-14px);
      opacity: 0.5;
      line-height: var(--font-size-32px);
    }
  }
  &-copyright {
    font-size: var(--font-size-12px);
    line-height: var(--font-size-24px);
    opacity: 0.5;
  }
}
</style>