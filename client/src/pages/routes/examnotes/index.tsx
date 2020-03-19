import Taro from '@tarojs/taro'
import { View, Block } from '@tarojs/components'

import { ExamNotesConfig } from '../../../config'

import './index.scss'

const ExamNotes: Taro.FC = () => {
  const userRole: string = 'student!'

  const renderArticle = (params: ExamNote[]) => {
    return (
      <Block>
        {params.map(elem => (
          <View key='key' className={`at-article ${elem.selfClass || ''}`}>

            <View className='at-article__h1'>{elem.title}</View>
            <View className='at-article__content'>
              <View className={`at-article__section`}>
                {
                  elem.content.map(content => (
                    <View className='at-article__p' key='key'>{content}</View>
                  ))
                }
              </View>
            </View>
          </View>
        ))}
      </Block>
    )
  }

  return (
    <View className='exam-notes'>
      {
        userRole === 'student'
          ? renderArticle(ExamNotesConfig.student)
          : renderArticle(ExamNotesConfig.teacher)
      }
    </View>
  )
}

ExamNotes.config = {
  navigationBarTitleText: '考试须知',
}

export default ExamNotes