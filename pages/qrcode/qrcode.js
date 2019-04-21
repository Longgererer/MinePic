const app = getApp()
Page({
  data: {
    avatarUrl: '',
    nickName: '',
    contentText: [],
    QRCodeImg: '',
    info: ''
  },
  onLoad: function(options){
    this.setData({
      avatarUrl: options.avatarUrl,
      nickName: options.nickName,
      info: options.info
    })
    if(options.info==='myCode'){
      this.setData({
        contentText: [
          '亲们，关注我的微商相册❀',
          '不仅第一时间查看最新动态😚',
          '还能轻松一键转发朋友圈😀'
        ],
        QRCodeImg: 'http://39.97.184.156/weice/public/uploads/9999.png'
      })
    }else{
      this.setData({
        contentText: [
          '🔍亲，快来扫码进入我的「微商相册小程序」吧',
          '⭐每日上新，第一时间就来看新品',
          '⭐精准搜款，分类齐全找款超简单'
        ],
        QRCodeImg: 'http://39.97.184.156/weice/public/uploads/erweima.jpg'
      })
    }
  },
  shareQRCode(){
    const data = this.data.contentText.join('\n')
    wx.setClipboardData({
      data,
      success: res => {
        wx.hideToast()
        wx.showToast({
          title: '文字已复制，保存二维码分享到朋友圈哦',
          icon: 'none',
          duration: 3000
        })
      } 
    })
  },
  previewImage: function (e) {
    const url = this.data.QRCodeImg
    wx.previewImage({
      current: this.data.QRCodeImg,
      urls: [this.data.QRCodeImg]
    })
  }
})