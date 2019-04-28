const app = getApp()
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: '',
    vipInfo: [
      {
        title: '185元 · 半年会员',
        content: '原价215元，为您节省30元'
      },
      {
        title: '288元 · 年度会员',
        content: '原价388元，为您节省100元'
      }
    ]
  },
  onLoad: function () {
    app.userInfoReadyCallback = (res) => {
      console.log(res)
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  }
})