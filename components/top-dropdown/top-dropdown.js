// 顶部下拉列表
Component({
  externalClasses: ['tui-top-dropdown'],
  properties: {
    //是否需要mask
    mask: {
      type: Boolean,
      value: true
    },
    //控制显示
    show: {
      type: Boolean,
      value: false
    },
    //背景颜色
    bgcolor: {
      type: String,
      value: "#f2f2f2"
    },
    //padding-bottom  rpx
    paddingbtm: {
      type: Number,
      value: 0
    },
    //高度 rpx
    height: {
      type: Number,
      value: 580
    },
    //移动距离 需要计算
    translatey: {
      type: Number,
      value: 0
    }
  },
  data: {

  },
  methods: {
    handleClose() {
      if (!this.data.show) {
        return;
      }
      this.triggerEvent('close', {});
    }
  }
})