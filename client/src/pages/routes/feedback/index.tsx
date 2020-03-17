import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const Feedback: Taro.FC = () => {
  return (
    <View className='feedback'>
      Feedback
    </View>
  )
}

Feedback.config = {
  navigationBarTitleText: '问题反馈',
}

export default Feedback