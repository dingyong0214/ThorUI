Page({
  data: {
  },
  onLoad: function (options) {
  },
  clipboard: function (e) {
    let text = e.currentTarget.dataset.text;
    wx.setClipboardData({
      data: text,
      success(res) {
        wx.getClipboardData({
          success(res) {
          }
        })
      }
    })
  }
})