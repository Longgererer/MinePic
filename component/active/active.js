const app = getApp()
Component({
  properties: {
    userImg: String,
    nickName: String,
    createTime: String,
    contentText: String,
    contentImg: Array
  },
  data: {
    whole: false
  },
  methods: {
    showText(){
      this.setData({
        whole: !this.data.whole
      })
    },
    share(){
      this.triggerEvent('share')
    },
    downloadImg(){
      this.triggerEvent('download')
    },
    toPreview(e){
      let info = {
        contentText: this.properties.contentText,
        contentImg: this.properties.contentImg
      }
      this.triggerEvent('showPreview', info)
    }
  }
})