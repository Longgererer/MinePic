const app = getApp()
Component({
  properties: {
    itemsImg: String,
    itemsText: String,
    itemsIndex: Number,
    money: String,
    fans: String,
    avatarUrl: String,
    nickName: String,
    info: String,
  },
  data: {
    myCode: 'myCode',
    weAppCode: 'weAppCode'
  },
  methods: {
    showFans(){
      wx.navigateTo({
        url: "../fans/fans?avatarUrl="+this.properties.avatarUrl
      })
    },
    showFriends(){
      wx.navigateTo({
        url: "../friends/friends"
      })
    },
    showQRCode(info){
      wx.navigateTo({
        url: `../qrcode/qrcode?avatarUrl=${this.properties.avatarUrl}&nickName=${this.properties.nickName}&info=${info}`
      })
    },
    showAppQRCode(){
      this.showQRCode('appCode')
    },
    showMyQRCode(){
      this.showQRCode('myCode')
    }
  }
})