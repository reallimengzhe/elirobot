<template>
  <div class="home-page">
    <img
      src="../../assets/Home/home-bg.png"
      alt=""
    >
    <p class="font-color--main welcome-message">
      欢迎您！登录成功！
    </p>
  </div>
</template>
<style lang="scss" scoped>
.home-page{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
  img{
    width: 100%;
    height: 100%;
  }
  .welcome-message{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
  }
}
</style>