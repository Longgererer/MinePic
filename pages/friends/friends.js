const app = getApp()
Page({
  data: {
    friendTabInfo: ['好友列表', '关注好友'],
    tabIndex: 0,
    friendsInfo: [
      {
        headImg: '../../images/qq.png',
        nickName: '微商张三',
      },
      {
        headImg: '../../images/qq.png',
        nickName: '微商小王',
      },
      {
        headImg: '../../images/qq.png',
        nickName: '微商阿华',
      },
      {
        headImg: '../../images/qq.png',
        nickName: '微商李四',
      },
      {
        headImg: '../../images/qq.png',
        nickName: '微商王五',
      },
      {
        headImg: '../../images/qq.png',
        nickName: '微商大鹏',
      },
      {
        headImg: '../../images/qq.png',
        nickName: '微商服饰',
      },
      {
        headImg: '../../images/qq.png',
        nickName: '微商小志',
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