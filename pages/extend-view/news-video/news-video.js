const util = require('../../../utils/util.js')
Page({
  data: {
    danmuList: [{
      text: '非常棒！！！',
      color: '#ff0000',
      time: 3
    },
    {
      text: '不错哦~~~~',
      color: '#ff00ff',
      time: 3
    },
    {
      text: '超级厉害！',
      color: '#ff00ff',
      time: 5
    },
    {
      text: '无敌~',
      color: '#ff00ff',
      time: 5
    },
    {
      text: '很棒',
      color: '#ff00ff',
      time: 5
    },
    {
      text: '超赞！',
      color: '#ff00ff',
      time: 8
    },
    {
      text: '给力',
      color: '#ff00ff',
      time: 8
    },
    {
      text: 'thorui~~~~~',
      color: '#ff00ff',
      time: 10
    },
    {
      text: '给力~~~',
      color: '#ff00ff',
      time: 16
    },
    {
      text: '给力~~~',
      color: '#ff00ff',
      time: 20
    },
    {
      text: 'thorui~~~~~',
      color: '#ff00ff',
      time: 30
    },
    {
      text: 'thorui~~~~~',
      color: '#ff00ff',
      time: 50
    },
    {
      text: 'thorui~~~~~',
      color: '#ff00ff',
      time: 50
    }
    ],
    fabulous: 123,
    isFabulous: false,
    isCollection: false,
    cmtList: [{
      avatar: "list_2.jpg",
      nickname: "米兰的卡先生",
      fabulous: 123,
      isFabulous: false,
      content: "我一直没懂赛前问一个主教练如何评价对手的主教练， 记者究竟是想得到什么答案？",
      reply: [{
        nickname: "Mesaldo",
        content: "汉军威武!卓尔不凡!火炉德比，热力四射！场上争胜，场下朋友☺ ☻"
      }, {
        nickname: "月牙",
        content: "新政实行后，大小摩托轮流冲，不用经常上迪力了，杨帅该拿下就拿下☺"
      }],
      replayNum: 44,
      time: "昨天 22:12"
    }, {
        avatar: "avatar_1.jpg",
      nickname: "月牙",
      fabulous: 2,
      content: "力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。",
      reply: [{
        nickname: "thorui",
        content: "汉军威武!卓尔不凡!火炉德比，热力四射！场上争胜，场下朋友"
      }, {
        nickname: "Mr卡卜斯",
        content: "说实话，武汉重庆还真的是一家，但是比赛还是要分出个胜负来的，我卓尔球迷肯定是要为我武汉加油了，按照目前两队现在这个状态来看武汉重庆应该是五五开，所以我想说武汉加油！卓尔加油！"
      }],
      replayNum: 2,
      time: "昨天 21:09"
    }, {
        avatar: "avatar_2.jpg",
      nickname: "thorui",
      fabulous: 0,
      content: "小克鲁伊夫带的球队征服了中超球迷，李铁也带队冲超成功，现在风头正劲，究竟鹿死谁手，谁更胜一筹，期待精彩的比赛 ☻ ☻ ☻",
      reply: [],
      replayNum: 0,
      time: "昨天 17:30"
    }],
    pageIndex: 1,
    loadding: false,
    pullUpOn: true
  },
  onLoad: function (options) {

  },
  btnFabulous: function () {
    this.setData({
      fabulous: this.data.isFabulous ? 123 : 124,
      isFabulous: !this.data.isFabulous
    })
  },
  cmtFabulous: function (e) {
    let index = e.currentTarget.id;
    let fabulousObj = `cmtList[${index}].fabulous`;
    let isFabulousObj = `cmtList[${index}].isFabulous`;
    let isFabulous = this.data.cmtList[index].isFabulous;
    let fabulous = this.data.cmtList[index].fabulous;
    let fabulousNum = isFabulous ? fabulous - 1 : fabulous + 1;
    this.setData({
      [fabulousObj]: fabulousNum,
      [isFabulousObj]: !isFabulous
    })
  },
  collection: function () {
    this.setData({
      isCollection: !this.data.isCollection
    }, () => {
      if (this.data.isCollection) {
        util.toast("收藏成功！");
      }
    })
  },
  btnCmt: function () {
    wx.navigateTo({
      url: '../news-cmt/news-cmt'
    })
  },
  cmtAll: function () {
    wx.navigateTo({
      url: '../news-cmt-list/news-cmt-list'
    })
  },
  cmtReply: function () {
    wx.navigateTo({
      url: '../news-cmt-reply/news-cmt-reply'
    })
  },
  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    }, () => {
      if (this.data.pageIndex == 3) {
        this.setData({
          loadding: false,
          pullUpOn: false
        })
      } else {
        let arr = JSON.parse(JSON.stringify(this.data.cmtList));
        this.setData({
          cmtList: this.data.cmtList.concat(arr),
          pageIndex: this.data.pageIndex + 1,
          loadding: false
        })
      }
    })
  }
})