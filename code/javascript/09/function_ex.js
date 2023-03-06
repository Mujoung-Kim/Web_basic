// array 중 가장 큰 숫자만 출력하도록 함수를 완성하시오.
function getArrayMaxNumber(arr) {
	let result = 0

	// 숫자형이 아니면 해당 값에서 가장 큰 것만 나오도록 예외처리
	for (let i in arr)
		if (typeof arr[i] === 'number' && result < arr[i])
			result = arr[i]
		else if (typeof arr[i] !== 'number')
			return result

	return result
}

const max = getArrayMaxNumber([10, 50, 30])

console.log(max)