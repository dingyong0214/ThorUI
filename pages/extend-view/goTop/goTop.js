Page({
  data: {
    scrollTop: 0
  },
  onLoad: function(options) {

  },
  //页面滚动执行方式
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})