const util = require('../../../utils/util.js')
Page({
  data: {
    proDropList: [{
      list: [{
        name: "trendsetter",
        selected: false
      }, {
        name: "维肯（Viken）",
        selected: false
      }, {
        name: "AORO",
        selected: false
      }, {
        name: "苏发",
        selected: false
      }, {
        name: "飞花令（FHL）",
        selected: false
      }, {
        name: "叶梦丝",
        selected: false
      }, {
        name: "ITZOOM",
        selected: false
      }, {
        name: "亿魅",
        selected: false
      }, {
        name: "LEIKS",
        selected: false
      }, {
        name: "雷克士",
        selected: false
      }, {
        name: "蕊芬妮",
        selected: false
      }, {
        name: "辉宏达",
        selected: false
      }, {
        name: "英西达",
        selected: false
      }, {
        name: "戴为",
        selected: false
      }, {
        name: "魔风者",
        selected: false
      }, {
        name: "即满",
        selected: false
      }, {
        name: "北比",
        selected: false
      }, {
        name: "娱浪",
        selected: false
      }, {
        name: "搞怪猪",
        selected: false
      }]
    }, {
      list: [{
        name: "线充套装",
        selected: false
      }, {
        name: "单条装",
        selected: false
      }, {
        name: "车载充电器",
        selected: false
      }, {
        name: "PD快充",
        selected: false
      }, {
        name: "数据线转换器",
        selected: false
      }, {
        name: "多条装",
        selected: false
      }, {
        name: "充电插头",
        selected: false
      }, {
        name: "无线充电器",
        selected: false
      }, {
        name: "座式充电器",
        selected: false
      }, {
        name: "万能充",
        selected: false
      }, {
        name: "转换器/转接线",
        selected: false
      }, {
        name: "MFI苹果认证",
        selected: false
      }, {
        name: "转换器",
        selected: false
      }, {
        name: "苹果认证",
        selected: false
      }]
    }, {
      list: [{
        name: "通用",
        selected: false
      }, {
        name: "vivo",
        selected: false
      }, {
        name: "OPPO",
        selected: false
      }, {
        name: "魅族",
        selected: false
      }, {
        name: "苹果",
        selected: false
      }, {
        name: "华为",
        selected: false
      }, {
        name: "三星",
        selected: false
      }, {
        name: "荣耀",
        selected: false
      }, {
        name: "诺基亚5",
        selected: false
      }, {
        name: "荣耀4",
        selected: false
      }, {
        name: "诺基",
        selected: false
      }, {
        name: "荣耀",
        selected: false
      }, {
        name: "诺基亚2",
        selected: false
      }, {
        name: "荣耀2",
        selected: false
      }, {
        name: "诺基",
        selected: false
      }]
    }],
    proDropData: [],
    proDropIndex: -1,
    dropShow: false,
    scrollTop: 0,
    dropdownlist: [{
      name: "微信支付",
      icon: "wechat",
      color: "#80D640",
      size: 30
    }, {
      name: "支付宝支付",
      icon: "alipay",
      color: "#00AAEE",
      size: 30
    }, {
      name: "银行卡支付",
      icon: "bankcard-fill",
      color: "#ff7900",
      size: 28
    }, {
      name: "微信支付",
      icon: "wechat",
      color: "#80D640",
      size: 30
    }, {
      name: "支付宝支付",
      icon: "alipay",
      color: "#00AAEE",
      size: 30
    }, {
      name: "银行卡支付",
      icon: "bankcard-fill",
      color: "#ff7900",
      size: 28
    }],
    dropdownShow: false,
    popupShow: false,
    shareList: [{
      share: [{
        name: "QQ",
        icon: "qq",
        color: "#07BDFD",
        size: 34
      },{
        name: "微信",
        icon: "wechat",
        color: "#80D640"
      }, {
          name: "朋友圈",
          icon: "moments",
          color: "#80D640",
          size: 32
        }, {
        name: "支付宝",
        icon: "alipay",
        color: "#00AAEE"
      }, {
        name: "新浪微博",
        icon: "sina",
        color: "#F9C718"
      }, {
        name: "小程序",
        icon: "applets",
        color: "#2BA348"
      }, {
        name: "钉钉",
        icon: "dingtalk",
        color: "#2DA0F1"
      }, {
        name: "浏览器打开",
        icon: "explore-fill",
        color: "#1695F7"
      }, {
        name: "邮件",
        icon: "mail-fill",
        color: "#2868E5"
      }]
    }, {
      operate: [{
        name: "投诉",
        icon: "warning",
        size: 30
      }, {
        name: "复制链接",
        icon: "link",
        size: 28
      }, {
        name: "刷新",
        icon: "refresh",
        size: 30
      }, {
        name: "搜索内容",
        icon: "search-2",
        size: 28
      }]
    }]
  },
  onLoad: function (options) { },
  btnDropChange: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      proDropData: [...this.data.proDropList[index].list],
      proDropIndex: index,
      dropShow: true
    }, () => {
      this.setData({
        scrollTop: 0
      })
    })
  },
  btnSelected: function (e) {
    let index = e.currentTarget.dataset.index;
    let selected = `proDropData[${index}].selected`;
    this.setData({
      [selected]: !this.data.proDropData[index].selected
    })
  },
  reset() {
    let arr = this.data.proDropData;
    for (let item of arr) {
      item.selected = false;
    }
    this.setData({
      proDropData: arr
    })
  },
  btnCloseDrop() {
    this.setData({
      scrollTop: 0,
      dropShow: false,
      proDropIndex: -1
    })
    this.reset()
  },
  screen() {
    util.toast("商城模板中功能~")
  },
  dropDownList() {
    this.setData({
      dropdownShow: !this.data.dropdownShow
    })
  },
  popup: function () {
    this.setData({
      popupShow: !this.data.popupShow
    })
  }
})