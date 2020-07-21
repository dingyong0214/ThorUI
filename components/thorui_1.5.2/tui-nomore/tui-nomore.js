Component({
  properties: {
    //当前页面背景颜色
    backgroundColor: {
      type: String,
      value: "#fafafa"
    },
    //是否以圆点代替 "没有更多了"
    isDot: {
      type: Boolean,
      value: false
    },
    //isDot为false时生效
    text: {
      type: String,
      value: "没有更多了"
    }
  },
  data: {
    dotText: "●"
  }
})