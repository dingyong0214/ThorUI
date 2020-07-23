Page({
  data: {
    lists: ["公司", "家", "学校", "其他"],
    currentLabelIndex: 1 // 地址类型的位置
  },
  onLoad(options) {

  },
  // 微信添加收货地址
  wechatAddress() {
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.address']) {
          wx.authorize({
            scope: 'scope.address',
            success: () => {
              this.weChatAdd()
            },
            fail: () => {
              wx.showModal({
                title: '',
                content: '您还没授权地址，点击确认去开启',
                showCancel: false,
                success(res) {
                  if (res.confirm) {
                    wx.openSetting()
                  }
                }
              })
            },
            complete: () => {}
          })
        } else {
          this.weChatAdd()
        }
      }
    })
  },
  //  选择地址
  weChatAdd() {
    wx.chooseAddress({
      success: res => {
        const {
          userName,
          telNumber,
          provinceName,
          cityName,
          countyName,
          detailInfo
        } = res
        const addressData = {
          receiver: userName,
          mobile: telNumber,
          province: provinceName,
          city: cityName,
          district: countyName,
          address: detailInfo
        }
        this.setData({
          addressData
        })
      }
    })
  },
  // 选择地址
  chooseLabel(e) {
    const {
      index
    } = e.currentTarget.dataset
    console.log(index)
    this.setData({
      currentLabelIndex: index
    })
  },
  // 提交
  submit(e) {
    console.log(e);
    wx.showToast({
      title: '保存成功',
      success() {
        wx.navigateBack({})
      }
    })
  }
})