Page({
  data: {

  },
  onReady: function (options) {
    this.toast = this.selectComponent("#tui-tips-ctx")
  },
  showToast(e) {
    let type = Number(e.currentTarget.dataset.index);
    let params = {
      title: "操作成功",
      imgUrl: "/static/images/toast/check-circle.png",
      icon: true
    };
    switch (type) {
      case 2:
        params.title = "操作失败";
        params.imgUrl = "/static/images/toast/fail-circle.png";
        break;
      case 3:
        params.title = "提示信息";
        params.imgUrl = "/static/images/toast/info-circle.png";
        break;
      case 4:
        params.title = "提示信息";
        params.icon = false;
        break;
      case 5:
        params.title = "标题信息";
        params.content = "操作成功，内容信息";
        break;
      case 6:
        params.title = "5s后消失~";
        params.duration = 4000;
        break;
      default:
        break;
    }
    this.toast.show(params);
  }
})