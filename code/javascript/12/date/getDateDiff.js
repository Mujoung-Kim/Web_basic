const date1 = new Date('2023-03-04')
const date2 = new Date('2023-03-06')
const dateDiff = date2.getTime() - date1.getTime()
const interval = dateDiff / (24 * 60 * 60 * 1000)

console.log(`두 날짜의 차이는 ${interval}일 입니다.`)