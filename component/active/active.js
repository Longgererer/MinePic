const app = getApp()
Component({
  properties: {
    userImg: String,
    nickName: String,
    createTime: String,
    contentText: String,
    contentImg: Array,
    originalImg: Array,
    route_dy_id: String
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
      let info = {
        originalImg: this.properties.originalImg[0],
        contentText: this.properties.contentText
      }
      this.triggerEvent('share', info)
    },
    downloadImg(e){
      let info = {
        originalImg: this.properties.originalImg
      }
      this.triggerEvent('download', info)
    },
    toPreview(e){
      let info = {
        contentText: this.properties.contentText,
        contentImg: this.properties.contentImg,
        originalImg: this.properties.originalImg,
        route_dy_id: this.properties.route_dy_id
      }
      this.triggerEvent('showPreview', info)
    }
  }
})