
Component({
  externalClasses:['tui-drawer-class'],
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    mask: {
      type: Boolean,
      value: true
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    mode: {
      type: String,
      value: 'true' // left right
    }
  },
  methods: {
    handleMaskClick() {
      if (!this.data.maskClosable) {
        return;
      }
      this.triggerEvent('close', {});
    }
  }
})
