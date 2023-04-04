function uniqueValue() {
    let uniqueArr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!uniqueArr.includes(arguments[i])) {
            uniqueArr.push(arguments[i]);
        }
    }
    return uniqueArr;
}

console.log(uniqueValue(1, 2, 4, "привет", 4, 5, 2, 1));
console.log(uniqueValue("привет", "вася", "пупкин", 4, 3, 1));
console.log();