const util = require('../../utils/util.js')
const qrCode = require('../../libs/weapp-qrcode.js');
Page({
  data: {
    show: false, //android上conver-view盖不住canvas的bug,可以做平台判断
    couponNum: 4,
    couponList: [{
      name: "购物券",
      code: "xyz0900100200",
      invalidTime: "2019-07-01",
      spread: true,
      sendTime: "2019-06-01",
      suitStore: "全部",
      useDescribe: ["1、可在任何适用商家内消费", "2、解释权归Thor所有"]
    }, {
      name: "打车券",
      code: "xyz0900100300",
      invalidTime: "2019-07-01",
      spread: false,
      sendTime: "2019-06-01",
      suitStore: "滴滴打车",
      useDescribe: ["1、可在任何适用商家内消费", "2、解释权归Thor所有"]
    }, {
      name: "餐饮券",
      code: "xyz0900100400",
      invalidTime: "2019-07-01",
      spread: false,
      sendTime: "2019-06-01",
      suitStore: "麦当劳",
      useDescribe: ["1、可在任何适用商家内消费", "2、解释权归Thor所有"]
    }, {
      name: "服务券",
      code: "xyz0900100500",
      invalidTime: "2019-07-01",
      spread: false,
      sendTime: "2019-06-01",
      suitStore: "如家按摩店",
      useDescribe: ["1、可在任何适用商家内消费", "2、解释权归Thor所有"]
    }],
    qrcode_w: 130
  },
  onLoad: function(options) {
    wx.getSystemInfo({ // 判断系统
      success: (res) => {
        if (res.system.indexOf('iOS') > -1 || res.platform.indexOf('ios') > -1) {
          this.setData({
            show: true
          })
        }
      }
    });
    const W = wx.getSystemInfoSync().windowWidth;
    const rate = 750.0 / W;
    //利用比例将260rpx转换为px
    const qrcode_w = 260 / rate;
    this.setData({
      qrcode_w: qrcode_w
    }, () => {
      this.couponQrCode(this.data.couponList[0].code, "couponQrcode0")
    });
  },
  spread: function(e) {
    let index = e.currentTarget.dataset.index
    let couponList = this.data.couponList
    if (!couponList[index].spread) {
      this.couponQrCode(couponList[index].code, "couponQrcode" + index)
    }
    couponList[index].spread = !couponList[index].spread
    this.setData({
      couponList: couponList
    })
  },
  // 二维码生成工具
  couponQrCode(text, canvasId) {
    new qrCode(canvasId, {
      text: text,
      width: this.data.qrcode_w,
      height: this.data.qrcode_w,
      colorDark: "#333333",
      colorLight: "#FFFFFF",
      correctLevel: qrCode.CorrectLevel.H
    });
    if (canvasId == "couponQrcode0") {
      setTimeout(() => {
        if(!this.data.show){
          this.setData({
            show: true
          })
        }
      }, 0)
    }
  }

})