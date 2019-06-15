Page({
  data: {
  },
  onLoad: function (options) {

  },
  detail: function () {
    wx.showToast({
      title: '只有组件才有的点击事件~',
      icon: "none"
    })
  }
})