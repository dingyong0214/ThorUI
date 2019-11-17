Page({
  data: {
    loadding: false,
    pullUpOn: true
  },
  onLoad: function(options) {

  },
  onPullDownRefresh: function() {
    setTimeout(() => {
      this.setData({
        pullUpOn: true
      })
      wx.stopPullDownRefresh()
    }, 200);
  },
  onReachBottom: function() {
    if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    })
    setTimeout(() => {
      this.setData({
        loadding: false,
        pullUpOn: false
      })
    }, 1000)
  }
})