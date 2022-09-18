<template>
  <div class="login-mian-content">
    <div class="mian-content--top">
      <img
        src="../../../assets/logo.png"
        alt=""
      >
      <h3 style="font-size: 28px;margin-bottom: 0;margin-top: 6px;text-align: center;">运营系统</h3>
    </div>

    <p class="login-title gs--theme-font-color gs--font-size--max">
      登录<span class="gs--font-size--mini">/USER LOGIN</span>
    </p>
    <el-form
      ref="login"
      :model="form"
      :rules="rules"
    >
      <el-form-item prop="name">
        <el-input
          v-model="form.name"
          v-focus
          size="medium"
          :maxlength="11"
          auto-complete="off"
          placeholder="请输入账户名称"
          class="login-phone"
        >
          <svg-icon
            slot="prefix"
            icon-class="icon-user"
            class="mr_12"
          />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          size="medium"
          auto-complete="off"
          :minlength="6"
          :maxlength="20"
          placeholder="请输入密码"
          class="login-password"
        >
          <svg-icon
            slot="prefix"
            icon-class="icon-lock"
            class="mr_12"
          />
        </el-input>
      </el-form-item>
    <!--  <p class="forget-password">
        <el-button
          type="text"
          @click="onGorget"
        >
          忘记密码
        </el-button>
      </p> -->
    </el-form>

    <el-button
      v-loading="loading"
      type="primary"
      class="login-btn gs--font-size--medium"
      :disabled="!notEmpty"
      @click="submitForm"
    >
      登录
    </el-button>
  </div>
</template>

<script>
import { loginApi } from '@/api/login.js'
export default {
  name: 'LoginCm',
  data() {
    return {
      form: {
        name: 'admin',
        password: '123456'
      },
      rules: {
        name: [
          { required: true, message: '请输入账户名称', trigger: 'blur' }
          // { pattern: /^1\d{10}$/, message: '手机号错误', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // { pattern: /^\S{6,20}$/, message: '密码位数少于6位！', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  computed: {
    notEmpty() {
      return !!this.form.name && !!this.form.password
    }
  },
  created() {
    this.watchEnter()
  },
  beforeDestroy() {
    document.onkeypress = null
  },
  methods: {
    watchEnter() {
      const that = this
      document.onkeypress = function(e) {
        var keycode = document.all ? event.keyCode : e.which
        if (Number(keycode) === 13) {
          that.submitForm()// 登录方法名
          return false
        }
      }
    },
    setPhone(name) {
      this.form.name = name
    },
    onGorget() {
      this.$refs.login.resetFields()
      this.$emit('forget')
    },
    submitForm(formName) {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    login() {
      this.loading = true
      loginApi({
        'appId': 101,
        // "deviceNo": "string",
        'password': this.form.password,
        // "rememberMe": false,
        'username': this.form.name
        // "verifyCode": "string"
      }).then(res => {
        this.loading = false
        this.$store.dispatch('user/login', res.data)
        const FROM_URL = window.location.search.split('fromUrl=')[1] ? window.location.search.split('fromUrl=')[1] : ''
        const URL = FROM_URL ? decodeURIComponent(FROM_URL) : '/'
        this.$router.replace(URL)
      }).catch(() => {
        this.loading = false
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.login-mian-content{
  box-shadow: 0 0 10px 2px #ccc;
  flex-wrap: wrap;
  justify-content: center;
  width: 476px;
  padding: 20px 50px 50px;
  .mian-content--top{
    width: 144px;
    margin: 0 auto 54px;
    img{
      display: block;
      margin: 0 auto;
      width: 100px;
      height: 100px;
    }
    .login-slogan{
      font-size: 16px;
      color: #999999;
      line-height: 33px;
      text-align: center;
    }
  }
  .login-title{
    margin-bottom: 19px;
  }
  >>> .el-input--medium .el-input__inner{
    height: 40px;
    line-height: 40px;
  }
  .el-form-item--small.el-form-item{
    margin-bottom: 32px;
  }
  .forget-password{
    padding: 0;
    text-align: right;
    margin-bottom: 15px;
    margin-top: -11px;
  }
  .login-btn{
    width: 100%;
    height: 40px;
  }
  .mr_12{
    margin-top: 12px;
  }
}
/deep/ .el-form-item__content{
  width: 100%;
}
</style>
