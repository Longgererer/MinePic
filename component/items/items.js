const app = getApp()
Component({
  properties: {
    itemsImg: String,
    itemsText: String,
    itemsIndex: Number,
    money: String,
    fans: String,
    avatarUrl: String,
    info: String
  },
  data: {
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
    }
  }
})