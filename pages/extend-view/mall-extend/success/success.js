Page({
  data: {

  },
  onLoad: function (options) {

  },
  go(e) {
    let page = e.currentTarget.dataset.page
    if (page == 1) {
      wx.switchTab({
        url: "/pages/index/index"
      })
    } else {
      wx.navigateTo({
        url: '../myOrder/myOrder'
      })
    }
  }
})