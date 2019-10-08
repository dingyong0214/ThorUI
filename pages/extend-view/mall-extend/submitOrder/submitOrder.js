Page({
  data: {
    hasCoupon: true,
    insufficient: false
  },
  onLoad: function (options) {

  },
  chooseAddr() {
    wx.navigateTo({
      url: "../address/address"
    })
  },
  btnPay() {
    wx.navigateTo({
      url: "../success/success"
    })
  }
})