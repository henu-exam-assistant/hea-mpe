import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { Config } from '../../config'

import './index.scss'

interface IProps {
  // id: string
  // ScrollViewHeight: number
}

const PannelList: Taro.FC<IProps> = () => {
  const ListConfig = [
    {
      course: '大学英语视听说',
      time: '1月1日 周一 19:00 - 20:00',
      place: '金明 综合楼5203'
    },
    {
      course: '大学英语视听说',
      time: '1月1日 周一 19:00 - 20:00',
      place: '金明 综合楼5203'
    },
    {
      course: '大学英语视听说',
      time: '1月1日 周一 19:00 - 20:00',
      place: '金明 综合楼5203'
    },
    {
      course: '大学英语视听说',
      time: '1月1日 周一 19:00 - 20:00',
      place: '金明 综合楼5203'
    },
    {
      course: '大学英语视听说',
      time: '1月1日 周一 19:00 - 20:00',
      place: '金明 综合楼5203'
    },
    {
      course: '大学英语视听说',
      time: '1月1日 周一 19:00 - 20:00',
      place: '金明 综合楼5203 55'
    },
    {
      course: '大学英语视听说',
      time: '1月1日 周一 19:00 - 20:00',
      place: '金明 综合楼5203 44'
    },
    {
      course: '大学英语视听说',
      time: '1月1日 周一 19:00 - 20:00',
      place: '金明 综合楼5203 33'
    },
    {
      course: '大学英语视听说',
      time: '1月1日 周一 19:00 - 20:00',
      place: '金明 综合楼5203 22'
    },
    {
      course: '大学英语视听说',
      time: '1月1日 周一 19:00 - 20:00',
      place: '金明 综合楼5203 11'
    },
  ]

  return (
    <View className='pannellist'>
      <View className='pannellist-scrollview'>
        {
          ListConfig.map((elem, index) => (
            <View className='pannellist-item' key='key' style={{ backgroundColor: Config.colorList[index % Config.colorList.length] }}>
              <View className='pannellist-item-course'>{elem.course}</View>
              <View className='pannellist-item-time'>{elem.time}</View>
              <View className='pannellist-item-place'>{elem.place}</View>
            </View>
          ))
        }
      </View>
    </View>
  )
}

export default PannelList