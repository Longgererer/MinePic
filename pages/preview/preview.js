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
        // app.showLoad()
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                })
            }
        })
        console.log(options.previewInfo)
        let info = JSON.parse(options.previewInfo)
        console.log(info)
        this.setData({
            imgUrls: info.contentImg,
            contentText: info.contentText,
            route_dy_id: info.route_dy_id
        })
        wx.request({
            url: '',
            methods: 'GET',
            header: {
                'content-type': 'application/json'
            },
            data: {
                route_dy_id: info.route_dy_id
            },
            // success: res => {
            //     if(res.statusCode == 200){
            //         console.log(res.data)
            //     }
            //     if (this.data.imgUrls.length <= 4) {
            //         console.log(this.data.imgUrls.length)
            //         this.setData({
            //             isHide: true,
            //             current: 0
            //         })
            //     } else {
            //         let previewImgs = this.rearrange(this.data.previewImgs)
            //         let imgUrls = this.rearrange(this.data.imgUrls)
            //         this.setData({
            //             previewImgs,
            //             imgUrls
            //         })
            //     }
            // }
        })
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
})