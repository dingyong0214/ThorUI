Page({
  data: {
    visible: false,
    maskClosable: false,
    btnColor: "#EB0909",
    color: "#333",
    btnText: "确定"
  },
  onLoad: function(options) {

  },
  showAlert(e) {
    let type = Number(e.currentTarget.dataset.index);
    this.setData({
      btnText: "确定",
      btnColor: "#EB0909",
      color: "#333",
      maskClosable: false
    })

    switch (type) {
      case 2:
        this.setData({
          btnColor: "#000"
        })
        break;
      case 3:
        this.setData({
          btnText: "点击关闭"
        })
        break;
      case 4:
        this.setData({
          color: "#EB0909"
        })
        break;
      case 5:
        this.setData({
          maskClosable: true
        })
        break;
      default:
        break;
    }
    this.setData({
      visible: true
    })
  },
  hideAlert(type) {
    this.setData({
      visible: false
    })
  }
})