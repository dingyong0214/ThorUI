Page({
  data: {
    circleList: [], //圆点数组
    awardList: [], //奖品数组
    colorCircleFirst: '#FCF400', //圆点颜色1
    colorCircleSecond: '#FFFFFF', //圆点颜色2
    indexSelect: 0, //被选中的奖品index
    isRunning: false, //是否正在抽奖
    imageAward: [
      'luck-1.png',
      'luck-2.png',
      'luck-3.png',
      'luck-4.png',
      'luck-1.png',
      'luck-2.png',
      'luck-3.png',
      'luck-4.png',
    ], //奖品图片
    awardName: [
      ".top域名 1元/年",
      "VPS 1元/30天",
      "免费主机1年",
      "虚拟主机1元/年",
      ".top域名 1元/年",
      "VPS 1元/30天",
      "免费主机1年",
      "虚拟主机1元/年"
    ],
    doLoop: null
  },

  onLoad: function() {
    //圆点设置
    let leftCircle = 7.5;
    let topCircle = 7.5;
    let circleList = [];
    for (let i = 0; i < 24; i++) {
      if (i == 0) {
        topCircle = 15;
        leftCircle = 15;
      } else if (i < 6) {
        topCircle = 7.5;
        leftCircle = leftCircle + 102.5;
      } else if (i == 6) {
        topCircle = 15
        leftCircle = 620;
      } else if (i < 12) {
        topCircle = topCircle + 94;
        leftCircle = 620;
      } else if (i == 12) {
        topCircle = 565;
        leftCircle = 620;
      } else if (i < 18) {
        topCircle = 570;
        leftCircle = leftCircle - 102.5;
      } else if (i == 18) {
        topCircle = 565;
        leftCircle = 15;
      } else if (i < 24) {
        topCircle = topCircle - 94;
        leftCircle = 7.5;
      }
      circleList.push({
        topCircle: topCircle,
        leftCircle: leftCircle
      });
    }
    this.setData({
      circleList: circleList,
      doLoop: setInterval(() => {
        if (this.data.colorCircleFirst == '#FCF400') {
          this.setData({
            colorCircleFirst: '#FFFFFF',
            colorCircleSecond: '#FCF400'
          })
        } else {
          this.setData({
            colorCircleFirst: '#FCF400',
            colorCircleSecond: '#FFFFFF'
          })
        }
      }, 500) //设置圆点闪烁的效果
    })


    //奖品item设置
    let awardList = [];
    //间距
    let topAward = 25;
    let leftAward = 25;
    for (let j = 0; j < 8; j++) {
      if (j == 0) {
        topAward = 25;
        leftAward = 25;
      } else if (j < 3) {
        topAward = topAward;
        //166.6666是宽 15是间距.下同
        leftAward = leftAward + 166.6666 + 15;
      } else if (j < 5) {
        leftAward = leftAward;
        //150是高,15是间距,下同
        topAward = topAward + 150 + 15;
      } else if (j < 7) {
        leftAward = leftAward - 166.6666 - 15;
        topAward = topAward;
      } else if (j < 8) {
        leftAward = leftAward;
        topAward = topAward - 150 - 15;
      }
      let imageAward = this.data.imageAward[j];
      awardList.push({
        topAward: topAward,
        leftAward: leftAward,
        imageAward: imageAward
      });
    }
    this.setData({
      awardList: awardList
    })
  },
  onUnload: function() {
    //清除定时器
    clearInterval(this.data.doLoop);
    this.setData({
      doLoop: null
    })
  },
  //获取随机数
  getRandom:function(u){
    let rnd = Math.random()>0.5?"2":"1";
    u = u || 3;
    for (var i = 0; i < u; i++){
      rnd += Math.floor(Math.random() * 10);
    }
    console.log(rnd)
    return Number(rnd);
  },

  //开始抽奖
  startGame: function() {
    if (this.data.isRunning) return
    this.setData({
      isRunning: true
    })
    let indexSelect = 0
    let i = 0;
    let randomNum = this.getRandom(3);
    let timer = setInterval(() => {
      ++indexSelect;
      //这里用y=30*x+150函数做的处理.可根据自己的需求改变转盘速度
      indexSelect = indexSelect % 8;
      this.setData({
        indexSelect: indexSelect
      })
      i += 40;
      if (i > randomNum) {
        //去除循环
        clearInterval(timer)
        timer = null;
        //获奖提示
        wx.showModal({
          title: '恭喜您',
          content: `获得了奖品【${this.data.awardName[indexSelect]}】`,
          confirmColor: '#5677FC',
          showCancel: false, //去掉取消按钮
          success: (res) => {
            if (res.confirm) {
              this.setData({
                isRunning: false
              })
            }
          }
        })
      }
    }, (70 + i))
  }
})