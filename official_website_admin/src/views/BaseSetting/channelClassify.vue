<template>
  <div>
    <div class="global-margin-bottom--30">
      <el-button type="primary" class="global-margin-right--10" @click="onAdd">新增</el-button>
       <el-select v-model="status" placeholder="请选择" @change="changeStatus">
          <el-option label="全部" value=""></el-option>
          <el-option
            v-for="item in sourceChannelList"
            :key="item.dataValue"
            :label="item.dataText"
            :value="item.dataValue">
          </el-option>
        </el-select>
    </div>

    <gl-table :data="list" fixed>
      <el-table-column label="序号" width="60" >
        <template v-slot="{$index}">
          <p>{{$index+1}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="dataText" label="渠道分类" min-width="100" align="center">
        <template v-slot="{row}">
          <div>
            <p v-if="!row.isEdit">{{row.dataText}}</p>
            <el-input v-else="!row.isEdit" v-model="row.editText"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="state" label="状态" width="100" align="center">
        <template v-slot="{row}">
          <p v-if="!row.isEdit">{{row.state | filterConstDiction('status')}}</p>
          <p v-else>待保存</p>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120" align="right">
        <template v-slot="{row}">
          <div>
            <el-button type="text" v-if="!row.isEdit" @click="onEdit(row)">编辑</el-button>
            <el-button type="text" v-if="row.isEdit" @click="onEditEnd(row, 1)">保存</el-button>
            <el-button type="text" v-if="row.isEdit" @click="onEditEnd(row, 0)">取消</el-button>
            <el-button type="text" v-if="!row.state" @click="onUpdateState(row, 1)">启用</el-button>
            <el-button type="text" v-else @click="onUpdateState(row, 0)">禁用</el-button>
          </div>
        </template>

      </el-table-column>
    </gl-table>

    <AddDictionary ref="AddDictionary" @update="getListData"/>

  </div>

</template>

<script>
import {
  getDictionListApi,
  editDictionApi,
  editDictionStateApi
} from '@/api/common.js'
import DictionJson from '@/utils/dictionJson.js'
import AddDictionary from '@/components/AddDictionary'
export default {
  name: 'ChannelClassify',
  components: {
    AddDictionary
  },
  mixins: [],
  data() {
    return {
      status: '',
      allList: [],
      list: [],
      sourceChannelList: DictionJson.status
    }
  },
  computed: {

  },
  created() {
    this.getListData()
  },
  methods: {
    getListData() {
      getDictionListApi({
        dataCode: 'sourceType'
      }).then(res => {
        this.allList = this.addStatus(res.data)
        this.changeStatus()
      })
    },
    onAdd() {
      this.$refs.AddDictionary.open('sourceType', '渠道分类')
    },
    onEdit(item) {
      item.isEdit = 1
      item.editText = item.dataText
    },
    onEditEnd(item, status) {
      item.isEdit = 0
      if(status){
        editDictionApi(item.id, {
          dataDesc: item.dataDesc,
          dataText: item.editText,
          dataValue: item.dataValue,
          ordered: item.ordered
        }).then(res =>{
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
          this.getListData()
        })
      }else{
        item.editText = item.dataText
      }
    },
    onUpdateState(item, state) {
      editDictionStateApi(item.id, state).then(res => {
        this.$message({
          type: 'success',
          message: '操作成功!'
        })
        this.getListData()
      })
    },
    addStatus(data) {
      data.forEach(item => {
        item.isEdit = 0
        item.editText = ''
      })
      return data
    },
    changeStatus() {
      if(this.status != ''){
        this.list = this.allList.filter(item => item.state == this.status)
      }else{
        this.list = this.allList
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
