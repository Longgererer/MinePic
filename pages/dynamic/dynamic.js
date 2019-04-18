const app = getApp()
 
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    empty: false,
    showModalStatus: false,
    canvasHidden: true,
    imagePath: '',
    activeInfo: [
      {
        userImg: "../../images/qq.png",
        nickName: "微商张三",
        createTime: "刚刚",
        contentText: "这是，刚新出的鞋子，一双99包邮，欢迎大家砸单！！",
        contentImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ],
        originalImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ]
      },
      {
        userImg: "../../images/qq.png",
        nickName: "微商张三",
        createTime: "半小时前",
        contentText: "商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......",
        contentImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ],
        originalImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ]
      },
      {
        userImg: "../../images/qq.png",
        nickName: "微商李四",
        createTime: "两小时前",
        contentText: "商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......",
        contentImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ],
        originalImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ]
      },
      {
        userImg: "../../images/qq.png",
        nickName: "微商张三",
        createTime: "昨天",
        contentText: "商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......",
        contentImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ],
        originalImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ]
      },
      {
        userImg: "../../images/qq.png",
        nickName: "微商李四",
        createTime: "三天前",
        contentText: "商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......",
        contentImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ],
        originalImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ]
      },
      {
        userImg: "../../images/qq.png",
        nickName: "微商李四",
        createTime: "一年前",
        contentText: "商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......商品详情描述......",
        contentImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ],
        originalImg: [
          "../../images/pic1.jpg","../../images/pic2.jpg","../../images/pic3.jpg",
          "../../images/pic4.jpg","../../images/pic5.jpg","../../images/pic1.jpg",
          "../../images/pic2.jpg","../../images/pic3.jpg","../../images/pic4.jpg"
        ]
      }
    ]
  },
  //发布时间
  releaseTime: function(){
    let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}  ${date.getHours()}:${min}`;
    return str;
  },
  //批量下载
  //不能是网络图片
  batchDownload: function(){
    wx.showModal({
      title: '提示',
      content: '确认批量下载？',
      success(res){
        if(res.confirm){
          var imgSrc = "https://wx.qlogo.cn/mmopen/vi_32/fUD2TOdz2ddLAurrQXpJ0aUJZVJOtc2Y6fdJSnLELLBk0HXrekK1sTN1eCE85KdYibIp8LW9d8f98QEpVceIGMg/132"
          wx.downloadFile({
            url: imgSrc,
            success:function (res) {
              console.log(res);
              //图片保存到本地
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success:function (data) {
                  console.log(data);
                  wx.showToast({  
                    title: '保存成功',  
                  });  
                },
              })
            }
          })
        }else{
          console.log('用户取消下载');
        }
      }
    });
  },
  //分享
  //展示对话框
  showShare: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  //分享给好友
  onShareAppMessage() {
    this.hideModal();
    return {
      title: '一大群王思聪正在吃热狗',
      imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/fUD2TOdz2ddLAurrQXpJ0aUJZVJOtc2Y6fdJSnLELLBk0HXrekK1sTN1eCE85KdYibIp8LW9d8f98QEpVceIGMg/132',
      path: '/page/user?id=123', // 路径，传递参数到指定页面。
      success: res => {
        setTimeout(function(){wx.showToast({  
          title: '分享成功！',  
        })},500);
      }
    }
  },
  //分享朋友圈
  shareToCircle: function(){
    this.hideModal();
    this.createQrCode();
    setTimeout(() => {
      this.setData({
        canvasHidden: false,
      })
    }, 500)
  },
  hideCircle: function(){
    this.setData({
      canvasHidden: true,
    })
  },
  saveQr: function(){
    wx.downloadFile({
      url: this.data.tempFilePath,
      success:function (res) {
        console.log(res);
        //图片保存到本地
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success:function (data) {
            console.log(data);
            wx.showToast({  
              title: '保存成功',  
            });  
          },
        })
      }
    })      
  },
  more: function(){
    this.setData({
      showToast: true
    });
    this.hideModal();
    setTimeout(() => {
      this.setData({
        showToast: false
      })
    },1500);
  },
  onLoad: function () {
    wx.hideLoading()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
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
      url: 'http://110.64.211.2/weice/public/index/index',
      data: {
        openid: app.globalData.openid
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        if(res.statusCode == 200) {
          console.log(res.data.reverse())
          this.setData({

          })
        } else {
          console.log(res.errMsg)
        }
      }
    })
    
    // console.log(1)
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 500)
    // var url = "https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token="+accessToken;
    // if (options) {
    //   url = options.url;
    //   console.log(1);
    // }
    // var size = this.setCanvasSize(); //动态设置画布大小 
    // this.createQrCode(url, "mycanvas", size.w, size.h);   
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // setCanvasSize: function() {
  //   var size = {};
  //   try {
  //     var res = wx.getSystemInfoSync();
  //     var scale = 750 / 400; //不同屏幕下canvas的适配比例；设计稿是750宽 686是因为样式wxss文件中设置的大小
  //     var width = res.windowWidth / scale;
  //     var height = width; //canvas画布为正方形
  //     size.w = width;
  //     size.h = height;
  //   } catch (e) {
  //     // Do something when catch error
  //     console.log("获取设备信息失败" + e);
  //   }
  //   return size;
  // },
  // 获取校验码
  
  /**
   * 绘制二维码图片
   */
  // createQrCode: function(url, canvasId, cavW, cavH) {
  //   console.log('开始');
  //   //调用插件中的draw方法，绘制二维码图片
  //   QR.api.draw(url, canvasId, cavW, cavH);
  //   setTimeout(() => {
  //     this.canvasToTempImage();
  //   }, 1000);
  // },
  /**
   * 获取临时缓存照片路径，存入data中
   */
  // canvasToTempImage: function() {
  //   var that = this;
  //   //把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。
  //   wx.canvasToTempFilePath({
  //     canvasId: 'mycanvas',
  //     success: function(res) {
  //       var tempFilePath = res.tempFilePath;
  //       console.log(tempFilePath);
  //       that.setData({
  //         imagePath: tempFilePath,
  //         // canvasHidden:true
  //       });
  //     },
  //     fail: function(res) {
  //       console.log(res);
  //     }
  //   });
  // },
  showPreview: function(e){
    let info = JSON.stringify(e.detail)
    wx.navigateTo({
      url: `../preview/preview?previewInfo=${info}`
    })
  }
})



