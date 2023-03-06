const arr = [10, 20, 30]

for (let i = 0; i < arr.length; i++)
	console.log(arr[i])

// 가장 마지막에 값 추가
arr.push(50)
console.log(arr)
// 가장 마지막 값 추출
arr.pop()
console.log(arr)
// 가장 앞에 값 추가
arr.unshift(0)
console.log(arr)
// 가장 앞의 값 추출
arr.shift()
console.log(arr)