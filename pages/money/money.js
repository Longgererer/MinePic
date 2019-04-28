const app = getApp()
Page({
  data: {
    money: 0,
    isBgcHidden: true,
    userInfo: {}
  },
  onLoad: function() {
    app.userInfoReadyCallback = (res) => {
      console.log(res)
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },
  showMoneyPay: function() {
    this.setData({
      isBgcHidden: false
    })
  },
  hideMoneyPay: function() {
    this.setData({
      isBgcHidden: true
    })
  }
})