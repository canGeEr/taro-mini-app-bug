import wxParse from '../wxParse/wxParse'

Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    content: {
      type: String,
      observer(content) {

        console.log('执行', content, this)
        wxParse.wxParse('article', 'html', content, this, 5)
      },
    }
  },
})
