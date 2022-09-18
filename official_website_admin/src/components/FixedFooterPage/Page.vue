<template>
	<el-pagination
		v-if="!fixed"
		key="elPagination1"
		ref="elPagination"
		:current-page="page"
		class="gl-pagination"
		:class="{'is-general-mode': generalMode}"
		:page-size="size"
		:total="total"
		background
		:page-sizes="pageSizes"
		layout="total, prev, pager, next, sizes, jumper"
		:show-total="total => `共 ${total} 条记录`"
		v-bind="$attrs"
		@current-change="onPageChange"
		@size-change="onPageSizeChange"
		@prev-click="onPrevClick"
		@next-click="onNextClick"
	/>
	<FixedFooter v-else ref="GlFixedFooter">
		<el-pagination
			ref="elPagination"
			key="elPagination2"
			:current-page="page"
			class="gl-pagination"
			:class="{'is-general-mode': generalMode}"
			:page-size="size"
			:total="total"
			background
			:page-sizes="pageSizes"
			layout="total, prev, pager, next, sizes, jumper"
			:show-total="total => `共 ${total} 条记录`"
			v-bind="$attrs"
			@current-change="onPageChange"
			@size-change="onPageSizeChange"
			@prev-click="onPrevClick"
			@next-click="onNextClick"
		/>
	</FixedFooter>

</template>

<script>
import FixedFooter from './FixedFooter.vue'
export default {
	name: 'Page',
	components: { FixedFooter },
	inheritAttrs: false,
	props: {
		page: {
			type: Number,
			default: 1
		},
		size: {
			type: Number,
			default: 20
		},
		total: {
			type: Number,
			default: 0
		},
		pageSizes: {
			type: Array,
			default: () => [10, 20, 50, 100]
		},
		fixed: {
			type: Boolean,
			default: false
		},
		generalMode: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	methods: {
		getDom() {
			return this.$refs.elPagination;
		},
		getFooterDom() {
			if(this.fixed){
				return this.$refs.GlFixedFooter;
			}else{
				throw new Error('Page组件attributes：fixed不为true，没有footer实例')
			}
		},
		onPageChange(page) {
			this.$emit('current-change', page);
		},
		onPageSizeChange(size) {
			this.$emit('size-change', size);
		},
		onPrevClick(page) {
			this.$emit('prev-click', page);
		},
		onNextClick(page) {
			this.$emit('next-click', page);
		}
	}
};
</script>

<style lang="scss" scoped>
.gl-pagination {
	text-align: right;
	&.is-general-mode{
		height: 44px;
		padding: 7px 16px;
		background-color: #fff;
	}
	/deep/ .el-pagination__jump {
		margin-left: -6px;
	}
	/deep/ .el-pagination,
	/deep/ .el-pagination.is-background {
		.el-pager {
			.number {
				background-color: #fff;
				border: 1px solid #dcdfe6;
				&.active {
					border-color: #007134;
					background-color: #fff;
				}
			}
			li:not(.disabled).active {
				color: #007134 !important;
				border-color: #007134;
				background-color: #fff !important;
			}
		}
	}
	/deep/ .btn-prev,
	/deep/ .btn-next {
		background-color: #fff !important;
		border: 1px solid #dcdfe6;
	}
}
</style>
