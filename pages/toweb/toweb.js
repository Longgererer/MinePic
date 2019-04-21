const app = getApp()
Page({
  data: {
    openid: ''
  },
  onLoad: function(){
    this.setData({
      openid: app.globalData.openid
    })
    this.setData({
      url: `http://nonebug.club/upload/#/home?openid=${this.data.openid}`
    })
  }
})