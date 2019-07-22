const form = require("../../../components/utils/formValidation.js")
Page({
  data: {

  },
  onLoad: function(options) {

  },
  formSubmit: function(e) {
    //表单规则
    let rules = [{
      name: "name",
      rule: ["required", "isChinese", "minLength:2", "maxLength:6"], //可使用区间，此处主要测试功能
      msg: ["请输入姓名", "姓名必须全部为中文", "姓名必须2个或以上字符", "姓名不能超过6个字符"]
    }, {
      name: "sex",
      rule: ["required"],
      msg: ["请选择性别"]
    }, {
      name: "age",
      rule: ["required", "isNum", "range:[0,150]"],
      msg: ["请输入年龄", "请输入正确的年龄", "请输入正确的年龄范围：0-150"]
    }, {
      name: "mobile",
      rule: ["required", "isMobile"],
      msg: ["请输入手机号", "请输入正确的手机号"]
    }, {
      name: "email",
      rule: ["required", "isEmail"],
      msg: ["请输入邮箱", "请输入正确的邮箱"]
    }, {
      name: "idcard",
      rule: ["required", "isIdCard"],
      msg: ["请输入身份证号码", "请输入正确的身份证号码"]
    }, {
      name: "pwd",
      rule: ["required", "isEnAndNo"],
      msg: ["请输入密码", "密码为8~20位数字和字母组合"]
    }, {
      name: "pwd2",
      rule: ["required", "isSame:pwd"],
      msg: ["请输入确认密码", "两次输入的密码不一致"]
    }, {
      name: "range",
      rule: ["required", "range:[3,20]"],
      msg: ["请输入区间数字", "请输入3-20之间的数字"]
    }, {
      name: "amount",
      rule: ["required", "isAmount"],
      msg: ["请输入金额", "请输入正确的金额，允许保留两位小数"]
    }];
    //进行表单检查
    let formData = e.detail.value;
    let checkRes = form.validation(formData, rules);
    if (!checkRes) {
      wx.showToast({
        title: "验证通过!",
        icon: "none"
      });
    } else {
      wx.showToast({
        title: checkRes,
        icon: "none"
      });
    }
  },
  formReset: function(e) {
    console.log("清空数据")
  }
})