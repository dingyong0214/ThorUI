const util = require('../../../utils/util.js')
Page({
  data: {
    result: ""
  },
  onLoad: function(options) {

  },
  request: function(e) {
    let type = e.currentTarget.dataset.type;
    //参数
    let postData = {}
    util.request("/Home/GetStatus", postData, "GET", false, type == 1 ? false : true).then((res) => {
      if (res.code == 100) {
        this.setData({
          result: `${type == 1 ?"带":"无"}loading请求成功！返回值为 ${JSON.stringify(res)}`
        })
      }else{
        this.setData({
          result: `${type == 1 ? "带" : "无"}loading请求失败！ ${JSON.stringify(res)}`
        })
      }
    }).catch((res) => {
      this.setData({
        result: `${type == 1 ? "带" : "无"}loading请求失败！ ${JSON.stringify(res)}`
      })
    })
  }
})