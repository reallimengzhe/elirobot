<template>
  <el-dialog
    title="修改登录密码"
    :visible.sync="isShow"
    width="480px"
    :before-close="handleClose"
  >
    <div class="login-mian-content">
      <el-form
        ref="edit"
        :model="form"
        :rules="rules"
      >
        <el-form-item
          prop="phone"
          label="手机号"
        >
          <el-input
            v-model="form.phone"
            size="medium"
            auto-complete="off"
            :maxlength="11"
            placeholder="请输入手机号"
            class="login-phone"
          />
        </el-form-item>

        <el-form-item
          prop="message"
          label="验证码"
        >
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

        <el-form-item
          prop="password"
          label="密码"
        >
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
          class="forget-btn gs--font-size--medium"
          @click="handleClose"
        >
          取消
        </el-button>
        <el-button
          v-loading="loading"
          type="primary"
          class="forget-btn gs--font-size--medium"
          :disabled="!notEmpty"
          @click="submitForm"
        >
          确认
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { sendMessage, editPassword } from '@/api/login.js'
let hint = null
export default {
  name: 'EditPasswordCm',
  data() {
    return {
      isShow: false,
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
    show() {
      this.isShow = true
    },
    handleClose() {
      this.$refs.edit.resetFields()
      this.isShow = false
    },
    onGetMessage() {
      this.$refs.edit.validateField('phone', (errorMessage) => {
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
        scene: 30,
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
      this.$refs.edit.validate((valid) => {
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
      editPassword({
        appId: 104,
        scene: 30,
        userName: this.form.phone,
        newPassword: this.form.password,
        verifyCode: this.form.message
      }).then(res => {
        this.loading = false
        this.$glMessage({
          type: 'success',
          message: '修改成功'
        })
        this.isShow = false
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
  width: 432px;
  padding: 0 30px;
  .forget-desc{
    margin-bottom: 20px;
  }
  >>> .el-input--medium .el-input__inner{
    height: 40px;
    line-height: 40px;
  }
  .el-form-item--small.el-form-item{
    margin-bottom: 25px;
  }
  .forget-message{
    display: flex;
    width: 372px;
    .el-input{
      margin-right: 8px;
      flex: 1;
    }
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
  }
  .forget-btn{
    width: 176px;
    height: 40px;
  }
}

</style>
