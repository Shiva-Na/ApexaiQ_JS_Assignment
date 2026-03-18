let arr = [1, 2, 3]

arr.push(4)
arr.pop()
arr.unshift(0)
arr.shift()

console.log(arr.length)

let mapped = arr.map(x => x * 2)
let filtered = arr.filter(x => x > 1)
let reduced = arr.reduce((a, b) => a + b, 0)

console.log(mapped)
console.log(filtered)
console.log(reduced)

console.log(arr.includes(2))
console.log(arr.indexOf(2))

arr.reverse()
arr.sort()

console.log(arr.join("-"))