<template>
  <div class="home-page">
    <div class="el-row" @getListData="getListData">
      <el-row :gutter="40">
        <div v-for="col in tableData.length" :key="col" class="content-col">
          <el-col :span="6">
            <!-- 序号 -->
            <div class="grid-index">{{ col }}</div>
            <!-- 图片 -->
            <div v-if="tableData[col - 1]" class="grid-image">
              <el-image
                style="width: 100%; height: 200px"
                :src="tableData[col - 1].cnImageUrl"
              ></el-image>
            </div>

            <!-- 图片上传-->
            <div v-else class="grid-upload-image">
              <el-upload
                class="avatar-uploader"
                accept="png/jpg/*"
                :action="uploadUrl"
                :show-file-list="false"
                @click.native="clickUploadImage(col)"
                :on-success="handleUploadSuccess"
                :before-upload="beforeUpload"
                :headers="{ Authorization: $store.state.user.token }"
              >
                <img v-if="imageUrl" :src="imageUrl" />
                <i class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>

            <!-- 操作 -->
            <div v-if="tableData[col - 1]" class="grid-operation">
              <el-row :gutter="20">
                <el-button
                  type="primary"
                  round
                  @click="editData(tableData[col - 1])"
                  >编辑<i class="el-icon-edit el-icon--right"></i
                ></el-button>
                <el-button
                  type="danger"
                  round
                  @click="delData(tableData[col-1])"
                  >删除<i class="el-icon-delete el-icon--right"></i
                ></el-button>
              </el-row>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>

    <BannerDetailDialog
      ref="dialog"
      :uploadUrl="uploadUrl"
      :title="title"
    ></BannerDetailDialog>
  </div>
</template>


<script>
import BannerDetailDialog from "./BannerDetailDialog.vue";
import { API_URL } from "@/utils/const.js";
import { uploadApi } from "@/api/common.js";
import { bannerList, delBanner } from "@/api/banner.js";

export default {
  name: "Banner",

  components: {
    BannerDetailDialog,
  },

  data() {
    return {
      uploadImageIndex: null,
      uploadUrl: API_URL + uploadApi(),
      imageUrl: "",
      tableData: [],
      title: "",
    };
  },
  created() {
    this.getListData();
  },
  methods: {
    getIndex(row, col) {
      return col + (row - 1) * 4 - 1;
    },
    //查询列表数据
    getListData() {
      bannerList({
        pageIndex: 1,
        pageSize: 8,
        type: 1,
      }).then((res) => {
        if (res && res.result == 0) {
          console.log(res);
          this.tableData = res.data.records;
          if (this.tableData.length < 8) {
            this.tableData[this.tableData.length] = null;
          }
        } else {
          this.$message({
            type: "error",
            message: "查询列表页接口错误:" + res.detail,
          });
        }
      });
    },
    //编辑数据
    editData(data) {
      this.title = "编辑Banner";
      this.$refs.dialog.openDialog(null, data);
    },

    delData(data) {
      console.log(data);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delBanner(data.id).then((res) => {
            console.log(data);
            debugger
            if (res.result == 0) {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.getListData();

            } else {
              this.$message({
                type: "error",
                message: "删除出错:" + res.detail,
              });
            }
          });
        })
        .catch((a) => {
          console.log(a);
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    clickUploadImage(index) {
      this.uploadImageIndex = index;
    },
    beforeUpload(file) {
      if (!/png/g.test(file.type)) {
        this.$message({
          type: "error",
          message: "上传失败!请上传png图片",
        });
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 5;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
        return false;
      }
    },

    changeList(file, filelist) {
      if (file.status === "ready" && !/png/g.test(file.raw.type)) {
        console.log(file, filelist);
        this.$message({
          type: "warning",
          message: "请选择视频文件",
        });
      }
    },

    handleUploadSuccess(res, file) {
      if (res.result === 0) {
        console.log(this);
        this.$refs.dialog.openDialog(res.data.fileKey);
      } else {
        this.$message({
          type: "error",
          message: res.detail,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home-page {
  position: relative;
  width: 100%;
  // height: calc(100vh - 84px);
}
.el-row {
  margin-bottom: 60px;
  border: 10x solid red;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  margin-bottom: 10px;
}
.grid-index {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.grid-image {
  line-height: 200px;
  width: 380px;
  height: 200px;
}
.grid-upload-image {
  font-size: 40px;
  font-family: "宋体";
  text-align: center;
  line-height: 200px;
  width: 100%;
  height: 200px;
  border: 1px solid red;
}
.grid-operation {
  width: 100%;
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  height: 50px;
}
</style>