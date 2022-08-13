<template>
  <el-form
    ref="form"
    :rules="formRule"
    :model="form"
    label-position="left"
    label-width="100px"
    :inline="true"
  >
    <el-dialog
      :title="title"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
      :before-close="closeDialog"
      width="80%"
    >
      <el-row class="item-el-row item-row-title" :gutter="24">
        <el-col class="el-col text-center" :span="4">语言</el-col>
        <el-col class="el-col text-center" :span="7">图片</el-col>
        <el-col class="el-col" :span="12">属性</el-col>
      </el-row>

      <el-row class="el-row" :gutter="24">
        <el-col class="el-col el-col-content text-center el-col-text" :span="4">
          <span style="font-size: 18px">Chinese</span>
        </el-col>

        <el-col class="el-col el-col-content" :span="7">
          <div class="grid-upload-image">
            <el-upload
              :action="uploadUrl"
              v-show="!form.cnImageUrl"
              :on-success="handleChineseImageUploadSucess"
              :before-upload="beforeUpload"
              :headers="{ Authorization: $store.state.user.token }"
              :show-file-list="false"
            >
              <i class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip image-upload-tip-msg">
                只能上传jpg,png,文件，单张图片小于5M
              </div>
            </el-upload>

            <ul
              class="el-upload-list el-upload-list--picture-card"
              v-show="form.cnImageUrl"
            >
              <li class="el-upload-list__item image-upload-ul">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="form.cnImageUrl"
                  alt=""
                />

                <a href="" class="el-upload-list__item-name">
                  <i class="el-icon-document"></i>
                </a>

                <label class="el-upload-list__item-status-label">
                  <i class="el-icon-upload-success el-icon-check"></i>
                </label>

                <i class="el-icon-close"> </i>
                <i class="el-icon-close-tip"></i>

                <span class="el-upload-list__item-actions">
                  <!-- <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span> -->
                  <span
                    class="el-upload-list__item-delete"
                    @click="removeChineseImage"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </el-col>

        <el-col class="el-col el-col-content" :span="12">
          <el-form-item
            prop="cnTitle"
            class="el-form-item input-text"
            label="主标题"
          >
            <el-input
              v-model="form.cnTitle"
              type="text"
              placeholder="20字以内，非必填"
            ></el-input>
          </el-form-item>

          <el-form-item prop="cnTitle2" class="el-form-item" label="副标题">
            <el-input
              v-model="form.cnTitle2"
              placeholder="50字以内，非必填"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="cnGotoUrl"
            class="el-form-item"
            label="中文跳转地址"
          >
            <el-input
              type="text"
              placeholder="请输入跳转链接"
              v-model="form.cnGotoUrl"
            >
            </el-input>
          </el-form-item>

          <el-form-item prop="ordered" class="el-form-item" label="排序字段">
            <el-input
              type="number"
              placeholder="请输入排序数值"
              v-model.number="form.ordered"
              min="0"
              max="100"
            >
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row class="el-row" :gutter="24">
        <el-col class="el-col el-col-content text-center el-col-text" :span="4">
          <span style="font-size: 18px">English</span>
        </el-col>

        <el-col class="el-col el-col-content" :span="7">
          <div class="grid-upload-image">
            <el-upload
              :action="uploadUrl"
              v-show="!form.enImageUrl"
              :on-success="handleEnligshImageUploadSucess"
              :before-upload="beforeUpload"
              :headers="{ Authorization: $store.state.user.token }"
              :show-file-list="false"
            >
              <i class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip image-upload-tip-msg">
                只能上传jpg,png,文件，单张图片小于5M
              </div>
            </el-upload>

            <ul
              class="el-upload-list el-upload-list--picture-card"
              v-show="form.enImageUrl"
            >
              <li class="el-upload-list__item image-upload-ul">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="form.enImageUrl"
                  alt=""
                />

                <a href="" class="el-upload-list__item-name">
                  <i class="el-icon-document"></i>
                </a>

                <label class="el-upload-list__item-status-label">
                  <i class="el-icon-upload-success el-icon-check"></i>
                </label>

                <i class="el-icon-close"> </i>
                <i class="el-icon-close-tip"></i>

                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-delete"
                    @click="removeEnligshImage"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </el-col>

        <el-col class="el-col el-col-content" :span="12">
          <el-form-item
            prop="enTitle"
            class="el-form-item input-text"
            label="主标题"
          >
            <el-input
              v-model="form.enTitle"
              type="text"
              placeholder="20字以内，非必填"
            ></el-input>
          </el-form-item>

          <el-form-item prop="enTitle2" class="el-form-item" label="副标题">
            <el-input
              v-model="form.enTitle2"
              placeholder="50字以内，非必填"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="enGotoUrl"
            class="el-form-item"
            label="英文跳转地址"
          >
            <el-input
              type="text"
              placeholder="请输入跳转链接"
              v-model="form.enGotoUrl"
            >
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm()">重置</el-button>
        <el-button @click="closeDialog()">取 消</el-button>
        <el-button type="primary" @click="confirmDialog('form')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </el-form>
</template>

