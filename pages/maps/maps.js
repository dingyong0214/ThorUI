const amap = require('../../libs/amap-wx.js')
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    amapPlugin: null,
    key: "6799b5f6f88d3d9fb52ac244855a8759",
    lat: 22.63137,
    lng: 114.010857,
    covers: [],
    address: [],
    scrollH: 256
  },

  onLoad: function(options) {
    const that = this;
    wx.getSystemInfo({
      success: function(res) {
        // 计算主体部分高度,单位为px
        that.setData({
          // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将600rpx转换为px）
          scrollH: res.windowHeight - 44 - res.windowWidth / 750 * 600
        })
      }
    })
    this.setData({
      amapPlugin: new amap.AMapWX({
        key: this.data.key
      })
    })
    setTimeout(() => {
      this.getLocation(() => {
        this.getPoiAround(options.key || "加油站")
      });
    }, 200)
  },
  trim: function(value) {
    return value ? value.toString().replace(/(^\s*)|(\s*$)/g, "") : value;
  },
  showInput() {
    this.setData({
      inputShowed: true
    })
  },
  hideInput() {
    this.setData({
      inputVal: "",
      inputShowed: false
    })
    wx.hideKeyboard(); //强行隐藏键盘
  },
  clearInput() {
    this.setData({
      inputVal: ""
    })
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    })
  },
  getLocation(callback) {
    const that = this
    this.data.amapPlugin.getRegeo({
      success: (data) => {
        that.setData({
          lng: data[0].longitude,
          lat: data[0].latitude
        })
        callback();
      },
      fail: (info) => {
        callback();
      }
    })
  },
  getPoiAround(keywords) {
    //检索周边的POI	
    wx.showLoading({
      title: "加载中..."
    })
    const that = this;
    setTimeout(() => {
      this.data.amapPlugin.getPoiAround({
        querykeywords: keywords,
        location: '', //location： 经纬度坐标。 为空时， 基于当前位置进行地址解析。 格式： '经度,纬度'
        success: (data) => {
          let arr = [];
          let addr = [];
          for (let i = 0; i < data.markers.length; i++) {
            arr.push({
              id: i,
              latitude: data.markers[i].latitude,
              longitude: data.markers[i].longitude,
              title: data.markers[i].name
            })
            let tel = that.trim(data.poisData[i].tel);
            if (~tel.indexOf(";")) {
              tel = tel.split(";")[0]
            }
            addr.push({
              id: i,
              latitude: data.markers[i].latitude,
              longitude: data.markers[i].longitude,
              title: data.markers[i].name,
              address: data.markers[i].address,
              tel: tel,
              distance: data.poisData[i].distance
            })
          }
          that.setData({
            address: addr,
            covers: arr
          })

          wx.hideLoading()
        },
        fail: (info) => {
          console.log(info)
          wx.showToast({
            title: '获取位置信息失败，请检查是否打开位置权限'
          })
          wx.hideLoading()
        }
      })
    }, 0);

  },
  bindInput: function(e) {
    const keywords = e.detail.value;
    this.getPoiAround(keywords);
  },
  marker: function(e) {
    const that = this
    const item = that.data.address[e.markerId || 0];
    const menu = item.tel ? ["打电话", "到这里"] : ["到这里"];

    wx.showActionSheet({
      itemList: menu,
      success(res) {
        if (res.tapIndex == 0 && item.tel) {
          wx.makePhoneCall({
            phoneNumber: item.tel
          })
        } else {
          const latitude = Number(item.latitude)
          const longitude = Number(item.longitude)
          wx.openLocation({
            name: item.title,
            address: item.address,
            latitude,
            longitude,
            scale: 18
          })
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })

  },
  call(event) {
    const index = Number(event.currentTarget.dataset.id);
    const tel = this.data.address[index].tel;
    if (tel) {
      wx.makePhoneCall({
        phoneNumber: tel
      })
    }

  },
  go(event) {
    const index = Number(event.currentTarget.dataset.id);
    const item = this.data.address[index];
    const latitude = Number(item.latitude)
    const longitude = Number(item.longitude)
    wx.openLocation({
      name: item.title,
      address: item.address,
      latitude,
      longitude,
      scale: 18
    })
  }
})