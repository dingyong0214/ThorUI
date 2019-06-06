const QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
let qqmapsdk;
Page({
  data: {
   cityName:"深圳",
    latitude:"",
    longitude:""
  },
  onLoad:function(){
    qqmapsdk= new QQMapWX({
      key: 'W4WBZ-TUD65-IDAIR-QPM36-HMFQ5-CGBZP'
    });
    setTimeout(()=>{
      this.getLonglatByLocation()
    },200)
  },
  // 位置获取经纬度
  getLonglatByLocation: function () {
    let that = this;
    qqmapsdk.geocoder({
      address: that.data.cityName,
      success: function (res) {
        console.log(res)
        that.setData({
          latitude: res.result.location.lat,
          longitude: res.result.location.lng
        })
      }
    })
  },
  //经纬度获取位置
  getLocationByLonglat: function (latitude, longitude){
    qqmapsdk.reverseGeocoder({
      location: {
        latitude:latitude,
        longitude:longitude
      },
      success: function (res) {
        let city = res.result.address_component.city;
      }
    })
  },
  selectCity:function(){
    wx.navigateTo({
      url: '../selectCity/selectCity',
    })
  },
  emit:function(name){
    this.setData({
      cityName:name
    },()=>{
      this.getLonglatByLocation()
    })
  }
})