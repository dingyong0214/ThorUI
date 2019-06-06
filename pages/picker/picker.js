const cityData = require('../../utils/picker.city.js')
Page({
  data: {
    selectList: cityData, //接口返回picker数据,此处就直接使用本地测试数据
    multiArray: [], //picker数据
    value: [0, 0, 0],
    text: "",
    id: ""
  },
  onLoad:function(){
    this.setData({
      multiArray: [
        this.toArr(this.data.selectList),
        this.toArr(this.data.selectList[0].children),
        this.toArr(this.data.selectList[0].children[0].children)
      ]
    })
  },
  picker: function(e) {
    let value = e.detail.value;
    if (this.data.selectList.length > 0) {
      let provice = this.data.selectList[value[0]].name
      let city = this.data.selectList[value[0]].children[value[1]].name
      let  district = this.data.selectList[value[0]].children[value[1]].children[value[2]].name
      this.setData({
        text: provice + " " + city + " " + district,
        id: this.data.selectList[value[0]].children[value[1]].children[value[2]].id
      })
    }
  },
  toArr(object) {
    let arr = [];
    for (let i in object) {
      arr.push(object[i].name);
    }
    return arr;
  },
  columnPicker: function(e) {
    //第几列 下标从0开始
    let column = e.detail.column;
    //第几行 下标从0开始
    let value = e.detail.value;
    if (column === 0) {
      this.setData({
        multiArray: [
          this.data.multiArray[0],
          this.toArr(this.data.selectList[value].children),
          this.toArr(this.data.selectList[value].children[0].children)
        ],
        value: [value, 0, 0]
      })
    } else if (column === 1) {
      this.setData({
        multiArray: [
          this.data.multiArray[0],
          this.data.multiArray[1],
          this.toArr(this.data.selectList[this.data.value[0]].children[value].children)
        ],
        value: [this.data.value[0], value, 0]
      })
    }
  }
})