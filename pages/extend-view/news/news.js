// const util = require('../../../utils/util.js')
const utils = require('../../../components/utils/utils');
Page({
  data: {
    hotSearch: [
      "早安D站",
      "2019退役球星",
      "卡拉斯科"
    ],
    banner: [{
      img: "banner_1.jpg",
      title: "山东官方：德尔加多已完成全部手续办理，具备上场比赛资格"
    }, {
      img: "banner_2.jpg",
      title: "这个世界上，或许没有真正的托黑"
    }, {
      img: "banner_3.jpg",
      title: "金童再见！西班牙前锋托雷斯宣布退役"
    }],
    newsList: [],
    dataSources: [{
      title: "卡拉斯科：俱乐部一些人的态度令我不解；需要解决出现的问题",
      source: "手机中国网",
      cmtsNum: 2019,
      isTop: true,
      isVideo: false,
      time: "00:00",
      img: ["list_1.jpg"],
      imgNum: 1
    }, {
      title: "荷兰媒体：德利赫特接近加盟尤文，转会费7000万，年薪2000万",
      source: "央视网新闻",
      cmtsNum: 3620,
      isTop: true,
      isVideo: false,
      time: "00:00",
      img: ["list_2.jpg"],
      imgNum: 1
    }, {
      title: "申花客场1-0江苏终结九轮不胜，莫雷诺争议进球经VAR判罚有效",
      source: "体坛大精汇",
      cmtsNum: 5230,
      isTop: true,
      isVideo: false,
      time: "00:00",
      img: [],
      imgNum: 0
    }, {
      title: "卡拉斯科：俱乐部一些人的态度令我不解；需要解决出现的问题",
      source: "体坛大精汇",
      cmtsNum: 7690,
      isTop: true,
      isVideo: false,
      time: "00:00",
      img: ["list_3.jpg", "list_2.jpg", "list_1.jpg"],
      imgNum: 20
    }, {
      title: "敲锣鼓、放鞭炮！本周国际赛事MVP提名揭晓",
      source: "体坛大精汇",
      cmtsNum: 2019,
      isTop: true,
      isVideo: false,
      time: "00:00",
      img: ["list_3.jpg"],
      imgNum: 1
    }, {
      title: "申花客场1-0江苏终结九轮不胜，莫雷诺争议进球经VAR判罚有效",
      source: "手机中国网",
      cmtsNum: 2019,
      isTop: true,
      isVideo: false,
      time: "00:00",
      img: ["list_4.jpg"],
      imgNum: 1
    }, {
      title: "荷兰媒体：德利赫特接近加盟尤文，转会费7000万，年薪2000万",
      source: "手机中国网",
      cmtsNum: 2019,
      isTop: true,
      isVideo: true,
      time: "00:58",
      img: ["banner_2.jpg"],
      imgNum: 1
    }, {
      title: "敲锣鼓、放鞭炮！本周国际赛事MVP提名揭晓",
      source: "体坛大精汇",
      cmtsNum: 5230,
      isTop: true,
      isVideo: false,
      time: "00:00",
      img: [],
      imgNum: 0
    }, {
      title: "卡拉斯科：俱乐部一些人的态度令我不解；需要解决出现的问题",
      source: "体坛大精汇",
      cmtsNum: 7690,
      isTop: true,
      isVideo: false,
      time: "00:00",
      img: ["list_3.jpg", "list_2.jpg", "list_4.jpg"],
      imgNum: 8
    }, {
      title: "申花客场1-0江苏终结九轮不胜，莫雷诺争议进球经VAR判罚有效",
      source: "手机中国网",
      cmtsNum: 2019,
      isTop: true,
      isVideo: true,
      time: "00:49",
      img: ["banner_1.jpg"],
      imgNum: 1
    }],
    pageIndex: 1,
    loadding: false,
    pullUpOn: true
  },
  onLoad: function (options) {
    this.setData({
      newsList: this.data.dataSources
    })
  },
  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    this.setData({
      newsList: this.data.dataSources,
      pageIndex: 1,
      pullUpOn: true,
      loadding: false
    })
    wx.stopPullDownRefresh()
    let options = {
      msg: "刷新成功，为你更新了10条数据",
      duration: 2000,
      type: "translucent"
    };
    setTimeout(() => {
      utils.toast(options);
    }, 300);
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
        //解构和concat修改均会失败？？
        let arr = JSON.parse(JSON.stringify(this.data.dataSources));
        if (this.data.pageIndex >= 1) {
          for (let item of arr) {
            item.isTop = false;
          }
        }
        this.setData({
          newsList: this.data.newsList.concat(arr),
          pageIndex: this.data.pageIndex + 1,
          loadding: false
        })
      }
    })
  },
  search: function () {
    wx.navigateTo({
      url: '../news-search/news-search'
    })
  },
  bannerDetail:function(){
    wx.navigateTo({
      url: '../newsDetail/newsDetail'
    })
  },
  detail(e) {
    let index = e.currentTarget.id;
    let url ="../newsDetail/newsDetail";
    if (this.data.newsList[index].isVideo){
      url = "../news-video/news-video";
    }
    wx.navigateTo({
      url: url
    })
  }
})