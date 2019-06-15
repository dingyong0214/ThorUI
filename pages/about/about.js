let globalData = getApp().globalData;
const util = require('../../utils/util.js');
Page({
  data: {
    version: globalData.version
  },
  onLoad: function(options) {
  },
  email: function () {
    wx.setClipboardData({
      data: '1062884167@qq.com',
      success(res) {
        wx.getClipboardData({
          success(res) {
            util.toast("邮箱已复制", 2000, true)
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