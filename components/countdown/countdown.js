Component({
  externalClasses: ['tui-countdown-class'],
  properties: {
    //数字框最小宽度
    width: {
      type: Number,
      value: 26
    },
    //数字框最小高度
    height: {
      type: Number,
      value: 26
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
    //是否缩放 0.8
    scale: {
      type: Boolean,
      value: false
    },
    //冒号大小
    colonsize: {
      type: Number,
      value: 28
    },
    //冒号颜色
    coloncolor: {
      type: String,
      value: "#333"
    },
    //剩余时间 
    time: {
      type: Object,
      value: {
        hours: 0,
        minute: 0,
        second: 0
      },
      observer(val) {
        this.doLoop();
      }
    },
    //是否包含小时
    hours:{
      type:Boolean,
      value:true
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
    toSeconds(hours, minutes, seconds) {
      return (hours * 60 * 60) + (minutes * 60) + seconds
    },
    endOfTime() {
      clearInterval(this.data.countdown)
      this.setData({
        countdown: null
      })
      this.triggerEvent('end', {});
    },
    doLoop: function() {
      let seconds = this.toSeconds(this.data.time.hours || 0, this.data.time.minute || 0, this.data.time.second)
      console.log(seconds)
      this.countDown(seconds)
      this.setData({
        countdown: setInterval(() => {
          seconds--
          console.log(seconds)
          if (seconds < 0) {
            this.endOfTime()
            return
          }
          this.countDown(seconds)
        }, 1000)
      })
    },
    countDown(seconds) {
      let [hour, minute, second] = [0, 0, 0]
      if (seconds > 0) {
        hour = Math.floor(seconds / (60 * 60))
        minute = Math.floor(seconds / 60) - (hour * 60)
        second = Math.floor(seconds) - (hour * 60 * 60) - (minute * 60)
      } else {
        this.endOfTime()
      }
      hour = hour < 10 ? ('0' + hour) : hour
      minute = minute < 10 ? ('0' + minute) : minute
      second = second < 10 ? ('0' + second) : second
      this.setData({
        h: hour,
        i: minute,
        s: second
      })
    }
  }
})