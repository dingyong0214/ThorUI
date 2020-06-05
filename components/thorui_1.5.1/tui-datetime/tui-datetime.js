Component({
  properties: {
    //1-日期+时间（年月日+时分） 2-日期(年月日) 3-日期(年月) 4-时间（时分） 5-时分秒 6-分秒 7-年月日 时分秒
    type: {
      type: Number,
      value: 1
    },
    //年份区间
    startYear: {
      type: Number,
      value: 1980
    },
    //年份区间
    endYear: {
      type: Number,
      value: 2050
    },
    //"取消"字体颜色
    cancelColor: {
      type: String,
      value: '#888'
    },
    //"确定"字体颜色
    color: {
      type: String,
      value: '#5677fc'
    },
    //设置默认显示日期 2019-08-01 || 2019-08-01 17:01 || 2019/08/01
    setDateTime: {
      type: String,
      value: ''
    },
    //单位置顶
    unitTop: {
      type: Boolean,
      value: false
    },
    //圆角设置
    radius: {
      type: Boolean,
      value: false
    }
  },
  data: {
    isShow: false,
    years: [],
    months: [],
    days: [],
    hours: [],
    minutes: [],
    seconds: [],
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    startDate: '',
    endDate: '',
    value: [0, 0, 0, 0, 0, 0],
    reset: false
  },
  lifetimes: {
    ready: function() {
      this.initData();
    }
  },
  observers: {
    'year, month': function(year, month) {
      this.setDays();
    },
    'setDateTime,type,startYear,endYear': function(setDateTime, type, startYear, endYear) {
      this.setData({
        reset: true
      }, () => {
        setTimeout(() => {
          this.initData();
        }, 10);
      })
    }
  },
  methods: {
    stop() {},
    formatNum: function(num) {
      return num < 10 ? '0' + num : num + '';
    },
    generateArray: function(start, end) {
      return Array.from(new Array(end + 1).keys()).slice(start);
    },
    getIndex: function(arr, val) {
      let index = arr.indexOf(val);
      return ~index ? index : 0;
    },
    //日期时间处理
    initSelectValue() {
      let fdate = this.data.setDateTime.replace(/\-/g, '/');
      fdate = fdate && fdate.indexOf('/') == -1 ? `2020/01/01 ${fdate}` : fdate;
      let time = null;
      if (fdate)
        time = new Date(fdate);
      else
        time = new Date();
      this.setData({
        year: time.getFullYear(),
        month: time.getMonth() + 1,
        day: time.getDate(),
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      })

    },
    initData() {
      this.initSelectValue();
      this.setData({
        reset: false
      })
      switch (this.data.type) {
        case 1:
          this.setData({
            value: [0, 0, 0, 0, 0]
          }, () => {
            this.setYears();
            this.setMonths();
            this.setDays();
            this.setHours();
            this.setMinutes();
          })

          break;
        case 2:
          this.setData({
            value: [0, 0, 0]
          }, () => {
            this.setYears();
            this.setMonths();
            this.setDays();
          })
          break;
        case 3:
          this.setData({
            value: [0, 0]
          }, () => {
            this.setYears();
            this.setMonths();
          })
          break;
        case 4:
          this.setData({
            value: [0, 0]
          }, () => {
            this.setHours();
            this.setMinutes();
          })
          break;
        case 5:
          this.setData({
            value: [0, 0, 0]
          }, () => {
            this.setHours();
            this.setMinutes();
            this.setSeconds();
          })
          break;
        case 6:
          this.setData({
            value: [0, 0]
          }, () => {
            this.setMinutes();
            this.setSeconds();
          })
          break;
        case 7:
          this.setData({
            value: [0, 0, 0, 0, 0, 0]
          }, () => {
            this.setYears();
            this.setMonths();
            this.setDays();
            this.setHours();
            this.setMinutes();
            this.setSeconds();
          })
          break;
        default:
          break;
      }
    },
    setYears() {
      this.setData({
        years: this.generateArray(this.data.startYear, this.data.endYear)
      }, () => {
        setTimeout(() => {
          let value = "value[0]";
          this.setData({
            [value]: this.getIndex(this.data.years, this.data.year)
          })
        }, 8);
      })
    },
    setMonths() {
      this.setData({
        months: this.generateArray(1, 12)
      }, () => {
        setTimeout(() => {
          let value = "value[1]";
          this.setData({
            [value]: this.getIndex(this.data.months, this.data.month)
          })
        }, 8);
      })
    },
    setDays() {
      if (this.data.type == 3 || this.data.type == 4) return;
      let totalDays = new Date(this.data.year, this.data.month, 0).getDate();
      this.setData({
        days: this.generateArray(1, totalDays)
      }, () => {
        setTimeout(() => {
          let value = "value[2]";
          this.setData({
            [value]: this.getIndex(this.data.days, this.data.day)
          })
        }, 8);
      })
    },
    setHours() {
      this.setData({
        hours: this.generateArray(0, 23)
      }, () => {
        setTimeout(() => {
          let length = this.data.value.length
          let index = (this.data.type == 5 || this.data.type == 7) ? length - 3 : length - 2;
          let value = `value[${index}]`;
          this.setData({
            [value]: this.getIndex(this.data.hours, this.data.hour)
          })
        }, 8);
      })
    },
    setMinutes() {
      this.setData({
        minutes: this.generateArray(0, 59)
      }, () => {
        setTimeout(() => {
          let length = this.data.value.length
          let index = this.data.type > 4 ? length - 2 : length - 1;
          let value = `value[${index}]`;
          this.setData({
            [value]: this.getIndex(this.data.minutes, this.data.minute)
          })
        }, 8);
      })

    },
    setSeconds() {
      this.setData({
        seconds: this.generateArray(0, 59)
      }, () => {
        setTimeout(() => {
          let value = `value[${this.data.value.length - 1}]`;
          this.setData({
            [value]: this.getIndex(this.data.seconds, this.data.second)
          })
        }, 8);
      })
    },
    show() {
      setTimeout(() => {
        this.setData({
          isShow: true
        })
      }, 50);
    },
    hide() {
      this.setData({
        isShow: false
      })
    },
    change(e) {
      let value = e.detail.value;
      switch (this.data.type) {
        case 1:
          this.setData({
            value: value,
            year: this.data.years[value[0]],
            month: this.data.months[value[1]],
            day: this.data.days[value[2]],
            hour: this.data.hours[value[3]],
            minute: this.data.minutes[value[4]]
          })
          break;
        case 2:
          this.setData({
            value: value,
            year: this.data.years[value[0]],
            month: this.data.months[value[1]],
            day: this.data.days[value[2]]
          })
          break;
        case 3:
          this.setData({
            value: value,
            year: this.data.years[value[0]],
            month: this.data.months[value[1]]
          })
          break;
        case 4:
          this.setData({
            value: value,
            hour: this.data.hours[value[0]],
            minute: this.data.minutes[value[1]]
          })
          break;
        case 5:
          this.setData({
            value: value,
            hour: this.data.hours[value[0]],
            minute: this.data.minutes[value[1]],
            second: this.data.seconds[value[2]]
          })
          break;
        case 6:
          this.setData({
            value: value,
            minute: this.data.minutes[value[0]],
            second: this.data.seconds[value[2]]
          })
          break;
        case 7:
          this.setData({
            value: value,
            year: this.data.years[value[0]],
            month: this.data.months[value[1]],
            day: this.data.days[value[2]],
            hour: this.data.hours[value[3]],
            minute: this.data.minutes[value[4]],
            second: this.data.seconds[value[5]]
          })
          break;
        default:
          break;
      }
    },
    btnFix() {
      setTimeout(() => {
        let result = {};
        let year = this.data.year;
        let month = this.formatNum(this.data.month || 0);
        let day = this.formatNum(this.data.day || 0);
        let hour = this.formatNum(this.data.hour || 0);
        let minute = this.formatNum(this.data.minute || 0);
        let second = this.formatNum(this.data.second || 0);
        switch (this.data.type) {
          case 1:
            result = {
              year: year,
              month: month,
              day: day,
              hour: hour,
              minute: minute,
              result: `${year}-${month}-${day} ${hour}:${minute}`
            };
            break;
          case 2:
            result = {
              year: year,
              month: month,
              day: day,
              result: `${year}-${month}-${day}`
            };
            break;
          case 3:
            result = {
              year: year,
              month: month,
              result: `${year}-${month}`
            };
            break;
          case 4:
            result = {
              hour: hour,
              minute: minute,
              result: `${hour}:${minute}`
            };
            break;
          case 5:
            result = {
              hour: hour,
              minute: minute,
              second: second,
              result: `${hour}:${minute}:${second}`
            };
            break;
          case 6:
            result = {
              minute: minute,
              second: second,
              result: `${minute}:${second}`
            };
            break;
          case 7:
            result = {
              year: year,
              month: month,
              day: day,
              hour: hour,
              minute: minute,
              second: second,
              result: `${year}-${month}-${day} ${hour}:${minute}:${second}`
            };
            break;
          default:
            break;
        }
        this.triggerEvent('confirm', result);
        this.hide();
      }, 80);
    }
  }
})