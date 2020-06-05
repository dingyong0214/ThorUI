Component({
  properties: {
    type: {
      type: String,
      value: 'primary'
    },
    //padding
    padding: {
      type: String,
      value: '16rpx 26rpx'
    },
    margin: {
      type: String,
      value: '0'
    },
    //文字大小 rpx
    size: {
      type: String,
      value: '28rpx'
    },
    // circle, square，circleLeft，circleRight
    shape: {
      type: String,
      value: 'square'
    },
    //是否空心
    plain: {
      type: Boolean,
      value: false
    },
    //点击效果
    hover: {
      type: Boolean,
      value: false
    },
    //缩放倍数
    scaleMultiple: {
      type: Number,
      value: 1
    },
    originLeft: {
      type: Boolean,
      value: false
    },
    originRight: {
      type: Boolean,
      value: false
    },
    index: {
      type: Number,
      value: 0
    }
  },
  methods: {
    handleClick() {
      this.triggerEvent('click', { index: this.data.index });
    }
  }
})
