

console.log("start program");

//получение обьектов документа
const start = document.querySelector('.button');
const help = document.querySelector('.help');
const clear = document.querySelector('.clear');
const iKatB = document.querySelector('.input_1');
const iGip = document.querySelector('.input_2');
const iKatA = document.querySelector('.input_3');
const iAngA = document.querySelector('.input_4');
const iAngB = document.querySelector('.input_5');
//

//методы создавания помощи для пользователя
help.addEventListener('click', function () {
    nHelp = !nHelp;
    addHelp();
});

let nHelp = false;
let helps = document.createElement("center");
helpText();

function helpText() {

    let p1 = document.createElement("p");
    let text1 = document.createTextNode("Данное расширение используется для нахождение значений сторон и углов в прямоугольном треугольнике.");
    p1.appendChild(text1);

    let p2 = document.createElement("p");
    let text2 = document.createTextNode("Чтобы найти значения необходимо ввести любые два параметра (один из параметров должен являться любой из сторон).");
    p2.appendChild(text2);

    let p3 = document.createElement("p");
    let text3 = document.createTextNode("Ввод значений осуществяется в поле ввода под обозначением угла или стороны.");
    p3.appendChild(text3);

    let p4 = document.createElement("p");
    let text4 = document.createTextNode("Единицы измерения у угла - градусы и они должны быть едиными.");
    p4.appendChild(text4);

    let p5 = document.createElement("p");
    let text5 = document.createTextNode("Единицы измерения у стороны должны быть одинаковыми.");
    p5.appendChild(text5);

    helps.appendChild(p1);
    helps.appendChild(p2);
    helps.appendChild(p3);
    helps.appendChild(p4);
    helps.appendChild(p5);
    helps.className = "box_help"
}

function addHelp() {
    helps.remove();
    if (nHelp) {
        document.body.appendChild(helps);
    }
}
//

//функция для вывода
function setOut() {

    iKatB.value = Math.floor(Math.abs(Number(katB)) * 10000) / 10000;
    iGip.value = Math.floor(Math.abs(Number(gip)) * 10000) / 10000;
    iKatA.value = Math.floor(Math.abs(Number(katA)) * 10000) / 10000;
    iAngA.value = Math.floor(Math.abs(Number(angA)) * 10000) / 10000;
    iAngB.value = Math.floor(Math.abs(Number(angB)) * 10000) / 10000;

}
//

//переменные сторон и углов
let katB = undefined;
let gip = undefined;
let katA = undefined;
let angA = undefined;
let angB = undefined;

let nKatB = false;
let nGip = false;
let nKatA = false;
let nAngA = false;
let nAngB = false;
//

//boolean файл для проверки ошибок
let great = true;
//

//метод очистки окон ввода
clear.addEventListener('click', function () {
    center.remove();
    great = true;
    zeroVar();
    setInputs();
    console.log("inputs cleared!")
    nHelp = false;
    addHelp();
});
//

//метод задачи значений для окон ввода
function setInputs(){
   iKatB.value = katB;
    
    iGip.value = gip;
    
    iKatA.value = katA;

    iAngA.value = angA;

    iAngB.value = angB;
}
//

//функции начала программы
document.addEventListener('keyup', function (e) {
    if (e.code == "Enter" || e.code == "NumpadEnter") {
        wasClicked();
    }
});

start.addEventListener('click', wasClicked);

function wasClicked() {
    console.log("start set variables")
    center.remove();
    great = true;
    zeroVar();
    setVariables();
    unZeroVar();
    unBug();
    if (great) check();
    if (great) {
        console.log("");
        if (Number(nKatA) + Number(nKatB) + Number(nGip) == 1 && Number(nAngA) + Number(nAngB) == 1) {
            releaseAn();
        }
        for (let i = 0; i < 3; i++) {
            releaseSt();
        }
    }
    else {
        nHelp = false;
        addHelp();
    }
    console.log("finish set variables");

}
//

//окно ошибок
let center = document.createElement('center');

function outError(error) {
    center.remove()
    center = document.createElement('center');
    const text = document.createTextNode(error);
    center.appendChild(text);
    center.className = "error_text";
    document.body.appendChild(center);
}
//

//вывод переменных
function outVar() {
    console.log("katB " + katB);
    console.log("gip " + gip);
    console.log("katA " + katA);
    console.log("angA " + angA);
    console.log("angB " + angB);

    console.log("nKatB " + nKatB);
    console.log("nGip " + nGip);
    console.log("nKatA " + nKatA);
    console.log("nAngA " + nAngA);
    console.log("nAngB " + nAngB);
}
//

//обнуление основных переменных
function zeroVar() {
    katB = undefined;
    gip = undefined;
    katA = undefined;
    angA = undefined;
    angB = undefined;

    nKatB = false;
    nGip = false;
    nKatA = false;
    nAngA = false;
    nAngB = false;

}
//

//только положительные значения
function unZeroVar() {
    

    if (Number(katB) <= 0 && nKatB) {
        outError("Неверные значения: все значения должны быть положительными");
        great = false;
    }

    if (Number(gip) <= 0 && nGip) {
        outError("Неверные значения: все значения должны быть положительными");
        great = false;
    }

    if (Number(katA) <= 0 && nKatA) {
        outError("Неверные значения: все значения должны быть положительными");
        great = false;
    }

    if (Number(angA) <= 0 && nAngA) {
        outError("Неверные значения: все значения должны быть положительными");
        great = false;
    }

    if (Number(angB) <= 0 && nAngB) {
        outError("Неверные значения: все значения должны быть положительными");
        great = false;
    }
}
//

