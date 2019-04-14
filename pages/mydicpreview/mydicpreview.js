const app = getApp()
Page({
    data:{
        winWidth: "",
        winHeight: "",
        imgUrls: [],
        previewImgs: [
            '../../images/pic1.jpg',
            '../../images/pic2.jpg',
            '../../images/pic3.jpg',
            '../../images/pic4.jpg',
            '../../images/pic5.jpg',
            '../../images/pic1.jpg',
            '../../images/pic2.jpg',
            '../../images/pic3.jpg',
            '../../images/pic4.jpg'
        ],
        contentText: '',
        current: 1,
        circular: true,
        previousMargin:'100rpx',
        nextMargin:'100rpx',
        displayMultipleItems: 3,
        whole: false
    },
    onLoad: function(options){
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            }
        });
        app.showLoad()
        let info = JSON.parse(options.previewInfo)

        // wx.request({
        //     url: 'http://110.64.211.2/weice/public/index/picturedetails/index',
        //     method: 'POST',
        //     data: {
        //         img_id: ''
        //     },
        //     header: {
        //         'content-type': 'application/json'
        //     },
        //     success: res => {
        //         if(res.statusCode == 200){
        //             this.setData({
        //                 imgUrls: res.data
        //             })
        //         }else{
        //             console.log(res.errMsg)
        //         }
        //     }
        // })
        this.setData({
            contentText: info.content
        })
    },
    swiperChange: function (e) {
        let current = e.detail.current + 1
        let length = this.data.imgUrls.length
        if((current) < length){
            this.setData({
                current
            })
        }else{
            this.setData({
                current: 0
            })
        }
    },
    showText: function(){
        this.setData({
            whole: !this.data.whole
        })
    },
})