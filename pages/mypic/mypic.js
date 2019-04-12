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
      {image: "../../images/pic1.jpg", content: "商品描述商品描述商品描述商品描述商品描述商品描述"},
      {image: "../../images/pic2.jpg", content: "商品描述商品描述商品描述商品描述商品描述商品描述"},
      {image: "../../images/pic3.jpg", content: "商品描述商品描述商品描述商品描述商品描述商品描述"}
    ],
    photosInfo: [
      {image: "../../images/pic1.jpg", tags: ["标签1", "标签2", "标签3"], content: "", length: 9, time: "2019/04/03"},
      {image: "../../images/pic2.jpg", tags: ["标签1"], content: "", length: 9, time: "2019/04/03"},
      {image: "../../images/pic3.jpg", tags: ["标签1"], content: "", length: 9, time: "2019/04/03"},
      {image: "../../images/pic4.jpg", tags: ["标签1"], content: "", length: 9, time: "2019/04/03"},
      {image: "../../images/pic5.jpg", tags: ["标签1"], content: "", length: 9, time: "2019/04/03"},
      {image: "../../images/pic1.jpg", tags: ["标签1"], content: "", length: 9, time: "2019/04/03"},
      {image: "../../images/pic2.jpg", tags: ["标签1"], content: "", length: 9, time: "2019/04/03"},
      {image: "../../images/pic3.jpg", tags: ["标签1"], content: "", length: 9, time: "2019/04/03"},
    ],
    videoInfo: [
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
    app.showLoad()
  },
  changeTab: function(e){
    let index = e.target.dataset.index;
    this.setData({
      tabIndex: index
    })
    app.showLoad()
  },
  showPreview(){
    wx.navigateTo({
      url: "../preview/preview"
    })
  },
  toWeb(){
    wx.navigateTo({
      url: "../toweb/toweb"
    })
  },
})
