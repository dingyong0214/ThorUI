const util = require('../../../utils/util.js')
Page({
  data: {
    skeletonShow:true
  },
  onLoad: function (options) {
    setTimeout(()=>{
      this.setData({
        skeletonShow:false
      })
    },1800);
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