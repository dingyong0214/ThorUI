const util = require('../../utils/util.js')
Page({
  data: {
    top:0
  },
  onLoad: function(options) {

  },
  //页面滚动执行方式
  onPageScroll(e) {
    this.setData({
      top: e.scrollTop
    })
  }
})