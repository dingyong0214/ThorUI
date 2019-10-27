//吸顶容器组件
Component({
  externalClasses: ['tui-sticky-class'], //自定义样式
  options: {
    multipleSlots: true
  },
  properties: {
    scrollTop: {
      type: Number,
      observer(val) {
        this.updateStickyChange();
      }
    },
    //吸顶容器距离顶部距离 px
    stickyTop: {
      type: Number,
      value: 0

    },
    //吸顶容器 高度 rpx
    stickyHeight: {
      type: String,
      value: "auto"
    },
    //占位容器背景颜色
    bgColor: {
      type: String,
      value: "none"
    },
    //列表中的索引值
    index: {
      type: Number,
      value: 0
    }
  },
  data: {
    timer: null,
    top: 0,
    height: 0,
    isFixed: false
  },
  lifetimes: {
    ready: function() {
      //在组件在视图层布局完成后执行
      this.updateScrollChange()
    },
    moved: function() {
      //在组件实例被移动到节点树另一个位置时执行
      this.updateScrollChange()

    },
    detached: function() {
      //在组件实例被从页面节点树移除时执行
      this.updateScrollChange()
    }
  },
  methods: {
    updateStickyChange() {
      const data = this.data;
      const top = data.top;
      const height = data.height;
      const scrollTop = this.data.scrollTop
      let stickyTop = this.data.stickyTop
      stickyTop = stickyTop < 0 ? 0 : stickyTop
      this.setData({
        isFixed: (scrollTop + stickyTop >= top && scrollTop + stickyTop < top + height) ? true : false
      }, () => {
        //console.log(this.data.isFixed)
      })
    },
    updateScrollChange() {
      if (this.data.timer) {
        clearTimeout(this.data.timer)
        this.setData({
          timer: null
        })
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
            this.triggerEvent('change', {
              index: Number(this.data.index),
              top: res.top + (this.data.scrollTop || 0)
            })
          }
        }).exec()
      }, 0)
      this.setData({
        timer: this.data.timer
      })
    }
  }
});