import Taro, { Component, Config } from '@tarojs/taro'
import { Index } from './context'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/user/index'
    ],
    tabBar: {
      list: [
        {
          text: '首页',
          pagePath: 'pages/home/index',
          iconPath: './assets/images/icon-home.png',
          selectedIconPath: './assets/images/icon-home-selected.png',
        },
        {
          text: '用户',
          pagePath: 'pages/user/index',
          iconPath: './assets/images/icon-user.png',
          selectedIconPath: './assets/images/icon-user-selected.png',
        }
      ],
      'color': '#000',
      'selectedColor': '#56abe4',
      'backgroundColor': '#f2f2f2',
      'borderStyle': 'black'
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#56abe4',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    cloud: true
  }

  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
