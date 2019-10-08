const util = require('../../../utils/util.js')
Page({
  data: {
    left: 0,
    right: 80,
    bottom: 100,
    bgColor: "#5677fc",
    btnList: [],
    list: [{
      bgColor: "#16C2C2",
      //图标/图片地址
      imgUrl: "/static/images/fab/fab_about.png",
      //图片高度 rpx
      imgHeight: 64,
      //图片宽度 rpx
      imgWidth: 64,
      //名称
      text: "关于",
      //字体大小
      fontSize: 34,
      //字体颜色
      color: "#fff"
    }, {
      bgColor: "#64B532",
      //图标/图片地址
      imgUrl: "/static/images/fab/fab_share.png",
      //图片高度 rpx
      imgHeight: 64,
      //图片宽度 rpx
      imgWidth: 64,
      //名称
      text: "分享",
      //字体大小
      fontSize: 34,
      //字体颜色
      color: "#fff"
    }, {
      bgColor: "#FFA000",
      //图标/图片地址
      imgUrl: "/static/images/fab/fab_reward.png",
      //图片高度 rpx
      imgHeight: 64,
      //图片宽度 rpx
      imgWidth: 64,
      //名称
      text: "赞赏",
      //字体大小
      fontSize: 34,
      //字体颜色
      color: "#fff"
    }],
    list2: [{
      bgColor: "#16C2C2",
      //名称
      text: "关于",
      //字体大小
      fontSize: 28,
      //字体颜色
      color: "#fff"
    }, {
      bgColor: "#64B532",
      //名称
      text: "分享",
      //字体大小
      fontSize: 28,
      //字体颜色
      color: "#fff"
    }, {
      bgColor: "#FFA000",
      //名称
      text: "赞赏",
      //字体大小
      fontSize: 28,
      //字体颜色
      color: "#fff"
    }]
  },
  onLoad(options){
    this.setData({
      btnList: [...this.data.list]
    })
  },
  change(e) {
    let type = Number(e.currentTarget.dataset.type);
    switch (type) {
      case 1:
        this.setData({
          left: 80,
          right: 0
        })
        break;
      case 2:
        this.setData({
          left: 0,
          right: 80
        })
        break;
      case 3:
        this.setData({
          bgColor: "#FF0000"
        })
        break;
      case 4:
        this.setData({
          btnList: []
        })
        break;
      case 5:
        this.setData({
          btnList: [...this.data.list]
        })
        break;
      case 6:
        this.setData({
          btnList: [...this.data.list2]
        })
        break;
      default:
        break;
    }
    util.toast("切换成功，点击查看效果")
  },
  onClick(e) {
    let index = e.detail.index
    switch (index) {
      case -1:
        util.toast("您点击了悬浮按钮")
        break;
      case 0:
        wx.navigateTo({
          url: "/pages/about/about"
        })
        break;
      case 1:
        this.clipboard("https://thorui.cn/")
        break;
      case 2:
        wx.previewImage({
          urls: ["https://thorui.cn/img/reward.jpg"]
        })
        break;
      default:
        break;
    }
  },
  clipboard: function(data) {
    wx.setClipboardData({
      data: data,
      success(res) {
        wx.getClipboardData({
          success(res) {
            util.toast("分享链接已复制", 2000, true)
          }
        })
      }
    })
  }
})