const app = getApp()
Page({
  data: {
    fansNum: [0, 0, 0],
    fansText: ['昨日新增','本月新增','粉丝总数'],
    avatarUrl: '',
    fansItemText: ['查看粉丝', '群发信息']
  },
  onLoad: function(options){
    this.setData({
      avatarUrl: options.avatarUrl
    })
  }
})