<template>
	<section class="gl-unfold">
		<div class="gl-unfold--content" :style="{ height: disabled || (!height && height !== 0) ? 'auto' : finalHeight }" :class="{ 'is-unfold': isUnfold }">
			<!-- 用于获取content实际高度 -->
			<div ref="content"><slot :data="finalList"></slot></div>
		</div>
		<footer class="gl-unfold__footer" v-if="!disabled">
			<el-button type="text" @click="onUnfold">
				<slot name="unfold" :status="isUnfold">
					{{ isUnfold ? '收起' : '展开' }}
					<gl-icon icon-class="icon-unfold" :className="isUnfold ? 'is-reverse' : ''"></gl-icon>
				</slot>
			</el-button>
		</footer>
	</section>
</template>

<script>
/* GlUnfold 展开收起组件
 * {props} height 【Number：0】收起高度限制
 * {props} disabled 【Boolean】是否需要展开功能
 * {props} list 【Array】数据列表数据
 * {props} limit 【Number】数据条数限制
 */
export default {
	name: 'GlUnfold',
	components: {},
	props: {
		height: {
			type: Number,
			default: 0
		},
		disabled: {
			type: Boolean,
			default: false
		},
		list: {
			type: Array,
			default: () => []
		},
		limit: {
			type: Number,
			default: null
		},
		spacing: {
			type: Number,
			default: 16
		}
	},
	computed: {
		finalHeight() {
			return (this.isUnfold ? (this.actualHeight > this.height ? this.actualHeight + this.spacing : this.height) : this.height) + 'px';
		},
		finalList() {
			if (this.disabled) {
				return this.list;
			}
			if (this.isUnfold) {
				return this.list;
			} else {
				if (this.limit || this.limit == 0) {
					return this.list.slice(0, this.limit);
				}
				return this.list;
			}
		}
	},
	data() {
		return {
			isUnfold: false,
			actualHeight: ''
		};
	},
	methods: {
		onUnfold() {
			this.actualHeight = this.$refs.content.offsetHeight + this.spacing;
			this.isUnfold = !this.isUnfold;
		}
	}
};
</script>

<style lang="scss">
.gl-unfold {
	background-color: #fff;
	margin-bottom: 16px;
	transition: height 2.8s;
	padding-bottom: 10px;
	.gl-unfold--content {
		padding: 16px 16px 0;
		overflow: hidden;
		transition: height 0.6s ease-in;
		&.is-unfold {
		}
	}
	.gl-icon {
		transition: transform 0.6s;
		&.is-reverse {
			transform: rotate(180deg);
		}
	}

	.gl-unfold__footer {
		text-align: center;
		padding: 5px 0 0px;
		font-size: 14px;
	}
}
</style>
