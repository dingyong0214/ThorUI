const util = require('../../utils/util.js')
Page({
  data: {
    modal:false
  },
  onLoad: function(options) {
  },
  show(){
    this.setData({
      modal:!this.data.modal
    })
  }
})