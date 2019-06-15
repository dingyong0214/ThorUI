Component({
  externalClasses: ['tui-badge-class'], //自定义样式
  properties: {
    //primary,warning,green,danger,white，black，gray
    type: {
      type: String,
      value: 'primary',
    },
    // '', small
    size: {
      type: String,
      value: '',
    },
    //是否是圆点
    dot: {
      type: Boolean,
      value: false
    },
    //是否可见
    visible: {
      type: Boolean,
      value: true
    }
  },
  data: {

  },
  methods: {
  }
})