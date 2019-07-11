Page({
  data: {
    //小程序没有refs，所以只能用动态布尔值控制关闭
    toggle: false,
    dataList:[{
      id:1,
      title:"20余省公务员省考笔试放榜 作弊者特别惨",
      img: 'avatar_1'
    }, {
        id: 2,
        title: "钢票网与恒丰银行正式签订资金存管协议",
        img: 'avatar_2'
      }, {
        id: 3,
        title: "你的信息被出卖了吗？卖50条个人信息能判3年",
        img: 'avatar_1'
      }, {
        id: 4,
        title: "杨振宁：我跟翁帆说我准备活到100岁",
        img: 1
      }, {
        id: 5,
        title: "现实版孙连城：天津正局级干部因不作为被免职",
        img: 'avatar_1'
      }, {
        id: 6,
        title: "勒索病毒还未收场 内幕已经足够惊人",
        img: 'avatar_2'
      }, {
        id: 7,
        title: "普京弹钢琴又圈粉 国家领导人们都有哪些才艺？",
        img: 2
      }, {
        id: 8,
        title: "特朗普“海选”FBI局长 一天面试8个",
        img: 1
      }, {
        id: 9,
        title: "经济下行压力是否进一步扩大？官方回应经济热点",
        img: 4
      }, {
        id: 10,
        title: "上海一家三口住9平米房间27年 儿子踩冰箱上床",
        img: 'avatar_2'
      }, {
        id: 11,
        title: "英国曼彻斯特发生爆炸 事发地正举行演唱会",
        img: 1
      }, {
        id: 12,
        title: "美国会表决通过新驻华大使 月底有望赴华",
        img: 'avatar_1'
      }],
    actions: [
      {
        name: '删除',
        color: '#fff',
        fontsize: '22',
        width: 80,
        //icon: 'like.png',//此处为图片地址
        background: '#ed3f14'
      },
      {
        name: '修改',
        color: '#fff',
        fontsize: '22',
        width: 80,
        //icon: 'like.png',//此处为图片地址
        background: '#ff7900'
      },
      {
        name: '收藏',
        width: 80,
        color: '#80848f',
        fontsize: '22',
        //icon: 'undo'
      }
    ]

  },
  onLoad(){

  },
  handlerCloseButton(e) {
    let index = e.detail.index;
    let item = e.detail.item;
    let menuTxt = ["删除","修改","收藏"][index];
    wx.showToast({
      title: "您点击了【" + menuTxt+"】按钮，列表id："+item.id,
      icon:"none"
    })
  //list中可以每一项都设置toggle
    setTimeout(()=>{
       this.setData({
        toggle: this.data.toggle ? false : true
      });
    },200)
   
  }

})
