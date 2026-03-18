let obj = {
    name: "Shiva",
    age: 21
}

obj.city = "Shegaon"
delete obj.age

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

let newObj = Object.assign({}, obj)
console.log(newObj)

console.log(obj.hasOwnProperty("name"))