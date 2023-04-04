function handler1(){
    console.log("Спасибо")
};

function handler2() {
    console.log("Спасибо еще раз")
};

elem.onclick = () => console.log ("Привет");
elem.addEventListener("click", handler1);
elem.addEventListener("click", handler2);