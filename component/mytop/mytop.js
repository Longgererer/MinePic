const app = getApp()
Component({
  properties: {
    content: Object
  },
  data: {

  },
  methods: {
    toPreview(){
      this.triggerEvent('showPreview')
    }
  }
})