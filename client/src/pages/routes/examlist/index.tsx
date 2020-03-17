import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const ExamList: Taro.FC = () => {
  return (
    <View className='exam-list'>
      ExamList
    </View>
  )
}

ExamList.config = {
  navigationBarTitleText: '考试列表',
}

export default ExamList