//trvel.js
const util = require('../../utils/util.js')

Page({
  data: {
    trvel: []
  },
  onLoad: function () {
    this.setData({
      trvel: (wx.getStorageSync('trvel') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
