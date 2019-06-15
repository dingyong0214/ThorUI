const utils = require('../../components/utils/utils');
Page({
  data: {
    basicData: [{
      type: "translucent",
      msg: "一般消息提示~"
    }, {
        type: "green",
      msg: "成功消息提示~"
    }, {
        type: "warning",
      msg: "警告消息提示~"
    }, {
        type: "danger",
      msg: "错误消息提示~"
    }, {
        type: "primary",
      msg: "其他消息提示~"
    }, {
        type: "primary",
      msg: "长文字消息提示，看不完信息？可自定义设置显示时间，建议提示信息不要过长"
    }, {
      type: "translucent",
      msg: "4S后关闭提示框",
      duration:4000
    }],
    index:0
  },
  showTips: function(e) {
    let index = e.currentTarget.dataset.index;
    let options={
      msg: this.data.basicData[index].msg,
      duration: this.data.basicData[index].duration || 2000,
      type: this.data.basicData[index].type
    };
    utils.toast(options);
  },
  switchTabs:function(e){
   this.setData({
     index:e.currentTarget.dataset.index
   })
  }
})