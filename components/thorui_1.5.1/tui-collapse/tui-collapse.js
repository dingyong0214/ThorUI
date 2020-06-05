Component({
  externalClasses: ["tui-collapse"],
  options: {
    multipleSlots: true
  },
  properties: {
    //collapse背景颜色
    bgColor: {
      type: String,
      value: 'transparent'
    },
    //collapse-head 背景颜色
    hdBgColor: {
      type: String,
      value: '#fff'
    },
    //collapse-body 背景颜色
    bdBgColor: {
      type: String,
      value: 'transparent'
    },
    //collapse-body实际高度 open时使用
    height: {
      type: String,
      value: 'auto'
    },
    //索引
    index: {
      type: Number,
      value: 0
    },
    //当前索引，index==current时展开
    current: {
      type: Number,
      value: -1,
      observer(val){
        this.updateCurrentChange()
      }
    },
    // 是否禁用
    disabled: {
      type: [Boolean, String],
      value: false
    },
    //是否带箭头
    arrow: {
      type: [Boolean, String],
      value: true
    },
    //箭头颜色
    arrowColor: {
      type: String,
      value: "#333"
    }
  },
  lifetimes:{
    attached:function(){
      this.updateCurrentChange()
    }
  },
  data: {
    isOpen: false
  },
  methods: {
    updateCurrentChange() {
      this.setData({
        isOpen: this.data.index == this.data.current
      })
    },
    handleClick() {
      if (this.data.disabled) return;
      this.triggerEvent("click", {
        index: Number(this.data.index)
      })
    }
  }
})