const util = require('../../../utils/util.js')
Page({
  data: {
    show: false,
    numberArr: [],
    pwdArr: ["", "", "", "", "", ""],
    temp: ["", "", "", "", "", ""]
  },
  onLoad: function(options) {},
  switchKeyboard(e) {
    let length = e.currentTarget.dataset.length;
    let arr = ["", "", "", "", "", ""]
    if (length == 4) {
      arr = ["", "", "", ""]
    }
    this.setData({
      pwdArr: arr,
      temp: arr,
      numberArr: []
    }, () => {
      this.setData({
        show: true
      })
    })
  },
  closeKeyboard: function() {
    this.setData({
      show: false,
      numberArr: [],
      pwdArr: this.data.temp
    })
  },
  getPwd: function() {
    //判断并取出密码
    if (this.data.numberArr.length === this.data.pwdArr.length) {
      wx.showLoading({
        title: '模拟提交...',
        mask: true
      })
      setTimeout(() => {
        let pwd = this.data.numberArr.join('')
        this.closeKeyboard();
        util.toast("您输入的密码为：" + pwd);
      }, 1000);
    }
  },
  keyboardClick: function(e) {
    let numberArr = this.data.numberArr;
    let pwdArr = this.data.pwdArr;
    let index = e.detail.index;
    if (numberArr.length === pwdArr.length || index == undefined) {
      return;
    }
    if (index == 9) { //取消键
      this.closeKeyboard();
      return;
    } else if (index == 11) {
      //退格键
      let len = numberArr.length;
      if (len) {
        pwdArr.splice(len - 1, 1, "");
      } else {
        pwdArr = this.data.temp;
      }
      numberArr.pop()
    } else if (index == 10) {
      numberArr.push(0);
      pwdArr.splice(numberArr.length - 1, 1, "●");
    } else {
      numberArr.push(index + 1);
      pwdArr.splice(numberArr.length - 1, 1, "●");
    }
    this.setData({
      numberArr: numberArr,
      pwdArr: pwdArr
    }, () => {
      this.getPwd()
    })
  },
  lockscreen: function() {
    wx.navigateTo({
      url: '../lockscreen/lockscreen'
    })
  }
})