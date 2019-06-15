Component({
  externalClasses: ['tui-griditem-class'], //自定义样式
  properties: {
    cell:{
      type:Number,
      value:3
    },
    bgcolor:{
      type: String,
      value:"#fff"
    },
    //是否有点击效果
    hover: {
      type: Boolean,
      value: true 
    },
    //底部线条
    bottom:{
      type:Boolean,
      value:true
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
