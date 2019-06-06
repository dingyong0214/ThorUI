const cityData = require('../../utils/picker.city.js')
Page({
  data: {
    proviceArr: [],
    cityArr: [],
    districtArr: [],
    value: [0, 0, 0],
    iconHidden: true,
    showPickerStatus: false,
    animationData: "",
    text: ["请选择", "请选择", "请选择"],
    searchKey: ""
  },
  onLoad: function() {
    //初始化数据
    this.setData({
      proviceArr: this.toArr(cityData),
      cityArr: this.toArr(cityData[0].children),
      districtArr: this.toArr(cityData[0].children[0].children)
    })
  },
  toArr(object) {
    let arr = [];
    for (let i in object) {
      arr.push(object[i].name);
    }
    return arr;
  },
  //picker change切换事件
  columnPicker: function(e) {
    let value = e.detail.value;
    //如果两者下标不一致，表示滚动过
    if (this.data.value[0] !== value[0]) {
      this.setData({
        proviceArr: this.data.proviceArr,
        cityArr: this.toArr(cityData[value[0]].children),
        districtArr: this.toArr(cityData[value[0]].children[0].children),
        value: [value[0], 0, 0]
      })
    } else if (this.data.value[1] !== value[1]) {
      this.setData({
        proviceArr: this.data.proviceArr,
        cityArr: this.data.cityArr,
        districtArr: this.toArr(cityData[value[0]].children[value[1]].children),
        value: [value[0], value[1], 0]
      })
    }else{
      this.setData({
        value: value
      })
    }
  },
  //确定按钮
  picker: function(e) {
    let value = this.data.value;
    if (cityData.length > 0) {
      let provice = cityData[value[0]].name
      let city = cityData[value[0]].children[value[1]].name
      let district = cityData[value[0]].children[value[1]].children[value[2]].name
      this.setData({
        text: [provice, city, district],
        showPickerStatus: false
      })
    }
  },
  // 显示picker-view
  showPicker: function() {
    var animation = wx.createAnimation({
      duration: 220,
      timingFunction: "linear",
      delay: 0
    })
    animation.translateY(500).step()
    this.setData({
      animationData: animation.export(),
      showPickerStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  // 隐藏picker-view
  hidePicker: function() {
    this.setData({
      showPickerStatus: false
    })
  },
  //input事件
  bindViewInput: function(e) {
    //e.detail.value
    let hidden = true;
    if (e.detail.value != "") {
      hidden = false
    }
    this.setData({
      iconHidden: hidden,
      searchKey: e.detail.value
    })
  },
  resetInput: function(e) {
    this.setData({
      searchKey: "",
      iconHidden: true
    })
  }
})