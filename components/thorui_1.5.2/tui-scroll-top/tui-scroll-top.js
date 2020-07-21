/**
 * 注意：组件中使用的图片地址，将文件复制到自己项目中
 * 如果图片位置与组件同级，编译成小程序时图片会丢失
 * 拷贝static下整个components文件夹
 * 也可直接转成base64（不建议）
 * */
Component({
  properties: {
    //回顶部按钮距离底部距离 rpx
    bottom: {
      type: Number,
      value: 180
    },
    //回顶部按钮距离右侧距离 rpx
    right: {
      type: Number,
      value: 25
    },
    //距离顶部多少距离显示 px
    top: {
      type: Number,
      value: 200
    },
    //滚动距离
    scrollTop: {
      type: Number,
      observer(val) {
        this.change();
      }
    },
    //回顶部滚动时间
    duration: {
      type: Number,
      value: 120
    },
    //是否显示返回首页按钮
    isIndex: {
      type: Boolean,
      value: false
    },
    //是否显示分享图标
    isShare: {
      type: Boolean,
      value: false
    },
    //自定义分享(小程序可使用button=>open-type="share")
    customShare: {
      type: Boolean,
      value: false
    },
    //回顶部icon
    topIcon: {
      type: String,
      value: '/static/components/scroll-top/icon_top_3x.png'
    },
    //回首页icon
    indexIcon: {
      type: String,
      value: '/static/components/scroll-top/icon_index_3x.png'
    },
    //分享icon
    shareIcon: {
      type: String,
      value: '/static/components/scroll-top/icon_share_3x.png'
    }
  },
  data: {
    //判断是否显示
    visible: false,
    //控制显示，主要解决调用api滚到顶部fixed元素抖动的问题
    toggle: true
  },
  methods: {
    goTop: function () {
      this.setData({
        toggle: false
      }, () => {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: this.data.duration
        });
      })
      setTimeout(() => {
        this.setData({
          toggle: true
        })
      }, 220);
    },
    goIndex: function () {
      this.triggerEvent('index', {});
    },
    share() {
      this.triggerEvent('share', {});
    },
    change() {
      let show = this.data.scrollTop > this.data.top;
      if ((show && this.data.visible) || (!show && !this.data.visible)) {
        return;
      }
      this.setData({
        visible: show
      })
    }
  }
})