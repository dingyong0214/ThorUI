Page({
  data: {
    pageIndex: 1,
    productList: [{
        img: 1,
        name: "利物浦官方 独家出品纪念版沙发",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "好看好养活的绿色养眼小盆栽，超级实惠",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "利物浦官方 独家出品大红床上用品三件套",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "利物浦官方 独家出品花花碎花床上用品三件套",
        sale: 1599,
        factory: 2899,
        payNum: 236
      },
      {
        img: 5,
        name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
        sale: 599,
        factory: 899,
        payNum: 2399
      }, {
        img: 1,
        name: "独家出品纪念版沙发",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "好看好养活的绿色养眼小盆栽，超级实惠",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "利物浦官方 独家出品大红床上用品三件套",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "利物浦官方 独家出品花花碎花床上用品三件套",
        sale: 1599,
        factory: 2899,
        payNum: 236
      },
      {
        img: 5,
        name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
        sale: 599,
        factory: 899,
        payNum: 2399
      }
    ],
    loadData: [{
        img: 1,
        name: "利物浦官方 独家出品纪念版沙发",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "好看好养活的绿色养眼小盆栽，超级实惠",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "利物浦官方 独家出品大红床上用品三件套",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "利物浦官方 独家出品花花碎花床上用品三件套",
        sale: 1599,
        factory: 2899,
        payNum: 236
      },
      {
        img: 5,
        name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
        sale: 599,
        factory: 899,
        payNum: 2399
      }, {
        img: 1,
        name: "利物浦官方 独家出品纪念版沙发",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "好看好养活的绿色养眼小盆栽，超级实惠",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "大红床上用品三件套",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "利物浦官方 独家出品花花碎花床上用品三件套",
        sale: 1599,
        factory: 2899,
        payNum: 236
      },
      {
        img: 5,
        name: "利物浦官方 独家出品纪念版书柜，便宜又省空间，超级划算",
        sale: 599,
        factory: 899,
        payNum: 2399
      }
    ],
    loadding: false,
    pullUpOn: true
  },
  onLoad: function(options) {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    //延时为了看效果
    setTimeout(() => {
      this.setData({
        productList: this.data.loadData,
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
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
        this.setData({
          productList: this.data.productList.concat(this.data.loadData),
          pageIndex: this.data.pageIndex + 1,
          loadding: false
        })
      }
    })
  },
  detail(e) {
    wx.navigateTo({
      url: '../extend-view/productDetail/productDetail'
    })
  }
})