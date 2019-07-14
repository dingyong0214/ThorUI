Component({
  externalClasses: ['tui-divider-class'],
  properties: {
    //divider占据高度
    height: {
      type: Number,
      value: 100
    },
    //divider宽度，可填写具体长度，如400rpx
    width: {
      type: String,
      value: "100%"
    },
    //divider颜色，如果为渐变线条，此属性失效
    dividerColor: {
      type: String,
      value: "#e5e5e5"
    },
    //文字颜色
    color: {
      type: String,
      value: "#999"
    },
    //文字大小 rpx
    size: {
      type: Number,
      value: 24
    },
    //背景颜色，和当前页面背景色保持一致
    bgcolor: {
      type: String,
      value: "#fafafa"
    },
    //是否为渐变线条，为true，divideColor失效
    gradual: {
      type: Boolean,
      value: false
    },
    //渐变色值，to right ，提供两个色值即可，由浅至深
    gradualColor: {
      type: Array,
      value: ["#eee", "#ccc"]
    }
  },
  data: {},
  methods: {}
})