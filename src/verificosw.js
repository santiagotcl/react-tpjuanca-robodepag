import React from 'react';
import Undefined from './undefined';
import Negativo from './negativo';
import Uno_a_diez from './1a10';
import Mas_diez from './+10';
import Igual_100 from './igual100';
var valor;
const Verificar_con_sw = ({numero}) => {
    if(numero === ''){
        valor=0;
    }
    if(numero < 0){
        valor=1;
    }
    if(numero >= 0 & numero <=10){
        valor=2;
    }
    if(numero > 10 & numero <=99){
        valor=3;
    }
    if(numero == 100){
        valor=4;
    }


    
    switch (valor){
        case 0:
            return(
                <div>
                    <Undefined/>
                </div>
            )
        
        case 1:
            return(
                <div>
                    <Negativo/>
                </div>
            )
        
        case 2:
            return(
                <div>
                    <Uno_a_diez/>
                </div>
            )
        
        case 3:
            return(
                <div>
                    <Mas_diez/>
                </div>
            )
        
        case 4:
            return(
                <div>
                    <Igual_100/>
                </div>
            )
    }
}

export default Verificar_con_sw;