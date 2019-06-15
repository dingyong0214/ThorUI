Component({
  externalClasses: ['tui-tag-class'], //自定义样式
  properties: {
    // primary, white, danger, warning, green, gray,light-blue,light-brownish,light-orange,light-green
    type: {
      type: String,
      value: 'primary',
    },
    // '', small
    size: {
      type: String,
      value: '',
    },
    // circle, square，circleLeft，circleRight
    shape: {
      type: String,
      value: 'square'
    },
    //是否空心
    plain: {
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
    handleClick() {
      this.triggerEvent('click', {});
    }
  }
})