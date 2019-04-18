const app = getApp()
Page({
    data:{
        winWidth: "",
        winHeight: "",
        imgUrls: [
        ],
        previewImgs: [
        ],
        contentText: '',
        current: 1,
        circular: true,
        previousMargin:'100rpx',
        nextMargin:'100rpx',
        displayMultipleItems: 3,
        whole: false,
        status: '',
        index: '',
        topLen: '',
        isHide: false
    },
    onLoad: function(options){
        wx.showLoading()
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            }
        });
        let topLen = parseInt(options.toplen)
        let index = parseInt(options.index)
        let info = JSON.parse(options.previewInfo)
        console.log(info)
        wx.request({
            url: 'http://39.97.184.156/weice/public/index/picturedetails/index',
            method: 'GET',
            data: {
                route_dy_id: info.route_dy_id
            },
            header: {
                'content-type': 'application/json'
            },
            success: res => {
                if(res.statusCode == 200){
                    console.log(res.data)
                    const url = 'http://39.97.184.156/weice/public/'
                    let imgUrls = res.data.thumb_route
                    imgUrls.forEach(function (item, index) {
                        imgUrls[index] = url + item
                    })
                    let previewImgs = res.data.route
                    previewImgs.forEach(function (item, index) {
                        previewImgs[index] = url + item
                    })
                    this.setData({
                        imgUrls,
                        previewImgs
                    })
                }else{
                    console.log(res.errMsg)
                }
            }
        })
        this.setData({
            contentText: info.content,
            status: info.status,
            id: info.route_dy_id,
            index,
            topLen
        })
        if (this.data.imgUrls.length <= 4) {
            this.setData({
                isHide: true,
                current: 0
            })
        } else {
            let previewImgs = this.rearrange(this.data.previewImgs)
            let imgUrls = this.rearrange(this.data.imgUrls)
            this.setData({
                previewImgs,
                imgUrls
            })
        }
        setTimeout(function () {
            wx.hideLoading()
        }, 100)
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
    changeVBImg: function (e) {
        let current = e.currentTarget.dataset.index
        this.setData({
            current
        })
    },
    showText: function () {
        this.setData({
            whole: !this.data.whole
        })
    },
    changeTop: function () {
        const status = this.data.status == 1 ? 0 : 1
        const statusObj = {
            status
        }
        const info = {
            title: '提示',
            confirmText: '确定',
            cancelText: '取消',
            content: this.data.status == 1 ? '确定取消置顶么？' : '确定置顶此图集么？',
            success: res => {
                if (res.confirm) {
                    wx.request({
                        url: 'http://39.97.184.156/weice/public/index/albumlst/hot',
                        method: 'GET',
                        header: {
                            'content-type': 'application/json'
                        },
                        data: {
                            is_hot: status,
                            route_dy_id: this.data.id
                        },
                        success: res => {
                            console.log('success')
                        }
                    })
                    this.setData(
                        statusObj
                    )
                }
            }
        }
        const checkTop = {
            title: '提示',
            confirmText: '确定',
            cancelText: '取消',
            content: '置顶图集最多三个，请先取消其他图集的置顶',
            showCancel: false
        }
        if(this.data.topLen >= 3 && this.data.status == 0){
            wx.showModal(
                checkTop
            )
        }else{
            wx.showModal(
                info
            )
        }
        
    },
    onUnload: function () {
        let info = {}
        const index = this.data.index
        const list =  `photosInfo[${index}].status`
        info[list] = this.data.status
        const pages = getCurrentPages()
        const prevPage = pages[pages.length - 2]
        prevPage.rearrangeByTime()
        prevPage.setData(
            info
        )
    }
})