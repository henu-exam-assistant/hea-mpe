import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'

import PannelLsit from '../../components/pannellsit'
import TimeTable from '../../components/timetable'

import './index.scss'

export default function Home() {
  const tabList = [{ title: '时间表' }, { title: '列表' },]

  const [current, setCurrent] = useState(0)
  const handleClick = (value: number) => { setCurrent(value) }

  return (
    <View className='index'>
      <AtTabs current={current} tabList={tabList} onClick={handleClick}>
        <AtTabsPane current={current} index={0} >
          <TimeTable />
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <PannelLsit />
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}

Home.config = {
  navigationBarTitleText: '首页',
}
