import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const Login: Taro.FC = () => {
  return (
    <View className='login'>
      login
    </View>
  )
}

Login.config = {
  navigationBarTitleText: '登陆',
}

export default Login