import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Config } from '../../../config'
import './index.scss'

const StuList: Taro.FC = () => {
  const ListConfig: StuInfo[] = [
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
    {
      seatnum: '1',
      name: '李三思',
      stuid: '1234567890'
    },
  ]

  const renderListItem = (params: StuInfo) => {
    return (
      <View className='stu-list__body-list-item'>
        <View className='at-row'>
          <View className={`at-col at-col-${Config.stulist.left}`}>{params.seatnum}</View>
          <View className={`at-col at-col-${Config.stulist.center}`}>{params.name}</View>
          <View className={`at-col at-col-${Config.stulist.right}`}>{params.stuid}</View>
        </View>
      </View>
    )
  }

  return (
    <View className='stu-list'>
      <View className='stu-list__top'>
        <View className='at-row'>
          <View className={`at-col at-col-${Config.stulist.left}`}>座号</View>
          <View className={`at-col at-col-${Config.stulist.center}`}>姓名</View>
          <View className={`at-col at-col-${Config.stulist.right}`}>学号</View>
        </View>
      </View>

      <View className='stu-list__body'>
        <View className='stu-list__body-list'>
          {[...ListConfig, ...ListConfig, ...ListConfig].map(item => (renderListItem(item)))}
        </View>
      </View>
    </View>
  )
}

StuList.config = {
  navigationBarTitleText: '考生信息',
}

export default StuList