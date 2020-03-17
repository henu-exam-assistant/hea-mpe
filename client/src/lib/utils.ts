import dayjs from 'dayjs'

export const Util = {
  /**
   * 接受一个日期 对象/字符串/时间戳 返回一个格式化的日期
   * 
   * 不传参则默认返回当前的日期
   */
  formatDate: (date: Date | string | number | undefined) => {
    return dayjs(date).format('YYYY-MM-DD hh:mm:ss')
  }
}