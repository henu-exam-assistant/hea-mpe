import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const Register: Taro.FC = () => {
  return (
    <View className='register'>
      register
    </View>
  )
}

Register.config = {
  navigationBarTitleText: '注册',
}

export default Register