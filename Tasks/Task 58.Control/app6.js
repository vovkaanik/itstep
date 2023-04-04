let arr = [];

for (let i = 0; i < 100; i++) {
    arr[i] = Math.floor(Math.random() * 100) + 1;
}

let max = arr[0];
let min = arr[0];
for (let i = 1; i < 100; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
let differ = max - min;
console.log(differ); 