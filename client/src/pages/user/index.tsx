import Taro from '@tarojs/taro'
// import { ITouchEvent } from '@tarojs/components/types/common'
import { View, OpenData } from '@tarojs/components'

import './index.scss'

export default function User() {
  const ListConfig = [
    { name: '个人信息', goto: '../routes/selfinfo/index', class: 'selfinfo' },
    { name: '问题反馈', goto: '../routes/feedback/index', class: 'feedback' },
    { name: '考试须知', goto: '../routes/examnotes/index', class: 'notes' },
  ]

  const handleItemClick = (url: string) => {
    Taro.navigateTo({ url })
  }

  return (
    <View className='user'>
      <View className='user__header'>
        <View className='user__header-avatar'>
          <OpenData type='userAvatarUrl' className='user__header-avatar-img' />
          <View className='user__header-avatar-before' />
          <View className='user__header-avatar-after' />
        </View>
        <OpenData type='userNickName' className='user__header-nickname' />
      </View>

      <View className='user__list'>
        {
          ListConfig.map(item => (
            <View className='user__list-item' key='key' onClick={() => handleItemClick(item.goto)}>
              <View className={`user__list-item-icon user__list-item-icon-${item.class}`}></View>
              <View className='user__list-item-text'>{item.name}</View>
            </View>
          ))
        }
      </View>
    </View>
  )
}

User.config = {
  navigationBarTitleText: '用户',
}