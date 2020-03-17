import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const ExamInfo: Taro.FC = () => {
  return (
    <View className='exam-info'>
      ExamInfo
    </View>
  )
}

ExamInfo.config = {
  navigationBarTitleText: '考试信息',
}

export default ExamInfo