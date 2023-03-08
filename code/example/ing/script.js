// main
const spanEl = document.querySelector('main h2 span')
const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer']
let index = 0
let currentTxt = txtArr[index].split('')

function writeTxt() {
	spanEl.textContent += currentTxt.shift()
	if (currentTxt.length !== 0) 
		setTimeout(writeTxt, Math.floor(Math.random() * 100))
	else {
		currentTxt = spanEl.textContent.split('')
		setTimeout(deleteTxt, 3000)
	}
}
writeTxt()