Component({
  options: {
    multipleSlots: true
  },
  properties: {
    scrollTop: {
      type: Number,
      value: 0
    },
    //吸顶时与顶部的距离，单位px
    stickyTop: {
      type: [Number, String],
      value: 0
    },
    //是否指定容器，即内容放置插槽content内
    container: {
      type: Boolean,
      value: false
    },
    //是否是原生自带header
    isNativeHeader: {
      type: Boolean,
      value: true
    },
    //吸顶容器 高度 rpx
    stickyHeight: {
      type: String,
      value: "auto"
    },
    //占位容器背景颜色
    backgroundColor: {
      type: String,
      value: "transparent"
    },
    //是否重新计算[有异步加载时使用,设置大于0的数]
    recalc: {
      type: Number,
      value: 0,
      observer(val) {
        this.updateScrollChange(() => {
          this.setData({
            scrollTop: this.data.scrollTop + 0.1
          })
        });
      }
    },
    //列表中的索引值
    index: {
      type: [Number, String],
      value: 0
    }
  },
  lifetimes: {
    ready: function () {
      //在组件在视图层布局完成后执行
      this.updateScrollChange()
    },
    moved: function () {
      //在组件实例被移动到节点树另一个位置时执行
      this.updateScrollChange()

    },
    detached: function () {
      //在组件实例被从页面节点树移除时执行
      this.updateScrollChange()
    }
  },
  data: {
    timer: null,
    top: 0,
    height: 0
  },
  methods: {
    updateScrollChange(callback) {
      if (this.data.timer) {
        clearTimeout(this.data.timer)
      }
      this.data.timer = setTimeout(() => {
        const className = '.tui-sticky-class';
        const query = wx.createSelectorQuery().in(this);
        query.select(className).boundingClientRect((res) => {
          if (res) {
            this.setData({
              top: res.top + (this.data.scrollTop || 0),
              height: res.height
            })
            callback && callback();
            this.triggerEvent('change', {
              index: Number(this.data.index),
              top: res.top + (this.data.scrollTop || 0)
            })
          }
        }).exec()
      }, 0)
    }
  }
})