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

    // type：天气的类型。默认是live（实时天气），可设置成forecast（预报天气）。
    // city：城市对应的adcode，非必填。为空时，基于当前位置所在区域。 如：440300，返回深圳市天气
    // success(data) ：调用成功的回调函数。
    // fail(info) ：调用失败的回调函数。
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