//const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberName: '135****7708', //昵称
    isLogin: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onShow: function() {

  },
  logout: function() {
    wx.showModal({
      title: '提示',
      content: '确定退出登录？',
      confirmColor: '#5677FC',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '您点击了确定，功能完善中~',
            icon:"none"
          })
          // wx.navigateTo({
          //   url: '../login/login'
          // })
        }
      }
    });
  },
  edit(){
    wx.showToast({
      title: '功能开发中~',
      icon: "none"
    })
  },
  tapEvent:function(e){
    let index = e.currentTarget.dataset.index;
    if(index==1){
      let key = e.currentTarget.dataset.key;
      wx.navigateTo({
        url: '../maps/maps?key=' + key
      })
    }else{
      this.previewReward()
      wx.showToast({
        title: '功能开发中~',
        icon: "none"
      })
    }
  },
  previewReward:function(){
    wx.previewImage({
      current: 'http://psl8fdw0x.bkt.clouddn.com/reward.jpg', // 当前显示图片的http链接
      urls: ["http://psl8fdw0x.bkt.clouddn.com/reward.jpg"] // 需要预览的图片http链接列表
    })
  }
})