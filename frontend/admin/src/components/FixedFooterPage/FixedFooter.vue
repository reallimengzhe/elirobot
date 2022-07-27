<template>
  <div class="fixed-footer--cm" :style="{'width': width, 'bottom': bottom, 'left': left+'px'}" >
    <slot/>
  </div>
</template>
<script>
export default {
  name: "FixedFooter",
  props: {
	  bottom: {
		  type: String,
		  default: '0'
	  }
  },
  data() {
    return {
      width: '0',
	  parentLeft: 0,
	  scrollLeft: 0,
	  observer: null // 监听父级元素宽度变化
    }
  },
  computed: {
	  left() {
		  return this.parentLeft - this.scrollLeft
	  }
  },
  watch: {
	  '$el.parentElement.offsetWidth'() {
		  this.updateWidth()
	  }
  },
  created(){

  },
  mounted() {
	this.updateWidth();
	window.addEventListener('resize', this.updateWidth)
	window.document.addEventListener('scroll', this.windowScroll);
	this.watchParent()
  },
  destroyed() {
	window.removeEventListener('resize', this.updateWidth)
	window.document.removeEventListener('scroll', this.windowScroll);
	if (this.observer) {
	  this.observer.disconnect()
	  this.observer.takeRecords()
	  this.observer = null
	}
  },
  methods: {
    updateWidth(){
		this.$nextTick(() => {
			const parentWidth = this.$el.parentElement.clientWidth
			// const screenWidth = document.documentElement.clientWidth
			this.parentLeft = this.$el.parentElement.getBoundingClientRect().left + (document.documentElement.scrollLeft || document.body.scrollLeft)
			const width = parentWidth
			this.width = width + 'px'
		})
    },
	watchParent() {
		let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
		this.observer = new MutationObserver((e) => {
			this.updateWidth()
		});
		this.observer.observe(this.$el.parentElement, { attributes:true })
	},
	windowScroll() {
		this.scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	}
  }
};
</script>
<style lang="scss" scoped>
.fixed-footer--cm {
  position: fixed;
  z-index: 200;
}
</style>
