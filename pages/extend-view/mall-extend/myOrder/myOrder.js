Page({
  data: {
    tabs: [{
      name: "全部"
    }, {
      name: "待付款"
    }, {
      name: "待发货"
    }, {
      name: "待收货"
    }, {
      name: "待评价"
    }],
    currentTab: 0,
    pageIndex: 1,
    loadding: false,
    pullUpOn: true,
    scrollTop: 0
  },

  onLoad: function(options) {

  },
  change(e) {
    this.setData({
      currentTab: e.detail.index
    })
  },
  detail() {
    wx.showToast({
      title: '功能尚未完善~',
      icon:'none'
    })
  },
  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 300);
  },
  onReachBottom() {
    //只是测试效果，逻辑以实际数据为准
    this.setData({
      loadding:true,
      pullUpOn:true
    })
    setTimeout(() => {
      this.setData({
        loadding: false,
        pullUpOn: false
      })
    }, 1000)
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})