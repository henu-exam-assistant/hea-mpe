import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import IForm from '../../../../components/form'
import { loginCheck } from '../../../../lib'

import './index.scss'

const Register: Taro.FC = () => {
  const handleSelfSubmit = (event: SubmitOptions) => {
    console.log(event);
    loginCheck(event)
  }

  return (
    <View className='login'>
      <IForm title='用户绑定' isRegister={true} onSubmit={handleSelfSubmit}></IForm>
    </View >
  )
}

Register.config = {
  navigationBarTitleText: '注册',
}

export default Register