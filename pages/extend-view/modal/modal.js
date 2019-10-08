const util = require('../../../utils/util.js')
Page({
  data: {
    modal: false,
    modal2: false,
    modal3: false,
    button3: [{
      text: "确定",
      type: 'red'
    }],
    modal4: false,
    button4: [{
      text: "微信",
      type: 'green',
      plain: true
    }, {
      text: "支付宝",
      plain: true
    }, {
      text: "银行卡",
      type: 'red',
      plain: true
    }],
    modal5: false,
    modal6: false,
    button6: [{
      text: "取消",
      type: 'gray'
    }, {
      text: "确定"
    }],
    modal7: false,
    modal8: false,
    modal9: false
  },
  onLoad: function (options) { },
  show() {
    this.setData({
      modal: true
    })
  },
  show2() {
    this.setData({
      modal2: true
    })
  },
  show3() {
    this.setData({
      modal3: true
    })
  },
  show4() {
    this.setData({
      modal4: true
    })
  },
  show5() {
    this.setData({
      modal5: true
    })
  },
  show6() {
    this.setData({
      modal6: true
    })
  },
  show7() {
    this.setData({
      modal7: true
    })
  },
  show8() {
    this.setData({
      modal8: true
    })
  },
  show9() {
    this.setData({
      modal9: true
    })
  },
  hide() {
    this.setData({
      modal: false
    })
  },
  hide2() {
    this.setData({
      modal2: false
    })
  },
  hide3() {
    this.setData({
      modal3: false
    })
  },
  hide4() {
    this.setData({
      modal4: false
    })
  },
  hide5() {
    this.setData({
      modal5: false
    })
  },
  hide6() {
    this.setData({
      modal6: false
    })
  },
  hide7() {
    this.setData({
      modal7: false
    })
  },
  hide8() {
    this.setData({
      modal8: false
    })
  },
  hide9() {
    this.setData({
      modal9: false
    })
  },
  handleClick(e) {
    let index = e.detail.index;
    if (index === 0) {
      util.toast("你点击了取消按钮")
    } else {
      util.toast("你点击了确定按钮")
    }
    this.hide()
  },
  handleClick2(e) {
    let index = e.detail.index;
    if (index === 0) {
      util.toast("你点击了取消按钮")
    } else {
      util.toast("你点击了确定按钮")
    }
    this.hide2()
  },
  handleClick3(e) {
    let index = e.detail.index;
    if (index === 0) {
      util.toast("你点击了确定按钮")
    }
    this.hide3()
  },
  handleClick4(e) {
    let index = e.detail.index;
    util.toast("你点击的按钮index：" + index)
    this.hide4()
  },
  handleClick5(e) {
    let index = e.detail.index;
    util.toast("你点击的按钮index：" + index)
    this.hide5()
  },
  handleClick6(e) {
    let index = e.detail.index;
    util.toast("你点击的按钮index：" + index)
    this.hide6()
  },
  handleClick7(e) {
    let index = e.detail.index;
    util.toast("你点击的按钮index：" + index)
    this.hide7()
  },
  handleClick8() {
    util.toast("你点击了自定义按钮")
    this.hide8()
  }
})