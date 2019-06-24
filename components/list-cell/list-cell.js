Component({
  externalClasses: ['tui-cell-class'], //自定义样式
  properties: {
    arrow: {
      type: Boolean,
      value: false //是否有箭头
    },
    hover: {
      type: Boolean,
      value: true //是否有点击效果
    },
    last: {
      type: Boolean,
      value: false //最后一条数据隐藏线条
    },
    bgcolor:{
      type: String,
      value: "#fff" //背景颜色
    },
    size:{
      type: Number,
      value: 32//字体大小
    },
    color: {
      type: String,
      value: "#333" //字体颜色
    }
  },
  data: {

  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {});
    }
  }
})