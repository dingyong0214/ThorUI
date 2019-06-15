const util = require('../../utils/util.js')
let globalData = getApp().globalData
Page({
  data: {
    disabled: false,
    btnText: "获取验证码",
    mobile: "",
    type:"primary",
    code:""
  },
  onLoad: function(options) {},
  getRandom: function (u) {
    let rnd = "";
    u = u || 6;
    for (var i = 0; i < u; i++) {
      rnd += Math.floor(Math.random() * 10);
    }
    return Number(rnd);
  },
  input: function(e) {
    this.setData({
      mobile: e.detail.value
    });
  },
  doLoop: function(seconds) {
    let code=this.getRandom();
    util.toast('您本次的验证码是：' + code,5000);
    seconds = seconds ? seconds : 60;
    this.setData({
      btnText: seconds + "s后获取",
      code:code
    });
    let countdown = setInterval(() => {
      if (seconds > 0) {
        this.setData({
          btnText: seconds + "s后获取"
        });
        --seconds;
      } else {
        this.setData({
          btnText: "获取验证码",
          disabled: false,
          type: "primary"
        });
        clearInterval(countdown);
      }
    }, 1000);
  },
  btnSend: function() {
    if (util.isNullOrEmpty(this.data.mobile)) {
      util.toast('请输入手机号码');
      return
    } else if (!util.isMobile(this.data.mobile)) {
      util.toast('请输入正确的手机号码');
      return
    }
    this.setData({
      disabled: true,
      btnText: "请稍候...",
      type: "gray"
    });

    setTimeout(() => {
      this.doLoop(60)
    }, 500)
  },
  login: function(e) {
    let loginCode = e.detail.value.smsCode;
    let mobile = e.detail.value.mobile;
    if (util.isNullOrEmpty(mobile)) {
      util.toast('请输入手机号码');
      return
    } else if (!util.isMobile(mobile)) {
      util.toast('请输入正确的手机号码');
      return
    } else if (util.isNullOrEmpty(loginCode)) {
      util.toast('请输入验证码');
      return
    } else if (loginCode != this.data.code) {
      util.toast('验证码不正确');
      return
    }
   globalData.isLogin = true;
   wx.setStorageSync("thorui_mobile", mobile);
   util.toast("登录成功",2000, true);
   setTimeout(()=>{
     wx.reLaunch({
       url: '../my/my'
     })
   },200);
  },
  protocol: function() {
    wx.navigateTo({
      url: '../about/about'
    })
  }
})