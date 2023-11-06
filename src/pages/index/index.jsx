import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import Taro from '@tarojs/taro'

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
    </View>
  )
}
