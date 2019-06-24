const util = require('../../../utils/util.js')
Page({
  data: {
    showActionSheet: false,
    maskClosable: true,
    tips: "确认清空搜索历史吗？",
    itemList: [],
    color: "#9a9a9a",
    size: 26,
    isCancel: true
  },
  onLoad: function(options) {

  },
  closeActionSheet: function() {
    this.setData({
      showActionSheet: false
    })
  },
  openActionSheet: function(e) {
    let type = Number(e.currentTarget.dataset.type);
    let itemList = [{
      text: "确定",
      color: "#1a1a1a"
    }];
    let maskClosable = true;
    let tips = "确认清空搜索历史吗？";
    let color = "#9a9a9a";
    let size = 26;
    let isCancel = true;
    //组件中都有默认值，实际应用中不需要可不操作
    switch (type) {
      case 1:
        break;
      case 2:
        tips = "退出登录会清除您的登录信息，确认退出吗？";
        itemList = [{
          text: "退出登录",
          color: "#e53a37"
        }];
        break;
      case 3:
        color = "#e53a37";
        size = 28;
        break;
      case 4:
        tips = "";
        itemList = [{
          text: "点赞",
          color: "#1a1a1a"
        }, {
          text: "评论",
          color: "#1a1a1a"
        }, {
          text: "收藏",
          color: "#1a1a1a"
        }, {
          text: "分享",
          color: "#1a1a1a"
        }]
        break;
      case 5:
        isCancel = false;
        tips = "选择您的性别";
        itemList = [{
          text: "男",
          color: "#1a1a1a"
        }, {
          text: "女",
          color: "#1a1a1a"
        }, {
          text: "不公开",
          color: "#1a1a1a"
        }]
        break;
      case 6:
        maskClosable = false;
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.setData({
        showActionSheet: true,
        itemList: itemList,
        maskClosable: maskClosable,
        tips: tips,
        color: color,
        size: size,
        isCancel: isCancel
      })
    }, 0)
  },
  itemClick: function(e) {
    let index = e.detail.index;
    this.closeActionSheet();
    util.toast(`您点击的按钮索引为：${index}`)
  }
})