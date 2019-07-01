Component({
  externalClasses: ['tui-rate-class'],
  properties: {
    //数量
    quantity: {
      type: Number,
      value: 5
    },
    //当前选中
    current: {
      type: Number,
      value: 0
    },
    //禁用点击
    disabled: {
      type: Boolean,
      value: false
    },
    //大小
    size: {
      type: Number,
      value: 20
    },
    //未选中颜色
    normal: {
      type: String,
      value: "#b2b2b2"
    },
    //选中颜色
    active: {
      type: String,
      value: "#e41f19"
    },
    //未选中是否为空心
    hollow: {
      type: Boolean,
      value: false
    }
  },
  data: {
    pageX: 0
  },
  methods: {
    handleTap(e) {
      if (this.data.disabled) {
        return;
      }
      const index = e.currentTarget.dataset.index;
      this.triggerEvent('change', {
        index: index + 1
      })
    },
    touchMove(e) {
      if (this.data.disabled) {
        return;
      }
      if (!e.changedTouches[0]) {
        return;
      }
      const movePageX = e.changedTouches[0].pageX;
      const distance = movePageX - this.data.pageX;

      if (distance <= 0) {
        return;
      }
      let index = Math.ceil(distance / this.data.size);
      index = index > this.data.count ? this.data.count : index;
      this.triggerEvent('change', {
        index: index
      })
    }
  },
  ready() {
    const className = '.tui-rate-box';
    let query = wx.createSelectorQuery().in(this)
    query.select(className).boundingClientRect((res) => {
      this.setData({
        pageX: res.left || 0
      })
    }).exec()
  }
})