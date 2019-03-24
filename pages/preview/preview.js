const app = getApp()
Page({
    data:{
        winWidth: "",
        winHeight: "",
        imgUrls: [
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
        current: 1,
        circular: true,
        previousMargin:'100rpx',
        nextMargin:'100rpx',
        displayMultipleItems: 3,
    },
    onLoad: function(){
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            }
        });
        app.showLoad()
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
    }
})