const util = require('../../../utils/util.js')
Page({
  data: {
    value: 0,
    value2: 1,
    value3: 1,
    value4: 0,
    value5: 1,
    value6: 1,
    value7: 1
  },
  onLoad: function (options) { },
  change: function (e) {
    this.setData({
      value: e.detail.value
    })
  },
  change2: function (e) {
    this.setData({
      value2: e.detail.value
    })
  },
  change3: function (e) {
    this.setData({
      value3: e.detail.value
    })
  },
  change4: function (e) {
    this.setData({
      value4: e.detail.value
    })
  },
  change5: function (e) {
    this.setData({
      value5: e.detail.value
    })
  },
  change6: function (e) {
    this.setData({
      value6: e.detail.value
    })
  },
  change7: function (e) {
    this.setData({
      value7: e.detail.value
    })
  }
})