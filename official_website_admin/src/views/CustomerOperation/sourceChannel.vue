<template>
  <div>
    <div class="global-margin-bottom--30">
      <el-button type="primary" class="global-margin-right--10" @click="onAdd">新增</el-button>
       <el-select v-model="status" placeholder="请选择" @change="changeStatus">
          <el-option label="全部" value=""></el-option>
          <el-option
            v-for="item in sourceIdList"
            :key="item.dataValue"
            :label="item.dataText"
            :value="item.dataValue">
          </el-option>
        </el-select>
    </div>

    <el-table :data="list" fixed>
      <el-table-column prop="id" label="序号" width="60" />
      <el-table-column prop="name" label="来源渠道" min-width="100" align="center">
        <template v-slot="{row}">
          <div>
            <p v-if="!row.isEdit">{{row.name}}</p>
            <el-input v-else="!row.isEdit" v-model="row.editText"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="channelType" label="渠道分类" min-width="100" align="center">
        <template v-slot="{row}">
          <div>
            <p v-if="!row.isEdit">{{row.channelType | filterDirectionValue('sourceType')}}</p>
            <el-select v-else="!row.isEdit" v-model="row.editChannelType" placeholder="请选择">
                <el-option
                  v-for="item in channelTypeList"
                  :key="item.dataValue"
                  :label="item.dataText"
                  :value="item.dataValue">
                </el-option>
              </el-select>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="channelCode" label="渠道代码" min-width="100" align="center">
        <template v-slot="{row}">
          <div>
            <p v-if="!row.isEdit">{{row.channelCode}}</p>
            <el-input v-else="!row.isEdit" v-model="row.editChannelCode"></el-input>
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
    </el-table>

    <AddSourceChannel ref="AddSourceChannel" @update="getListData"/>

  </div>

</template>

<script>
import {
  getSourceChannelListApi,
  editSourceChannelApi,
  updateSourceChannelStateApi,
} from '@/api/customer-operation.js'
import DictionJson from '@/utils/dictionJson.js'
import AddSourceChannel from './AddSourceChannel.vue'
export default {
  name: 'SourceChannel',
  components: {
    AddSourceChannel
  },
  mixins: [],
  data() {
    return {
      status: '',
      allList: [],
      list: [],
      sourceIdList: DictionJson.status
    }
  },
  computed: {
    channelTypeList() {
      return this.$store.getters.dictionary.sourceType
    }
  },
  created() {
    this.getListData()
  },
  methods: {
    getListData() {
      getSourceChannelListApi({
        // state: 1
      }).then(res => {
        this.allList = this.addStatus(res.data)
        this.changeStatus()
      })
    },
    onAdd() {
      this.$refs.AddSourceChannel.open('sourceChannel', '来源渠道')
    },
    onEdit(item) {
      item.isEdit = 1
      item.editText = item.name
      item.editChannelType = item.channelType
      item.editChannelCode = item.channelCode
    },
    onEditEnd(item, status) {
      item.isEdit = 0
      if(status){
        editSourceChannelApi(item.id, {
          channelCode: item.editChannelCode,
          channelType: item.editChannelType,
          code: item.code,
          name: item.editText
        }).then(res =>{
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
          this.getListData()
        })
      }else{
        item.editText = item.name
        item.editChannelType = item.channelType
        item.editChannelCode = item.channelCode
      }
    },
    onUpdateState(item, state) {
      updateSourceChannelStateApi(item.id, state).then(res => {
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
        item.editChannelType = item.channelType
        item.editChannelCode = item.channelCode
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
