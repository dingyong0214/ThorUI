Page({
  data: {
    fabulous: 173,
    isFabulous: false,
    replyList: [{
      avatar: "avatar_1.jpg",
      nickname: "月牙",
      fabulous: 2,
      content: "力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。",
      reply: [],
      time: "昨天 21:09"
    }, {
        avatar: "list_2.jpg",
      nickname: "拜仁慕尼黑",
      fabulous: 2,
      content: "说实话，武汉重庆还真的是一家，但是比赛还是要分出个胜负来的，我卓尔球迷肯定是要为我武汉加油了，按照目前两队现在这个状态来看武汉重庆应该是五五开，所以我想说武汉加油！卓尔加油！",
      reply: [{
        nickname: "月牙",
        content: "力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。"
      }],
      time: "昨天 21:09"
    }, {
        avatar: "avatar_2.jpg",
      nickname: "thorui",
      fabulous: 0,
      content: "小克鲁伊夫带的球队征服了中超球迷，李铁也带队冲超成功，现在风头正劲，究竟鹿死谁手，谁更胜一筹，期待精彩的比赛",
      reply: [],
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
      fabulous: this.data.isFabulous ? 173 : 174,
      isFabulous: !this.data.isFabulous
    })
  },
  cmtFabulous: function (e) {
    let index = e.currentTarget.id;
    let fabulousObj = `replyList[${index}].fabulous`;
    let isFabulousObj = `replyList[${index}].isFabulous`;
    let isFabulous = this.data.replyList[index].isFabulous;
    let fabulous = this.data.replyList[index].fabulous;
    let fabulousNum = isFabulous ? fabulous - 1 : fabulous + 1;
    this.setData({
      [fabulousObj]: fabulousNum,
      [isFabulousObj]: !isFabulous
    })
  },
  btnCmt: function () {
    wx.navigateTo({
      url: '../news-cmt/news-cmt'
    })
  },
  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    this.setData({
      pageIndex: 1,
      pullUpOn: true,
      loadding: false
    })
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 200);
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
        let arr = JSON.parse(JSON.stringify(this.data.replyList));
        this.setData({
          replyList: this.data.replyList.concat(arr),
          pageIndex: this.data.pageIndex + 1,
          loadding: false
        })
      }
    })
  }
})