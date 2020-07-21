Component({
  externalClasses:['tui-icon-class'],
  properties: {
    name: {
      type: String,
      value: ''
    },
    size: {
      type: [Number, String],
      value: 32
    },
    //px或者rpx
    unit: {
      type: String,
      value: 'px'
    },
    color: {
      type: String,
      value: '#999'
    },
    bold: {
      type: Boolean,
      value: false
    },
    margin: {
      type: String,
      value: "0"
    },
    index: {
      type: Number,
      value: 0
    }
  },
  data: {

  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {
        index: this.data.index
      });
    }
  }
})