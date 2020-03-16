import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import PannelLsit from '../../components/pannellsit'
import TimeTable from '../../components/timetable'

import './index.scss'

export default function Home() {
  const [current, setCurrent] = useState(0)

  const handleClick = () => {
    setCurrent(current + 1)
  }

  return (
    <View className='index'>
      <View>{current}</View>
      <AtButton onClick={handleClick}>CLICK ME</AtButton>
    </View>
  )
}

Home.config = {
  navigationBarTitleText: '首页',
}
