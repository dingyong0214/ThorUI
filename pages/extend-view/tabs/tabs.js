Page({
  data: {
    currentTab: 0,
    bgColor: "linear-gradient(90deg, rgb(255, 118, 38), rgb(252, 30, 82))",
    navbar: [{
      name: "正在疯抢"
    }, {
      name: "即将开始"
    }],
    tabs: [{
      name: "正在疯抢"
    }, {
      name: "即将开始"
    }, {
      name: "明日预告"
    }],
    tabs2: [{
      name: "今日特拼"
    }, {
      name: "全部"
    }, {
      name: "新品"
    }, {
      name: "禁用状态",
      disabled: true
    }],
    tabs3: [{
      name: "今日特拼"
    }, {
      name: "全部"
    }, {
      name: "新品"
    }, {
      name: "品牌"
    }]
  },
  onLoad: function(options) {

  },
  change(e) {
    this.setData({
      currentTab: e.detail.index
    })
  },
  goNavBar() {
    wx.navigateTo({
      url: "/pages/navbar-1/navbar-1"
    })
  }
})