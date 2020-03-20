import Taro, { useState } from '@tarojs/taro'
import { View, Text, Form, Label, Input, Button, Picker, CheckboxGroup, Checkbox, Block } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtMessage } from 'taro-ui'

import { Config } from '../../config'

import './index.scss'

interface IProps {
  title: string
  isRegister: boolean
  onSubmit: (event: SubmitOptions) => void
}

const IForm: Taro.FC<IProps> = (props) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [collegeIndex, setCollegeIndex] = useState(0);
  const handleRoleChange = (event: CommonEvent) => { setRoleIndex(+event.detail.value) }
  const handleCollegeChange = (event: CommonEvent) => { setCollegeIndex(+event.detail.value) }

  const [usernameStatus, setUsernameStatus] = useState(false)
  const [passwordStatus, setPasswordStatus] = useState(false);

  const handleInputBlur = (type: ('username' | 'password'), detail: CommonEvent['detail']) => {
    const { check: base } = Config.login
    const setState = {
      username: setUsernameStatus,
      password: setPasswordStatus,
    }

    // 触发blur默认置为false
    setState[type](false)

    if (detail.value === '') {
      return Taro.atMessage({ type: 'error', message: base[type].empty, duration: 1500 })
    }

    if (!base[type].reg.test(detail.value)) {
      return Taro.atMessage({ type: 'error', message: base[type].format, duration: 1500 })
    }

    // 以上均通过，置为true
    setState[type](true)
  }

  const onSubmit = (event: CommonEvent) => {
    // console.log(event);
    const result: SubmitOptions = {
      ...event.detail.value,
      usernameStatus, passwordStatus,
      isAgree: event.detail.value.isAgree.length !== 0
    }

    if (props.isRegister) {
      result.role = Config.login.role[roleIndex]
      result.college = Config.login.colleges[collegeIndex]
    }

    props.onSubmit(result)
  }

  return (
    <Block>
      <AtMessage />
      <View className='iform__title'>{props.title}</View>
      <Form onSubmit={onSubmit}>
        <Form className='at-form iform__body'>

          {/* 用户名 */}
          <View className='at-input'>
            <View className='at-input__container'>
              <Label className='at-input__title' for='username'>账号</Label>
              <Input
                id='username' className='at-input__input'
                type='text' name='username' placeholder='请输入账号'
                maxLength={10}
                onBlur={event => handleInputBlur('username', event.detail)}
              />
            </View>
          </View>

          {/* 密码 */}
          <View className='at-input'>
            <View className='at-input__container'>
              <Label className='at-input__title' for='password'>密码</Label>
              <Input
                id='password' className='at-input__input'
                type='text' name='password' password={true} placeholder='请输入密码'
                maxLength={16}
                onBlur={event => handleInputBlur('password', event.detail)}
              />
            </View>
          </View>

          {
            props.isRegister && <Block>
              {/* 用户类型 */}
              <View className='at-input'>
                <View className='at-input__container'>
                  <Label className='at-input__title' for='role'>身份</Label>
                  <Picker id='role' mode='selector' onChange={handleRoleChange} value={roleIndex} range={Config.login.role} name='role'>
                    <View>{!roleIndex ? '考生' : '教师'}</View>
                  </Picker>
                </View>
              </View>

              {/* 所在学院 */}
              <View className='at-input'>
                <View className='at-input__container'>
                  <Label className='at-input__title' for='college'>学院</Label>
                  <Picker id='college' mode='selector' onChange={handleCollegeChange} value={collegeIndex} range={Config.login.colleges} name='college'>
                    <View>{Config.login.colleges[collegeIndex]}</View>
                  </Picker>
                </View>
              </View>
            </Block>
          }

          {/* 用户协议 */}
          <CheckboxGroup name='isAgree' className='iform__checkbox-agree'>
            <Label className='iform__lable-agree' for='agree'>
              <Checkbox className='iform__checkbox-agree-elem' id='agree' value='agree' checked={false} />
              <Text>已阅读并同意</Text>
              <Text style={{ color: '#007acc' }} onClick={() => Taro.navigateTo({ url: '../protocol/index' })}>《用户使用须知》</Text>
            </Label>
          </CheckboxGroup>

        </Form>

        <Button className='iform__button-submit' type='primary' formType='submit' id='login'>登录</Button>
      </Form>
    </Block>
  )
}

IForm.config = {
  navigationBarTitleText: '登陆',
}

export default IForm