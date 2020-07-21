Component({
  properties: {
    value: {
      type: Number,
      value: 1,
      observer(val) {
        this.setValue()
      }
    },
    //最小值
    min: {
      type: Number,
      value: 0
    },
    //最大值
    max: {
      type: Number,
      value: 100
    },
    //迈步大小 1 1.1 10...
    step: {
      type: Number,
      value: 1
    },
    //是否禁用操作
    disabled: {
      type: Boolean,
      value: false
    },
    //加减图标大小 rpx
    iconsize: {
      type: Number,
      value: 24
    },
    iconcolor: {
      type: String,
      value: "#333"
    },
    //input 高度
    height: {
      type: Number,
      value: 50
    },
    //input 宽度
    width: {
      type: Number,
      value: 90
    },
    //input 背景颜色
    backgroundColor: {
      type: String,
      value: "#f2f2f2"
    },
    //input 字体颜色
    color: {
      type: String,
      value: "#333"
    },
    //索引值，列表中使用
    index: {
      type: Number,
      value: 0
    },
    //自定义参数
    custom: {
      type: Number,
      value: 0
    }
  },
  data: {
    inputValue: 0
  },
  lifetimes: {
    attached: function() {
      this.setValue()
    }
  },
  methods: {
    setValue() {
      this.setData({
        inputValue: +this.data.value
      })
    },
    getScale() {
      let scale = 1;
      //浮点型
      if (this.data.step != parseInt(this.data.step)) {
        scale = Math.pow(10, (this.data.step + '').split('.')[1].length)
      }
      return scale;
    },
    calcNum: function(type) {
      if (this.data.disabled) {
        return
      }
      const scale = this.getScale()
      let num = this.data.value * scale
      let step = this.data.step * scale
      if (type === 'reduce') {
        num -= step
      } else if (type === 'plus') {
        num += step
      }
      let value = num / scale
      if (type === "plus" && value < this.data.min) {
        value = this.data.min
      } else if (type === "reduce" && value > this.data.max) {
        value = this.data.max
      }
      if (value < this.data.min || value > this.data.max) {
        return
      }

      this.handleChange(value, type)
    },
    plus: function() {
      this.calcNum("plus")
    },
    reduce: function() {
      this.calcNum("reduce")
    },
    blur: function(e) {
      let value = e.detail.value
      if (value) {
        value = +value
        if (value > this.data.max) {
          value = this.data.max
        } else if (value < this.data.min) {
          value = this.data.min
        }
      } else {
        value = this.data.min
      }
      if ((value == this.data.value && value != this.data.inputValue) || !e.detail.value) {
        this.setData({
          inputValue: value
        })
      }
      this.handleChange(value, "blur")
    },
    handleChange(value, type) {
      if (this.data.disabled) {
        return
      }
      this.triggerEvent('change', {
        value: value,
        type: type,
        index: this.data.index,
        custom: this.data.custom
      })
    }
  }
})