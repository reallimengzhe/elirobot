<template>
  <el-dialog title="新增" :visible.sync="show" width="400px">
    <el-form ref="form" :model="form" label-width="40px">
      <el-form-item label="名称">
        <el-input v-model="form.dataText" placeholder="请输入"></el-input>
      </el-form-item>
     <!-- <el-form-item label="值">
        <el-input v-model="form.dataValue" placeholder="请输入"></el-input>
      </el-form-item> -->
     <!-- <el-form-item label="描述">
        <el-input v-model="form.dataDesc" placeholder="请输入"></el-input>
      </el-form-item> -->
     <!-- <el-form-item label="权重">
        <el-input v-model="form.ordered" placeholder="请输入"></el-input>
      </el-form-item> -->

    </el-form>
    <el-divider />
    <div class="global-row--end">
      <el-button @click="show = false">取消</el-button>
      <el-button type="primary" @click="onSave">添加</el-button>
    </div>
  </el-dialog>

</template>

<script>
import { addDictionApi } from '@/api/common.js'


export default {
  name: 'AddDictionary',
  data() {
    return {
      show: false,
      dataCode: '',
      dataDesc: '',
      form: {
        dataText: '',
        dataValue: 0,
        ordered: 1
      }

    }
  },
  methods: {
    open(dataCode, dataDesc, data = {}) {
      if(!dataCode) throw Error('缺少dataCode')
      this.dataCode = dataCode || ''
      this.dataDesc = dataDesc || ''
      this.form.dataText = data.dataText || ''
      this.form.dataValue = data.dataValue || undefined
      this.form.ordered = data.ordered || 1
      this.show = true
    },
    onSave() {
      addDictionApi({
        "dataCode": this.dataCode,
        "dataDesc": this.dataDesc,
        "dataText": this.form.dataText,
        "dataValue": this.form.dataValue,
        "ordered": this.form.ordered
      }).then(res => {
        this.$message({
          type: 'success',
          message: '操作成功!'
        })
        this.$emit('update')
        this.show = false
      })
    }
  }

}
</script>

<style lang="scss" scoped>
/deep/ .el-form-item__content{
  margin-left: 20px!important;
  width: 300px;
}
</style>
