const api = require('api.js')
App({
  globalData: {
    userInfo: {},
    appid: 'wx30cbd5bf82ee6334',
    appSecret: '1a3ef733c21a5c63c2755a03b9c0da31',
    openid: '',
    unionid: '',
    code: ''
  },
  onLaunch: function () {
    //获取缓存数据openid，如果没有，请求获取openid
    const openid = wx.getStorageSync('openid')
    if (!openid) {
      console.log('没缓存，开始登陆')
      wx.login({
        success: res => {
          console.log(res.code)
          const code = res.code
          this.globalData.code = res.code
          // if(code) {
          //   const getOpenid = this.createObj(api.login, 'GET', {
          //     code: code,
          //     appid: this.globalData.appid,
          //     appSecret: this.globalData.appSecret
          //   }, res => {
          //     if(res.statusCode == 200) {
          //       console.log(res)
          //       this.globalData.openid = res.data.openid
          //       wx.setStorageSync('openid', res.data.openid)
          //     }
          //   })
          //   this.ajax(getOpenid)
          // }
        }
      })
    }else{
      this.globalData.openid = openid
    }
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              console.log(res)
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  createObj: function(url, method, data, callback) {
    let obj = {}
    obj.url = url
    obj.method = method
    obj.data = data
    obj.header = {
      'content-type': 'application/json'
    }
    obj.callback = callback
    return obj
  },
  ajax: function(obj) {
    console.log(obj)
    wx.request({
      url: obj.url,
      method: obj.method,
      data: obj.data,
      success: res => {
        obj.callback(res)
      }
    })
  },
  showLoad: function() {
    wx.showLoading({
      title: '加载中...'
    })
  },
  hideLoad: function(time) {
    setTimeout( () => {
      wx.hideLoading()
    }, time)
  }
})