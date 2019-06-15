Component({
  externalClasses: ['tui-loadmore-class'],
  properties: {
    //显示文本
    text: {
      type: String,
      value: "正在加载..."
    },
    //是否可见
    visible: {
      type: Boolean,
      value: false
    },
    //loading 样式 ：1,2,3
    index:{
      type: Number,
      value: 1
    },
    //颜色设置，只有index=3时生效：primary，red，orange，green
    type:{
      type: String,
      value: ""
    }
  },
  data: {},
  methods: {}
})