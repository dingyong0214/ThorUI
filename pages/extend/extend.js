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
        name: "新闻模板",
        desc: "新闻模板包含：新闻列表，新闻详情，评论等。",
        page: "news",
        like: false
      }, {
      name: "抽奖转盘",
      desc: "抽奖转盘，例子使用随机值进行抽奖，可以指定中奖奖项。",
      page: "luckdraw",
      like: false
    }, {
      name: "模板",
      desc: "计划前三套模板：新闻，商城，聊天。敬请期待！",
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