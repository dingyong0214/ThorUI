const util = require('../../../utils/util.js')
Page({
  data: {
    loadding: false,
    show: false,
    bottom: 0,
    current: 0,
    index: 3
  },
  onLoad: function (options) {
    wx.onKeyboardHeightChange(res => {
      this.setData({
        bottom: res.height
      })
    })
  },
  change: function (e) {
    this.setData({
      index: e.detail.index,
      current: e.detail.index
    })
  }
})