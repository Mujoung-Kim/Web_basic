const person = {
	name : {
		firstName:'Jadon',
		lastName:'sancho'
	},
	likes : ['Soccer', 'ManRed'],
	printHello : function() {
		return 'hello'
	}
}
console.log(person['name']['firstName'])
console.log(person['likes'])
console.log(person['printHello']())