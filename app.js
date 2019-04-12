//app.js
App({
  globalData: {
    userInfo: null,
    appid: 'wx30cbd5bf82ee6334',
    appSecret: '1a3ef733c21a5c63c2755a03b9c0da31',
    openid: ''
  },
  onLaunch: function () {
    //获取缓存数据openid，如果没有，请求获取openid
      let openid = wx.getStorageSync('openid')
      if (!openid) {
        console.log('没缓存，开始登陆')
        wx.login({
          success: res => {
            let code = res.code
            if(code) {
              wx.request({
                url: 'http://110.64.211.2/weice/public/index/login',
                data: {
                  code: code,
                  appid: this.globalData.appid,
                  appSecret: this.globalData.appSecret
                },
                method: 'GET',
                header: {
                  'content-type': 'application/json'
                },
                success: res => {
                  if(res.statusCode == 200) {
                    this.globalData.openid = res.data.openid
                    wx.setStorageSync('openid', res.data.openid)
                  } else {
                    console.log(res.errMsg)
                  }
                }
              })
            } else {
              console.log('获取用户登录失败：' + res.errMsg);
            }
          }
        })
      } 
    // 获取用户信息  
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  showLoad: function(){
    wx.showLoading({
      title: '加载中...'
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
  }
})