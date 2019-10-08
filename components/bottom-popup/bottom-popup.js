// 底部弹出框
Component({
  externalClasses: ['tui-popup-class'],
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
      value: "#fff"
    },
    //高度 rpx
    height: {
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
    },
    forbid() { }
  }
})
