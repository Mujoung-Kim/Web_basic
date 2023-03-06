function getMaxRandom(max) {
	return Math.floor(Math.random() * max) + 1
}

const maxRandom = getMaxRandom(20)

console.log(maxRandom)