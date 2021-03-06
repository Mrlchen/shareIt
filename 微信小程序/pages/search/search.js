var app=getApp()
Page({
  
  data: {
    focus: false,
    inputValue: '',
    keywords:null,
    validation:'',
    searchresult:[]
  },
  searchinput: function (e) {
    this.setData({
      keywords: e.detail.value
    })
  },  
  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function(e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    if(pos != -1){
      // 光标在中间
      var left = e.detail.value.slice(0,pos)
      // 计算光标的位置
      pos = left.replace(/11/g,'2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g,'2'),
      cursor: pos
    }
    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function(e) {
    if (e.detail.value === "123") {
      //收起键盘
      wx.hideKeyboard()
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  searchid:function(){
  
    var that=this
    if (that.data.keywords==null||that.data.keywords.replace(/\s+/g, '').length==0)
    {  this.data.validation = '输入不能为空'
      wx.showModal({
        title: '提示',
        content: '输入不能为空',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }

        }
      })}
    else {
      this.data.validation = ''
      wx.navigateTo({
        url: '../search_articleid/search_articleid?keywords=' + that.data.keywords,
      })
    }
    
  },
  searchpersonid:function(){
    
    var that = this
    if (that.data.keywords == null ||that.data.keywords.replace(/\s+/g, '').length == 0)
    {
      this.data.validation = '输入不能为空'
      wx.showModal({
        title: '提示',
        content: '输入不能为空',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }

        }
      })
    }
    else {
      that.data.validation = ''
      wx.navigateTo({
        url: '../search_user/search_user?keywords=' + that.data.keywords,
      })
      
    }
  },
   onShareAppMessage: function () {

  }
})