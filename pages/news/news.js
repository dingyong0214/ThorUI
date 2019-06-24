Page({
  data: {
    pageIndex: 1,
    newsList: [{
      title: '温故知"心"习近平这些话要牢记',
      img: 1,
      source: "央视新闻网",
      label: 1
    }, {
      title: '3.07财经早报┃头条：推进改革开放创新增进民生福祉，促进经济社会持续健康发展促进经济社会持续健康发展',
      img: 0,
      source: "百科故事大全",
      label: 0
    }, {
      title: '哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列',
      img: 0,
      source: "粤港精英联盟",
      label: 2
    }, {
      title: '触手直播“和平精英”星联赛Jstar夺冠 大热',
      img: 1,
      source: "央视新闻网",
      label: 0
    }, {
      title: '开户大战燎原！加急上线科创板预约开户',
      img: 2,
      source: "百科故事大全",
      label: 4
    }, {
      title: '科创板交易系统准备就绪,不存在首批名单',
      img: 0,
      source: "百科故事大全",
      label: 1
    }, {
      title: '美国会表决通过新驻华大使 月底有望赴华',
      img: 4,
      source: "粤港精英联盟",
      label: 0
    }, {
      title: '哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列',
      img: 1,
      source: "粤港精英联盟",
      label: 4
    }, {
      title: '温故知"心"习近平这些话要牢记',
      img: 0,
      source: "央视新闻网",
      label: 3
    }, {
      title: '科创板交易系统准备就绪,不存在首批名单',
      img: 5,
      source: "央视新闻网",
      label: 2
    }],
    loadData: [{
      title: '温故知"心"习近平这些话要牢记',
      img: 1,
      source: "央视新闻网",
      label: 1
    }, {
      title: '3.07财经早报┃头条：推进改革开放创新增进民生福祉，促进经济社会持续健康发展促进经济社会持续健康发展',
      img: 2,
      source: "百科故事大全",
      label: 2
    }, {
      title: '哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列',
      img: 0,
      source: "粤港精英联盟",
      label: 0
    }, {
      title: '触手直播“和平精英”星联赛Jstar夺冠 大热',
      img: 0,
      source: "央视新闻网",
      label: 3
    }, {
      title: '开户大战燎原！加急上线科创板预约开户',
      img: 2,
      source: "百科故事大全",
      label: 4
    }, {
      title: '科创板交易系统准备就绪,不存在首批名单',
      img: 0,
      source: "百科故事大全",
      label: 1
    }, {
      title: '美国会表决通过新驻华大使 月底有望赴华',
      img: 4,
      source: "粤港精英联盟",
      label: 0
    }, {
      title: '哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列',
      img: 1,
      source: "粤港精英联盟",
      label: 4
    }, {
      title: '温故知"心"习近平这些话要牢记',
      img: 3,
      source: "央视新闻网",
      label: 0
    }, {
      title: '科创板交易系统准备就绪,不存在首批名单',
      img: 5,
      source: "央视新闻网",
      label: 2
    }],
    loadding: false,
    pullUpOn: true
  },
  onLoad: function(options) {

  },
  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function() {
    //延时为了看效果
    setTimeout(() => {
      this.setData({
        newsList: this.data.loadData,
        pageIndex: 1,
        pullUpOn: true,
        loadding: false
      })
      wx.stopPullDownRefresh()
      wx.showToast({
        title: '刷新成功',
        icon: "none"
      })
    }, 200)
  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function() {
    if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    }, () => {
      //延时为了看效果
      //setTimeout(()=>{
      if (this.data.pageIndex == 3) {
        this.setData({
          loadding: false,
          pullUpOn: false
        })
      } else {
        this.setData({
          newsList: this.data.newsList.concat(this.data.loadData),
          pageIndex: this.data.pageIndex + 1
        })
      }
      //},200)
    })
  },
  detail(e) {
    wx.navigateTo({
      url: '../extend-view/newsDetail/newsDetail'
    })
  }
})