export function check(){
    if(Number(nKatA) + Number(nKatB) + Number(nGip) + Number(nAngB) + Number(nAngA) < 2){//необходимость 2х значений
        outError("Недостаточно данных: необходимо два значения");
        great = false;
    }

    else if(Number(nKatA) + Number(nKatB) + Number(nGip) == 0){//необходимость стороны
        outError("Недостаточно данных: необходима как минимум одна сторона");
        great = false;
    }

    else if(Number(angA) + Number(angB) > 90){//сумма углов
        outError("Недостаточно данных: необходима как минимум одна сторона");
        great = false;
    }

    else if(Number(nAngB) + Number(nAngA) == 2){//проверка на сумму углов
        if(Number(angB) + Number(angA) != 90){
            outError("Неверность данных: сумма углов не равна 90 градусам");
            great = false;
        }
    }

    else if(Number(gip) > Number(katA) + Number(katB) && Number(nKatA) + Number(nKatB) + Number(nGip) == 3){//для проверки сторон по сумме
        outError("Неверность данных: гипотенуза не может быть больше суммы катетов");
        great = false;
    }
    
    else if((Number(gip) < Number(katA) || Number(gip) < Number(katB)) && nGip){//для проверки сторон по сумме
        outError("Неверность данных: гипотенуза не может быть меньше любого из катетов");
        great = false;
    }

    else if(Number(nKatA)+Number(nKatB) == 2 && nGip){//для гипотенузы по ПиФагору
        if(Math.sqrt(katA**2 + katB**2) != gip){
            outError("Неверность данных: гипотенуза не может быть равна " + gip +" единицам по теореме Пифагора");
            great = false;
        }
    }

    else if(Number(nKatA)+Number(nGip) == 2 && nAngA){//для угла А по синусу
        if( Math.asin(katA / gip) * 180 / Math.PI != angA){
            outError("Неверность данных: угол не может быть равен " + angA + " градусам по Синусу");
            great = false;
        }             
    }
    
    else if(Number(nKatB)+Number(nGip) == 2 && nAngB){//для угла B по синусу
        if( Math.asin(katB / gip) * 180 / Math.PI != angB){
            outError("Неверность данных: угол не может быть равен " + angB + " градусам по Синусу");
            great = false;
        }     
    }
}
