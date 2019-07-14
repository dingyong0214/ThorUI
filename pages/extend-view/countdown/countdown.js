const util = require('../../../utils/util.js')
Page({
  data: {
    timeList: [{
      hours: 1,
      minute: 40,
      second: 17
    }, {
      hours: 2,
      minute: 20,
      second: 58
    }, {
      minute: 19,
      second: 36
    }, {
      second: 20
    }]
  },
  onLoad: function (options) {

  },
  endOfTime: function () {
    util.toast("倒计时结束，事件执行")
  }
})