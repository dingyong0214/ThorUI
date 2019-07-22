let timer;
Component({
  externalClasses: ['tui-tips-class'],
  properties: {
    //top bottom center
    position: {
      type: String,
      value: "top"
    }
  },
  data: {
    show: false,
    msg: "无法连接到服务器~",
    //translucent,primary,green,warning,danger
    type: "translucent"
  },
  lifetimes: {
    detached: function() {
      clearTimeout(timer);
      timer = null;
    }
  },
  methods: {
    showTips: function(options) {
      const {type = 'translucent', duration = 2000} = options;
      clearTimeout(timer);
      this.setData({
        show: true,
        type: type,
        msg: options.msg
      }, () => {
        timer = setTimeout(() => {
          this.setData({
            show: false
          }, () => {
            timer = null;
          })
        }, duration)
      })
    }
  }
})