Page({
  data: {
    scrollTop: 0
  },
  onChange(e) {
    console.log(e.detail, 'click right menu callback data')
  },
  //页面滚动执行方式
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  detail(e) {
    wx.showToast({
      title: '详情功能尚未完善~',
      icon: "none"
    })
  }
});