import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const StuList: Taro.FC = () => {
  return (
    <View className='stu-list'>
      StuList
    </View>
  )
}

StuList.config = {
  navigationBarTitleText: '考生信息',
}

export default StuList