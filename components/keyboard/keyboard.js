Component({
  properties: {
    //是否需要mask
    mask: {
      type: Boolean,
      value: true
    },
    //控制键盘显示
    show: {
      type: Boolean,
      value: false
    },
    //是否直接显示，不需要动画，一般使用在锁屏密码
    action: {
      type: Boolean,
      value: true
    }
  },
  data: {
    itemList: 12
  },
  methods: {
    //关闭
    handleClose() {
      if (!this.data.show) {
        return;
      }
      this.triggerEvent('close', {});
    },
    handleClick(e) {
      if (!this.data.show) {
        return;
      }
      const dataset = e.currentTarget.dataset;
      this.triggerEvent('click', {
        index: dataset.index
      })
    }
  }
})