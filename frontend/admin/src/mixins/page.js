export default {
  data() {
    return {
      page: {
        pageIndex: 1,
        pageSize: 20,
        total: 0
      }
    }
  },
  watch: {
    'page.total'(val) {
      if (typeof val !== 'number') {
        this.page.total = +val
      }
    }
  },
  methods: {
    handleSizeChange(size) {
      this.page.pageSize = size
      if (this.getListData) this.getListData()
    },
    handleCurrentChange(page) {
      this.page.pageIndex = page
      if (this.getListData) this.getListData()
    }
  }

}
