import React from 'react';
import Undefined from './undefined';
import Negativo from './negativo';
import Uno_a_diez from './1a10';
import Mas_diez from './+10';
import Igual_100 from './igual100';

const Verificar = ({numero}) => {
    if(numero === ''){
        return(
            <div>
                <Undefined/>
            </div>
        )
    }
    if(numero < 0){
        return(
            <div>
                <Negativo/>
            </div>
        )
    }
    if(numero >= 0 & numero <=10){
        return(
            <div>
                <Uno_a_diez/>
            </div>
        )
    }
    if(numero > 10 & numero <=99){
        return(
            <div>
                <Mas_diez/>
            </div>
        )
    }
    if(numero == 100){
        return(
            <div>
                <Igual_100/>
            </div>
        )
    }
}

export default Verificar;