import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const ExamNotes: Taro.FC = () => {
  return (
    <View className='exam-notes'>
      ExamNotes
    </View>
  )
}

ExamNotes.config = {
  navigationBarTitleText: '考试须知',
}

export default ExamNotes