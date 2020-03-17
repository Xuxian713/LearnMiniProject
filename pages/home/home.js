// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannersList:[
      {
        id: '1',
        url: '../../assets/home/branner/WechatIMG215.png'
      },
      {
        id: '2',
        url: '../../assets/home/branner/WechatIMG216.png'
      },
      {
        id: '3',
        url: '../../assets/home/branner/WechatIMG217.png'
      },
      {
        id: '4',
        url: '../../assets/home/branner/WechatIMG218.png'
      },
      {
        id: '5',
        url: '../../assets/home/branner/WechatIMG219.png'
      }
    ],
    recommondList: [
      {
        id: '1',
        url: '/assets/home/recommends/WechatIMG220.png',
        title: '可爱萌宠'
      },
      {
        id: '2',
        url: '/assets/home/recommends/WechatIMG221.png',
        title: '活波俏皮'
      },
      {
        id: '3',
        url: '/assets/home/recommends/WechatIMG222.png',
        title: '猫星人呀'
      },
      {
        id: '4',
        url: '/assets/home/recommends/WechatIMG223.png',
        title: '胖纸一枚'
      }
    ],
    goods: [
      {
        id: '1', class: '流行'
      },
      {
        id: '2', class: '新款'
      },
      {
        id: '3', class: '精选'
      }
    ],
    selectList:[],
    totalList:[
      {
        id: '1', url: '/assets/home/goods/popular/WechatIMG226.png'
      },
      {
        id: '1', url: '/assets/home/goods/popular/WechatIMG227.png'
      },
      {
        id: '1', url: '/assets/home/goods/popular/WechatIMG228.png'
      },
      {
        id: '1', url: '/assets/home/goods/popular/WechatIMG229.png'
      },
      {
        id: '2', url: '/assets/home/goods/new/WechatIMG230.png'
      },
      {
        id: '2', url: '/assets/home/goods/new/WechatIMG231.png'
      },
      {
        id: '2', url: '/assets/home/goods/new/WechatIMG232.png'
      },
      {
        id: '3', url: '/assets/home/goods/better/WechatIMG233.png'
      },
      {
        id: '3', url: '/assets/home/goods/better/WechatIMG234.png'
      },
      {
        id: '3', url: '/assets/home/goods/better/WechatIMG235.png'
      },
      {
        id: '3', url: '/assets/home/goods/better/WechatIMG236.png'
      }
    ],
    selectId:'1',
    isTabFiexd:false,
    tabScrollTop:0
  },
  onHandleTabClick(event){
    console.log('event',event)
    var index = event.detail.index
    if(!index){
      index = '1'
    }else{
      index = Number(index)+1
    }
    console.log('index',index)
    var list = []
    this.setData({
      selectId:index
    })
    this.data.totalList.map((item, index) => {
      if (item.id == this.data.selectId) {
        list.push(item)
      }
    })
    this.setData({
      selectList: list
    })
  }, 
  onLoad: function(){
    const index = 0;
    var list = []
    this.data.totalList.map((item,index) => {
      if(item.id == this.data.selectId){
        list.push(item)
      }
    })
    console.log('list',list)
    this.setData({
      selectList:list
    })
  },
  imageLoadFinsh(){
    
  },
  onShow(){
    wx.createSelectorQuery().select('#tab-conrol').boundingClientRect(rect => {
      console.log(rect)
      this.data.tabScrollTop = rect.top
    }).exec()
  },
  onPageScroll(options){
    const scrollTop = options.scrollTop
    console.log('scrollTop',scrollTop)
    const flag = scrollTop >= 502
    if(flag != this.data.isTabFiexd){
      this.setData({
        isTabFiexd:flag
      })
    }
  }

})