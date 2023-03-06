const date = new Date(2023, 3, 6, 14, 48, 50)
const dateFormat = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}
${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

console.log(dateFormat)