Component({
  externalClasses:['tui-list-class'],
  properties: {
    //是否有箭头
    arrow: {
      type: Boolean,
      value: false
    },
    //箭头颜色 传值： white，gray,warning,danger
    arrowColor: {
      type: String,
      value: ''
    },
    //是否有点击效果
    hover: {
      type: Boolean,
      value: true
    },
    //隐藏线条
    unlined: {
      type: Boolean,
      value: false
    },
    //线条是否有左偏移距离
    lineLeft: {
      type: Boolean,
      value: true
    },
    //线条是否有右偏移距离
    lineRight: {
      type: Boolean,
      value: false
    },
    padding: {
      type: String,
      value: '26rpx 30rpx'
    },
    //背景颜色
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    //字体大小
    size: {
      type: Number,
      value: 28
    },
    //字体颜色
    color: {
      type: String,
      value: '#333'
    },
    //是否加圆角
    radius: {
      type: Boolean,
      value: false
    },
    //箭头是否有偏移距离
    arrowRight: {
      type: Boolean,
      value: true
    },
    index: {
      type: Number,
      value: 0
    }
  },
  methods: {
    handleClick() {
			this.triggerEvent('click', {
				index: this.data.index
			});
		}
  }
})