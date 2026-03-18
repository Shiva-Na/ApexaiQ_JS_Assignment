function normal(a, b) {
    return a + b
}

const expression = function(a, b) {
    return a * b
}

const arrow = (a, b) => a - b

(function() {
    console.log("IIFE")
})()

function callbackExample(a, b, callback) {
    console.log(callback(a, b))
}

callbackExample(5, 3, normal)

console.log(normal(2, 3))
console.log(expression(2, 3))
console.log(arrow(5, 2))