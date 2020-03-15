// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'你好! Bob',
    age:'我今年一岁半了!',
    pro:[
      { id: '1',  user:'user'  },
      { id: '1', user: 'user' },
      { id: '1', user: 'user' },
    ],
    counter:0
  },
  onClickAdd(){
    this.setData({
      counter: this.data.counter +=1
  })
  } ,
  onClickReduce(){
    this.setData({
      counter: this.data.counter -=1
    })
  }
})