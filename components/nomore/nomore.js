//为了可重用性强，这里做了修改，和thorui.css里的略有不同
Component({
  externalClasses: ['tui-nomore-class'],
  properties: {
    //是否可见
    visible: {
      type: Boolean,
      value: false
    },
    //当前页面背景颜色
    bgcolor: {
      type: String,
      value: "#fafafa"
    },
    //是否以圆点代替 "没有更多了"
    isDot: {
      type: Boolean,
      value: false
    },
    //isDot为false时生效
    text:{
      type:String,
      value:"没有更多了"
    }
  },
  data: {  
    dotText:"●"
  },
  methods: {}
})