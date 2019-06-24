Page({
  data: {
    card: [{
      img: {
        url: "/static/images/news/avatar_1.jpg"
      },
      title: {
        text: "CSDN云计算"
      },
      tag: {
        text: "1小时前"
      },
      header: {
        bgcolor: "#F7F7F7",
        line: true
      }
    },
    {
      img: {
        url: "/static/images/news/avatar_2.jpg",
        width: 80,
        height: 80,
        circle: true
      },
      title: {
        text: "CSDN云计算",
        color: "#ed3f14",
        size: 34
      },
      tag: {
        text: "1小时前",
        color: "#ed3f14",
        size: 28
      }
    },
    {
      img: {
        url: "/static/images/news/avatar_1.jpg",
        circle: true
      },
      title: {
        text: "JavaScript"
      },
      tag: {
        text: "昨天"
      },
      header: {
        line: true,
        bgcolor:"#F7F7F7"
      }
    },
    {
      header: {
        line: true
      }
    }
    ]
  },
  onLoad: function (options) {

  },
  detail: function () {
    wx.showToast({
      title: '详情功能尚未完善~',
      icon: "none"
    })
  }
})