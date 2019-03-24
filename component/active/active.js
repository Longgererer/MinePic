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
  },
  methods: {
    share(){
      this.triggerEvent('share')
    },
    downloadImg(){
      this.triggerEvent('download')
    },
    toPreview(){
      this.triggerEvent('showPreview')
    }
  }
})