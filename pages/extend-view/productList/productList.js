const util = require('../../../utils/util.js')
Page({
  data: {
    searchKey: "", //搜索关键词
    width: 200, //header宽度
    height: 64, //header高度
    inputTop: 0, //搜索框距离顶部距离
    arrowTop: 0, //箭头距离顶部距离
    dropScreenH: 0, //下拉筛选框距顶部距离
    attrData: [],
    attrIndex: -1,
    dropScreenShow: false,
    scrollTop: 0,
    tabIndex: 0, //顶部筛选索引
    isList: false, //是否以列表展示  | 列表或大图
    drawer: false,
    drawerH: 0, //抽屉内部scrollview高度
    selectedName: "综合",
    selectH: 0,
    dropdownList: [{
      name: "综合",
      selected: true
    }, {
      name: "价格升序",
      selected: false,
    }, {
      name: "价格降序",
      selected: false,
    }],
    attrArr: [{
      name: "新品",
      selectedName: "新品",
      isActive: false,
      list: []
    }, {
      name: "品牌",
      selectedName: "品牌",
      isActive: false,
      list: [{
        name: "trendsetter",
        selected: false
      }, {
        name: "维肯（Viken）",
        selected: false
      }, {
        name: "AORO",
        selected: false
      }, {
        name: "苏发",
        selected: false
      }, {
        name: "飞花令（FHL）",
        selected: false
      }, {
        name: "叶梦丝",
        selected: false
      }, {
        name: "ITZOOM",
        selected: false
      }, {
        name: "亿魅",
        selected: false
      }, {
        name: "LEIKS",
        selected: false
      }, {
        name: "雷克士",
        selected: false
      }, {
        name: "蕊芬妮",
        selected: false
      }, {
        name: "辉宏达",
        selected: false
      }, {
        name: "英西达",
        selected: false
      }, {
        name: "戴为",
        selected: false
      }, {
        name: "魔风者",
        selected: false
      }, {
        name: "即满",
        selected: false
      }, {
        name: "北比",
        selected: false
      }, {
        name: "娱浪",
        selected: false
      }, {
        name: "搞怪猪",
        selected: false
      }]
    }, {
      name: "类型",
      selectedName: "类型",
      isActive: false,
      list: [{
        name: "线充套装",
        selected: false
      }, {
        name: "单条装",
        selected: false
      }, {
        name: "车载充电器",
        selected: false
      }, {
        name: "PD快充",
        selected: false
      }, {
        name: "数据线转换器",
        selected: false
      }, {
        name: "多条装",
        selected: false
      }, {
        name: "充电插头",
        selected: false
      }, {
        name: "无线充电器",
        selected: false
      }, {
        name: "座式充电器",
        selected: false
      }, {
        name: "万能充",
        selected: false
      }, {
        name: "转换器/转接线",
        selected: false
      }, {
        name: "MFI苹果认证",
        selected: false
      }, {
        name: "转换器",
        selected: false
      }, {
        name: "苹果认证",
        selected: false
      }]
    }, {
      name: "适用手机",
      selectedName: "适用手机",
      isActive: false,
      list: [{
        name: "通用",
        selected: false
      }, {
        name: "vivo",
        selected: false
      }, {
        name: "OPPO",
        selected: false
      }, {
        name: "魅族",
        selected: false
      }, {
        name: "苹果",
        selected: false
      }, {
        name: "华为",
        selected: false
      }, {
        name: "三星",
        selected: false
      }, {
        name: "荣耀",
        selected: false
      }, {
        name: "诺基亚5",
        selected: false
      }, {
        name: "荣耀4",
        selected: false
      }, {
        name: "诺基",
        selected: false
      }, {
        name: "荣耀",
        selected: false
      }, {
        name: "诺基亚2",
        selected: false
      }, {
        name: "荣耀2",
        selected: false
      }, {
        name: "诺基",
        selected: false
      }]
    }],
    productList: [{
        img: 1,
        name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "百雀羚套装女补水保湿护肤品",
        sale: 1599,
        factory: 2899,
        payNum: 236
      },
      {
        img: 5,
        name: "百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋",
        sale: 599,
        factory: 899,
        payNum: 2399
      },
      {
        img: 6,
        name: "短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤",
        sale: 599,
        factory: 899,
        payNum: 2399
      },
      {
        img: 1,
        name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "德国DMK进口牛奶",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "百雀羚套装女补水保湿护肤品",
        sale: 1599,
        factory: 2899,
        payNum: 236
      }
    ],
    pageIndex: 1,
    loadding: false,
    pullUpOn: true
  },
  onLoad: function(options) {
    let obj = wx.getMenuButtonBoundingClientRect();
    this.setData({
      width: obj.left,
      height: obj.top + obj.height + 8,
      inputTop: obj.top + (obj.height - 30) / 2,
      arrowTop: obj.top + (obj.height - 32) / 2,
      searchKey: options.searchKey || ""
    }, () => {
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            //略小，避免误差带来的影响
            dropScreenH: this.data.height * 750 / res.windowWidth + 186,
            drawerH: res.windowHeight - res.windowWidth / 750 * 100 - this.data.height
          })
        }
      })
    });
  },
  onPullDownRefresh: function() {
    let loadData = JSON.parse(JSON.stringify(this.data.productList));
    loadData = loadData.splice(0, 10)
    this.setData({
      productList: loadData,
      pageIndex: 1,
      pullUpOn: true,
      loadding: false
    })
    wx.stopPullDownRefresh()
  },
  onReachBottom: function() {
    if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    }, () => {
      if (this.data.pageIndex == 4) {
        this.setData({
          loadding: false,
          pullUpOn: false
        })
      } else {
        let loadData = JSON.parse(JSON.stringify(this.data.productList));
        loadData = loadData.splice(0, 10)
        if (this.data.pageIndex == 1) {
          loadData = loadData.reverse();
        }
        this.setData({
          productList: this.data.productList.concat(loadData),
          pageIndex: this.data.pageIndex + 1,
          loadding: false
        })
      }
    })
  },
  btnDropChange: function(e) {
    let index = e.currentTarget.dataset.index;
    let arr = JSON.parse(JSON.stringify(this.data.attrArr[index].list));
    if (arr.length === 0) {
      let isActive = `attrArr[${index}].isActive`;
      this.setData({
        [isActive]: !this.data.attrArr[index].isActive
      })
    } else {
      let isActive = `attrArr[${index}].isActive`;
      this.setData({
        attrData: arr,
        attrIndex: index,
        dropScreenShow: true,
        [isActive]: false
      }, () => {
        this.setData({
          scrollTop: 0
        })
      })
    }
  },
  btnSelected: function(e) {
    let index = e.currentTarget.dataset.index;
    let selected = `attrData[${index}].selected`;
    this.setData({
      [selected]: !this.data.attrData[index].selected
    })
  },
  reset() {
    let arr = this.data.attrData;
    for (let item of arr) {
      item.selected = false;
    }
    this.setData({
      attrData: arr
    })
  },
  btnCloseDrop() {
    this.setData({
      scrollTop: 0,
      dropScreenShow: false,
      attrIndex: -1
    })
  },
  btnSure: function() {
    let index = this.data.attrIndex;
    let arr = this.data.attrData;
    let active = false;
    let attrName = "";
    //这里只是为了展示选中效果,并非实际场景
    for (let item of arr) {
      if (item.selected) {
        active = true;
        attrName += attrName ? ";" + item.name : item.name
      }
    }
    let isActive = `attrArr[${index}].isActive`;
    let selectedName = `attrArr[${index}].selectedName`;
    this.btnCloseDrop();
    this.setData({
      [isActive]: active,
      [selectedName]: attrName
    })
  },
  showDropdownList: function() {
    this.setData({
      selectH: 246,
      tabIndex: 0
    })
  },
  hideDropdownList: function() {
    this.setData({
      selectH: 0
    })
  },
  dropdownItem: function(e) {
    let index = e.currentTarget.dataset.index;
    let arr = this.data.dropdownList;
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        arr[i].selected = true;
      } else {
        arr[i].selected = false;
      }
    }
    this.setData({
      dropdownList: arr,
      selectedName: index == 0 ? '综合' : '价格',
      selectH: 0
    })
  },
  screen: function(e) {
    let index = e.currentTarget.dataset.index;
    if (index == 0) {
      this.showDropdownList();
    } else if (index == 1) {
      this.setData({
        tabIndex: 1
      })
    } else if (index == 2) {
      this.setData({
        isList: !this.data.isList
      })
    } else if (index == 3) {
      this.setData({
        drawer: true
      })
    }
  },
  closeDrawer: function() {
    this.setData({
      drawer: false
    })
  },
  back: function() {
    if (this.data.drawer) {
      this.closeDrawer()
    } else {
      wx.navigateBack()
    }
  },
  search: function() {
    wx.navigateTo({
      url: '../news-search/news-search'
    })
  },
  detail: function() {
    wx.navigateTo({
      url: '../productDetail/productDetail'
    })
  }
})