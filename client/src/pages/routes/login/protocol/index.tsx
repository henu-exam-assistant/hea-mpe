import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { UserProtocol } from '../../../../config'

import './index.scss'

const Protocol: Taro.FC = () => {
  return (
    <View className='protocol'>
      <View key='key' className='at-article'>
        <View className='at-article__h1'>{UserProtocol.title}</View>
        <View className='at-article__content'>
          <View className={`at-article__section`}>
            {
              UserProtocol.content.map(content => (
                <View className='at-article__p' key='key'>{content}</View>
              ))
            }
          </View>
        </View>
      </View>
    </View>
  )
}

Protocol.config = {
  navigationBarTitleText: '使用须知',
}

export default Protocol