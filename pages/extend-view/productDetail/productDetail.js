const util = require('../../../utils/util.js')
Page({
  data: {
    height: 64, //header高度
    top: 0, //标题图标距离顶部距离
    scrollH: 0, //滚动总高度
    opcity: 0,
    iconOpcity: 0.5,
    banner: [
      "https://www.thorui.cn/img/product/11.jpg",
      "https://www.thorui.cn/img/product/2.png",
      "https://www.thorui.cn/img/product/33.jpg",
      "https://www.thorui.cn/img/product/4.png",
      "https://www.thorui.cn/img/product/55.jpg",
      "https://www.thorui.cn/img/product/6.png",
      "https://www.thorui.cn/img/product/7.jpg",
      "https://www.thorui.cn/img/product/8.jpg"
    ],
    bannerIndex: 0,
    topMenu: [{
      icon: "message",
      text: "消息",
      size: 26,
      badge: 3
    }, {
      icon: "home",
      text: "首页",
      size: 23,
      badge: 0
    }, {
      icon: "people",
      text: "我的",
      size: 26,
      badge: 0
    }, {
      icon: "cart",
      text: "购物车",
      size: 23,
      badge: 2
    }, {
      icon: "kefu",
      text: "客服小蜜",
      size: 26,
      badge: 0
    }, {
      icon: "feedback",
      text: "我要反馈",
      size: 23,
      badge: 0
    }, {
      icon: "share",
      text: "分享",
      size: 26,
      badge: 0
    }],
    menuShow: false,
    popupShow: false,
    value: 1,
    collected: false
  },
  onLoad: function (options) {
    let obj = wx.getMenuButtonBoundingClientRect();
    this.setData({
      width: obj.left,
      height: obj.top + obj.height + 8,
      top: obj.top + (obj.height - 32) / 2
    }, () => {
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            scrollH: res.windowWidth
          })
        }
      })
    });
  },
  bannerChange: function (e) {
    this.setData({
      bannerIndex: e.detail.current
    })
  },
  previewImage: function (e) {
    let index = e.currentTarget.dataset.index;
    wx.previewImage({
      current: this.data.banner[index],
      urls: this.data.banner
    })
  },
  //页面滚动执行方式
  onPageScroll(e) {
    let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
    let opcity = scroll / this.data.scrollH;
    if (this.data.opcity >= 1 && opcity >= 1) {
      return;
    }
    this.setData({
      opcity: opcity,
      iconOpcity: 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
    })
  },
  back: function () {
    wx.navigateBack()
  },
  openMenu: function () {
    this.setData({
      menuShow: true
    })
  },
  closeMenu: function () {
    this.setData({
      menuShow: false
    })
  },
  showPopup: function () {
    this.setData({
      popupShow: true
    })
  },
  hidePopup: function () {
    this.setData({
      popupShow: false
    })
  },
  change: function (e) {
    this.setData({
      value: e.detail.value
    })
  },
  collecting: function () {
    this.setData({
      collected: !this.data.collected
    })
  },
  common: function () {
    util.toast("功能开发中~")
  },
  submit() {
    this.hidePopup()
    wx.navigateTo({
      url: '../mall-extend/submitOrder/submitOrder'
    })
  },
  coupon(){
    wx.navigateTo({
      url: '../mall-extend/coupon/coupon'
    })
  }
})