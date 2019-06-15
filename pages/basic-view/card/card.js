Page({
  data: {
    card: [{
      img: {
        url: "/static/images/news/1.jpg"
      },
      title: {
        text: "CSDN云计算"
      },
      tag: {
        text: "1小时前"
      },
      header: {
        bgcolor: "#ededed",
        line: true
      }
    },
    {
      img: {
        url: "/static/images/news/2.jpg",
        width: 80,
        height: 80,
        circle: true
      },
      title: {
        text: "CSDN云计算",
        color: "#5677fc",
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
        url: "/static/images/news/4.jpg",
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
        bgcolor:"rgba(255,255,255,.7)"
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