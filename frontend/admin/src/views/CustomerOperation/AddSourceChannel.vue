<template>
  <el-dialog title="新增" :visible.sync="show" width="400px">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="来源渠道">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="渠道分类">
        <el-select v-model="form.channelType" placeholder="请选择">
            <el-option
              v-for="item in channelTypeList"
              :key="item.dataValue"
              :label="item.dataText"
              :value="item.dataValue">
            </el-option>
          </el-select>
      </el-form-item>
     <el-form-item label="渠道代码">
        <el-input v-model="form.code" placeholder="请输入"></el-input>
      </el-form-item>

    </el-form>
    <el-divider />
    <div class="global-row--end">
      <el-button @click="show = false">取消</el-button>
      <el-button type="primary" @click="onSave">添加</el-button>
    </div>
  </el-dialog>

</template>

<script>
import { addSourceChannelApi } from '@/api/customer-operation.js'


export default {
  name: 'AddSourceChannel',
  data() {
    return {
      show: false,
      form: {
        name: '',
        code: '',
        channelType: '',
      }

    }
  },
  computed: {
    channelTypeList() {
      return this.$store.getters.dictionary.sourceType
    }
  },
  methods: {
    open(data = {}) {
      this.form.name = data.name || ''
      this.form.code = data.code || ''
      this.form.channelType = data.channelType || ''
      this.show = true
    },
    onSave() {
      addSourceChannelApi({
        "channelCode": this.form.code,
        "channelType": this.form.channelType,
        "code": this.form.code,
        "name": this.form.name
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
  width: 260px;
}
/deep/ .el-select{
  width: 100%;
}
</style>
