Page({
  data: {
    banner: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg"
    ],
    classify: [{
      img: "kongtiao",
      name: "空调"
    },
    {
      img: "Icewash",
      name: "冰洗"
    },
    {
      img: "heater",
      name: "热水器"
    },
    {
      img: "bed",
      name: "床"
    },
    {
      img: "boutique",
      name: "精品"
    }
    ],
    current: 0,
    headlines: [
      "苹果XR对比华为Mate20你会选择谁",
      "格兰仕暗示拜访拼多多后遭天猫打压，拼多多高层赞其有勇气",
      "耐克没进前十，今年Q1全球受欢迎品牌榜"
    ],
    productList: [{
      img: 1,
      name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）",
      sale: 599,
      factory: 899,
      time: {
        hours: 0,
        minute: 20,
        second: 26
      }
    },
    {
      img: 2,
      name: "德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",
      sale: 29,
      factory: 69,
      time: {
        hours: 0,
        minute: 30,
        second: 22
      }
    },
    {
      img: 3,
      name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
      sale: 299,
      factory: 699,
      time: {
        hours: 0,
        minute: 30,
        second: 56
      }
    },
    {
      img: 4,
      name: "百雀羚套装女补水保湿护肤品",
      sale: 1599,
      factory: 2899,
      time: {
        hours: 0,
        minute: 36,
        second: 12
      }
    },
    {
      img: 5,
      name: "百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋",
      sale: 599,
      factory: 899,
      time: {
        hours: 0,
        minute: 40,
        second: 40
      }
    },
    {
      img: 6,
      name: "短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤",
      sale: 599,
      factory: 899,
      time: {
        hours: 0,
        minute: 50,
        second: 20
      }
    },
    {
      img: 1,
      name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜",
      sale: 599,
      factory: 899,
      time: {
        hours: 1,
        minute: 0,
        second: 38
      }
    },
    {
      img: 2,
      name: "德国DMK进口牛奶",
      sale: 29,
      factory: 69,
      time: {
        hours: 1,
        minute: 10,
        second: 4
      }
    },
    {
      img: 3,
      name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
      sale: 299,
      factory: 699,
      time: {
        hours: 1,
        minute: 30,
        second: 0
      }
    },
    {
      img: 4,
      name: "百雀羚套装女补水保湿护肤品",
      sale: 1599,
      factory: 2899,
      time: {
        hours: 1,
        minute: 40,
        second: 17
      }
    }
    ]
  },
  onLoad: function (options) {

  },
  change: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  detail: function () {
    wx.navigateTo({
      url: '../productDetail/productDetail'
    })
  },
  more: function (e) {
    let key = e.currentTarget.dataset.key || "";
    wx.navigateTo({
      url: '../productList/productList?searchKey=' + key
    })
  }
})