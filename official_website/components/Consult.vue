<template>
  <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item prop="name">
      <span class="label">姓名<i class="star">*</i></span>
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item prop="mail">
      <span class="label">电子邮件<i class="star">*</i></span>
      <el-input v-model="ruleForm.mail"></el-input>
    </el-form-item>
    <el-form-item prop="phone">
      <span class="label">手机<i class="star">*</i></span>
      <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>
    <el-form-item prop="company">
      <span class="label">公司(全称)<i class="star">*</i></span>
      <el-input v-model="ruleForm.company"></el-input>
    </el-form-item>
    <el-form-item prop="type">
      <span class="label">行业<i class="star">*</i></span>
      <el-select v-model="ruleForm.type" placeholder="请选择">
        <el-option :label="item" :value="item" v-for="(item,index) in industry" :key="index"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="描述您的需求" prop="msg">
      <el-input type="textarea" v-model="ruleForm.msg"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="btn-sub" @click="submitForm('ruleForm')">提交</el-button>
      <!-- <el-button class="btn-sub" @click="resetForm('ruleForm')">重置</el-button> -->
    </el-form-item>
  </el-form>
</template>
<script>
import { addMessage,addAppointment } from '../service/api'
export default {
  props: ['isConsult','isAsk','title'],
  inject:['reload'],
  data(){
    var isMobileNumber= (rule, value, callback) => {
      if (!value) {
          return new Error("请输入电话号码")
      } else {
        // const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        const reg = /^[0-9]*$/
        const isPhone = reg.test(value)
        value = Number(value) // 转换为数字
        if (typeof value === "number" && !isNaN(value)) {// 判断是否为数字
          value = value.toString() // 转换成字符串
          if (value.length < 0 || !isPhone) { //判断是否为11位手机号
            callback(new Error("请输入正确的手机"))
          } else {
            callback()
          }
        } else {
          callback(new Error("请输入手机"))
        }
      }
    };
    return {
      ruleForm: {
        name: '',
        phone: '',
        mail: '',
        company: '',
        type: '',
        msg: '',
        isSub: true
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入电子邮件', trigger: 'blur' },
          { type: 'email', message: '请输入正确的电子邮件', trigger: ['blur', 'change'] }
        ],
        phone: [
          { required: true, message: '请输入手机', trigger: 'blur' },
          { validator: isMobileNumber, trigger: "blur" }
        ],
        company: [
          { required: true, message: '请输入公司(全称)', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      },
      industry: [
      '汽车','教育、研究和发展','教育、研究和发展','金属和加工','制造业','食品、饮料和烟草','制药、化学和医学','物流','塑料和聚合物','玻璃、陶瓷、石材和矿物产品','农业、林业和渔业','建筑','采矿业','纸制品','纺织品和皮革','家具和设备','其他'
      ],
      isSub: true
    }
  },
  methods: {
    // 咨询
    async askClick (form) {
      const {data} = await addMessage(form)
      this.isSub = true
      if (data.code === 201) {
        console.log(data.data)
        localStorage.setItem('elite-consult',form.phone)
        this.$emit('update:isConsult', false)
        this.$emit('update:isAsk', false)
        this.reload()
      }else{
        this.$message({
          showClose: true,
          message: data.massage,
          center: true,
          type: 'error'
        })
      }
    },
    // 预约课程
    async appointClick (form) {
      const {data} = await addAppointment(form,this.title)
      this.isSub = true
      if (data.code === 201) {
        console.log(data.data)
        localStorage.setItem('elite-consult',form.phone)
        this.$emit('update:isConsult', false)
        this.$emit('update:isAsk', false)
        this.isSub = true
      }else{
        this.$message({
          showClose: true,
          message: data.massage,
          center: true,
          type: 'error'
        })
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid && this.isSub) {
          this.isSub = false
          console.log(this.ruleForm)
          if(this.title){
            this.appointClick(this.ruleForm)
          }else{
            this.askClick(this.ruleForm)
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created () {
    console.log(this.title)
  }
}
</script>
<style type="text/scss" lang="scss" rel="stylesheet/scss" scoped>
.btn-sub{
  background: #5d9cd0;
  border-color: #5d9cd0;
  color: #ffffff;
  font-size: 12px;
  padding: 12px 24px;
  width:auto;
  height:auto;
  font-family: 'syht'!important;
}
</style>
<style>
  .el-form-item__label{
    line-height: 20px;
    margin-bottom: 4px;
    font-weight: 500;
  }
  .el-form--label-top .el-form-item__label{
    padding: 0;
    color: #33475b;
  }
  .el-input__inner,.el-textarea__inner{
    background-color: #f5f8fa;
    border: 1px solid #cbd6e2;
  }
  .el-select{
    display: block;
  }
  .el-form-item__content{
    position: relative;
    line-height: .2rem;
  }
  .el-form-item__content .label{
    display: inline-block;
    line-height: .2rem;
    margin-bottom: 4px;
    font-weight: 500;
    font-size: .14rem;
    color: #33475b;
  }
  .el-form-item__content .label .star{
    color: red;
    margin-left: .05rem;
  }
  .el-form-item{
    margin-bottom: .18rem
  }
</style>