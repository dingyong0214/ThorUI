Component({
  externalClasses: ['tui-card-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    //是否铺满
    full: {
      type: Boolean,
      value: false
    },
    image: {
      type: Object,
      value: {
        url: "", //图片地址
        height: 60, //图片高度
        width: 60, //图片宽度
        circle: false
      }
    },
    //标题
    title: {
      type: Object,
      value: {
        text: "", //标题文字
        size: 30, //字体大小
        color: "#7A7A7A" //字体颜色
      }
    },
    //标签，时间等
    tag: {
      type: Object,
      value: {
        text: "", //标签文字
        size: 24, //字体大小
        color: "#b2b2b2" //字体颜色
      }
    },
    header: {
      type: Object,
      value: {
        bgcolor: "#fff", //背景颜色
        line: false //是否去掉底部线条
      }
    },
    //是否设置外边框
    border: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    handleClick() {
      this.triggerEvent('click', {});
    },
    longTap() {
      this.triggerEvent('longclick', {});
    }
  }
})