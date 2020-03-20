import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import IForm from '../../../../components/form'
import { loginCheck } from '../../../../lib'
import './index.scss'

const Login: Taro.FC = () => {
  const handleSelfSubmit = (event: SubmitOptions) => {
    console.log(event);
    loginCheck(event)
  }

  return (
    <View className='login'>
      <IForm title='身份信息' isRegister={false} onSubmit={handleSelfSubmit}></IForm>
    </View >
  )
}

Login.config = {
  navigationBarTitleText: '登陆',
}

export default Login