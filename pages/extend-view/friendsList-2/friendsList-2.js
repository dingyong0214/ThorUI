const cityData = require('../../../utils/index.list.js')
Page({
  data: {
    lists: [],
    touchmove: false, // 是否在索引表上滑动
    touchmoveIndex: -1,
    titleHeight: 0, // A字距离窗口顶部的高度
    indexBarHeight: 0, // 索引表高度
    indexBarItemHeight: 0, // 索引表子项的高度
    winHeight: 0,
    scrollTop: 0
  },
  onLoad: function(options) {
    const that = this;
    setTimeout(() => {
      wx.getSystemInfo({
        success: function(res) {
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
    }, 10)
  },
  touchStart(e) {
    this.setData({
      touchmove: true
    })
    let pageY = e.touches[0].pageY - this.data.scrollTop;
    let index = Math.floor((pageY - this.data.titleHeight) / this.data.indexBarItemHeight)
    let item = this.data.lists[index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        touchmoveIndex: index
      })
      wx.pageScrollTo({
        scrollTop: this.data.lists[index].stickyTop,
        duration: 0
      })
    }
  },
  touchMove(e) {
    let pageY = e.touches[0].pageY - this.data.scrollTop;
    let index = Math.floor((pageY - this.data.titleHeight) / this.data.indexBarItemHeight)
    let item = this.data.lists[index]
    if (item) {
      this.setData({
        scrollViewId: item.letter,
        touchmoveIndex: index
      })
      wx.pageScrollTo({
        scrollTop: this.data.lists[index].stickyTop,
        duration: 0
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
  stickyChange: function(e) {
    let index = e.detail.index;
    let key = `lists[${index}].stickyTop`
    this.setData({
      [key]: e.detail.top
    })
  },
  search: function() {
    wx.navigateTo({
      url: '../news-search/news-search'
    })
  },
  detail: function() {
    if (getApp().globalData.isOnline) {
      wx.navigateTo({
        url: '../chat/chat'
      })
    }
  },
  //页面滚动执行方式
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})