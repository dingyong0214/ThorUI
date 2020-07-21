Component({
  externalClasses: ["tui-btn-class"],
  properties: {
    //样式类型 primary, white, danger, warning, green,blue, gray，black
    type: {
      type: String,
      value: 'primary'
    },
    //是否加阴影
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
      value: '96rpx'
    },
    //字体大小 rpx
    size: {
      type: [Number,String],
      value: 32
    },
    margin: {
      type: String,
      value: "0"
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
    //禁用后背景是否为灰色 （非空心button生效）
    disabledGray: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    openType: {
      type: String,
      value: ''
    },
    index: {
      type: [Number, String],
      value: 0
    }
  },
  methods: {
    handleClick() {
      if (this.data.disabled) return false;
      this.triggerEvent('click', {
        index: Number(this.data.index)
      });
    },
    bindgetuserinfo({detail = {}} = {}) {
      this.triggerEvent('getuserinfo', detail);
    }
  }
})