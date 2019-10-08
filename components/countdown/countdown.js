Component({
  externalClasses: ['tui-countdown-class'],
  properties: {
    //数字框宽度
    width: {
      type: Number,
      value: 24
    },
    //数字框高度
    height: {
      type: Number,
      value: 24
    },
    //数字框border颜色
    bcolor: {
      type: String,
      value: "#333"
    },
    //数字框背景颜色
    bgcolor: {
      type: String,
      value: "#fff"
    },
    //数字框字体大小
    size: {
      type: Number,
      value: 24
    },
    //数字框字体颜色
    color: {
      type: String,
      value: "#333"
    },
    //是否缩放 0.9
    scale: {
      type: Boolean,
      value: false
    },
    //冒号大小
    colonSize: {
      type: Number,
      value: 28
    },
    //冒号颜色
    colonColor: {
      type: String,
      value: "#333"
    },
    //剩余时间 (单位：秒)
    time: {
      type: Number,
      value: 0,
      observer(val) {
        clearInterval(this.data.countdown)
        this.doLoop();
      }
    },
    //是否包含天
    days: {
      type: Boolean,
      value: false
    },
    //是否包含小时
    hours: {
      type: Boolean,
      value: true
    },
    //是否包含分钟
    minutes: {
      type: Boolean,
      value: true
    },
    //是否包含秒
    seconds: {
      type: Boolean,
      value: true
    },
    //是否展示为冒号,false为文字
    isColon: {
      type: Boolean,
      value: true
    }
  },
  data: {
    countdown: null,
    h: '00',
    i: '00',
    s: '00'
  },
  lifetimes: {
    detached: function() {
      clearInterval(this.data.countdown)
      this.setData({
        countdown: null
      })
    }
  },
  methods: {
    endOfTime() {
      clearInterval(this.data.countdown)
      this.setData({
        countdown: null
      })
      this.triggerEvent('end', {});
    },
    doLoop: function() {
      let seconds = this.data.time || 0
      this.countDown(seconds)
      this.setData({
        countdown: setInterval(() => {
          seconds--
          if (seconds < 0) {
            this.endOfTime()
            return
          }
          this.countDown(seconds)
        }, 1000)
      })
    },
    countDown(seconds) {
      let [day, hour, minute, second] = [0, 0, 0, 0]
      if (seconds > 0) {
        day = this.data.days ? Math.floor(seconds / (60 * 60 * 24)) : 0
        hour = Math.floor(seconds / (60 * 60)) - (day * 24)
        minute = Math.floor(seconds / 60) - (hour * 60) - (day * 24 * 60)
        second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
      } else {
        this.endOfTime()
      }
      hour = hour < 10 ? ('0' + hour) : hour
      minute = minute < 10 ? ('0' + minute) : minute
      second = second < 10 ? ('0' + second) : second
      this.setData({
        d: day,
        h: hour,
        i: minute,
        s: second
      })
    }
  }
})