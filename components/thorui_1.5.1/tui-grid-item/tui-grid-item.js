Component({
  externalClasses: ['tui-grid-class'],
  properties: {
    cell: {
      type: [Number, String],
      value: 3
    },
    backgroundColor: {
      type: String,
      value: "#fff"
    },
    //是否有点击效果
    hover: {
      type: Boolean,
      value: true
    },
    //底部线条
    bottom: {
      type: Boolean,
      value: true
    },
    index: {
      type: Number,
      value: 0
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      this.triggerEvent('click', {
        index: this.data.index
      });
    }
  }
})