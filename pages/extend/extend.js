const util = require('../../utils/util.js')
let globalData = getApp().globalData;
Page({
  data: {
    list: [{
      name: "消息提示",
      desc: "包括顶部提示，居中提示，底部提示。可切换提示框背景颜色。",
      page: "msgtips",
      like: false
    }, {
      name: "吸顶容器",
      desc: "sticky吸顶容器，根据实际场景选择使用。",
      page: "sticky",
      like: false
    }, {
      name: "数字键盘",
      desc: "例子包括6位数和4位数输入，长度动态传入，根据实际情况使用。",
      page: "keyboard",
      like: false
    }, {
      name: "时间轴",
      desc: "time-axis时间轴，样式可自定义，例子实现了物流时间轴，在【thor=>日志】中也有使用。",
      page: "timeaxis",
      like: false
    }, {
      name: "滚动消息",
      desc: "滚动消息：包括顶部通告栏，滚动新闻，以及搜索框中出现的热搜产品。",
      page: "rollingNews",
      like: false
    }, {
      name: "弹层下拉选择",
      desc: "包含顶部下拉选择列表、输入框下拉选择以及底部分享弹层。",
      page: "popup",
      like: false
    }, {
      name: "ActionSheet",
      desc: "操作菜单:可加入提示信息，可单独设置字体样式。",
      page: "actionsheet",
      like: false
    }, {
      name: "NumberBox",
      desc: "数字框:可设置步长，支持浮点数，支持调整样式(可单独设置)。",
      page: "numberbox",
      like: false
    }, {
      name: "Rate评分",
        desc: "Rate评分:可设置大小颜色，支持半星，支持手势touch选择。",
      page: "rate",
      like: false
    }, {
      name: "Modal弹框",
      desc: "Modal弹框:可设置按钮数，按钮样式，提示文字样式等，还可自定义弹框内容。",
      page: "modal",
      like: false
    }, {
      name: "倒计时",
      desc: "倒计时:时分秒倒计时，支持设置大小，颜色等",
      page: "countdown",
      like: false
    }, {
      name: "分隔符",
      desc: "Divider分隔符：可设置占据高度，线条宽度，颜色等",
      page: "divider",
      like: false
    }, {
      name: "卡片轮播",
      desc: "卡片轮播:包含顶部轮播，秒杀商品轮播等",
      page: "carousel",
      like: false
    }, {
      name: "回到顶部",
      desc: "回到顶部:可设置bottom，right值，可设置距离顶部多少距离显示。",
      page: "goTop",
      like: false
    }, {
      name: "Button按钮",
      desc: "Button按钮:可自定义宽高，字体大小等。",
      page: "button",
      like: false
    }, {
      name: "alert弹框",
      desc: "alert弹框:可设置提示文本，按钮文本及样式。",
      page: "alert",
      like: false
    }, {
      name: "tips提示",
      desc: "tips提示:默认居中显示，可设置。带操作按钮，可隐藏。",
      page: "tips",
      like: false
    }, {
      name: "toast提示",
      desc: "toast提示：带icon提示，可隐藏，居中显示。",
      page: "toast",
      like: false
    }, {
      name: "表单验证",
      desc: "Form Validation：常用的表单验证,具体查看详情。",
      page: "formValidation",
      like: false
    }, {
      name: "日期时间选择",
      desc: "picker-view扩展，日期时间选择器，可设置默认显示，可根据需要调整选择的类型。",
      page: "picker-dateTime",
      like: false
    }, {
      name: "复制文本",
      desc: "clipboard，复制到剪贴板，兼容H5，APP和小程序依然使用平台自带api。",
      page: "clipboard",
      like: false
    }, {
      name: "悬浮按钮",
      desc: "fab，拓展出来的按钮不应多于6个，否则违反了作为悬浮按钮的快速、高效的原则。",
      page: "fab",
      like: false
    }, {
      name: "Tabbar",
      desc: "Tabbar，类似uni-app原生tabbar组件，可用于自定义tabbar。",
      page: "tabbar",
      like: false
    }, {
      name: "tabs标签页",
      desc: "tabs标签页，支持设置字体颜色、字体大小、背景色、高度等。",
      page: "tabs",
      like: false
    }, {
      name: "折叠面板",
      desc: "collapse折叠面板，用来折叠/显示过长的内容或者是列表。内容及样式自定义。",
      page: "collapse",
      like: false
    }, {
      name: "图片上传",
      desc: "upload，图片上传，需要根据上传接口实际返回数据进行适当调整 。",
      page: "upload",
      like: false
    }, {
      name: "骨架屏",
      desc: "数据请求时常见到锁屏的loading动画，而现在越来越多的产品倾向于使用Skeleton Screen替代 。",
      page: "skeleton",
      like: false
    }, {
      name: "网络请求",
      desc: "Network request，发起网络请求，简单的封装与使用 。",
      page: "request",
      like: false
    }, {
      name: "抽奖转盘",
      desc: "抽奖转盘，例子使用随机值进行抽奖，可以指定中奖奖项。",
      page: "luckdraw",
      like: false
    }, {
      name: "模板",
      desc: "计划前三套模板：新闻，聊天，商城。敬请期待！",
      page: "template",
      like: false
    }]
  },
  onLoad: function(options) {
    if (!wx.getStorageSync("thorui_" + globalData.version)) {
      wx.setStorageSync("thorui_" + globalData.version, "1")
      wx.removeTabBarBadge({
        index: 1
      })
    }
    util.request("/Home/GetStatus", {}, "GET", false, true).then((res) => {
      if (res.code == 100 && res.data == 1) {
        getApp().globalData.isOnline = true
        this.setData({
          list: this.data.list.concat([{
            name: "聊天模板",
            desc: "聊天模板包含：消息列表，好友列表，聊天界面等。",
            page: "msgList",
            like: false
          }, {
            name: "新闻模板",
            desc: "新闻模板包含：新闻列表，新闻详情，评论等。",
            page: "news",
            like: false
          }, {
            name: "商城模板",
            desc: "商城模板包含：商城首页，商城列表，商城详情，购物车等。",
            page: "mall",
            like: false
          }])
        })
      }
    }).catch((res) => {})
  },
  detail: function(e) {
    const page = e.currentTarget.id;
    wx.navigateTo({
      url: `../extend-view/${page}/${page}`
    })
  },
  like: function(e) {
    let index = e.currentTarget.id;
    let like = `list[${index}].like`;
    this.setData({
      [like]: !this.data.list[index].like
    })
    //还未接入接口，后期会记录到数据库
    //util.toast("感谢您的支持")
  },
  onShareAppMessage: function(e) {
    let index = e.target.dataset.id;
    let title = this.data.list[index].name;
    return {
      title: title
    }
  }
})