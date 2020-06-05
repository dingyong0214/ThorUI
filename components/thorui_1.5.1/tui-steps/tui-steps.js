Component({
  properties: {
    // 1-默认步骤 2-数字步骤
    type: {
      type: Number,
      value: 1
    },
    spacing: {
      type: String,
      value: '160rpx'
    },
    // 方向 row column
    direction: {
      type: String,
      value: 'row'
    },
    // 激活状态成功颜色
    activeColor: {
      type: String,
      value: '#5677fc'
    },
    // 未激活状态颜色
    deactiveColor: {
      type: String,
      value: '#999999'
    },
    //title字体大小
    titleSize: {
      type: Number,
      value: 28
    },
    //title是否粗体
    bold: {
      type: Boolean,
      value: false
    },
    //desc字体大小
    descSize: {
      type: Number,
      value: 24
    },
    // 当前步骤
    activeSteps: {
      type: Number,
      value: -1
    },
    /**
     * [{
        title: "标题",
        desc: "描述"
      }]
     * */
    items: {
      type: Array,
      value:[]
    }
  }
})