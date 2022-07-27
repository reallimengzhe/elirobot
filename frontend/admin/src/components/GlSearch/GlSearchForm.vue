<template>
	<section class="gl-search-box" :class="['gl-search-box--'+column]" v-if="refresh">
		<gl-unfold :height="initHeight" :spacing="0" :disabled="son <= defaultLines * column">
			<el-form ref="ElForm" v-bind="$attrs" v-on="$listeners">
				<slot></slot>
			</el-form>
			<div v-if="son <= defaultLines * column" style="width: 100%;height: 34px;"></div>
			<div slot="unfold" slot-scope="{status}">
				{{ status ? '收起选项' : '展开选项' }}
			</div>
		</gl-unfold>
		<div class="gl-search-box--button">
			<slot name="button"></slot>
		</div>
	</section>
</template>

<script>
import GlUnfold from './GlUnfold.vue'
export default {
	name: 'GlSearchForm',
  components: {GlUnfold},
	props: {
		initHeight: { // 缩小时所占用的高度
			type: Number,
			default: 150
		},
		fourColWidth: { // 四列时最小屏幕宽度
			type: Number,
			default: 1300
		},
		threeColWidth: { // 三列时最小屏幕宽度
			type: Number,
			default: 900
		},
		twoColWidth: { // 二列时最小屏幕宽度
			type: Number,
			default: 500
		},
		calcMode: { // 计算模式,parent 根据父级元素宽度计算，global 根据屏幕宽度计算
			type: String,
			default: 'parent' // global
		},
		defaultLines: { // 默认展示行数
			type: Number,
			default: 3
		}
	},
	provide() {
		return {
			parent: this
		}
	},
	data(){
		return {
			son: 0,
			docWidth: 0,
			refresh: true
		}
	},
	computed: {
		column() { // TODO 统计当前模式
			return this.docWidth > this.fourColWidth ? 4 : this.docWidth > this.threeColWidth ? 3 : this.docWidth > this.twoColWidth ? 2 : 1
		}
 	},
	created() {
		if(this.calcMode !== 'parent'){
			this.resize()
		}
		window.addEventListener('resize', this.resize)
	},
	mounted() {
		if(this.calcMode === 'parent'){
			this.resize()
		}
	},
	methods: {
		getDom() {
			return this.$refs.ElForm
		},
		// 重新刷新组件
		reload() {
			this.son = 0
			this.refresh = false
			this.$nextTick(()=>{
				this.refresh = true
			})
		},
		resize() {
			console.log('this.$parent', this.$el.parentNode.clientWidth)
			this.docWidth =  this.calcMode === 'parent' ? this.$el.parentNode.clientWidth : document.body.clientWidth;
		}
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.resize)
	}
}
</script>

<style lang="scss" scoped>
.gl-search-box{
	position: relative;
	text-align: left;
	/deep/ .gl-unfold{
		padding: 0;
		margin-bottom: 0;
		.gl-unfold--content{
			padding: 0;
		}
		.gl-unfold__footer{
			padding: 0;
		}
	}
	.gl-search-box--button{
		position: absolute;
		right: 16px;
		bottom: 20px;
	}
}
@media screen and (max-width: 500px) {
	.gl-search-box{
		padding-bottom: 40px;
		.gl-search-box--button {
		  bottom: 0;
		}
	}
}
</style>
