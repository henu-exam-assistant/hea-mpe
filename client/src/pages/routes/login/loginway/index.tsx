import Taro from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'

import './index.scss'
import Logo from '../../../../assets/images/logo.png'
import IconLogin from '../../../../assets/images/icon-login.png'
import IconWeChat from '../../../../assets/images/icon-wechat.png'

const LoginWay: Taro.FC = () => {
  const handleNormalLoginClick = () => {
    console.log('handleNormalLoginClick');
  }

  const handleQuickLoginClick = () => {
    console.log('handleQuickLoginClick');
  }

  return (
    <View className='login-way'>
      <View className='login-way-line1'>
        <Image src={Logo} className='login-way-logo' />
      </View>

      <View className='login-way-line2'>
        <Button className='login-way-line2-button' id='firstbtn' type="primary" onClick={handleNormalLoginClick}>
          <Image className='login-way-line2-icon' src={IconLogin}></Image>
          <text>普通登录</text>
        </Button>

        <Button className='login-way-line2-button' id='secondbtn' type="primary" onClick={handleQuickLoginClick}>
          <Image className='login-way-line2-icon' src={IconWeChat}></Image>
          <text>快速登录</text>
        </Button>
      </View>
    </View>
  )
}

LoginWay.config = {
  navigationBarBackgroundColor: '#fff',
  navigationBarTextStyle: 'black'
}

export default LoginWay