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
    tapFunc: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        this.setData({
          _tapFunc: newVal
        })
      }
    }
  },
  data: {
    myCode: 'myCode',
    weAppCode: 'weAppCode',
    _tapFunc: ''
  },
  attached: function() {
    const text = this.properties.itemsText
    let tapFunc = ''
    if(text === '开通会员'){
      tapFunc = 'showVip'
    }else if(text === '我的二维码'){
      tapFunc = 'showMyQRCode'
    }else if(text === '我的小程序码'){
      tapFunc = 'showAppQRCode'
    }else if(text === '提现与返佣'){
      tapFunc = 'showMoney'
    }else if(text === '我的粉丝'){
      tapFunc = 'showFans'
    }else if(text === '问题与反馈'){
      tapFunc = 'showQuestion'
    }else if(text === '关于微商相册'){
      tapFunc = 'showVip'
    }else if(text === '设置'){
      tapFunc = 'showVip'
    }else if(text === '查看粉丝'){
      tapFunc = 'showFriends'
    }else{
      tapFunc = 'showUploadQue'
    }
    this.setData({
      tapFunc
    })
  },
  methods: {
    showVip(){
      wx.navigateTo({
        url: "../vip/vip"
      })
    },
    showAppQRCode(){
      this.showQRCode('appCode')
    },
    showMyQRCode(){
      this.showQRCode('myCode')
    },
    showQRCode(info){
      wx.navigateTo({
        url: `../qrcode/qrcode?avatarUrl=${this.properties.avatarUrl}&nickName=${this.properties.nickName}&info=${info}`
      })
    },
    showMoney(){
      wx.navigateTo({
        url: '../money/money'
      })
    },
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
    showQuestion(){
      wx.navigateTo({
        url: "../question/question"
      })
    }
  }
})