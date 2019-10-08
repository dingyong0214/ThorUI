Page({
  data: {
    imageData: [],
    //上传地址
    serverUrl: "http://upload.cn"
  },
  onLoad: function(options) {

  },
  result: function(e) {
    console.log(e)
    this.setData({
      imageData: e.detail.imgArr
    })
  },
  remove: function(e) {
    //移除图片
    console.log(e)
    let index = e.detail.index
  }
})