let globalData = getApp().globalData;
const util = require('../../utils/util.js');
Page({
  data: {
    version: globalData.version
  },
  onLoad: function(options) {
  },
  copy: function (e) {
    let text=e.currentTarget.dataset.text;
    wx.setClipboardData({
      data: text,
      success(res) {
        wx.getClipboardData({
          success(res) {
            util.toast("链接已复制", 2000, true)
          }
        })
      }
    })
  },
  log:function(){
    wx.navigateTo({
      url: '../log/log'
    })
  }
})