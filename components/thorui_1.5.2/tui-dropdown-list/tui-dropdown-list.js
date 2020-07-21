Component({
  externalClasses:["tui-selected-class"],
  options:{
    multipleSlots:true
  },
  properties: {
    //控制显示
    show: {
      type: Boolean,
      value: false
    },
    //背景颜色
    backgroundColor: {
      type: String,
      value: 'transparent'
    },
    //top  rpx
    top: {
      type: Number,
      value: 0
    },
    //下拉框高度 rpx
    height: {
      type: Number,
      value: 0
    },
    //选择框高度 单位rpx
    selectHeight: {
      type: Number,
      value: 0
    }
  }
})