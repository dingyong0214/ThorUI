// 数字键盘密码输入框
Component({
  externalClasses: ['tui-keyboard-input'],
  properties: {
    //背景颜色
    bgcolor: {
      type: String,
      value: "#fff"
    },
    size: {
      type: Number,
      value: 32
    },
    color: {
      type: String,
      value: "#333"
    },
    //输入框的值：数组格式，长度即为输入框个数
    inputvalue: {
      type: Array,
      value: ["", "", "", "", "", ""] //密码圆点 ●
    }
  },
  data: {
  },
  methods: {
  }
})