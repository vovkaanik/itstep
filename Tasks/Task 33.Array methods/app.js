// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
console.log("Task1");

let a = [1, 2, 3];
let b = [4, 5, 6];

let c = a.concat(b);
console.log(c);

// 2. Дан массив[1, 2, 3].Сделайте из него массив[3, 2, 1].
console.log("Task2");

let arr = [1, 2, 3];

arr.reverse();
console.log(arr);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
console.log("Task3");

let d = [1, 2, 3];

d.push(4, 5, 6);
console.log(d);

// 4. Дан массив[1, 2, 3].Добавьте ему в начало элементы 4, 5, 6.
console.log("Task4");

let f = [1, 2, 3];

f.unshift(4, 5, 6);
console.log(f);

// 5. Дан массив [7, 9, 3]. Выведите на экран первый элемент.
console.log("Task5");

let g = [7, 9, 3];

g.pop();
g.pop();
console.log(g);

// 6. Дан массив [7, 9, 3]. Выведите на экран последний элемент.
console.log("Task6");
let h = [7, 9, 3];

h.shift();
h.shift();

console.log(h);

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
console.log("Task7");
let z = [1, 2, 3, 4, 5];

let w = z.slice(0, 3);
console.log(w);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
console.log("Task8");

let e = [1, 2, 3, 4, 5];
let y = e.slice(3, 5);
console.log(y);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
console.log("Task9");

let arr1 = [1, 2, 3, 4, 5];