<script>
import { addBanner, editBanner } from "@/api/banner.js";
export default {
  name: "BannerDetailDialog",
  props: {
    title: {
      type: String,
      default: "添加广告图片",
    },
    uploadUrl: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      dialogImage: "",
      dialogFormVisible: false,
      form: {
        id: 0,
        type: 1,
        cnImageUrl: "",
        cnGotoUrl: "",
        cnTitle: "",
        cnTitle2: "",
        enImageUrl: "",
        enGotoUrl: "",
        enTitle: "",
        enTitle2: "",
        ordered: null,
      },
      formRule: {
        cnTitle: [
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        ordered: [
          { required: true, message: "排序字段不能为空" },
          { type: "number", message: "排序字段必须为数字" },
          {
            type: "number",
            min: 1,
            max: 100,
            message: "请输入1~100以内的数字",
            trigger: "blur",
          },
        ],
        enTitle: [
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    removeChineseImage(file, fileList) {
      this.form.cnImageUrl = "";
    },
    removeEnligshImage(file, fileList) {
      this.form.enImageUrl = "";
    },
    handleChineseImageUploadSucess(res, file, fileList) {
      this.handleUploadSuccess(1, res, file, fileList);
    },
    handleEnligshImageUploadSucess(res, file, fileList) {
      this.handleUploadSuccess(2, res, file, fileList);
    },
    handleUploadSuccess(index, res, file, fileList) {
      if (res.result === 0) {
        if (index == 1) {
          this.form.cnImageUrl = res.data.fileKey;
        } else if (index == 2) {
          this.form.enImageUrl = res.data.fileKey;
        }
        console.log("handleUploadSuccess", this.form);
      }
    },
    beforeUpload(file) {
      if (!/png/g.test(file.type)) {
        this.$message({
          type: "error",
          message: "上传失败!请上传png图片",
        });
        const isLt2M = file.size / 1024 / 1024 < 5;
        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 5MB!");
          return false;
        }
        return false;
      }
    },
    // form表单函数
    submitForm(formName) {
      if (!this.form.cnImageUrl) {
        this.$message({
          type: "warning",
          message: "请上传中文Banner图片",
        });
        return false;
      }

      if (!this.form.enImageUrl) {
        this.$message({
          type: "warning",
          message: "请上传English Banner图片",
        });
        return false;
      }

      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form);
          if (this.form.id && this.form.id > 0) {
            //编辑
            editBanner(this.form).then((res) => {
              if (res && res.result == 0) {
                this.closeDialog();
              } else {
                this.$message({
                  type: "error",
                  message: "编辑出错:" + res.detail,
                });
                s;
              }
            });
          } else {
            //新增
            addBanner(this.form).then((res) => {
              if (res && res.result == 0) {
                this.closeDialog();
              } else {
                this.$message({
                  type: "error",
                  message: "添加出错:" + res.detail,
                });
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    resetForm() {
      this.form.id = 0;
      this.form.type = 1;
      this.form.cnImageUrl = "";
      this.form.cnGotoUrl = "";
      this.form.cnTitle = "";
      this.form.cnTitle2 = "";
      this.form.enGotoUrl = "";
      this.form.enImageUrl = "";
      this.form.enTitle = "";
      this.form.enTitle2 = "";
      this.form.ordered = 0;
    },

    //dialog窗体函数
    openDialog(imageUrl, data) {
      console.log(imageUrl, data);
      return this.$nextTick(() => {
        this.dialogFormVisible = true;
        if (imageUrl) {
          this.form.cnImageUrl = imageUrl;
          this.form.enImageUrl = imageUrl;
        } else {
          this.form.id = data.id;
          this.form.type = 1;
          this.form.cnImageUrl = data.cnImageUrl;
          this.form.cnGotoUrl = data.cnGotoUrl;
          this.form.cnTitle = data.cnTitle;
          this.form.cnTitle2 = data.cnTitle2;
          this.form.enImageUrl = data.enImageUrl;
          this.form.enGotoUrl = data.enGotoUrl;
          this.form.enTitle = data.enTitle;
          this.form.enTitle2 = data.enTitle2;
          this.form.ordered = data.ordered;
        }
      });
    },
    closeDialog() {
      this.resetForm();
      this.dialogFormVisible = false;
      console.log(this);
      this.$parent.getListData();
    },
    confirmDialog(formName) {
      console.log(this);
      this.submitForm(formName);
    },
  },
};
</script>

<style>
.item-el-row {
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(153 158 158);
}
.item-el-col {
  margin-right: 10px;
}
.el-col-content {
  height: 240px;
}
.el-col-text {
  line-height: 240px;
}
.item-row-title {
  font-size: 20px;
  font-weight: bold;
}
.el-form-item {
  width: 100%;
  margin-top: 6px;
}
.text-center {
  text-align: center;
}
.banner-image {
  width: 384px;
  height: 200px;
}
.image-uploader {
  width: 384px;
  height: 200px;
}
.image-upload-tip-msg {
  line-height: 20px;
  color: red;
}
.grid-upload-image {
  font-size: 40px;
  font-family: "宋体";
  text-align: center;
  line-height: 200px;
  width: 384px;
  height: 200px;
  border: 1px solid rgb(229 221 221);
}
.image-uploader-icon {
  color: rgb(229 221 221);
}
.image-upload-ul {
  height: 200px !important;
  width: 100% !important;
}
.el-form-item__content {
  width: 85%;
}
</style>
