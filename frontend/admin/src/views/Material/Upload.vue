<template>
  <div>
    <div class="global-row--between">
      <el-upload
        ref="ElUpload"
        class="upload-demo"
        drag
        accept="video/*"
        :auto-upload="false"
        :action="uploadUrl"
        :headers="{Authorization: $store.state.user.token}"
        multiple
        :on-change="changeList"
        :on-success="success"
        :before-upload="beforeUpload"
      >
        <i class="el-icon-upload" />
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
      </el-upload>
    </div>
    <div class="global-flex--center global-margin-top--10">
      <el-button type="primary" style="width: 150px;" @click="onUpload">上传</el-button>
    </div>

  </div>
</template>

<script>
import { API_URL } from '@/utils/const.js'
import {uploadApi} from '@/api/common.js'
export default{
  name: 'Upload',
  props: {
    show:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      uploadUrl: API_URL + uploadApi()
    }
  },
  watch: {
    show(val) {
      if(!val) this.beforeCloseUpload()
    }
  },
  methods: {
    onUpload() {
      this.$refs.ElUpload.submit()
    },
    beforeCloseUpload() {
      this.$refs.ElUpload.clearFiles()
    },
    changeList(file, filelist) {
      if(file.status === 'ready' && !/video/g.test(file.raw.type)){
        console.log(file, filelist)
        this.$message({
          type: 'warning',
          message: '请选择视频文件'
        })
      }
    },
    beforeUpload(file) {
      console.log(file)
      if(!/video/g.test(file.type)){
        this.$message({
          type: 'error',
          message: '上传失败!请上传视频文件'
        })
        return false
      }
    },
    success(response, file, fileList) {
      // console.log(response, file, fileList)
      if(response.result !== 0) {
        this.$message({
          type: 'error',
          message: '上传失败!'
        })
      }else{
        this.$message({
          type: 'success',
          message: '上传成功!'
        })
      }
    }
  },
}
</script>

<style>
</style>
