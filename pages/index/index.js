const util = require('../../utils/util.js')
Page({
  onLoad: function(options) {
    if(!wx.getStorageSync("tuiReadDoc")){
      wx.setTabBarBadge({
        index: 0,
        text: '1'
      })
    }
    setTimeout(() => {
      util.request("/Home/GetStatus", {}, "GET", false, true).then((res) => {
        if (res.code == 100 && res.data == 1) {
          getApp().globalData.isOnline = true
          this.setData({
            list: this.data.list.concat([{
                id: 'class',
                name: '分类菜单',
                open: false,
                pages: [{
                    name: "顶部选项卡",
                    page: "navbar-1"
                  },
                  {
                    name: "垂直分类",
                    page: "navbar-2"
                  }
                ]
              },
              {
                id: 'refresh',
                name: '上拉加载下拉刷新',
                open: false,
                pages: [{
                  name: "新闻列表",
                  page: "news"
                }, {
                  name: "商品列表",
                  page: "product"
                }]
              }
            ])
          })
        }
      }).catch((res) => {})
    }, 50)
    // 在页面中定义插屏广告
    let interstitialAd = null

    // 在页面onLoad回调事件中创建插屏广告实例
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-44bbe9a9087910e3'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
    }

    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
  },
  data: {
    list: [{
        id: 'basic',
        name: '基础组件',
        open: false,
        pages: [{
          name: "基础组件",
          page: "basic"
        }]
      }, {
        id: 'map',
        name: '地图',
        open: false,
        pages: [{
          name: "拖拽定位",
          page: "location"
        }, {
          name: "周边兴趣点",
          page: "maps"
        }, {
          name: "地址解析",
          page: "longlat"
        }, {
          name: "天气",
          page: "weather"
        }]
      },
      {
        id: 'index',
        name: '索引列表',
        open: false,
        pages: [{
          name: "城市选择",
          page: "selectCity"
        }, {
          name: "索引列表",
          page: "indexList"
          }, {
            name: "索引&吸顶效果",
            page: "friendsList-2"
          }]
      },
      {
        id: 'nav',
        name: '三级联动',
        open: false,
        pages: [{
          name: "picker三级联动",
          page: "picker"
        }, {
          name: "picker-view三级联动",
          page: "picker-view"
        }]
      },
      {
        id: 'canvas',
        name: '二维码生成',
        open: false,
        pages: [{
          name: "二维码生成",
          page: "qrcode"
        }]
      },
      {
        id: 'drawer',
        name: 'drawer抽屉',
        open: false,
        pages: [{
          name: "drawer抽屉",
          page: "drawer"
        }]
      },
      {
        id: 'swipe',
        name: '滑动菜单',
        open: false,
        pages: [{
          name: "滑动菜单",
          page: "swipe-action"
        }]
      }
    ]
  },
  kindToggle: function(e) {
    var id = e.currentTarget.id,
      list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  emit(city) {
    setTimeout(() => {
      wx.showToast({
        title: "您选择了：" + city,
        icon: "none"
      })
    }, 350)
  },
  href(e) {
    let page = e.currentTarget.dataset.page
    if (page == "subway") {
      let plugin = requirePlugin("subway");
      let key = 'ZEHBZ-UK5K4-CN5UN-XX4YM-4LS66-IEFWH';
      let referer = 'ThorUI';
      wx.navigateTo({
        url: 'plugin://subway/index?key=' + key + '&referer=' + referer
      });
    }
  },
  github: function() {
    wx.setClipboardData({
      data: 'https://github.com/dingyong0214/ThorUI',
      success(res) {
        wx.getClipboardData({
          success(res) {
            util.toast("链接已复制", 2000, true)
          }
        })
      }
    })
  },
  template: function() {
    wx.navigateTo({
      url: '../extend-view/template/template'
    })
  },
  doc: function() {
    wx.setStorageSync("tuiReadDoc", "1")
    wx.removeTabBarBadge({
      index:0
    })
    wx.navigateTo({
      url: '../basic-view/doc/doc'
    })
  }
});