function unBug() {
    if (Number(nKatA) + Number(nKatB) + Number(nGip) + Number(nAngA) + Number(nAngB) == 5) {
        great = false;
    }
}

//ввод значений в переменные 
function setVariables() {

    if (Number(iKatB.value) != 0) {
        katB = Number(iKatB.value);
        nKatB = true;
    }

    if (Number(iGip.value) != 0) {
        gip = Number(iGip.value);
        nGip = true;
    }

    if (Number(iKatA.value) != 0) {
        katA = Number(iKatA.value);
        nKatA = true;
    }

    if (Number(iAngA.value) != 0) {
        angA = Number(iAngA.value);
        nAngA = true;
    }

    if (Number(iAngB.value) != 0) {
        angB = Number(iAngB.value);
        nAngB = true;
    }
}
//проверка на ошибки ввода пользователя
function check() {
    if (Number(nKatA) + Number(nKatB) + Number(nGip) + Number(nAngB) + Number(nAngA) < 2) {//необходимость 2х значений
        outError("Недостаточно данных: необходимо два значения");
        great = false;
    }

    else if (Number(nKatA) + Number(nKatB) + Number(nGip) == 0) {//необходимость стороны
        outError("Недостаточно данных: необходима как минимум одна сторона");
        great = false;
    }

    else if (Number(angA) >= 90 || Number(angB) >= 90) {//сумма углов
        outError("Неверность данных: один угол не может быть больше или равен 90 градусам");
        great = false;
    }

    else if (Number(nAngB) + Number(nAngA) == 2) {//проверка на сумму углов
        if (Number(angB) + Number(angA) != 90) {
            outError("Неверность данных: сумма углов не равна 90 градусам");
            great = false;
        }
    }

    else if (Number(gip) > Number(katA) + Number(katB) && Number(nKatA) + Number(nKatB) + Number(nGip) == 3) {//для проверки сторон по сумме
        outError("Неверность данных: гипотенуза не может быть больше суммы катетов");
        great = false;
    }

    else if ((Number(gip) <= Number(katA) || Number(gip) <= Number(katB)) && nGip) {//для проверки сторон по сумме
        outError("Неверность данных: гипотенуза не может быть меньше или равна любому из катетов");
        great = false;
    }

    else if (Number(nKatA) + Number(nKatB) == 2 && nGip) {//для гипотенузы по ПиФагору
        if (Math.sqrt(katA ** 2 + katB ** 2) != gip) {
            outError("Неверность данных: гипотенуза не может быть равна " + gip + " единицам по теореме Пифагора");
            great = false;
        }
    }

    else if (Number(nKatA) + Number(nGip) == 2 && nAngA) {//для угла А по синусу
        if (Math.asin(katA / gip) * 180 / Math.PI != angA) {
            outError("Неверность данных: угол не может быть равен " + angA + " градусам по Синусу");
            great = false;
        }
    }

    else if (Number(nKatB) + Number(nGip) == 2 && nAngB) {//для угла B по синусу
        if (Math.asin(katB / gip) * 180 / Math.PI != angB) {
            outError("Неверность данных: угол не может быть равен " + angB + " градусам по Синусу");
            great = false;
        }
    }
}
//

//задача значений для угла
function releaseAn() {
    if (Number(nAngA) + Number(nAngB) == 1) {
        if (nAngA) angB = 90 - angA;
        else angA = 90 - angB;
        nAngB = true;
        nAngA = true;
    }

    //Через Синусы

    if (Number(nGip) + Number(nAngA) == 2 && !nKatA) {//для катета А по Синусу
        katA = Math.sin(Math.PI / 180 * angA) * gip;
        nKatA = true;
    }

    if (Number(nGip) + Number(nAngB) == 2 && !nKatB) {//для катета B по Синусу
        katB = Math.sin(Math.PI / 180 * angB) * gip;
        nKatB = true;
    }

    if (Number(nAngA) + Number(nKatA) == 2 && !nGip) {//для гипотенузы по Синусу угла A
        gip = katA / Math.sin(Math.PI / 180 * angA);
        nGip = true;
    }

    if (Number(nAngB) + Number(nKatB) == 2 && !nGip) {//для гипотенузы по Синусу угла B
        gip = katB / Math.sin(Math.PI / 180 * angB);
        nGip = true;
    }

}
//

//ввод значений для сторон
function releaseSt() {


    if (Number(nKatA) + Number(nKatB) == 2 && !nGip) {//для гипотенузы по ПиФагору
        gip = Math.sqrt(katA ** 2 + katB ** 2);
        nGip = true;
    }

    if (Number(nKatB) + Number(nGip) == 2 && !nKatA) {//для катета А по Пифагору
        katA = Math.sqrt(gip ** 2 - katB ** 2);
        nKatA = true;
    }

    if (Number(nKatA) + Number(nGip) == 2 && !nKatB) {//для катета B по Пифагору
        katB = Math.sqrt(gip ** 2 - katA ** 2);
        nKatB = true;

    }

    if (Number(nKatA) + Number(nGip) == 2 && !nAngA) {//для угла А по синусу
        angA = Math.asin(katA / gip) * 180 / Math.PI;
        nAngA = true;
    }

    if (Number(nKatB) + Number(nGip) == 2 && !nAngB) {//для угла B по синусу
        angB = Math.asin(katB / gip) * 180 / Math.PI;
        nAngB = true;
    }
    setVariables();
    setOut();
}
//