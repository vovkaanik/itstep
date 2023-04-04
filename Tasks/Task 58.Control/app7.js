function returnArrayElem(a, b) {
    let results = [];
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i]) && !results.includes(a[i])) {
            results.push(a[i]);
        }
    }
    return results;
}


let a = [1, 5, 3, 2, 9, 7];
let b = [4, 5, 2, 9, 8, 7];
let newArray = returnArrayElem(a, b)
console.log(newArray);