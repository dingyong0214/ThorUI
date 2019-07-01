const util = require('../../../utils/util.js')
Page({
  data: {
    loadding: false,
    show: false,
    bottom: 0
  },
  onLoad: function (options) {
    wx.onKeyboardHeightChange(res => {
      this.setData({
        bottom: res.height
      })
    })
  },
  onPageScroll(e) {
    if (e.scrollTop == 0 && !this.data.loadding) {
      this.setData({
        loadding: true
      }, () => {
        setTimeout(() => {
          this.setData({
            show: true,
            loadding: false
          })
        }, 1000)
      })
    }
  }
})