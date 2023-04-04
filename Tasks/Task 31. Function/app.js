function summa(a, b, z) {
    return a + b - z
}

let q = summa(4, 7, 4);

console.log(q);

function prod(a, c) {
    let x = arguments;
    console.log(x);
    return arguments[0] * arguments[1]
}

let m = prod(2, 3, 4, 6,)
console.log(m);