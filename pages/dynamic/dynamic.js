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
    activeInfo: []
  },
  //发布时间
  releaseTime: function(){
    let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}  ${date.getHours()}:${min}`;
    return str;
  },
  imageArrDownLoad: function(obj) {
    let success = obj.success; 
    let urls = obj.urls;  
    let savedFilePaths = new Map();
    for (let i = urls.length; i--;) {
      this.downloadOneFile({
            url: urls[i],
            success: res => {
                savedFilePaths.set(res.id, res);
                if (savedFilePaths.size == urlsLength) {
                    if (success){
                      console.log(1)
                        success(savedFilePaths)
                    }
                }
            }
        })
    }
  },
  downloadOneFile: function(obj) {
    let id = "";
    let url = obj.url;
    if (obj.id){
        id = obj.id;
    }else{
        id = url;
    }
    const downloadTask = wx.downloadFile({
        url: obj.url,
        success: res => {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: res => {
                console.log('success')
              },
              fail: res => {
                console.log('fail')
              }
            })
        },
        fail: e => {
          console.log(e)
        }
    })
    downloadTask.onProgressUpdate((res) => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
  },
  //批量下载
  //不能是网络图片
  batchDownload: function(e){
    wx.showModal({
      title: '提示',
      content: '确认批量下载？',
      success: res => {
        if(res.confirm){
          let imgSrcArr = e.detail.originalImg
          this.imageArrDownLoad({
            urls: imgSrcArr,
            success: res => {
              console.log('success')
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
  onShareAppMessage() {
    this.hideModal();
    return {
      title: '快来关注我的微商相册😀！',
      imageUrl: 'https://wx.qlogo.cn/mmopen/vi_32/fUD2TOdz2ddLAurrQXpJ0aUJZVJOtc2Y6fdJSnLELLBk0HXrekK1sTN1eCE85KdYibIp8LW9d8f98QEpVceIGMg/132',
      path: '/page/dynamic/dynamic',
      success: res => {
        setTimeout(function(){wx.showToast({  
          title: '分享成功！',  
        })},500);
      }
    }
  },
  shareToCircle: function(){
    this.hideModal();
    // this.createQrCode();
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
      url: "http://39.97.184.156/weice/public/uploads/erweima.jpg",
      success: function (res) {
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
      url: 'http://39.97.184.156/weice/public/index/index/show',
      data: {
        openid: app.globalData.openid
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        if(res.statusCode == 200) {
          let arr = res.data.reverse()
          let info = []
          arr.forEach(function (item) {
            let arrInfo = {
              userImg: item.headimgurl,
              nickName: item.nickname,
              createTime: item.create_time,
              miniTime: '',
              contentText: item.describes,
              contentImg: item.thumb_route,
              originalImg: item.route,
              route_dy_id: item.route_dy_id
            }
            info.push(arrInfo)
          })
          this.setData({
            activeInfo: info
          })
          setTimeout(() => {
            wx.hideLoading()
          }, 100);
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
    console.log(info)
    wx.navigateTo({
      url: `../preview/preview?previewInfo=${info}`
    })
  }
})



