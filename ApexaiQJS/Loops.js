for (let i = 0; i < 5; i++) {
    console.log(i)
}

let j = 0
while (j < 5) {
    console.log(j)
    j++
}

let k = 0
do {
    console.log(k)
    k++
} while (k < 5)

let arr = [10, 20, 30]
for (let value of arr) {
    console.log(value)
}

let obj = {a: 1, b: 2}
for (let key in obj) {
    console.log(key, obj[key])
}