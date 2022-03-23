const numbers = [1, 2, 3, 4, 5]
// get's an array and returns an array
// with all the values doubled
function double(arr) {
	const copy = arr
	for (let i = 0; i < copy.length; i++) {
		copy[i] = copy[i] * 2
	}
	return copy
}

const doubled = double(numbers)
// console.log(doubled)
// console.log(numbers)

const str = 'abc'
let copy = str
// console.log(copy)
copy = 'xyz'
console.log({ copy })
console.log({ str })

const arr = [1, 2, 3]
// these 2 options can be used to create a copy
// const copyA = arr.slice()
// or use the spread operator (...)
const copyA = [...arr]
// const copyA =
copyA.push('a')
arr.push('x')
console.log({ copyA })
console.log({ arr })

// change the object to a string
// change the string back to an object
const obj1 = { a: 2, b: 3 }
const obj2 = {}

const stringified = JSON.stringify(obj1)
console.log(
	JSON.stringify(obj1) === JSON.stringify(obj2)
)
console.log(obj1)
console.log(stringified)

// to create copy of more complex data structures
// use JSON.stringify and parse

const objCopy = JSON.parse(JSON.stringify(obj1))
console.log(objCopy)