Page({
  data: {
    type: 1,
    startYear: 1980,
    endYear: 2030,
    cancelColor: "#888",
    color: "#5677fc",
    setDateTime: "",
    result: ""
  },
  onLoad: function (options) {

  },
  onReady: function (options) {
    this.dateTime = this.selectComponent("#tui-dateTime-ctx")
  },
  show: function (e) {
    let type = Number(e.currentTarget.dataset.type);
    this.setData({
      cancelColor: "#888",
      color: "#5677fc",
      setDateTime:"",
      startYear: 1980,
      endYear: 2030
    })
    switch (type) {
      case 1:
        this.setData({
          type:2
        })
        break;
      case 2:
        this.setData({
          type: 3
        })
        break;
      case 3:
        this.setData({
          type: 4
        })
        break;
      case 4:
        this.setData({
          type: 1
        })
        break;
      case 5:
        this.setData({
          type: 1,
          setDateTime:"2019-09-12 18:01"
        })
        break;
      case 6:
        this.setData({
          type: 1,
          startYear: 2019,
          endYear: 2021
        })
        break;
      case 7:
        this.setData({
          type: 1,
          cancelColor: "#555",
          color: "#e41f19"
        })
        break;
      default:
        break;
    }
    this.dateTime.show();
  },
  change: function (e) {
    console.log(e)
    this.setData({
      result: e.detail.result
    })
  }
})