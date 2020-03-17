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
      'pages/user/index',
      'pages/routes/login/login/index',
      'pages/routes/login/loginway/index',
      'pages/routes/login/register/index',
      'pages/routes/login/protocol/index',
      'pages/routes/examinfo/index',
      'pages/routes/stulist/index',
      'pages/routes/examlist/index',
      'pages/routes/examnotes/index',
      'pages/routes/feedback/index',
      'pages/routes/selfinfo/index'
    ],
    tabBar: {
      list: [
        {
          text: '',
          pagePath: 'pages/home/index',
          iconPath: './assets/images/icon-home.png',
          selectedIconPath: './assets/images/icon-home-selected.png',
        },
        {
          text: '',
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
      navigationBarTitleText: '河南大学考试助手',
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
