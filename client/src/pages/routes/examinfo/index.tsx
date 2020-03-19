import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"

import './index.scss'

const IconConfig = {  size: 12, color: '#78A4FA', prefixClass: 'iconfont'}

const ExamInfo: Taro.FC = () => {
  const ListData = {
    course: 'C++程序设计',
    teacher: '朱小艳、王瀛',
    place: '科技馆101',
    time: ['05-31', '周四', '10:20-12:20'],
    monitor: ['孙胜耀', '朱秀阁'],
    peopleCount: 0
  }

  return (
    <View className='exam-info'>
      <View className='exam-info__title'>{ListData.course}</View>
      <AtList>
        <AtListItem title={`任课教师: ${ListData.teacher}`} iconInfo={{  ...IconConfig,value: 'teacher' }} />
        <AtListItem title={`考试地点: ${ListData.place}`} iconInfo={{  ...IconConfig,value: 'place' }} />
        <AtListItem title={`考试时间: ${ListData.time.join(' ')}`} iconInfo={{  ...IconConfig,value: 'time' }} />
        <AtListItem title={`监考老师: ${ListData.monitor.join('、')}`} iconInfo={{  ...IconConfig,value: 'monitor' }} />
        <AtListItem title={`考生人数: ${ListData.peopleCount}`} arrow='right' iconInfo={{  ...IconConfig,value: 'people-count' }} />
      </AtList>
    </View>
  )
}

ExamInfo.config = {
  navigationBarTitleText: '考试信息',
}

export default ExamInfo