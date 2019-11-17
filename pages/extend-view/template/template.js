const util = require('../../../utils/util.js')
Page({
  data: {
    stepList: [{
      name: "preface",
      state: 1,
      stateText: "",
      desc: ["计划前三套模板：新闻、商城、聊天。完成后再逐步追加，敬请期待！"],
      page: "news"
    }, {
      name: "新闻模板",
      state: 1,
      stateText: "（100%）",
      desc: ["新闻模板包含：新闻列表，新闻详情，评论等"],
      page: "news"
    }, {
      name: "聊天模板",
      state: 1,
      stateText: "（100%）",
      desc: ["聊天模板包含：消息列表，好友列表，聊天界面等"],
      page: "msgList"
    }, {
      name: "商城模板",
      state: 0,
      stateText: "（进度100%）",
      desc: ["商城模板包含：商品列表，商品搜索，商品详情，购物车，结算页面，我的订单等"],
      page: "mall"
    }, {
      name: "订餐",
      state: 0,
      stateText: "（进度40%）",
      desc: ["订餐模板：列表，评价，购物车，订单，我的等"],
      page: ""
    }, {
      name: "短视频",
      state: 0,
      stateText: "（进度60%）",
      desc: ["短视频播放，类似抖音视频模板"],
      page: ""
    }, {
      name: "其它模板",
      state: 0,
      stateText: "",
      desc: ["更多内容敬请期待！"],
      page: "news"
    }],
    isOnline: false
  },
  onLoad: function(options) {
    util.request("/Home/GetStatus", {}, "GET", false, true).then((res) => {
      if (res.code == 100 && res.data == 1) {
        this.setData({
          isOnline: true
        })
      }
    }).catch((res) => {})
  },
  template: function(e) {
    if (!this.data.isOnline) return;
    let index = e.currentTarget.dataset.index;
    let state = this.data.stepList[index].state;
    let page = this.data.stepList[index].page;
    if (state == 1 || index == 3) {
      wx.navigateTo({
        url: `../${page}/${page}`
      })
    } else {
      util.toast("功能开发中~")
    }
  },
  currentStep: function() {
    if (!this.data.isOnline) return;
    wx.navigateTo({
      url: '../msgList/msgList'
    })
  }
})