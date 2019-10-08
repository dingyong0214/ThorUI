const util = require('../../../utils/util.js')
Page({
  data: {
    timeList: [1000, 2000, 3000, 19, 240000]
  },
  onLoad: function (options) {

  },
  endOfTime: function () {
    util.toast("倒计时结束，事件执行")
  }
})