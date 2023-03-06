let obj = {name : 'sancho', age : '23'}

for (let key in obj) {
	if (key == 'age')
		break
	console.log(obj[key])
}