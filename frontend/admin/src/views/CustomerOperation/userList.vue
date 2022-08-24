<template>
  <div>
    <GlSearchForm>
      <GlSearchItem label="注册时间">
         <el-date-picker
              v-model="form.date"
              type="datetimerange"
              value-format="yyyy-MM-dd HH:mm:ss"
              :default-time="['00:00:00','23:59:59']"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
          </el-date-picker>
      </GlSearchItem>
      <GlSearchItem label="所在公司">
        <el-input v-model="form.company" placeholder="请输入公司名称"></el-input>
      </GlSearchItem>
      <GlSearchItem label="联系人">
        <el-input v-model="form.text" placeholder="请输入姓名或电话"></el-input>
      </GlSearchItem>
      <GlSearchItem label="用户">
        <el-input v-model="form.userId" placeholder="请输入用户编号"></el-input>
      </GlSearchItem>

      <template slot="button">
        <el-button type="primary" class="addSearchBtn" :loading="loading" @click="onSearch">
          查询
        </el-button>
        <el-button plain @click="onExport">
          导出
        </el-button>
      </template>
    </GlSearchForm>

    <el-table :data="list" fixed>
      <el-table-column prop="code" label="用户编号" width="100" />
      <el-table-column prop="realName" label="姓名" min-width="60" align="center" />
      <el-table-column prop="mobile" label="电话" width="120" align="center" />
      <el-table-column prop="email" label="邮箱" width="160" align="center" />
      <el-table-column prop="companyName" label="所在公司 " min-width="120" align="center" />
      <el-table-column prop="createTime" label="注册时间 " width="180" align="right" />
    </el-table>


    <Page
      fixed
      class="global__pagination"
      :current-page="page.pageIndex"
      :page-size="page.pageSize"
      :total="page.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import GlSearchForm from '@/components/GlSearch/GlSearchForm'
import GlSearchItem from '@/components/GlSearch/GlSearchItem.vue'
import Page from '@/components/FixedFooterPage/Page.vue'
import PageMixin from '@/mixins/page.js'
import { getUserListApi, exportUserListApi } from '@/api/customer-operation.js'
import { ExportExcel } from '@/utils/exportExcel.js'
import { API_URL } from '@/utils/const.js'

export default {
  name: 'UserList',
  components: { GlSearchForm, GlSearchItem, Page },
  mixins: [PageMixin],
  data() {
    return {
      loading: false,
      form: {
        date: [],
        company: '',
        text: '',
        userId: ''
      },
      list: []
    }
  },
  created() {
    this.getListData()
  },
  methods: {
    getApiParams() {
      return {
        "code": this.form.userId,
        "companyName": this.form.company,
        "endTime": this.form.date[1] ? this.form.date[1] : '',
        "keyword": this.form.text,
        "pageIndex": this.page.pageIndex,
        "pageSize": this.page.pageSize,
        "startTime": this.form.date[0] ? this.form.date[0] : ''
      }
    },
    getListData() {
      getUserListApi(this.getApiParams()).then(res => {
        this.list = res.data.records
        this.page.total = res.data.totalCount
      })
    },
    onSearch() {
      this.getListData()
    },
    onExport() {
      let params = this.getApiParams()
      let str = ''
      for(let i in params){
        str += i + '=' + params[i] + '&'
      }
      ExportExcel(`${API_URL}${exportUserListApi()}?${str}`, null, '用户列表.xls')
    }
  }
}




</script>

<style>
</style>
