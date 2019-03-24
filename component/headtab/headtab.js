const app = getApp()
Component({
  properties: {
    headTabImg: String,
    headTabText: String,
    headTabIndex: Number
  },
  data: {
  },
  methods: {
    myPicTap(){
      wx.navigateTo({
        url: "../mypic/mypic"
      })
    },
    myFriendTap(){

    }
  }
})