import tui from '../../common/httpRequest'
let globalData = getApp().globalData;
Page({
  data: {
    version: globalData.version
  },
  copy: function(e) {
    const dataset=e.currentTarget.dataset;
    let text=dataset.text;
    let msg=dataset.msg;  
    tui.copy(text,msg)
  },
  log: function() {
    tui.href("../log/log")
  }
})