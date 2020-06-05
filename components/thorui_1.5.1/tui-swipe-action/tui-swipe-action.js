Component({
  options: {
    multipleSlots: true
  },
  properties: {
    // name: '删除',
    // color: '#fff',
    // fontsize: 32,//单位rpx
    // width: 80, //单位px
    // icon: 'like.png',//此处为图片地址
    // background: '#ed3f14'
    actions: {
      type: Array,
      value: [],
      observer(val) {
        this.updateButtonSize()
      }
    },
    //点击按钮时是否自动关闭
    closable: {
      type: Boolean,
      value: true
    },
    //设为false，可以滑动多行不关闭菜单
    showMask: {
      type: Boolean,
      value: true
    },
    operateWidth: {
      type: Number,
      value: 80
    },
    params: {
      type: Object,
      value: {}
    },
    //禁止滑动
    forbid: {
      type: Boolean,
      value: false
    },
    //手动开关
    open: {
      type: Boolean,
      value: false,
      observer(val) {
        this.manualSwitch(val);
      }
    }
  },
  data: {
    //start position
    tStart: {
      pageX: 0,
      pageY: 0
    },
    //限制滑动距离
    limitMove: 0,
    //move position
    position: {
      pageX: 0,
      pageY: 0
    },
    isShowBtn: false
  },
  lifetimes: {
    ready: function() {
      //在组件在视图层布局完成后执行
      this.updateButtonSize();
    }
  },
  methods: {
    swipeDirection(x1, x2, y1, y2) {
      return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : y1 - y2 > 0 ? 'Up' : 'Down';
    },
    //阻止事件冒泡
    loop() {},
    updateButtonSize() {
      const actions = this.data.actions;
      if (actions.length > 0) {
        const query = wx.createSelectorQuery().in(this);
        let limitMovePosition = 0;
        actions.forEach(item => {
          limitMovePosition += item.width || 0;
        });
        this.setData({
          limitMove: limitMovePosition
        })
      } else {
        this.setData({
          limitMove: this.data.operateWidth
        })
      }
    },
    handlerTouchstart(event) {
      if (this.data.forbid) return;
      const touches = event.touches ? event.touches[0] : {};
      const tStart = this.data.tStart;
      if (touches) {
        for (let i in tStart) {
          if (touches[i]) {
            tStart[i] = touches[i];
          }
        }
      }
    },
    swipper(touches) {
      const start = this.data.tStart;
      const spacing = {
        pageX: touches.pageX - start.pageX,
        pageY: touches.pageY - start.pageY
      };
      if (this.data.limitMove < Math.abs(spacing.pageX)) {
        spacing.pageX = -this.data.limitMove;
      }
      this.setData({
        position: spacing
      })
    },
    handlerTouchmove(event) {
      if (this.data.forbid) return;
      const start = this.data.tStart;
      const touches = event.touches ? event.touches[0] : {};
      if (touches) {
        const direction = this.swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);
        if (direction === 'Left' && Math.abs(this.data.position.pageX) !== this.data.limitMove) {
          this.swipper(touches);
        }
      }
    },
    handlerTouchend(event) {
      if (this.data.forbid) return;
      const start = this.data.tStart;
      const touches = event.changedTouches ? event.changedTouches[0] : {};
      if (touches) {
        const direction = this.swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);
        const spacing = {
          pageX: touches.pageX - start.pageX,
          pageY: touches.pageY - start.pageY
        };
        if (Math.abs(spacing.pageX) >= 40 && direction === 'Left') {
          spacing.pageX = spacing.pageX < 0 ? -this.data.limitMove : this.data.limitMove;
          this.setData({
            isShowBtn: true
          })
        } else {
          spacing.pageX = 0;
        }
        this.setData({
          position: spacing
        })
      }
    },
    handlerButton(event) {
      if (this.data.closable) {
        this.closeButtonGroup();
      }
      const dataset = event.currentTarget.dataset;
      this.triggerEvent('click', {
        index: Number(dataset.index),
        item: this.data.params
      });
    },
    closeButtonGroup() {
      this.setData({
        isShowBtn: false,
        position: {
          pageX: 0,
          pageY: 0
        }
      })
    },
    //控制自定义按钮菜单
    handlerParentButton(event) {
      if (this.data.closable) {
        this.closeButtonGroup();
      }
    },
    manualSwitch(isOpen) {
      let x = 0;
      if (isOpen) {
        if (this.data.actions.length === 0) {
          x = this.data.operateWidth;
        } else {
          let width = 0;
          this.data.actions.forEach(item => {
            width += item.width;
          });
          x = width;
        }
      }
      this.setData({
        position: {
          pageX: -x,
          pageY: 0
        }
      })
    }
  }
})