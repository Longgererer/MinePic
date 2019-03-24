const app = getApp()
Page({
  data: {
    friendTabInfo: ['好友列表', '关注好友'],
    tabIndex: 0,
    friendsInfo: [
      {
        headImg: '../../images/friends.png',
        nickName: '王花花',
      },
      {
        headImg: '../../images/friends.png',
        nickName: '李二蛋',
      },
      {
        headImg: '../../images/friends.png',
        nickName: '蔡狗剩',
      }
    ],
    attentionInfo: [
      {
        headImg: '../../images/friends.png',
        nickName: '黄小丫',
      },
      {
        headImg: '../../images/friends.png',
        nickName: '麻花藤',
      },
      {
        headImg: '../../images/friends.png',
        nickName: '贺大炮',
      }
    ]
  },
  changeTab: function(e){
    let index = e.target.dataset.index;
    this.setData({
      tabIndex: index
    })
    app.showLoad()
  },
})