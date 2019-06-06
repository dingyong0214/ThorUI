const amap = require('../../libs/amap-wx.js')
Page({
  data: {
    amapPlugin: null,
    key: "6799b5f6f88d3d9fb52ac244855a8759",
    obj:{}
  },
  onLoad: function (options) {
    this.setData({
      amapPlugin: new amap.AMapWX({
        key: this.data.key
      })
    },()=>{
      this.getWeather()
    })
  },
  //获取天气数据
  getWeather:function(){
    wx.showLoading({
      title: '请稍候...'
    })
    this.data.amapPlugin.getWeather({
      success: (data) =>{
        //成功回调
        //console.log(data)
        wx.hideLoading()
        this.setData({
          obj:data
        })
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  },
  back(){
    wx.navigateBack()
  }
})