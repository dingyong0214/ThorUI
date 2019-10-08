Page({
  data: {
    dataList: [{
        name: "杜甫",
        intro: "杜甫的思想核心是儒家的仁政思想，他有“致君尧舜上，再使风俗淳”的宏伟抱负。杜甫虽然在世时名声并不显赫，但后来声名远播，对中国文学和日本文学都产生了深远的影响。杜甫共有约1500首诗歌被保留了下来，大多集于《杜工部集》。",
        current: 0,
        disabled: false
      },
      {
        name: "李清照",
        intro: "李清照出生于书香门第，早期生活优裕，其父李格非藏书甚富，她小时候就在良好的家庭环境中打下文学基础。出嫁后与夫赵明诚共同致力于书画金石的搜集整理。金兵入据中原时，流寓南方，境遇孤苦。所作词，前期多写其悠闲生活，后期多悲叹身世，情调感伤。形式上善用白描手法，自辟途径，语言清丽。",
        current: -1,
        disabled: false
      },
      {
        name: "鲁迅",
        intro: "鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研究等多个领域具有重大贡献。他对于五四运动以后的中国社会思想文化发展具有重大影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。",
        current: -1,
        disabled: false
      }
    ],
    dataList2: [{
        name: "杜甫",
        intro: "杜甫的思想核心是儒家的仁政思想，他有“致君尧舜上，再使风俗淳”的宏伟抱负。杜甫虽然在世时名声并不显赫，但后来声名远播，对中国文学和日本文学都产生了深远的影响。杜甫共有约1500首诗歌被保留了下来，大多集于《杜工部集》。",
        current: -1,
        disabled: false
      },
      {
        name: "李清照",
        intro: "李清照出生于书香门第，早期生活优裕，其父李格非藏书甚富，她小时候就在良好的家庭环境中打下文学基础。出嫁后与夫赵明诚共同致力于书画金石的搜集整理。金兵入据中原时，流寓南方，境遇孤苦。所作词，前期多写其悠闲生活，后期多悲叹身世，情调感伤。形式上善用白描手法，自辟途径，语言清丽。",
        current: -1,
        disabled: false
      },
      {
        name: "鲁迅 禁用状态",
        intro: "鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研究等多个领域具有重大贡献。他对于五四运动以后的中国社会思想文化发展具有重大影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。",
        current: -1,
        disabled: true
      }
    ],
    dataList3: [{
        name: "杜甫",
        intro: "杜甫的思想核心是儒家的仁政思想。"
      },
      {
        name: "李清照",
        intro: "李清照出生于书香门第。"
      },
      {
        name: "鲁迅",
        intro: "鲁迅一生在文学创作。"
      }
    ],
    //手风琴效果
    current: -1,
    current2: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  change(e) {
    let index = e.detail.index;
    let item = this.data.dataList[index];
    this.setData({
      [`dataList[${index}].current`]: item.current == index ? -1 : index
    })
  },
  change2(e) {
    let index = e.detail.index;
    let item = this.data.dataList2[index];
    this.setData({
      [`dataList2[${index}].current`]: item.current == index ? -1 : index
    })
  },
  change3(e) {
    //可关闭自身
    let index = e.detail.index
    this.setData({
      current: this.data.current == index ? -1 : index
    })
  },
  change4(e) {
    //不可关闭自身
    this.setData({
      current2: e.detail.index
    })
  }
})