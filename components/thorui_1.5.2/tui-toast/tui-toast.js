let timer;
Component({
  data: {
    //是否显示
    visible: false,
    //显示标题
    title: "操作成功",
    //显示内容
    content: "",
    //是否有icon
    icon: false,
    imgUrl: ""
  },
  lifetimes: {
    detached: function () {
      clearTimeout(timer);
      timer = null;
    }
  },
  methods: {
    show: function (options) {
      let {
        duration = 2000,
        icon = false
      } = options;
      clearTimeout(timer);
      if (icon && options.imgUrl) {
        this.setData({
          imgUrl: options.imgUrl
        })
      }
      this.setData({
        visible: true,
        title: options.title || "",
        content: options.content || "",
        icon: icon
      })
      timer = setTimeout(() => {
        this.setData({
          visible: false
        }, () => {
          clearTimeout(timer);
          timer = null;
        })
      }, duration)
    }
  }
})