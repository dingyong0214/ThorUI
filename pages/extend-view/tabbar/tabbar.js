Page({
  data: {
    current: 0,
    tabBar: [{
        "pagePath": "/pages/index/index",
        "text": "code",
        "iconPath": "/static/images/tabbar/code_gray.png",
        "selectedIconPath": "/static/images/tabbar/code_active.png",
        "num": 1,
        "isDot": false
      },
      {
        "pagePath": "/pages/extend/extend",
        "text": "extend",
        "iconPath": "/static/images/tabbar/extend_gray.png",
        "selectedIconPath": "/static/images/tabbar/extend_active.png",
        "num": 2,
        "isDot": true
      },
      {
        "pagePath": "/pages/my/my",
        "text": "thor",
        "iconPath": "/static/images/tabbar/thor_gray.png",
        "selectedIconPath": "/static/images/tabbar/thor_active.png",
        "verify": true
      }
    ],
    tabBar2: [{
        "pagePath": "/pages/index/index",
        "text": "code",
        "iconPath": "/static/images/tabbar/code_gray.png",
        "selectedIconPath": "/static/images/tabbar/code_active.png"
      },
      {
        "pagePath": "",
        "text": "extend",
        "iconPath": "/static/images/tabbar/release.png",
        "hump": true,
        "selectedIconPath": "/static/images/tabbar/release.png"
      },
      {
        "pagePath": "/pages/my/my",
        "text": "thor",
        "iconPath": "/static/images/tabbar/thor_gray.png",
        "selectedIconPath": "/static/images/tabbar/thor_active.png",
        "num": 2,
        "isDot": true,
        "verify": true
      }
    ]
  },
  onLoad: function(options) {

  },
  tabbarSwitch(e) {
    let isLogin = false
    if (e.detail.verify && !isLogin) {
      wx.showToast({
        title: '您还未登录，请先登录',
        icon: "none"
      })
    } else {
      this.setData({
        current: e.detail.index
      })
    }
  }
})