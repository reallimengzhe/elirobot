<template>
  <div class="login-mian-content">
    <div class="mian-content--top">
      <img
        src="../../../assets/logo.png"
        alt=""
      >
      <h3 style="font-size: 28px;margin-bottom: 0;margin-top: 6px;text-align: center;">九居所</h3>
      <p class="login-slogan">
        智能营销平台
      </p>
    </div>

    <p class="gs--theme-font-color gs--font-size--max">
      找回密码
    </p>
    <p class="forget-desc gs--font-size--mini gs--font-color--main">
      验证码将会发送至您的注册手机
    </p>
    <el-form
      ref="forget"
      :model="form"
      :rules="rules"
    >
      <el-form-item prop="phone">
        <el-input
          v-model="form.phone"
          size="medium"
          auto-complete="off"
          :maxlength="11"
          placeholder="请输入手机号"
          class="login-phone"
        />
      </el-form-item>
      <el-form-item prop="message">
        <div class="forget-message">
          <el-input
            v-model="form.message"
            size="medium"
            auto-complete="off"
            :maxlength="4"
            placeholder="请输入短信验证码"
            class="login-password"
          />
          <el-button
            v-if="second < 0"
            type="primary"
            :disabled="!form.phone"
            @click="onGetMessage"
          >
            获取验证码
          </el-button>
          <p v-else>
            {{ second }}秒后重新获取
          </p>
        </div>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          size="medium"
          auto-complete="off"
          :minlength="6"
          :maxlength="20"
          placeholder="设置密码(6-20个字符)"
          class="set-password"
        />
      </el-form-item>
    </el-form>

    <div class="forget-btn--box">
      <el-button
        v-loading="loading"
        type="primary"
        class="forget-btn gs--font-size--medium"
        :disabled="!notEmpty"
        @click="submitForm"
      >
        确认修改
      </el-button>
      <el-button
        type="text"
        @click="onAccount"
      >
        使用已有帐户登录
      </el-button>
    </div>
  </div>
</template>

<script>
import { sendMessage, editPasswordApi } from '@/api/login.js'
let hint = null
export default {
  name: 'ForgetPasswordCm',
  data() {
    return {
      form: {
        phone: '',
        message: '',
        password: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '手机号错误', trigger: 'blur' }
        ],
        message: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' },
          { pattern: /^\d{4}$/, message: '短信验证码错误！', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入新密码！', trigger: 'blur' },
          { pattern: /^\S{6,20}$/, message: '请输入6～20个字符的密码！', trigger: 'blur' }
        ]
      },
      second: -1,
      loading: false
    }
  },
  computed: {
    notEmpty() {
      return !!this.form.phone && !!this.form.message && !!this.form.password
    }
  },
  created: function() {

  },
  methods: {
    onAccount() {
      this.$refs.forget.resetFields()
      this.$emit('useAccount')
    },
    onGetMessage() {
      this.$refs.forget.validateField('phone', (errorMessage) => {
        if (!errorMessage) {
          this.sendMessage()
        } else {
          return false
        }
      })
    },
    sendMessage() {
      sendMessage({
        appId: 104,
        scene: 31,
        type: 1,
        userName: this.form.phone
      }).then(res => {
        this.countDown()
      })
    },
    countDown() {
      this.second = 60
      hint = setInterval(() => {
        this.second--
        if (this.second < 0) {
          clearInterval(hint)
        }
      }, 1000)
    },
    submitForm(formName) {
      this.$refs.forget.validate((valid) => {
        if (valid) {
          this.edit()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    edit() {
      this.loading = true
      editPasswordApi({
        appId: 104,
        scene: 31,
        userName: this.form.phone,
        newPassword: this.form.password,
        verifyCode: this.form.message
      }).then(res => {
        this.loading = false
        this.$glMessage({
          type: 'success',
          message: '修改成功'
        })
        this.$emit('useAccount', this.form.phone)
      }).catch(() => {
        this.loading = false
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.login-mian-content{
  // display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 476px;
  padding: 0 54px;
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
  .forget-desc{
    margin-bottom: 20px;
  }
  >>> .el-input--medium .el-input__inner{
    height: 40px;
    line-height: 40px;
  }
  .el-form-item--small.el-form-item{
    margin-bottom: 32px;
  }
  .forget-message{
    display: flex;
    // margin-bottom: 14px;
    .el-input{margin-right: 8px;flex: 1;}
    button.el-button--small{
      width: 102px;
    }
  }
  .forget-password{
    padding: 0;
    text-align: right;
    margin-bottom: 15px;
  }
  .forget-btn--box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;
  }
  .forget-btn{
    width: 176px;
    height: 40px;
  }
}

</style>
