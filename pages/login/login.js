const app = getApp()
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
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
      //用户按了允许授权按钮s
      //插入登录的用户的相关信息到数据库
      app.globalData.userInfo = e.detail.userInfo
      const openid = app.globalData.openid
      wx.request({
        url: 'http://39.97.184.156/weice/public/index/headimgurl/index',
        method: 'GET',
        data: {
          openid,
          nickname: e.detail.userInfo.nickName,
          headimgurl: e.detail.userInfo.avatarUrl
        },
        header: {
          'content-type': 'application/json'
        },
        success: res => {
          console.log(res)
          console.log("插入小程序登录用户信息成功！"+"\n openid="+openid);
        }
      });
      wx.setStorage({
        key: "userInfo",
        data: e.detail.userInfo
      })
      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '../my/my'
      })
    } else {
      //用户按了拒绝按钮
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
  },
  //获取用户信息接口
  // queryUserInfo: function () {
  //   wx.request({
  //     url: getApp().globalData.urlPath ,
  //     data: {
  //       openid: getApp().globalData.openid
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: function (res) {
  //       console.log(res.data);
  //       getApp().globalData.userInfo = res.data;
  //     }
  //   });
  // },

})