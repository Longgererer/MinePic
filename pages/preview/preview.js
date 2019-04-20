const app = getApp()
Page({
    data:{
        winWidth: "",
        winHeight: "",
        imgUrls: [],
        previewImgs: [],
        contentText: '',
        current: 1,
        circular: true,
        previousMargin:'100rpx',
        nextMargin:'100rpx',
        displayMultipleItems: 3,
        whole: false,
        route_dy_id: '',
        isHade: false
    },
    onLoad: function(options){
        wx.showLoading({
            title: '加载中...'
        })
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                })
            }
        })
        let info = JSON.parse(options.previewInfo)
        this.setData({
            imgUrls: info.contentImg,
            previewImgs: info.originalImg,
            contentText: info.contentText,
            route_dy_id: info.route_dy_id
        })
        if (this.data.imgUrls.length <= 4) {
            console.log(this.data.imgUrls.length)
            this.setData({
                isHide: true,
                current: 0
            })
        }else{
            let imgUrls = this.rearrange(this.data.imgUrls)
            let previewImgs = this.rearrange(this.data.previewImgs)
            this.setData({
                imgUrls,
                previewImgs
            })
        }
        setTimeout(() => {
            wx.hideLoading()
        }, 100);
    },
    rearrange: function (arr) {
        let reArr = arr
        reArr.unshift(reArr.pop())
        return reArr
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
    changeVBImg: function (e) {
        let current = e.currentTarget.dataset.index
        this.setData({
            current
        })
    }
})