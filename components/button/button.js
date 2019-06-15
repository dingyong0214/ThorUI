//注意：自定义组件无法触发form的bindsubmit,bindreset事件
//可以在组件外层嵌套个button按钮，背景设为none，form-type写在外层按钮上(参考登录页面)
Component({
  externalClasses: ['tui-button-class'],//自定义样式
  properties: {
    // primary, white, danger, warning, green, gray,gradual
    type: {
      type: String,
      value: 'gradual',
    },
    // block, mini, small
    size: {
      type: String,
      value: 'block',
    },
    // circle, square
    shape: {
      type: String,
      value: 'square'
    },
    plain:{
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    openType: {
      type: String,
      value:''
    },
    formType: {
      type: String,
      value: ''
    },
    hoverStopPropagation: {
      type: Boolean,
      value:false
    },
    lang: {
      type: String,
      value: 'en'
    },
    appParameter: {
      type: String,
      value: ''
    },
    sessionFrom:{
      type: String,
      value: ''
    },
    showMessageCard: {
      type: Boolean,
      value: false
    },
    sendMessageImg: {
      type: String,
      value: ''
    },
    sendMessagePath: {
      type: String,
      value: ''
    },
    sendMessageTitle:{
      type: String,
      value: ''
    },
    hidden:{
      type:Boolean,
      value:false
    }
  },
  data: {
  
  },
  methods: {
    handleClick() {
      if (this.data.disabled) return false;
      this.triggerEvent('click', {});
    },
    bindgetuserinfo({ detail = {} } = {}) {
      this.triggerEvent('getuserinfo', detail);
    },
    bindcontact({ detail = {} } = {}) {
      this.triggerEvent('contact', detail);
    },
    bindgetphonenumber({ detail = {} } = {}) {
      this.triggerEvent('getphonenumber', detail);
    },
    binderror({ detail = {} } = {}) {
      this.triggerEvent('error', detail);
    }
  }
})
