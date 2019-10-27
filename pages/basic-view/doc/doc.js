const util = require('../../../utils/util.js')
Page({
  data: {
  },
  onLoad: function(options) {
  },
  getLink(e) {
    let link = e.currentTarget.dataset.link
    wx.setClipboardData({
      data: link,
      success(res) {
        wx.getClipboardData({
          success(res) {
            util.toast("链接已复制", 2000, true)
          }
        })
      }
    })
  }
})