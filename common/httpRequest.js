/**
 * 常用方法封装 请求，文件上传等
 * @author echo. 
 **/

const tui = {
	//接口地址
	interfaceUrl: function() {
		return 'https://www.thorui.cn'
		//return 'https://test.thorui.cn'
		//return 'https://uat.thorui.cn'
		// return 'https://prod.thorui.cn'
	},
	toast: function(text, duration, success) {
		wx.showToast({
			title: text || "出错啦~",
			icon: success ? 'success' : 'none',
			duration: duration || 2000
		})
	},
	modal: function(title, content, showCancel, callback, confirmColor, confirmText) {
    wx.showModal({
			title: title || '提示',
			content: content,
			showCancel: showCancel,
			cancelColor: "#555",
			confirmColor: confirmColor || "#5677fc",
			confirmText: confirmText || "确定",
			success(res) {
				if (res.confirm) {
					callback && callback(true)
				} else {
					callback && callback(false)
				}
			}
		})
	},
  copy(data,msg){
    wx.setClipboardData({
      data: data,
      success(res) {
        wx.getClipboardData({
          success(res) {
            msg && tui.toast(msg)
          }
        })
      }
    })
  },
	isAndroid: function() {
		const res = wx.getSystemInfoSync();
		return res.platform.toLocaleLowerCase() == "android"
	},
	constNum: function() {
		let time = 0;
		time = this.isAndroid() ? 300 : 0;
		return time
	},
	delayed: null,
	/**
	 * 请求数据处理
	 * @param string url 请求地址
	 * @param string method 请求方式
	 *  GET or POST
	 * @param {*} postData 请求参数
	 * @param bool isDelay 是否延迟显示loading
	 * @param bool isForm 数据格式
	 *  true: 'application/x-www-form-urlencoded'
	 *  false:'application/json'
	 * @param bool hideLoading 是否隐藏loading
	 *  true: 隐藏
	 *  false:显示
	 */
	request: function(url, method, postData, isDelay, isForm, hideLoading) {
		//接口请求
		let loadding = false;
		tui.delayed && wx.hideLoading();
		clearTimeout(tui.delayed);
		tui.delayed = null;
		if (!hideLoading) {
			tui.delayed = setTimeout(() => {
				wx.showLoading({
					mask: true,
					title: '请稍候...',
					success(res) {
						loadding = true
					}
				})
			}, isDelay ? 1000 : 0)
		}

		return new Promise((resolve, reject) => {
			wx.request({
				url: tui.interfaceUrl() + url,
				data: postData,
				header: {
					'content-type': isForm ? 'application/x-www-form-urlencoded' : 'application/json',
					'Authorization': tui.getToken()
				},
				method: method, //'GET','POST'
				dataType: 'json',
				success: (res) => {
					clearTimeout(tui.delayed)
					tui.delayed = null;
					if (loadding && !hideLoading) {
						wx.hideLoading()
					}
					// if (res.data && res.data.code == 1) {
					// 	wx.clearStorageSync()
					// 	tui.modal("登录信息已失效，请重新登录", false, () => {
					// 		//store.commit("logout") 登录页面执行
					// 		wx.redirectTo({
					// 			url: '/pages/common/login/login'
					// 		})
					// 	})
					// 	return
					// }
					resolve(res.data)
				},
				fail: (res) => {
					clearTimeout(tui.delayed)
					tui.delayed = null;
					tui.toast("网络不给力，请稍后再试~")
					reject(res)
				}
			})
		}) 
	},
	/**
	 * 上传文件
	 * @param string url 请求地址
	 * @param string src 文件路径
	 */
	uploadFile: function(url, src) {
		wx.showLoading({
			title: '请稍候...'
		})
		return new Promise((resolve, reject) => {
			const uploadTask = wx.uploadFile({
				url: tui.interfaceUrl() + url,
				filePath: src,
				name: 'imageFile',
				header: {
					'Authorization': tui.getToken()
				},
				formData: {
					// sizeArrayText:""
				},
				success: function(res) {
					wx.hideLoading()
					let d = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}")
					if (d.code % 100 == 0) {
						//返回图片地址
						let fileObj = d.data;
						resolve(fileObj)
					} else {
						that.toast(res.msg);
					}
				},
				fail: function(res) {
					reject(res)
					that.toast(res.msg);
				}
			})
		})
	},
	//设置用户信息
	setUserInfo: function(mobile,token) {
		//wx.setStorageSync("thorui_token", token)
		wx.setStorageSync("thorui_mobile", mobile)
	},
	//获取token
	getToken() {
		return wx.getStorageSync("thorui_token")
	},
	//判断是否登录
	isLogin: function() {
		return wx.getStorageSync("thorui_mobile") ? true : false
	},
	//跳转页面，校验登录状态
	href(url, isVerify) {
		if (isVerify && !tui.isLogin()) {
			wx.navigateTo({
				url: '/pages/common/login/login'
			})
		} else {
			wx.navigateTo({
				url: url
			});
		}
	}
}

export default tui