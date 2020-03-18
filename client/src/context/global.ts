/**
 * 简单全局变量
 */
const globalData = {
  SystemWindowHeight: 0,
  IndexPagePannelHeight: 0
}

type Key = 'SystemWindowHeight' | 'IndexPagePannelHeight'

export function setGlobalData(key: Key, val: any) {
  globalData[key] = val
}

export function getGlobalData(key: Key) {
  return globalData[key]
}