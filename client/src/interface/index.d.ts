// timetable
declare interface TimeTableItem {
  place: string
  course: string,
  topOffset: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  leftOffset: 0 | 1 | 2 | 3 | 4 | 5 | 6
  dura: number
}

// stulist
declare interface StuInfo {
  seatnum: string
  name: string
  stuid: string
}