Page({
  data: {
    showModalStatus: false,
    animationData: "",
    regionArr: [
      "京", "津", "沪", "渝", "蒙", "新",
      "藏", "宁", "桂", "港", "澳", "黑",
      "吉", "辽", "晋", "冀", "青", "鲁",
      "豫", "苏", "皖", "浙", "闽", "赣",
      "湘", "鄂", "粤", "琼", "甘", "陕",
      "黔", "滇", "川"
    ],
    regionTxt: "粤",
    tabIndex: 26,
    leftDrawer: false,
    rightDrawer: false,
    mode: "right"
  },
  onLoad: function(options) {

  },
  showModal: function() {
    // 显示遮罩层
    // 创建动画实例 
    var animation = wx.createAnimation({
      duration: 220,
      timingFunction: "linear",
      delay: 0
    })
    //执行第一组动画：Y轴偏移500px后(盒子高度是500px) ，停
    animation.translateY(500).step()
    //导出动画对象赋给数据对象储存
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function() {
    this.setData({
      showModalStatus: false
    })
  },
  getRegion: function(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      regionTxt: this.data.regionArr[index],
      tabIndex: index,
      showModalStatus: false
    })
    wx.showToast({
      title: '您选择了：' + this.data.regionArr[index],
      icon: "none"
    })
  },
  closeDrawer(e) {
    const mode = e.currentTarget.dataset.mode;
    if(mode=="left"){
      this.setData({
        leftDrawer: false
      })
    }else{
      this.setData({
        rightDrawer: false
      })
    }
  },
  rightDrawer() {
    this.setData({
      rightDrawer: true
    })
  },
  leftDrawer() {
    this.setData({
      leftDrawer: true
    })
  }
})