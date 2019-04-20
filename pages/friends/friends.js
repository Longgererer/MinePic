const app = getApp()
Page({
  data: {
    friendTabInfo: ['好友列表', '关注好友'],
    tabIndex: 0,
    friendsInfo: [
      {
        headImg: 'https://wx.qlogo.cn/mmopen/vi_32/KWfwatrwK3D1b1wsfdJ4aQrxwR12q3sgp2ywN2VJXDzrgm9MJ7wBJ7YRxOtlYmeeJxEjX8ygrficB0pMpc9WBMA/132',
        nickName: '通',
      },
      {
        headImg: 'https://wx.qlogo.cn/mmopen/vi_32/SglXzIyKPqTibZXOhXlAQLn5Ud6A2t7F7Y67d0BZYpg3AQ5gZBwXpf8WXIGcicl3qdRqpBW0iaequXoN5bvr2uREg/132',
        nickName: '会飞的鱼',
      },
      {
        headImg: 'https://wx.qlogo.cn/mmopen/vi_32/ibthrJzWeVG25nAaJKbRyjk9rW7wSEj01k9t6cicoDucSiberQ0MvGgYtuosI1e4vd9ExibJF7qH5OVibpPAyftMocw/132',
        nickName: '彼得潘',
      },
      {
        headImg: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLBXbTHWJQ8Gr8tKhtH14kQhibvVVNSIe1up0ic2de5pjj7N2ApokiaI3kiaV8hElsybK7BXv2xicASYicg/132',
        nickName: '林木木',
      },
      {
        headImg: 'https://wx.qlogo.cn/mmopen/vi_32/qkkxmNycW0kYqbGhCvMcgiaQepIsiaH7ia66ibwzHpRwaQGSN0ouGSh5yMBEg44hCPY2ticGoaCkJKoMEDpZNH0dtOA/132',
        nickName: '谢泳洧',
      },
      {
        headImg: '../../images/qq.png',
        nickName: '微商大鹏',
      }
    ],
    attentionInfo: [
      {
        headImg: '../../images/friends.png',
        nickName: '小李',
      },
      {
        headImg: '../../images/friends.png',
        nickName: '小张',
      },
      {
        headImg: '../../images/friends.png',
        nickName: '丁一',
      },
      {
        headImg: '../../images/friends.png',
        nickName: '王二',
      },
      {
        headImg: '../../images/friends.png',
        nickName: '阿飞',
      },
      {
        headImg: '../../images/friends.png',
        nickName: '大黎',
      },
      {
        headImg: '../../images/friends.png',
        nickName: '小瑟',
      },
      {
        headImg: '../../images/friends.png',
        nickName: '大军',
      }
    ]
  },
  changeTab: function(e){
    let index = e.target.dataset.index;
    this.setData({
      tabIndex: index
    })
    // app.showLoad()
  },
})