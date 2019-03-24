const app = getApp()
Page({
  data: { 
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    headTabInfo: [
      {headTabImg:"../../images/pictures.png", headTabText:"我的相册"},
      {headTabImg:"../../images/friends.png", headTabText:"好友列表"}
    ],
    itemsInfo: [
      {itemsImg:"../../images/vip.png", itemsText:"开通会员"},
      {itemsImg:"../../images/myerwei.png", itemsText:"我的二维码"},
      {itemsImg:"../../images/xcxerwei.png", itemsText:"我的小程序码"},
      {itemsImg:"../../images/money.png", itemsText:"提现与返佣"},
      {itemsImg:"../../images/fans.png", itemsText:"我的粉丝"},
      {itemsImg:"../../images/question.png", itemsText:"问题与反馈"},
      {itemsImg:"../../images/about.png", itemsText:"关于微商相册"},
      {itemsImg:"../../images/config.png", itemsText:"设置"},
    ],
    money: '0.00',
    fans: 20
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function(){
    app.showLoad()
  }
})

