Component({
  properties: {
    //样式类型 primary, white, danger, warning, green,blue, gray，black
    type: {
      type: String,
      value: 'primary'
    },
    //是否加阴影 type =primary和 danger有效
    shadow: {
      type: Boolean,
      value: false
    },
    // 宽度 rpx或 %
    width: {
      type: String,
      value: '100%'
    },
    //高度 rpx
    height: {
      type: String,
      value: '94rpx'
    },
    //字体大小 rpx
    size: {
      type: Number,
      value: 32
    },
    //形状 circle(圆角), square(默认方形)，rightAngle(平角)
    shape: {
      type: String,
      value: 'square'
    },
    plain: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    }
  },
  data: {

  },
  methods: {
    handleClick() {
      if (this.data.disabled) {
        return false;
      }
      this.triggerEvent('click', {})
    }
  }
})