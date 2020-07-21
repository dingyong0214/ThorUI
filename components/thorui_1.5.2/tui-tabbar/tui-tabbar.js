Component({
  properties: {
    //当前索引
    current: {
      type: Number,
      value: 0
    },
    //字体颜色
    color: {
      type: String,
      value: '#666'
    },
    //字体选中颜色
    selectedColor: {
      type: String,
      value: '#5677FC'
    },
    //背景颜色
    backgroundColor: {
      type: String,
      value: '#FFFFFF'
    },
    //是否需要中间凸起按钮
    hump: {
      type: Boolean,
      value: false
    },
    //固定在底部
    isFixed: {
      type: Boolean,
      value: true
    },
    //tabbar
    // "pagePath": "/pages/my/my", 页面路径
    // "text": "thor", 标题
    // "iconPath": "thor_gray.png", 图标地址
    // "selectedIconPath": "thor_active.png", 选中图标地址
    // "hump": true, 是否为凸起图标
    // "num": 2,   角标数量
    // "isDot": true,  角标是否为圆点
    // "verify": true  是否验证  （如登录）
    tabBar: {
      type: Array,
      value: []
    },
    //角标字体颜色
    badgeColor: {
      type: String,
      value: '#fff'
    },
    //角标背景颜色
    badgeBgColor: {
      type: String,
      value: '#F74D54'
    },
    unlined: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    tabbarSwitch(e) {
      let dataset = e.currentTarget.dataset;
      this.triggerEvent('click', {
        index: Number(dataset.index),
        hump: dataset.hump,
        pagePath: dataset.pagePath,
        verify: dataset.verify
      });
    }
  }
})