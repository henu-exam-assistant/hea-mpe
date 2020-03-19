import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { Config } from '../../config'

import './index.scss'

const TimeTable: Taro.FC = () => {
  const ListConfig: TimeTableItem[] = [
    {
      place: '金明综合楼 5204',
      course: '大学英语视听说',
      topOffset: 0,
      leftOffset: 0,
      dura: 2
    },
    {
      place: '金明综合楼 5204',
      course: '大学英语读写译',
      topOffset: 1,
      leftOffset: 2,
      dura: 2
    },
    {
      place: '金明综合楼 5204',
      course: '大学体育（二）',
      topOffset: 0,
      leftOffset: 6,
      dura: 2
    },
    {
      place: '金明综合楼 5204',
      course: '物联网基础导论',
      topOffset: 7,
      leftOffset: 5,
      dura: 2
    },
    {
      place: '金明综合楼 5204',
      course: '数据结构',
      topOffset: 4,
      leftOffset: 2,
      dura: 3
    },
    {
      place: '金明综合楼 5204',
      course: '数据库基础',
      topOffset: 6,
      leftOffset: 3,
      dura: 2
    },
    {
      place: '金明综合楼 5204',
      course: '操作系统',
      topOffset: 8,
      leftOffset: 1,
      dura: 2
    },
    {
      place: '金明综合楼 5204',
      course: '计算机组成原理',
      topOffset: 3,
      leftOffset: 4,
      dura: 2
    },
  ]

  return (
    <View className='timetable'>
      <View className='timetable__top'>
        <View className='timetable__top-items'>
          <View className='timetable__top-item'>
            <Text>周一</Text>
            <Text>03-16</Text>
          </View>
          <View className='timetable__top-item'>
            <Text>周二</Text>
            <Text>03-17</Text>
          </View>
          <View className='timetable__top-item'>
            <Text>周三</Text>
            <Text>03-18</Text>
          </View>
          <View className='timetable__top-item'>
            <Text>周四</Text>
            <Text>03-19</Text>
          </View>
          <View className='timetable__top-item'>
            <Text>周五</Text>
            <Text>03-20</Text>
          </View>
          <View className='timetable__top-item'>
            <Text>周六</Text>
            <Text>03-21</Text>
          </View>
          <View className='timetable__top-item'>
            <Text>周日</Text>
            <Text>03-22</Text>
          </View>
        </View>
      </View>

      <View className='timetable__main'>
        <View className='timetable__left'>
          <View className='timetable__left-items'>
            {
              new Array(13).fill(0).map((_, index) => (
                <View className='timetable__left-item' key='key'>{index + 1}</View>
              ))
            }
          </View>
        </View>

        <View className='timetable__body'>
          <View className='timetable__body-list'>
            {/* 主体的框架格子 */}
            <View className='timetable__body-list-lines' >
              {new Array(13).fill(0).map(() => (
                <View className='timetable__body-list-lines-item' key='key' />
              ))}
            </View>
            {
              ListConfig.map((item, index) => (
                <View
                  key='key'
                  style={{ height: `${item.dura * 50}px`, backgroundColor: Config.colorList[index % Config.colorList.length] }}
                  className={`timetable__body-list-item timetable__body-list-item-${item.leftOffset}-${item.topOffset}`}
                >
                  {item.place}{item.course}
                </View>
              ))
            }
          </View>
        </View>
      </View>

    </View>
  )
}

export default TimeTable