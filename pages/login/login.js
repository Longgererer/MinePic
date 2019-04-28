const app = getApp()
const api = require('../../api.js')
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              console.log(res.rawData)
              //用户已经授权过
              wx.switchTab({
                url: '../my/my'
              })
            }
          });
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      const headimgurl = e.detail.userInfo.imgUrl
      const nickName = e.detail.userInfo.nickName
      const openid = app.globalData.openid
      const encryptedData = e.detail.encryptedData
      const iv = e.detail.iv
      const code = app.globalData.code
      const appid = app.globalData.appid
      const appSecret = app.globalData.appSecret
      console.log(iv)
      console.log(nickName)

      const loginInfo = app.createObj(api.login, 'GET', {
        encryptedData,
        iv,
        code,
        appid,
        appSecret
      }, res => {
        if (res.statusCode == 200) {
          console.log(res)
        }
      })
      console.log(loginInfo)
      app.ajax(loginInfo)

      // const pushInfo = app.createObj(api.uploadInfo, 'GET', {
      //   openid,
      //   nickname: e.detail.userInfo.nickName,
      //   headimgurl: e.detail.userInfo.avatarUrl
      // }, res => {
      //   console.log("插入小程序登录用户信息成功！"+"\n openid="+openid);
      // })
      // app.ajax(pushInfo)

      wx.switchTab({
        url: '../my/my'
      })
    } else {
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!或当前网络不可用',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  }
})