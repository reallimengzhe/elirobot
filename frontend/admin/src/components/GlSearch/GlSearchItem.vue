<template>
	<div class="gl-search-item" :class="'gl-search-item_'+times">
		<el-form-item ref="ElFormItem" :class="elClass" v-bind="$attrs" v-on="$listeners">
			<slot></slot>
		</el-form-item>
	</div>
</template>

<script>
export default {
	name: 'GlSearchItem',
	props: {
		times: {
			type: Number,
			default: 1,
			validator(val) {
				return [1, 2, 3, 4].indexOf(val) > -1
			}
		},
		elClass: {
			type: String,
			default: ''
		}
	},
	inject: ['parent'],
	mounted() {
		this.parent.son++
	},
	methods: {
		getDom() {
			return this.$refs.ElFormItem
		}
	},
	beforeDestroy() {
		this.parent.son--
	}

}
</script>

<style lang="scss" scoped>
.gl-search-item{
	display: inline-block;
  margin-right: 15px;
  // margin-bottom: 20px;
}
.gl-filter-box--4 {
  .gl-search-item {
    width: 25%;
  }
  .gl-search-item_2 {
  	  width: 50%;
  }
  .gl-search-item_3{
	  width: 75%;
  }
  .gl-search-item_4{
  	  width: 100%;
  }
}
.gl-filter-box--3 {
  .gl-search-item {
    width: 33.3%;
  }
  .gl-search-item_2 {
	  width: 66.6%;
  }
  .gl-search-item_3, .gl-search-item_4{
	  width: 100%;
  }
}

.gl-filter-box--2 {
  .gl-search-item {
    width: 50%;
  }
  .gl-search-item_2, .gl-search-item_3, .gl-search-item_4{
  	  width: 100%;
  }
}
.gl-filter-box--1 {
  .gl-search-item {
    width: 100%;
  }
}
.gl-search-item {
  /deep/ .el-input{
    width: 200px;
  }
  /deep/ .el-select{
    width: 200px;
  }
}
/deep/ .el-form-item__content{
  margin-left: 10px!important;
}
</style>
