Component({
  properties: {
    //选择器(外层容器)
    selector: {
      type: String,
      value: "tui-skeleton"
    },
    //外层容器背景颜色
    backgroundColor: {
      type: String,
      value: "#fff"
    },
    //骨架元素背景颜色
    skeletonBgColor: {
      type: String,
      value: "#e9e9e9"
    },
    //骨架元素类型：矩形，圆形，带圆角矩形["rect","circular","fillet"]
    //默认所有，根据页面情况进行传值
    //页面对应元素class为：tui-skeleton-rect，tui-skeleton-circular，tui-skeleton-fillet
    //如果传入的值不在下列数组中，则为自定义class值，默认按矩形渲染
    skeletonType: {
      type: Array,
      value: ["rect", "circular", "fillet"]
    },
    //圆角值，skeletonType=fillet时生效
    borderRadius: {
      type: String,
      value: "16rpx"
    },
    //骨架屏预生成数据：提前生成好的数据，当传入该属性值时，则不会再次查找子节点信息
    preloadData: {
      type: Array,
      value: []
    },
    //是否需要loading
    isLoading: {
      type: Boolean,
      value: true
    },
    //loading类型[1-10]
    loadingType: {
      type: Number,
      value: 1
    }
  },
  lifetimes: {
    attached: function() {
      const res = wx.getSystemInfoSync();
      this.setData({
        winWidth: res.windowWidth,
        winHeight: res.windowHeight
      })
      this.isPreload(true)
    },
    ready: function() {
      this.nodesRef(`.${this.data.selector}`).then((res) => {
        this.setData({
          winHeight: res[0].height + res[0].top
        })
      });
      !this.isPreload() && this.selectorQuery()
    }
  },
  data: {
    winWidth: 375,
    winHeight: 800,
    skeletonElements: []
  },
  methods: {
    isPreload(init) {
      let preloadData = this.data.preloadData || []
      if (preloadData.length) {
        if (init) {
          this.setData({
            skeletonElements: preloadData
          })
        }
        return true
      }
      return false
    },
    async selectorQuery() {
      let skeletonType = this.data.skeletonType || []
      let nodes = []
      for (let item of skeletonType) {
        let className = `.${this.data.selector} >>> .${item}`
        if (~"rect_circular_fillet".indexOf(item)) {
          className = `.${this.data.selector} >>> .${this.data.selector}-${item}`
        }
        await this.nodesRef(className).then((res) => {
          res.map(d => {
            d.skeletonType = item
          })
          nodes = nodes.concat(res)
        })
      }
      this.setData({
        skeletonElements: nodes
      })
    },
    async nodesRef(className) {
      return await new Promise((resolve, reject) => {
        wx.createSelectorQuery().selectAll(className).boundingClientRect((res) => {
          if (res) {
            resolve(res);
          } else {
            reject(res)
          }
        }).exec();
      })
    }
  }
})