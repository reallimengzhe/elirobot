<template>
	<section ref="tableBox">
		<el-table ref="elTable" size="middle" border :stripe="stripe" class="gl-table" :data="tableData" v-on="$listeners">
		<!-- 	<template slot="empty">
				<gl-empty class="gl-table-empty"></gl-empty>
			</template> -->
			<slot></slot>
			<slot name="append"></slot>
		</el-table>
		<div class="shadow-table--box" ref="ShadowBox" v-if="fixed" v-show="shadowHeader">
			<div v-if="hasSpacing" style="background-color: #fff;width: calc(100% + 1px);" :style="{ height: spacingHeight + 'px' }"></div>
			<el-table ref="elTableShadow" size="middle" :data="[]" border class="gl-table shadow-table" v-bind="$attrs" v-on="$listeners"><slot></slot></el-table>
		</div>
	</section>
</template>

<script>
export default {
	name: 'GlTable',
	components: {},
	inheritAttrs: false,
	props: {
		fixed: {
			type: Boolean,
			default: false
		},
		fixedTop: {
			type: Number,
			default: 0
		},
		hasSpacing: {
			type: Boolean,
			default: true
		},
		spacingHeight: {
			type: Number,
			default: 16
		},
		stripe: {
			type: Boolean,
			default: true
		},
		tableData:{
			type: Array,
			default: ()=>{return []}
		}
	},
	data() {
		return {
			top: 0, //表格距离视图顶部的距离
			scrollTop: 0, // 垂直滚动条 滚动距离
			scrollLeft: 0, // 水平滚动条，滚动距离
			// offsetTop: 999, // 表格到顶部得距离，用于判断是否出现浮动表头
			wrapperMoving: false, // 表格内容是否在移动 中
			headerMoving: false, // 表格虚拟头部是否在移动 中
			wmHint: null, // 表格内容移动得定时器
			hmHint: null, // 表格虚拟表头移动得定时器
			TDomLeft: 0, // 表格内容水平滚动距离
			domTop: 0, // 表格到顶部的距离
			domLeft: 0 // 表格到左边 的距离
		};
	},
	computed: {
		// 实时计算，何时显示表头
		shadowHeader() {
			let flag = this.top - this.fixedTop - this.spacingHeight <= 0;
			return flag;
		}
	},
	watch: {
		scrollLeft(val) {
			this.moveSBox(-val);
		},
		shadowHeader() {
			this.update();
			let table = this.getTable();
			if (table.STHDom) {
				this.hm();
				table.STHDom.scrollLeft = table.TWDom.scrollLeft;
			}
		}
	},
	mounted() {
		console.log(this);
		if (this.fixed) {
			this.initShadow();
		}
	},
	beforeDestroy() {
		window.document.removeEventListener('scroll', this.watchWindowScroll);
		window.removeEventListener('resize', this.watchWindowResize);
		let table = this.getTable();
		if (table.TWDom) {
			table.TWDom.removeEventListener('scroll', this.wrapperHorizontal, false);
		}
		if (table.STHDom) {
			table.STHDom.removeEventListener('scroll', this.headerHorizontal, false);
		}
	},
	methods: {
		getDom() {
			return this.$refs.elTable;
		},
		// 更新表头宽度、距离高度,左侧距离等
		update() {
			let _self = this;
			this.$nextTick(() => {
				let table = _self.getTable();
				table.SBox.style.top = _self.fixedTop + 'px';
				_self.top = table.TDom.getBoundingClientRect().top;
				table.STDom.style.width = table.TDom.scrollWidth + 'px'; // table.TDom.offsetWidth
				let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
				_self.domLeft = +(scrollLeft + table.TDom.getBoundingClientRect().left).toFixed(2);
				_self.moveSBox(-scrollLeft);
			});
		},
		// 初始化影子table
		initShadow() {
			let _self = this;
			window.document.addEventListener('scroll', this.watchWindowScroll);
			window.addEventListener('resize', this.watchWindowResize);
			this.$nextTick(() => {
				// _self.domTop = _self.$refs.tableBox.getBoundingClientRect().top
				let table = _self.getTable();
				table.SBox.style.top = _self.fixedTop + 'px';
				_self.top = table.TDom.getBoundingClientRect().top;
				let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
				_self.domLeft = +(scrollLeft + table.TDom.getBoundingClientRect().left).toFixed(2);
				_self.moveSBox(-scrollLeft); // 初始化left 防止页面加载时滚动条不处于最左侧
				table.STDom.style.width = table.TDom.scrollWidth + 'px'; // table.TDom.offsetWidth
				table.TWDom.addEventListener('scroll', _self.wrapperHorizontal, false);
				table.STHDom.addEventListener('scroll', _self.headerHorizontal, false);
			});
		},
		//  窗口滚动监听
		watchWindowScroll() {
			let t = document.documentElement.scrollTop || document.body.scrollTop; //变量t就是滚动条滚动时，到顶部的距离
			this.scrollTop = t;
			this.scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
			let table = this.getTable();
			this.top = table.TDom.getBoundingClientRect().top;
		},
		watchWindowResize() {
			this.update();
		},
		// 表格内容滚动监听
		wrapperHorizontal() {
			if (this.headerMoving) return;
			let table = this.getTable();
			this.wm();
			this.TDomLeft = table.TWDom.scrollLeft;
			table.STHDom.scrollLeft = table.TWDom.scrollLeft;
		},
		// 虚拟表头滚动监听
		headerHorizontal() {
			if (this.wrapperMoving) return;
			let table = this.getTable();
			this.hm();
			table.TWDom.scrollLeft = table.STHDom.scrollLeft;
		},
		// 表格内容 水平滚动状态
		wm() {
			if (this.wmHint) {
				clearTimeout(this.wmHint);
			}
			this.wrapperMoving = true;
			this.wmHint = setTimeout(() => {
				this.wrapperMoving = false;
			}, 100);
		},
		// 虚拟表头 水平滚动状态 阻止循环触发表格内容滚动再次导致表头变动
		hm() {
			if (this.hmHint) {
				clearTimeout(this.hmHint);
			}
			this.headerMoving = true;
			this.hmHint = setTimeout(() => {
				this.headerMoving = false;
			}, 100);
		},
		// 水平移动虚拟表头s
		moveSBox(left) {
			let table = this.getTable();
			table.SBox.style.left = this.domLeft + left + 'px';
		},
		getTable() {
			let tableDom = this.$refs.elTable ? this.$refs.elTable.$el : null;
			let tableWrapperDom = tableDom ? tableDom.querySelector('.el-table__body-wrapper') : null;
			let tableHeaderDom = tableDom ? tableDom.querySelector('.el-table__header-wrapper') : null;
			let TSDom = this.$refs.elTableShadow ? this.$refs.elTableShadow.$el : null;
			let TSHWDom = TSDom ? TSDom.querySelector('.el-table__header-wrapper') : null;
			let SBox = this.$refs.ShadowBox ? this.$refs.ShadowBox : null;
			return {
				TDom: tableDom, // 真实表格dom
				THDom: tableHeaderDom, // 真实表头dom
				TWDom: tableWrapperDom, // 真实表格内容dom
				STDom: TSDom, // 虚拟表格dom
				STHDom: TSHWDom, // 虚拟表头dom
				SBox: SBox // 整个虚拟盒子dom
			};
		}
		// 获取表头到顶部的高度
		// getWrapperScrollTop(){
		//   let top = this.$refs.tableBox.getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop)
		//   return top - this.fixedTop
		// }
	}
};
</script>

