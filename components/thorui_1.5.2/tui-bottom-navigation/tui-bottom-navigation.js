Component({
  properties: {
    //当前索引
    current: {
      type: Number,
      value: 0
    },
    /**
     * {
    		text: 'ThorUI',
    		iconPath: '/static/images/common/icon_menu_gray.png',
    		selectedIconPath: '/static/images/common/icon_menu_gray.png',
    		color: '#666',
    		//1-选中切换，2-跳转、请求、其他操作，3-菜单
    		type: 3,
    		//自定义参数，类型自定义
    		parameter: null,
    		//子菜单left值,不传默认50%,当菜单贴近左右两边可用此参数调整
    		popupLeft: '',
    		itemList: [
    			{
    				//不建议超过6个字，请自行控制
    				text: '自定义参',
    				//自定义参数，类型自定义
    				parameter: null
    			},
    			{
    				text: '自定义参数',
    				//自定义参数，类型自定义
    				parameter: null
    			}
    		]
    	}
     * 
     * */
    itemList: {
      type: Array,
      value: []
    },
    //颜色
    color: {
      type: String,
      value: '#666'
    },
    //选中颜色
    selectedColor: {
      type: String,
      value: '#5677fc'
    },
    fontSize: {
      type: String,
      value: '28rpx'
    },
    //选中后字体是否加粗
    bold: {
      type: Boolean,
      value: true
    },
    //导航条背景颜色
    backgroundColor: {
      type: String,
      value: '#F8F8F8'
    },
    //item分割线高度是否缩小
    splitLineScale: {
      type: Boolean,
      value: true
    },
    //二级菜单字体颜色
    subMenuColor: {
      type: String,
      value: '#333'
    },
    //二级菜单字体大小
    subMenufontSize: {
      type: String,
      value: '28rpx'
    },
    //二级菜单背景色  深色：#4c4c4c
    subMenuBgColor: {
      type: String,
      value: '#fff'
    },
    //二级菜单是否有点击效果
    subMenuHover: {
      type: Boolean,
      value: true
    },
    //是否固定在底部
    isFixed: {
      type: Boolean,
      value: true
    },
    //去除导航栏顶部的线条
    unlined: {
      type: Boolean,
      value: false
    },
    //是否暗黑模式 (true：所有设置颜色失效)
    isDarkMode: {
      type: Boolean,
      value: false
    }
  },
  data: {
    showMenuIndex: -1 //显示的菜单index
  },
  methods: {
    stop() {
      return false;
    },
    handleClose() {
      this.setData({
        showMenuIndex: -1
      })
    },
    menuClick(e) {
      const dataset = e.currentTarget.dataset;
      let index = dataset.index;
      let parameter = dataset.parameter;
      let type = dataset.type;
      //type：1-选中切换，2-跳转、请求、其他操作，3-菜单
      if (type == 3) {
        this.setData({
          showMenuIndex: this.data.showMenuIndex == index ? -1 : index
        })
      } else {
        this.handleClose();
        this.triggerEvent('click', {
          menu: 'main', //main,sub 主菜单，子菜单
          type: type,
          index: index,
          parameter: parameter || ''
        });
      }
    },
    subMenuClick(e) {
      const dataset = e.currentTarget.dataset;
      let index = dataset.index;
      let parameter = dataset.parameter;
      let type = dataset.type;
      let subIndex = dataset.subindex;
      this.handleClose();
      this.triggerEvent('click', {
        menu: 'sub', //main,sub 主菜单，子菜单
        type: type,
        index: index,
        subIndex: subIndex,
        parameter: parameter || ''
      });
    }
  }
})