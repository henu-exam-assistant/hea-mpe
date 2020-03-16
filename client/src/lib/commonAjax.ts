import Taro from '@tarojs/taro'
import axios from 'axios'
import { Config } from '../config'

interface AjaxOption {
  path: string
  method: 'get' | 'post'
  data: object
  headers?: { [key: string]: string }
}

export const CommonAjax = (option: AjaxOption) => {
  let dataCommon = {
    url: Config.apiUrl + option.path,
    method: option.method || 'get',
    headers: option.headers,
  }

  return new Promise<{ code: number, data: object }>((resolve, reject) => {
    axios(dataCommon)
      .then(res => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
        Taro.showToast({ title: '网络错误', icon: 'none', duration: 2000, mask: true })
      })
  })
}