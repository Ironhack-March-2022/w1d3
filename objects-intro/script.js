// objects - unordered collection of any keyed values

const empty = {}

const cat = {
	name: 'Holly',
	height: 20,
	hobbies: ['eating', 'sleeping'],
	address: {
		street: 'Friedrichstr.',
		city: 'Berlin'
	}
}

const key = 'name'

// access properties
// dot notation
console.log(cat.name)
// bracket notation if you want to use a variable
console.log(cat[key])

// change a property in an object
cat.height = 30

// console.log(cat)
// console.log(cat.x)

// check if a key exists in an object
if (cat.x !== undefined) {
	console.log('this key exists')
}

// check if key name exists
// <key as a string> in <name of the object>
if ('name' in cat) {
	// console.log('cat has a name')
}

// deleting a property in an object
// this deletes the height property in cat
delete cat.height
// console.log(cat)

// iterating over an object

const person = {
	name: 'Bob',
	age: 33
}

// for in loop 
for (let key in person) {
	console.log(key)
}

const keys = Object.keys(person)
console.log(keys)

const values = Object.values(person)
console.log(values)

const entries = Object.entries(person)
console.log(entries) // -> [ [ 'name', 'Bob' ], [ 'age', 33 ] ]


const persons = [
	{
		name: 'Alice',
		age: 33,
		'last address': 'Berlin'
	},
	{
		name: 'Bob',
		age: 38
	}
]
// iterate over persons and log every name
for (let person of persons) {
	console.log(person['last address'])
}