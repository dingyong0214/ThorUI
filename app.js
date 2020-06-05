//app.js
App({
  onLaunch: function() {
    // 获取小程序更新机制兼容
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function(res) { 
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function() {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经上线啦~，为了获得更好的体验，建议立即更新',
              showCancel: false,
              confirmColor: "#5677FC",
              success: function(res) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
              }
            })

            wx.setTabBarBadge({
              index: 1,
              text: 'new'
            })
          })
          updateManager.onUpdateFailed(function() {
            // 新的版本下载失败
            wx.showModal({
              title: '更新失败',
              content: '新版本更新失败，为了获得更好的体验，请您删除当前小程序，重新搜索打开',
              confirmColor: "#5677FC",
              showCancel: false
            })
          })
        }
      })
    } else {
      // 当前微信版本过低，无法使用该功能
    }

    setTimeout(() => {
      if (!wx.getStorageSync("thorui_" + this.globalData.version)) {
        wx.setTabBarBadge({
          index: 1,
          text: 'new'
        })
      }
    }, 0)

  },
  onError(err) {
    //全局错误监听
    //console.log("发生错误："+err)
    // const res = wx.getSystemInfoSync()
    // let errMsg = "手机品牌：" + res.brand + "；手机型号：" + res.model + "；微信版本号：" + res.version + "；操作系统版本：" + res.system + "；客户端平台：" + res.platform + "；错误描述：" + err;

  },
  globalData: {
    isLogin: wx.getStorageSync("thorui_mobile") ? true : false,
    version: "1.4.2",
    isOnline:false
  }
})