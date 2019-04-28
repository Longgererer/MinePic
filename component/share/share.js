const app = getApp()
Component({
  properties: {
  },
  data: {
    shareBtnInfo: [
      {
        tap: 'share',
        src: '../../images/wx.png',
        text: '微信好友'
      },
      {
        tap: 'shareToCircle',
        src: '../../images/wxmore.png',
        text: '微信朋友圈'
      },
      {
        tap: 'more',
        src: '../../images/more.png',
        text: '更多'
      }
    ],
    showModalStatus: false,
    canvasHidden: true
  },
  methods: {
    share() {
      
    },
    shareToCircle() {
      this.triggerEvent('shareToCircle')
    },
    more() {
      this.triggerEvent('more')
    }
  }
})