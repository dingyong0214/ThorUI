Component({
  properties: {
    //1-日期+时间（年月日+时分） 2-日期(年月日) 3-日期(年月) 4-时间（时分）
    type: {
      type: Number,
      value: 1,
      observer(val) {
        this.propsChange();
      }
    },
    //年份区间
    startYear: {
      type: Number,
      value: 1980,
      observer(val) {
        this.propsChange();
      }
    },
    //年份区间
    endYear: {
      type: Number,
      value: 2050,
      observer(val) {
        this.propsChange();
      }
    },
    //"取消"字体颜色
    cancelColor: {
      type: String,
      value: "#888"
    },
    //"确定"字体颜色
    color: {
      type: String,
      value: "#5677fc"
    },
    //设置默认显示日期 2019-08-01 || 2019-08-01 17:01 || 2019/08/01 
    setDateTime: {
      type: String,
      value: "",
      observer(val) {
        this.propsChange();
      }
    }
  },
  lifetimes: {
    ready: function () {
      this.initData()
    }
  },
  data: {
    isShow: false,
    years: [],
    months: [],
    days: [],
    hours: [],
    minutes: [],
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    startDate: "",
    endDate: "",
    value: [0, 0, 0, 0, 0],
    reset: false
  },
  observers:{
    'year, month': function (year, month) {
      this.setDays();
    }
  },
  methods: {
    stop() {},
    propsChange() {
      this.setData({
        reset: true
      })
      setTimeout(() => {
        this.initData()
      }, 10);
    },
    formatNum: function(num) {
      return num < 10 ? "0" + num : num + "";
    },
    generateArray: function(start, end) {
      return Array.from(new Array(end + 1).keys()).slice(start)
    },
    getIndex: function(arr, val) {
      let index = arr.indexOf(val);
      return ~index ? index : 0
    },
    //日期时间处理
    initSelectValue() {
      let fdate = this.data.setDateTime.replace(/\-/g, '/');
      fdate = fdate && fdate.indexOf("/") == -1 ? `2020/01/01 ${fdate}` : fdate
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
        minute: time.getMinutes()
      })

    },
    initData() {
      this.initSelectValue()
      this.setData({
        reset: false
      })
      switch (this.data.type) {
        case 1:
          this.setData({
            value: [0, 0, 0, 0, 0]
          })
          this.setYears();
          this.setMonths();
          this.setDays();
          this.setHours();
          this.setMinutes();
          break;
        case 2:
          this.setData({
            value: [0, 0, 0]
          })
          this.setYears();
          this.setMonths();
          this.setDays();
          break;
        case 3:
          this.setData({
            value: [0, 0]
          })
          this.setYears();
          this.setMonths();
          break;
        case 4:
          this.setData({
            value: [0, 0]
          })
          this.setHours();
          this.setMinutes();
          break;
        default:
          break;
      }
    },
    setYears() {
      this.setData({
        years: this.generateArray(this.data.startYear, this.data.endYear)
      })
      setTimeout(() => {
        let value = "value[0]";
        this.setData({
          [value]: this.getIndex(this.data.years, this.data.year)
        })
      }, 8);
    },
    setMonths() {
      this.setData({
        months: this.generateArray(1, 12)
      })
      setTimeout(() => {
        let value = "value[1]";
        this.setData({
          [value]: this.getIndex(this.data.months, this.data.month)
        })
      }, 8);
    },
    setDays() {
      if (this.data.type == 3 || this.data.type == 4) return;
      let totalDays = new Date(this.data.year, this.data.month, 0).getDate();
      this.setData({
        days: this.generateArray(1, totalDays)
      })
      setTimeout(() => {
        let value = "value[2]";
        this.setData({
          [value]: this.getIndex(this.data.days, this.data.day)
        })
      }, 8);
    },
    setHours() {
      this.setData({
        hours: this.generateArray(0, 23)
      })
      setTimeout(() => {
        let value = `value[${this.data.value.length - 2}]`;
        this.setData({
          [value]: this.getIndex(this.data.hours, this.data.hour)
        })
      }, 8);

    },
    setMinutes() {
      this.setData({
        minutes: this.generateArray(0, 59)
      })
      setTimeout(() => {
        let value = `value[${this.data.value.length - 1}]`;
        this.setData({
          [value]: this.getIndex(this.data.minutes, this.data.minute)
        })
      }, 8);
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
      this.setData({
        value: e.detail.value
      })
      switch (this.data.type) {
        case 1:
          this.setData({
            year: this.data.years[this.data.value[0]],
            month: this.data.months[this.data.value[1]],
            day: this.data.days[this.data.value[2]],
            hour: this.data.hours[this.data.value[3]],
            minute: this.data.minutes[this.data.value[4]]
          })
          break;
        case 2:
          this.setData({
            year: this.data.years[this.data.value[0]],
            month: this.data.months[this.data.value[1]],
            day: this.data.days[this.data.value[2]]
          })
          break;
        case 3:
          this.setData({
            year: this.data.years[this.data.value[0]],
            month: this.data.months[this.data.value[1]]
          })
          break;
        case 4:
          this.setData({
            hour: this.data.hours[this.data.value[0]],
            minute: this.data.minutes[this.data.value[0]]
          })
          break;
        default:
          break;
      }

    },
    btnFix() {
      let result = {};
      let year = this.data.year;
      let month = this.formatNum(this.data.month || 0);
      let day = this.formatNum(this.data.day || 0);
      let hour = this.formatNum(this.data.hour || 0);
      let minute = this.formatNum(this.data.minute || 0);
      switch (this.data.type) {
        case 1:
          result = {
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            result: `${year}-${month}-${day} ${hour}:${minute}`
          }
          break;
        case 2:
          result = {
            year: year,
            month: month,
            day: day,
            result: `${year}-${month}-${day}`
          }
          break;
        case 3:
          result = {
            year: year,
            month: month,
            result: `${year}-${month}`
          }
          break;
        case 4:
          result = {
            hour: hour,
            minute: minute,
            result: `${hour}:${minute}`
          }
          break;
        default:
          break;
      }
      this.triggerEvent('confirm', result)
      this.hide();
    }
  }
})