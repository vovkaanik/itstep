// 1. Дано число. Проверить, четное оно или нечетное.
console.log("Task1");
var q = 5;

if (q % 2 == 0) {
    console.log("четное");
} else {
    console.log("нечетное");
}

// 2. Дано 2 числа. Вывести только нечетные числа из 2 чисел.
console.log("Task2");

var w = 2;
e = 7;

if (e % w == 0) {
    console.log(w)
} else (e % w !== 0)
{
    console.log(e);
}

//3. Дано 2 числа. Вывести максимальное из 2 чисел.
console.log("Task3");

var r = 9;
t = 8;

if (r > t) {
    console.log(r);
} else {
    console.log(t);
}

//4. Дано 3 числа. Вывести максимальное из 3 чисел.
console.log("Task4");
var a = 3;
b = 5;
c = 8;

if ((a > b) && (a > c)) {
    console.log(a);
} else if ((b > a) && (b > c)) {
    console.log(b);
} else {
    console.log(c);
}

// 5. Дано 3 числа. Вывести среднее по значению из 3 чисел.

let j = 1;
f = 3;
g = 6;



//6. Дано длины сторон треугольника. Определить, может ли существовать треугольник с такими сторонами при условии что, 
// 3треугольник существует только тогда, когда ни одна его сторона не превышает сумму двух других.

let m = 3;
n = 4;
l = 5;

if ((m + n > l) && (n + l > m) && (m + l > n)) {
    console.log("треугольник")
} else {
    console.log("не треугольник")
}

// Дан номер дня недели и время в часах и минутах по отдельности. Определить, 
// рабочее это время или нет, если время считается рабочим с 1 по 5 день с 8.00 по 17.00.F

var day = 4;
min = 1;
hours = 8;

if ((day <= 5) && (hours <= 17 && hours >= 8) && (min <= 1)) {
    console.log("рабочее время")
} else {
    console.log("не рабочее")
}

// Пора года

var n = 3;

if (n >= 6 && n <= 8) {
    console.log("Сейчас Лето");
} else if (n >= 9 && n <= 11) {
    console.log("Сейчас Осень");
} else if (n >= 11 && n <= 12) {
    console.log("Сейчас Зима");
} else {
    console.log("Сейчас Весна");
}
