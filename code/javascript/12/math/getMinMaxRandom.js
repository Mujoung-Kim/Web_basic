function getMinMaxRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + 1 + min
}
const maxRandom = getMinMaxRandom(10, 20)

console.log(maxRandom)