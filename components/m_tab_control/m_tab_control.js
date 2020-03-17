// components/m_tab_control/m_tab_control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickItem(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
      const data = {index:index}
      this.triggerEvent("tabClick",data)
    }
  }
})
