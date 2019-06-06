const cityData = require('../../utils/city.js')
Page({
  data: {
    lists: [],
    touchmove: false, // 是否在索引表上滑动
    touchmoveIndex: -1,
    titleHeight: 0, // 索引二字距离窗口顶部的高度
    indexBarHeight: 0, // 索引表高度
    indexBarItemHeight: 0, // 索引表子项的高度
    scrollViewId: '', // scroll-view滚动到的子元素的id
    winHeight: 0,
    inputShowed: false, // 输入框是否显示
    inputVal: '', // 搜索框输入的内容
    hotCity: ['北京', '上海', '广州', '深圳', '杭州', '长沙', '武汉', '厦门', '西安', '昆明', '成都', '重庆'], // 热门城市
    searchResult: [], // 搜索城市的结果
    localCity: ''
  },
  onLoad: function(options) {
    const that = this;
    that.setData({
      localCity: options.currentCity || "深圳",
    })
     setTimeout(() => {
      wx.getSystemInfo({
        success: function(res) {
          let winHeight = res.windowHeight
          let barHeight = winHeight - res.windowWidth / 750 * 204
          that.setData({
            winHeight: winHeight,
            indexBarHeight: barHeight,
            indexBarItemHeight: barHeight / 25,
            titleHeight: res.windowWidth / 750 * 132,
            lists: cityData.list
          })
        }
      })
    }, 50)
  },
  showInput() {
    this.setData({
      inputShowed: true
    })
  },
  clearInput() {
    this.setData({
      inputVal:"",
      inputShowed:false,
      searchResult:[]
    })
    wx.hideKeyboard() //强行隐藏键盘
  },
  inputTyping(e) {
    this.setData({
      inputVal: e.detail.value
    },()=>{
      this.searchCity()
    })
  },
  // 搜索城市
  searchCity() {
    let result = []
    cityData.list.forEach((item1, index1) => {
      item1.data.forEach((item2, index2) => {
        if (item2.keyword.indexOf(this.data.inputVal.toLocaleUpperCase()) !== -1) {
          result.push(item2.cityName)
        }
      })
    })
    this.setData({
      searchResult: result
    })
  },
  // 选择城市
  selectCity(e) {
    let cityName = e.currentTarget.dataset.name;
    //返回并刷新上一页面
    let pages = getCurrentPages();
    let prePage = pages[pages.length - 2];
    prePage.emit(cityName)
    wx.navigateBack({
      delta: 1
    })
  },
  touchStart(e) {
    this.setData({
      touchmove:true
    })
    let pageY = e.touches[0].pageY
    let index = Math.floor((pageY - this.data.titleHeight) / this.data.indexBarItemHeight)
    let item = this.data.lists[index === 0 ? 1 : index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        touchmoveIndex: index
      })
    }
  },
  touchMove(e) {
    let pageY = e.touches[0].pageY;
    let index = Math.floor((pageY - this.data.titleHeight) / this.data.indexBarItemHeight)
    let item = this.data.lists[index === 0 ? 1 : index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        touchmoveIndex: index
      })
      console.log(index)
    }
  },
  touchEnd() {
    this.setData({
      touchmove: false,
      touchmoveIndex: -1
    })
  },
  touchCancel() {
    this.setData({
      touchmove:false,
      touchmoveIndex:-1
    })
  }
})