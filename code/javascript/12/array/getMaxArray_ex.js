const arr = [10, 120, 30, 50, 20]

function getMaxArray(arr) {
	let result = 0

	for (let i in arr)
		if (result < arr[i])
			result = arr[i]

	return result
}
console.log(getMaxArray(arr))

// 다른 풀이 방법 -> 메모리 관리적인 측면에서 더 효율적인 코드
arr.sort(function(a, b) {
	if (a < b)
		return 1
	else if (a > b)
		return -1
	else 
		return 0
})
console.log(arr[0])