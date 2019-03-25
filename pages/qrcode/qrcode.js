const app = getApp()
Page({
  data: {
    avatarUrl: '',
    nickName: '',
    contentText: [],
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
        ]
      })
    }else{
      this.setData({
        contentText: [
          '🔍亲，快来扫码进入我的「微商相册小程序」吧',
          '⭐每日上新，第一时间就来看新品',
          '⭐精准搜款，分类齐全找款超简单'
        ]
      })
    }
  }
})