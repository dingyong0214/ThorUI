const util = require('../../../utils/util.js')
const cityData = require('../../../utils/index.list.js')
Page({
  data: {
    lists: [],
    touchmove: false, // 是否在索引表上滑动
    touchmoveIndex: -1,
    titleHeight: 0, // A字距离窗口顶部的高度
    indexBarHeight: 0, // 索引表高度
    indexBarItemHeight: 0, // 索引表子项的高度
    scrollViewId: '', // scroll-view滚动到的子元素的id
    winHeight: 0,
    scrollTop: 0
  },
  onLoad: function (options) {
    const that = this;
    setTimeout(() => {
      wx.getSystemInfo({
        success: function (res) {
          let winHeight = res.windowHeight
          let barHeight = winHeight - res.windowWidth / 750 * 232
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
  touchStart(e) {
    this.setData({
      touchmove: true
    })
    let pageY = e.touches[0].pageY
    let index = Math.floor((pageY - this.data.titleHeight) / this.data.indexBarItemHeight)
    let item = this.data.lists[index]
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
    let item = this.data.lists[index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        touchmoveIndex: index
      })
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
      touchmove: false,
      touchmoveIndex: -1
    })
  },
  search: function () {
    wx.navigateTo({
      url: '../news-search/news-search'
    })
  },
  detail: function () {
    wx.navigateTo({
      url: '../chat/chat'
    })
  },
  //页面滚动执行方式
  onScroll(e) {
    this.setData({
      scrollTop: e.detail.scrollTop
    })
  }
})