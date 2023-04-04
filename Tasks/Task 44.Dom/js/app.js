let firstElement = document.querySelector("#first-element");

firstElement.classList.add("www")
firstElement.classList.remove("www")

if (firstElement.classList.contains("www")) {
    console.log("Класс имеется")
} else {
    console.log("Класс не имеется")
}

firstElement.style.color = "red"
firstElement.style.fontSize = "30px"
firstElement.style.border = "1px solid blue"


let secondElement = document.querySelector("#second-element");

let span = "<span>!!!</span>";

secondElement.insertAdjacentHTML("afterbegin", span);
secondElement.insertAdjacentHTML("afterend", span);
secondElement.insertAdjacentHTML("beforebegin", span);
secondElement.insertAdjacentHTML("beforeend", span);

let thirdElement = document.querySelector("#third-element");

thirdElement.firstElementChild.style.color = "red";
thirdElement.lastElementChild.style.color = "red";

let www = "!";

thirdElement.insertAdjacentHTML("afterend", www)
thirdElement.insertAdjacentHTML[1]("afterend", www)