const util = require('../../utils/util.js')
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
      desc: "Rate评分:可设置星星数，可设置大小颜色。",
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
      name: "新闻模板",
      desc: "新闻模板包含：新闻列表，新闻详情，评论等。",
      page: "news",
      like: false
    }, {
      name: "聊天模板",
      desc: "聊天模板包含：消息列表，好友列表，聊天界面等。",
      page: "msgList",
      like: false
    }, {
      name: "商城模板",
      desc: "商城模板包含：商城首页，商城列表，商城详情，购物车等。",
      page: "mall",
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