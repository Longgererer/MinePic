//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'this is my.js',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    newPic: 23,
    attention: 234,
    pic: 234,
    fans: 23,
    tabs: ['列表', '视频', '上传'],
    home: true,
    showLoading: true,
    topLen: 0,
    isBlankShow: false,
    isInfoShow: false,
    stv: {
      windowWidth: 0,
      lineWidth: 0,
      offset: 0,
      tStart: false
    },
    activeTab: 0,
    info: [
      {
        images: [],
        previewImgs: [],
        content: "",
        length: 0,
        top: false,
        time: "",
        tags: []
      }
    ],
    topInfo: [
    ],
    photosInfo: [
    ],
    videoInfo: [
      {
        url: "https://www.bilibili.com/video/av49782443?from=search&seid=12124652608022085561", 
        poster: "http://i0.hdslb.com/bfs/archive/70678a88da1c850c94889a00d8e493d432bc6685.jpg",
        content: "视频描述视频描述视频描述视频描述视频描述视频描述"
      },
      {
        url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400", 
        poster: "https://p0.ssl.qhimgs1.com/sdr/400__/t01aecbb6191603a48c.jpg",
        content: "视频描述视频描述视频描述视频描述视频描述视频描述"
      },
      {
        url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400", 
        poster: "https://p0.ssl.qhimgs1.com/sdr/400__/t01aecbb6191603a48c.jpg",
        content: "视频描述视频描述视频描述视频描述视频描述视频描述"
      },
      {
        url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400", 
        poster: "https://p0.ssl.qhimgs1.com/sdr/400__/t01aecbb6191603a48c.jpg",
        content: "视频描述视频描述视频描述视频描述视频描述视频描述"
      },
      {
        url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400", 
        poster: "https://p0.ssl.qhimgs1.com/sdr/400__/t01aecbb6191603a48c.jpg",
        content: "视频描述视频描述视频描述视频描述视频描述视频描述"
      },
      {
        url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400", 
        poster: "https://p0.ssl.qhimgs1.com/sdr/400__/t01aecbb6191603a48c.jpg",
        content: "视频描述视频描述视频描述视频描述视频描述视频描述"
      }
    ],
    tabIndex: 0
  },
  onLoad: function () {
    wx.showLoading({
      title: '加载中...'
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.request({
      url: 'http://39.97.184.156/weice/public/index/albumlst/index',
      data: {
        openid: app.globalData.openid
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        if(res.statusCode == 200) {
          const arr = res.data.reverse()
          let info = []
          arr.forEach(function (item) {
            // if(item.toutel >= 2){
            //   item.toutel.split(',')
            // }
            console.log(Boolean(item.tabname[0]))
            let arrInfo = {
              length: item.toutel,
              time: item.create_time,
              content: item.describes,
              status: item.is_hot,
              route_dy_id: item.route_dy_id,
              tags: item.tabname[0] ? item.tabname : '',
              image: item.thumb_route
            }
            info.push(arrInfo)
          })
          this.setData({
            photosInfo: info,
            isBlankShow: true,
            isInfoShow: true
          })
          this.countTop()
        } else {
          console.log(res.errMsg)
        }
        setTimeout(function () {
          wx.hideLoading()
        }, 100)
      }
    })
  },
  onShow: function () {
    this.countTop()
  },
  countTop: function () {
    let a = 0;
    let arr = this.data.photosInfo
    let length = arr.length
    for( let i = length - 1 ; i >= 0; i --){
      if(arr[i].status == 1){
        a ++;
      }
    }
    this.setData({
      topLen: a
    })
  },
  changeTab: function(e){
    let index = e.target.dataset.index
    this.setData({
      tabIndex: index
    })
  },
  showMyDicPreview(e){
    let index = e.currentTarget.dataset.index
    let toplen = e.currentTarget.dataset.toplen
    let info = JSON.stringify(e.currentTarget.dataset.info)
    wx.navigateTo({
      url: `../mydicpreview/mydicpreview?previewInfo=${info}&index=${index}&toplen=${toplen}`
    })
  },
  toWeb(){
    wx.navigateTo({
      url: "../toweb/toweb"
    })
  },
  rearrangeByTime(){
    let arr = this.data.photosInfo
    let topArr = this.data.topInfo
    let length = arr.length
    for( let i = length - 1 ; i >= 0; i --){
      if(arr[i].status == 1){
        topArr.push(arr[i])
      }
    }
  }
})
