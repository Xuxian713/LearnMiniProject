// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[
      {
        id: '1', class: '烧烤'
      },
      {
        id: '2', class: '干锅'
      },
      {
        id: '3', class: '小炒'
      },
      {
        id: '4', class: '炒饭'
      },
      {
        id: '5', class: '水果'
      },
      {
        id: '6', class: '水煮'
      },
      {
        id: '7', class: '甜品'
      },
    ],
    currentIndex: 0,
    branerList:[
      {
        id:'1',
        url:'../../assets/bannerList/WechatIMG158.png'
      },
      {
        id: '2',
        url: '../../assets/bannerList/WechatIMG159.png'
      },
      {
        id: '3',
        url: '../../assets/bannerList/WechatIMG160.png'
      },
      {
        id: '4',
        url: '../../assets/bannerList/WechatIMG161.png'
      },
      {
        id: '5',
        url: '../../assets/bannerList/WechatIMG162.png'
      },
      {
        id: '6',
        url: '../../assets/bannerList/WechatIMG163.png'
      },
      {
        id: '7',
        url: '../../assets/bannerList/WechatIMG164.png'
      }
    ],
    recommends:[
      {
        id: '1',
        url: '../../assets/bannerList/WechatIMG158.png',
        title: '美味烧烤'
      },
      {
        id: '2',
        url: '../../assets/bannerList/WechatIMG159.png',
        title: '干锅土豆'
      },
      {
        id: '3',
        url: '../../assets/bannerList/WechatIMG160.png',
        title: '油爆大虾'
      },
      {
        id: '4',
        url: '../../assets/bannerList/WechatIMG161.png',
        title: '香肠炒饭'
      },
      {
        id: '5',
        url: '../../assets/bannerList/WechatIMG162.png',
        title: '千姿百态'
      },
      {
        id: '6',
        url: '../../assets/bannerList/WechatIMG163.png',
        title:'绝味小炒肉'
      },
      {
        id: '7',
        url: '../../assets/bannerList/WechatIMG164.png',
        title: '风情甜品'
      }
    ],
    selectId:'1',
    foodList:[
      {
        id: '1',
        url:'../../assets/footList/id_1/WechatIMG165.png',
        titleDec:'美味羊肉串,看起来都饿!'
      },
      {
        id: '1',
        url: '../../assets/footList/id_1/WechatIMG166.png',
        titleDec: '香喷喷的烤鸡翅咯!'
      },
      {
        id: '1',
        url: '../../assets/footList/id_1/WechatIMG167.png',
        titleDec: '千滋百味的烧烤真香呀!'
      },
      {
        id: '1',
        url: '../../assets/footList/id_1/WechatIMG168.png',
        titleDec: '原滋原味的烤鸡,你不进来尝尝?!'
      },
      {
        id: '1',
        url: '../../assets/footList/id_1/WechatIMG169.png',
        titleDec: '火爆鱿鱼,还是小时候的味道'
      },
      {
        id: '2',
        url: '../../assets/footList/id_2/WechatIMG172.png',
        titleDec: '干锅鸡翅,小时妈妈的味道!'
      },
      {
        id: '2',
        url: '../../assets/footList/id_2/WechatIMG173.png',
        titleDec: '干锅牛蛙,入口香甜,带劲!'
      },
      {
        id: '2',
        url: '../../assets/footList/id_2/WechatIMG174.png',
        titleDec: '干锅肥肠,泡泡糖一般的嚼劲!'
      },
      {
        id: '2',
        url: '../../assets/footList/id_2/WechatIMG175.png',
        titleDec: '干锅鸭子,香辣有味,令你流连忘返'
      },
      {
        id: '2',
        url: '../../assets/footList/id_2/WechatIMG176.png',
        titleDec: '干锅鸭肠,梦里牵魂!'
      },
      {
        id: '2',
        url: '../../assets/footList/id_2/WechatIMG177.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '3',
        url: '../../assets/footList/id_3/WechatIMG178.png',
        titleDec: '干锅鸡翅,小时妈妈的味道!'
      },
      {
        id: '3',
        url: '../../assets/footList/id_3/WechatIMG179.png',
        titleDec: '干锅牛蛙,入口香甜,带劲!'
      },
      {
        id: '3',
        url: '../../assets/footList/id_3/WechatIMG180.png',
        titleDec: '干锅肥肠,泡泡糖一般的嚼劲!'
      },
      {
        id: '3',
        url: '../../assets/footList/id_3/WechatIMG181.png',
        titleDec: '干锅鸭子,香辣有味,令你流连忘返'
      },
      {
        id: '3',
        url: '../../assets/footList/id_3/WechatIMG182.png',
        titleDec: '干锅鸭肠,梦里牵魂!'
      },
      {
        id: '3',
        url: '../../assets/footList/id_3/WechatIMG183.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '4',
        url: '../../assets/footList/id_4/WechatIMG184.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '4',
        url: '../../assets/footList/id_4/WechatIMG185.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '4',
        url: '../../assets/footList/id_4/WechatIMG186.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '4',
        url: '../../assets/footList/id_4/WechatIMG187.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '4',
        url: '../../assets/footList/id_4/WechatIMG188.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '4',
        url: '../../assets/footList/id_4/WechatIMG189.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '4',
        url: '../../assets/footList/id_4/WechatIMG190.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '5',
        url: '../../assets/footList/id_5/WechatIMG197.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '5',
        url: '../../assets/footList/id_5/WechatIMG191.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '5',
        url: '../../assets/footList/id_5/WechatIMG192.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '5',
        url: '../../assets/footList/id_5/WechatIMG193.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '5',
        url: '../../assets/footList/id_5/WechatIMG194.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '5',
        url: '../../assets/footList/id_5/WechatIMG195.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '5',
        url: '../../assets/footList/id_5/WechatIMG196.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '6',
        url: '../../assets/footList/id_6/WechatIMG198.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '6',
        url: '../../assets/footList/id_6/WechatIMG199.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '6',
        url: '../../assets/footList/id_6/WechatIMG200.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '6',
        url: '../../assets/footList/id_6/WechatIMG201.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '6',
        url: '../../assets/footList/id_6/WechatIMG202.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '6',
        url: '../../assets/footList/id_6/WechatIMG203.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '6',
        url: '../../assets/footList/id_6/WechatIMG204.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '7',
        url: '../../assets/footList/id_7/WechatIMG205.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '7',
        url: '../../assets/footList/id_7/WechatIMG206.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '7',
        url: '../../assets/footList/id_7/WechatIMG207.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '7',
        url: '../../assets/footList/id_7/WechatIMG208.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '7',
        url: '../../assets/footList/id_7/WechatIMG209.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '7',
        url: '../../assets/footList/id_7/WechatIMG210.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      },
      {
        id: '7',
        url: '../../assets/footList/id_7/WechatIMG211.png',
        titleDec: '干锅鸭头!,咋天天吃鸭子'
      }
    ],
    selectList:[],
    isShowBackToTop:false
  },
  onClickItem(event){
    const index = event.currentTarget.dataset.index;
    var list = []
    console.log(event)
    this.setData({
      currentIndex:index
    })
    const id = this.data.goods[index].id
    this.data.foodList.map((item,index) => {
      if(item.id == id){
        list.push(item)
      }
    })
    this.setData({
      selectList:list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = []
    this.data.foodList.map((item,index) => {
      if(item.id == this.data.selectId){
        list.push(item)
      }
    })
    this.setData({
      selectList:list
    })
  },

  onPageScroll:function(event){
    const scrollTop = event.scrollTop
    const flag = scrollTop >= 1200
    if(flag != this.data.isShowBackToTop){
     this.setData({
       isShowBackToTop:flag
     })
    } 
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      isShowBackToTop:true
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})