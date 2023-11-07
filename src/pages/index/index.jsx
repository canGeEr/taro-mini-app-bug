import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import Taro from '@tarojs/taro'

const content = `<font color="#000">商详开通超级绿卡预计可省<b style="color:#FE2323;font-weight:normal">83</b>元</font>`

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!  </Text>
      <custom-header />
      <Button onClick={() => {
        Taro.navigateTo({
          url: "/pages/page-one/index"
        })
      }}>点击跳转</Button>
      <custom-source content="custom-source" />
      <bridge-parse content={content} />
    </View>
  )
}
