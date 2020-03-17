import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const SelfInfo: Taro.FC = () => {
  return (
    <View className='self-info'>
      SelfInfo
    </View>
  )
}

SelfInfo.config = {
  navigationBarTitleText: '个人信息',
}

export default SelfInfo