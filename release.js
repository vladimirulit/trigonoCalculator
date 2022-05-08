import {start, } from './index'

export function releaseAn(){
    if(Number(nAngA) + Number(nAngB) == 1){
        if(nAngA) angB = 90 - angA;
        else angA = 90 - angB;
        nAngB = true;
        nAngA = true;
    }

                                //Через Синусы

    if(Number(nGip)+Number(nAngA) == 2 && !nKatA){//для катета А по Синусу
        katA = Math.sin(Math.PI / 180 * angA) * gip;
        nKatA = true;
    }

    if(Number(nGip)+Number(nAngB) == 2 && !nKatB){//для катета B по Синусу
        katB = Math.sin(Math.PI / 180 * angB) * gip;
        nKatB = true;
    }

    if(Number(nAngA)+Number(nKatA) == 2 && !nGip){//для гипотенузы по Синусу угла A
        gip = katA / Math.sin(Math.PI / 180 * angA);
        nGip = true;
    }

    if(Number(nAngB)+Number(nKatB) == 2 && !nGip){//для гипотенузы по Синусу угла B
        gip = katB / Math.sin(Math.PI / 180 * angB);
        nGip = true;
    }

}

export function releaseSt(){
    

    if(Number(nKatA)+Number(nKatB) == 2 && !nGip){//для гипотенузы по ПиФагору
        gip = Math.sqrt(katA**2 + katB**2);
        nGip = true;        
    }

    if(Number(nKatB)+Number(nGip) == 2 && !nKatA){//для катета А по Пифагору
        katA = Math.sqrt(gip**2 - katB**2);
        nKatA = true;
    }

    if(Number(nKatA)+Number(nGip) == 2 && !nKatB){//для катета B по Пифагору
        katB = Math.sqrt(gip**2 - katA**2);
        nKatB = true;

    }

    if(Number(nKatA)+Number(nGip) == 2 && !nAngA){//для угла А по синусу
        angA = Math.asin(katA / gip) * 180 / Math.PI;
        nAngA = true;
    }

    if(Number(nKatB)+Number(nGip) == 2 && !nAngB){//для угла B по синусу
        angB = Math.asin(katB / gip) * 180 / Math.PI;
        nAngB = true;
    }
    
}