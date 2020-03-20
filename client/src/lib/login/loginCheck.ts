import Taro from '@tarojs/taro'
import { Config } from '../../config'

/**
 * 登陆注册共用的提交前数据格式验证
 */
export function loginCheck(data: SubmitOptions) {
  const { check: base } = Config.login

  if (!data.isAgree) {
    Taro.atMessage({ type: 'error', message: base['protocol'].noCheckd, duration: 1500 })
    return false
  }

  if (!data.usernameStatus) {
    Taro.atMessage({ type: 'error', message: base['username'].noPass, duration: 1500 })
    return false
  }

  if (!data.passwordStatus) {
    Taro.atMessage({ type: 'error', message: base['password'].noPass, duration: 1500 })
    return false
  }

  // 用户身份类型及学院有默认值，无需检测
  // 以上均通过 返回true
  return true
}