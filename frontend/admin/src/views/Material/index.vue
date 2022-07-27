<template>
  <div class="global__page--list">
    <div class="top-box">
      <el-radio-group v-model="tabPosition">
        <el-radio-button label="video">视频</el-radio-button>
        <el-radio-button label="image" disabled>图片</el-radio-button>
        <el-radio-button label="word" disabled>文档</el-radio-button>
        <el-radio-button label="other" disabled>其他</el-radio-button>
      </el-radio-group>

      <div class="global-flex--center">
        <el-input v-model="text" placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="onSearch" />
        </el-input>
        <el-button type="primary" @click="onUploadBtn">上传视频</el-button>
      </div>
    </div>

    <gl-table :data="list" fixed>
      <el-table-column prop="fileName" label="文件名" min-width="180" >
        <template v-slot="{row}">
          <el-button type="text" @click="onOpenFile(row)">{{row.fileName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="suffix" label="格式" width="100" align="center" />
      <el-table-column prop="size" label="大小" width="100" align="center" />
      <el-table-column prop="updateName" label="修改人" width="120" align="center" />
      <el-table-column prop="updateTime" label="修改时间" width="180" align="center" />
      <el-table-column label="操作" width="120" align="right">
        <template v-slot="{row}">
          <div>
            <IconButton alt="二维码" @click="onOpenQrCode(row)">
              <svg-icon icon-class="icon-qrcode" class-name="font-size--20" />
            </IconButton>
            <IconButton alt="重命名" @click="onRename(row)">
              <i class="el-icon-edit font-size--20" />
            </IconButton>
            <IconButton slot="reference" alt="删除" @click="onDelete(row)">
              <i class="el-icon-delete font-size--20" />
            </IconButton>

          </div>
        </template>

      </el-table-column>
    </gl-table>

    <Page
      fixed
      class="global__pagination"
      :current-page="page.pageIndex"
      :page-size="page.pageSize"
      :total="page.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />

    <el-dialog title="上传视频" :visible.sync="uploadDialog" width="400px">
      <Upload :show="uploadDialog"></Upload>
    </el-dialog>

    <el-dialog title="二维码" :visible.sync="qrDialog" width="375px">
      <div class="global-flex--center">
        <el-image style="width: 300px; height: 300px" :src="dialogInfo.url">
          <!-- <svg-icon slot="placeholder" icon-class="icon-qrcode" style="font-size: 300px;color: #aaa;"></svg-icon> -->
          <div slot="placeholder"><i class="el-icon-loading" /></div>
        </el-image>
      </div>
      <el-divider />
      <div class="global-row--center download__div">
        <IconButton alt="下载" @click="onDownload">
          <svg-icon icon-class="icon-download" />
        </IconButton>
      </div>
    </el-dialog>

    <el-dialog title="重命名" :visible.sync="nameDialop" width="400px">
      <div class="global-row--between">
        <el-input v-model="renameText" />
        <el-button @click="editName">确定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import IconButton from '@/components/IconButton'
import Upload from './Upload.vue'
import PageMixin from '@/mixins/page.js'
import Page from "@/components/FixedFooterPage/Page.vue"
import {
  getMaterialListApi,
  getMaterialQrCodeApi,
  getMaterialQrCodeUrlApi,
  editFilenameApi,
  delMaterialApi,
  uploadApi
} from '@/api/material.js'
import { ExportExcel } from '@/utils/exportExcel.js'
import { API_URL, H5_VIDEO_URL } from '@/utils/const.js'
export default {
  name: 'Material',
  components: {
    IconButton,
    Upload,
    Page
  },
  mixins: [PageMixin],
  data() {
    return {
      tabPosition: 'video',
      text: '',
      searchText: '',
      list: [],
      uploadDialog: false,
      qrDialog: false,
      nameDialop: false,
      dialogInfo: {
        id: '',
        fileName: '',
        fileKey: '',
        url: '',
        link: ''
      },
      renameText: '',
    }
  },
  created() {
    this.getListData()
  },
  methods: {
    getListData() {
      getMaterialListApi({
        name: this.searchText,
        pageIndex: this.page.pageIndex,
        pageSize: this.page.pageSize
      }).then(res => {
        this.list = res.data.records
        this.page.total = res.data.totalCount
      })
    },
    onSearch() {
      this.searchText = this.text
      this.page.pageIndex = 1
      this.getListData()
    },
    onUploadBtn() {
      this.uploadDialog = true
    },
    onOpenQrCode(item) {
      this.dialogInfo.id = item.id
      this.dialogInfo.fileName = item.fileName
      this.dialogInfo.fileKey = item.fileKey
      const url = `${H5_VIDEO_URL}?oss=${this.dialogInfo.fileKey}`
      this.dialogInfo.link = encodeURIComponent(url)
      this.dialogInfo.url = ''
      getMaterialQrCodeApi({ content: this.dialogInfo.link }).then(res => {
        this.dialogInfo.url = res.data
      }).catch(() => {
      })
      this.qrDialog = true
    },
    onDownload() {
      ExportExcel(`${API_URL}${getMaterialQrCodeUrlApi()}?content=${this.dialogInfo.link}`, null, `${this.dialogInfo.fileName}-二维码.png`)
    },
    onOpenFile(item) {
      window.open(item.fileKey)
    },
    onRename(item) {
      this.dialogInfo.id = item.id
      this.renameText = item.fileName
      this.nameDialop = true
    },
    editName() {
      editFilenameApi({ id: this.dialogInfo.id, fileName: this.renameText }).then(res => {
        this.nameDialop = false
        this.$message({
          message: '操作成功！',
          type: 'success'
        })
        this.getListData()
      })
    },
    onDelete(item) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delMaterialApi(item.id).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getListData()
        })
      }).catch(() => {

      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .el-icon-delete {
    color: #F56C6C;
  }

  .download__div {
    .svg-icon {
      font-size: 36px;
    }
  }
  .font-size--20{
    font-size: 20px;
  }
</style>
