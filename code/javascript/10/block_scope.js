let a = 10

{
	let b = 20

	console.log(`code block inner a: ${a}`)
	console.log(`code block inner b: ${b}`)
}
console.log(`code block outer a: ${a}`)
console.log(`code block outer a: ${b}`)