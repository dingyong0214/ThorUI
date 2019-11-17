Component({
  properties: {
    //标签页
    tabs: {
      type: Array,
      value: []
    },
    //rpx
    height: {
      type: Number,
      value: 80
    },
    //rpx 只对左右padding起作用，上下为0
    padding: {
      type: Number,
      value: 30
    },
    //背景色
    bgColor: {
      type: String,
      value: "#FFFFFF"
    },
    //是否固定
    isFixed: {
      type: Boolean,
      value: false
    },
    //px
    top: {
      type: Number,
      value: 0
    },
    //是否去掉底部线条
    unlined: {
      type: Boolean,
      value: false
    },
    //当前选项卡
    currentTab: {
      type: Number,
      value: 0,
      observer(val) {
        this.checkCor();
      }
    },
    //滑块宽度
    sliderWidth: {
      type: Number,
      value: 68
    },
    //滑块高度
    sliderHeight: {
      type: Number,
      value: 6
    },
    //滑块背景颜色
    sliderBgColor: {
      type: String,
      value: "#5677fc"
    },
    //滑块bottom
    bottom: {
      type: String,
      value: "0"
    },
    //标签页宽度
    itemWidth: {
      type: String,
      value: "25%"
    },
    //字体颜色
    color: {
      type: String,
      value: "#666"
    },
    //选中后字体颜色
    selectedColor: {
      type: String,
      value: "#5677fc"
    },
    //字体大小
    size: {
      type: Number,
      value: 28
    },
    //选中后 是否加粗 ，未选中则无效
    bold: {
      type: Boolean,
      value: false
    }
  },
  lifetimes: {
    ready: function() {
      setTimeout(() => {
        wx.getSystemInfo({
          success: (res) => {
            this.setData({
              winWidth: res.windowWidth
            }, () => {
              this.checkCor()
            })
          }
        });
      }, 20);
    }
  },
  data: {
    winWidth: 0,
    scrollLeft: 0
  },
  methods: {
    checkCor: function() {
      let tabsNum = this.data.tabs.length
      let padding = this.data.winWidth / 750 * this.data.padding
      let width = this.data.winWidth - padding * 2
      let left = (width / tabsNum - (this.data.winWidth / 750 * this.data.sliderWidth)) / 2 + padding
      let scrollLeft = left
      if (this.data.currentTab > 0) {
        scrollLeft = scrollLeft + (width / tabsNum) * this.data.currentTab
      }
      this.setData({
        scrollLeft: scrollLeft
      })
    },
    // 点击标题切换当前页时改变样式
    swichTabs: function(e) {
      let index = Number(e.currentTarget.dataset.index)
      let item = this.data.tabs[index]
      if (item && item.disabled) return;
      if (this.data.currentTab == index) {
        return false;
      } else {
        this.triggerEvent("change", {
          index: Number(index)
        })
      }
    }
  }
})