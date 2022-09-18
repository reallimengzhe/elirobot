<template>
  <div class="login-page">
    <div class="login-mian">
      <login-cm
        v-show="isLogin"
        ref="Login"
        @forget="showForget"
      />
    <!--  <forget-password-cm
        v-show="!isLogin"
        @useAccount="showLogin"
      /> -->
    </div>
  </div>
</template>

<script>
import LoginCm from './components/Login.vue'
// import ForgetPasswordCm from './components/ForgetPassword.vue'
export default {
  name: 'Login',
  components: { LoginCm },
  data() {
    return {
      isLogin: true
    }
  },
  created: function() {

  },
  methods: {
    showForget() {
      this.isLogin = false
    },
    showLogin(phone) {
      if (phone) {
        this.$refs.Login.setPhone(phone)
      }
      this.isLogin = true
    }
  }
}

</script>

<style lang="scss" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  .login-cover {
    height: 100%;
    width: 48%;
  }
  .login-mian{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 1080px){
 .login-cover{
     display: none;
 }
}
@media screen and (min-width:1440px){

}

</style>
