Component({
  externalClasses: ['tui-badge-class'],
  properties: {
    //primary,warning,green,danger,white，black，gray,white_red
    type: {
      type: String,
      value: 'primary'
    },
    //是否是圆点
    dot: {
      type: Boolean,
      value: false
    },
    margin: {
      type: String,
      value: '0'
    },
    //是否绝对定位
    absolute: {
      type: Boolean,
      value: false
    },
    top: {
      type: String,
      value: '-8rpx'
    },
    right: {
      type: String,
      value: '0'
    },
    //缩放比例
    scaleRatio: {
      type: Number,
      value: 1
    },
    //水平方向移动距离
    translateX: {
      type: String,
      value: '0'
    }
  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {});
    }
  }
})