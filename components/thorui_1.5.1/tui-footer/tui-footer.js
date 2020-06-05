Component({
  externalClasses:['tui-footer-class'],
  properties: {
    //type target url delta appid path extradata bindsuccess bindfail text color size
    //链接设置  数据格式对应上面注释的属性值
    navigate: {
      type: Array,
      value: []
    },
    //底部文本
    copyright: {
      type: String,
      value: "All Rights Reserved."
    },
    //copyright 字体颜色
    color: {
      type: String,
      value: "#A7A7A7"
    },
    //copyright 字体大小
    size: {
      type: Number,
      value: 24
    },
    //footer背景颜色
    backgroundColor: {
      type: String,
      value: "transparent"
    },
    //是否固定在底部
    fixed: {
      type: Boolean,
      value: true
    }
  }
})