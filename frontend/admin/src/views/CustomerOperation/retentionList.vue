<template>
  <div>
    <GlSearchForm label-width="70px">
      <GlSearchItem label="导出状态">
        <el-select v-model="form.isExport" placeholder="请选择">
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="item in exportedList"
              :key="item.dataValue"
              :label="item.dataText"
              :value="item.dataValue">
            </el-option>
          </el-select>
      </GlSearchItem>
      <GlSearchItem label="来源渠道">
        <el-select v-model="form.source" placeholder="请选择">
          <el-option label="全部" value=""></el-option>
          <el-option
            v-for="item in sourceChannel"
            :key="item.dataValue"
            :label="item.dataText"
            :value="item.dataValue">
          </el-option>
        </el-select>
      </GlSearchItem>
      <GlSearchItem label="归一标识">
        <el-select v-model="form.mergeResultFlag" placeholder="请选择">
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="item in mergeResultFlagList"
              :key="item.dataValue"
              :label="item.dataText"
              :value="item.dataValue">
            </el-option>
          </el-select>
      </GlSearchItem>
      <GlSearchItem label="所在公司">
        <el-input v-model="form.company" placeholder="请输入公司名称"></el-input>
      </GlSearchItem>
      <GlSearchItem label="联系人">
        <el-input v-model="form.text" placeholder="请输入姓名或电话"></el-input>
      </GlSearchItem>
      <GlSearchItem label="访问地址">
        <el-input v-model="form.url" placeholder="请输入"></el-input>
      </GlSearchItem>
      <GlSearchItem label="来源地址">
        <el-input v-model="form.src" placeholder="请输入"></el-input>
      </GlSearchItem>

      <GlSearchItem label="创建时间" :times="2">
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
      <el-table-column prop="code" label="留资编号" width="100" />
      <el-table-column prop="companyName" label="公司名称" min-width="180" align="center" />
      <el-table-column prop="industry" label="行业" width="120" align="center" >
        <template v-slot="{row}">
          <p>{{row.industry | filterDirectionValue('industry')}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="realName" label="姓名" width="160" align="center" />
      <el-table-column prop="mobile" label="电话" width="160" align="center" />
      <el-table-column prop="email" label="邮箱" width="160" align="center" />
      <el-table-column prop="description" label="需求描述" min-width="160" align="center" />
      <el-table-column prop="sourceId" label="触发事件" width="160" align="center" >
        <template v-slot="{row}">
            <p>{{row.sourceId | filterConstDiction('sourceId')}}</p>
          </template>
      </el-table-column>
      <el-table-column prop="mergeResultFlag" label="归一标识" width="160" align="center" >
        <template v-slot="{row}">
          <p>{{row.mergeResultFlag | filterConstDiction('mergeResultFlag')}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="160" align="center" />
      <el-table-column prop="sourceChannel" label="来源渠道" width="160" align="center">
        <template v-slot="{row}">
          <p>{{row.sourceChannel | filterDirectionValue('sourceChannel')}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="exported" label="是否导出" width="80" align="center">
        <template v-slot="{row}">
          <p>{{row.exported | filterConstDiction('exported')}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="visitUrl" label="访问地址" width="160" align="center" />
      <el-table-column prop="sourceUrl" label="来源地址" width="160" align="center" />
      <el-table-column label="操作 " width="60" align="right">
        <template v-slot="{row}">
          <el-button type="text" @click="onDel(row)">删除</el-button>
        </template>
      </el-table-column>
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
import { getRetentionListApi, exportRetentionListApi, editRetentionStateApi } from '@/api/customer-operation.js'
import { ExportExcel } from '@/utils/exportExcel.js'
import { API_URL } from '@/utils/const.js'
import DictionJson from '@/utils/dictionJson.js'


export default {
  name: 'RetentionList',
  components: { GlSearchForm, GlSearchItem, Page },
  mixins: [PageMixin],
  data() {
    return {
      loading: false,
      form: {
        isExport: '',
        source: '',
        mergeResultFlag: '',
        company: '',
        text: '',
        url: '',
        src: '',
        date: []
      },
      list: [],
      exportedList: DictionJson.exported,
      mergeResultFlagList: DictionJson.mergeResultFlag
    }
  },

  computed: {
    sourceChannel() {
      return this.$store.getters.dictionary.sourceChannel
    }
  },
  created() {
    this.getListData()
  },
  methods: {
    getApiParams() {
      return {
        "companyName": this.form.company,
        "endTime": this.form.date.length > 0 ? this.form.date[1] : '',
        "exported": this.form.isExport,
        "keyword": this.form.text,
        "mergeResultFlag": this.form.mergeResultFlag,
        "pageIndex": this.page.pageIndex,
        "pageSize": this.page.pageSize,
        "sourceChannel": this.form.source,
        "sourceUrl": this.form.src,
        "startTime": this.form.date[0] ? this.form.date[0] : '',
        "visitUrl": this.form.url
      }
    },
    getListData() {
      getRetentionListApi(this.getApiParams()).then(res => {
        this.list = res.data.records
        this.page.total = res.data.totalCount
        console.log("a",this);
      })
    },
    onSearch() {
      this.page.pageIndex = 1
      this.getListData()
    },
    onExport() {
      let params = this.getApiParams()
      let str = ''
      for(let i in params){
        str += i + '=' + params[i] + '&'
      }
      ExportExcel(`${API_URL}${exportRetentionListApi()}?${str}`, null, '留资列表.xls')
    },
    onDel(item) {
      editRetentionStateApi(item.id, 0).then(res => {
        this.$message({
          type: 'success',
          message: '操作成功!'
        })
        this.getListData()
      })
    }
  }
}




</script>

<style>
</style>
