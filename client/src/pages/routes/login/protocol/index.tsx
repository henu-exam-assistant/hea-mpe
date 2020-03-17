import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const Protocol: Taro.FC = () => {
  return (
    <View className='protocol'>
      Protocol
    </View>
  )
}

Protocol.config = {
  navigationBarTitleText: '使用须知',
}

export default Protocol