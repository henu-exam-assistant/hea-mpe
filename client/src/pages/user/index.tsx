import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default function User() {

  return (
    <View className='user'>
      user
    </View>
  )
}

User.config = {
  navigationBarTitleText: '用户',
}