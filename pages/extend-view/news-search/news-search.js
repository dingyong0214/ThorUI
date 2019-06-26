const util = require('../../../utils/util.js')
Page({
  data: {
    history: [
      "美洲杯",
      "D站观点",
      "C罗",
      "早安D站",
      "2019退役球星",
      "女神大会",
      "德利赫特",
      "托雷斯",
      "自热火锅",
      "华为手机",
      "有机酸奶"
    ],
    hot: [
      "德利赫特",
      "托雷斯",
      "早安D站",
      "D站观点",
      "德利赫特",
      "美洲杯",
      "华为手机",
      "C罗",
      "自热火锅",
      "2019退役球星",
      "女神大会"
    ],
    key: "",
    showActionSheet: false,
    tips: "确认清空搜索历史吗？"
  },
  onLoad: function(options) {

  },
  back: function() {
    wx.navigateBack();
  },
  input: function(e) {
    let key = util.trim(e.detail.value);
    this.setData({
      key: key
    })
  },
  cleanKey: function() {
    this.setData({
      key: ''
    });
  },
  closeActionSheet: function() {
    this.setData({
      showActionSheet: false
    })
  },
  openActionSheet: function() {
    this.setData({
      showActionSheet:true
    })
  },
  itemClick: function(e) {
    let index = e.detail.index;
    if (index == 0) {
      this.setData({
        showActionSheet: false,
        history: []
      })
    }
  }
})