<style lang="scss" scoped>
.shadow-table--box {
	position: fixed;
	top: 0;
	// left: 0;
	z-index: 9;
	background-color: #fff;
	.shadow-table {
		width: 100%;
		min-height: 48px;
		>>> .el-table__body-wrapper {
			height: 0;
		}
	}
}

.gl-table {
	tbody .cell,
	tbody .cell .el-button--text {
		font-size: 14px;
	}
	thead,
	thead tr,
	thead tr th {
		color: #333;
		background-color: #fafafa;
	}
	tbody .cell .el-button--text {
		font-weight: bold;
	}

	th.is-right,
	td.is-right {
		border-right: 0;
		padding-right: 5px;
	}
	th.is-leaf,
	td.is-leaf {
		padding-left: 5px;
	}
	.is-last-colum {
		border-right: 0;
		padding-right: 5px;
	}

	thead,
	thead > tr {
		background-color: red;
	}
	.el-table--border th {
		border-color: #e8e8e8;
	}

	th:hover,
	tr:hover {
		// background-color: #e5f0ea;
	}
	.el-table--enable-row-hover {
		.el-table__body {
			tr:hover {
				& > td {
					background-color: transparent !important;
					border-right: 1px solid #e3e3e3;
				}
			}
		}
	}
	.gl-table-empty {
		margin: 20px 0;
	}
}
</style>
