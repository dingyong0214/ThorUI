Component({
  externalClasses: ['tui-actionsheet-class'],
  properties: {
    //点击遮罩 是否可关闭
    maskClosable: {
      type: Boolean,
      value: true
    },
    //显示操作菜单
    show: {
      type: Boolean,
      value: false
    },
    //菜单按钮数组，自定义文本颜色，红色参考色：#e53a37
    itemList: {
      type: Array,
      value: [{
        text: "确定",
        color: "#2B2B2B"
      }]
    },
    //提示文字
    tips: {
      type: String,
      value: ""
    },
    //提示文字颜色
    color: {
      type: String,
      value: "#808080"
    },
    //提示文字大小 rpx
    size: {
      type: Number,
      value: 26
    },
    //是否需要圆角
    radius: {
      type: Boolean,
      value: true
    },
    //是否需要取消按钮
    isCancel: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    handleClickMask() {
      if (!this.data.maskClosable) return;
      this.handleClickCancel();
    },
    handleClickItem(e) {
      if (!this.data.show) return;
      const dataset = e.currentTarget.dataset;
      this.triggerEvent('click', {
        index: Number(dataset.index)
      });
    },
    handleClickCancel() {
      this.triggerEvent('cancel');
    }
  }
})