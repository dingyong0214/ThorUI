Component({
  properties: {
    //初始化图片路径
    value: {
      type: Array,
      value: []
    },
    //禁用删除
    forbidDel: {
      type: Boolean,
      value: false
    },
    //禁用添加
    forbidAdd: {
      type: Boolean,
      value: false
    },
    //服务器地址
    serverUrl: {
      type: String,
      value: ""
    },
    //限制数
    limit: {
      type: Number,
      value: 9
    },
    //项目名，默认为 file
    fileKeyName: {
      type: String,
      value: "file"
    }
  },
  lifetimes: {
    ready: function() {
      let imgArr = [...this.data.value]
      let status = []
      for (let item of imgArr) {
        status.push("1")
      }
      this.setData({
        imageList: [...imgArr],
        statusArr: status
      })
    }
  },
  data: {
    //图片地址
    imageList: [],
    //上传状态：1-上传成功 2-上传中 3-上传失败
    statusArr: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 重新上传
    reUpLoad(e) {
      let index = Number(e.currentTarget.dataset.index)
      let value = `statusArr[${index}]`
      this.setData({
        [value]: "2"
      })
      this.change()
      this.uploadImage(index, this.data.imageList[index]).then(() => {
        this.change()
      }).catch(() => {
        this.change()
      })
    },
    change() {
      let status = ~this.data.statusArr.indexOf("2") ? 2 : 1
      if (status != 2 && ~this.data.statusArr.indexOf("3")) {
        // 上传失败
        status = 3
      }
      this.triggerEvent('complete', {
        status: status,
        imgArr: this.data.imageList
      })
    },
    chooseImage: function() {
      let _this = this;
      wx.chooseImage({
        count: _this.data.limit - _this.data.imageList.length,
        success: function(e) {
          let imageArr = [];
          let status = []
          for (let i = 0; i < e.tempFilePaths.length; i++) {
            let len = _this.data.imageList.length;
            if (len >= _this.data.limit) {
              wx.showToast({
                title: `最多可上传${_this.data.limit}张图片`,
                icon: "none"
              });
              break;
            }
            let path = e.tempFilePaths[i]
            imageArr.push(path)
            status.push("2")
          }
          _this.setData({
            imageList: _this.data.imageList.concat(imageArr),
            statusArr: _this.data.statusArr.concat(status)
          })
          _this.change()

          let start = _this.data.imageList.length - imageArr.length
          for (let j = 0; j < imageArr.length; j++) {
            let index = start + j
            //服务器地址
            if (_this.data.serverUrl) {
              _this.uploadImage(index, imageArr[j]).then(() => {
                _this.change()
              }).catch(() => {
                _this.change()
              })
            } else {
              //无服务器地址则直接返回成功
              let value = `statusArr[${index}]`
              _this.setData({
                [value]: "1"
              })
              _this.change()
            }
          }
        }
      })
    },
    uploadImage: function(index, url) {
      let _this = this;
      let status = `statusArr[${index}]`;
      return new Promise((resolve, reject) => {
        wx.uploadFile({
          url: this.data.serverUrl,
          name: this.data.fileKeyName,
          header: {
            //设置请求头
          },
          formData: {},
          filePath: url,
          success: function(res) {
            console.log(res)
            if (res.statusCode == 200) {
              //返回结果 此处需要按接口实际返回进行修改
              let d = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}")
              //判断code，以实际接口规范判断
              if (d.code % 100 === 0) {
                // 上传成功 d.url 为上传后图片地址，以实际接口返回为准
                if (d.url) {
                  let value = `imageList[${index}]`
                  _this.setData({
                    [value]: d.url
                  })
                }
                _this.setData({
                  [status]: d.url ? "1" : "3"
                })
              } else {
                // 上传失败
                _this.setData({
                  [status]: "3"
                })
              }
              resolve(index)
            } else {
              _this.setData({
                [status]: "3"
              })
              reject(index)
            }
          },
          fail: function(res) {
            _this.setData({
              [status]: "3"
            })
            reject(index)
          }
        })
      })

    },
    delImage: function(e) {
      let index = Number(e.currentTarget.dataset.index)

      let imgList = [...this.data.imageList]
      let status = [...this.data.statusArr]
      imgList.splice(index, 1)
      status.splice(index, 1)
      this.setData({
        imageList: imgList,
        statusArr: status
      })
      this.triggerEvent("remove", {
        index: index
      })
      this.change()
    },
    previewImage: function(e) {
      let index = Number(e.currentTarget.dataset.index)
      if (!this.data.imageList.length) return;
      wx.previewImage({
        current: this.data.imageList[index],
        loop: true,
        urls: this.data.imageList
      })
    }
  }
})