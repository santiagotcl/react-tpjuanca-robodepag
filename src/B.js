import React from 'react';
import {useParams} from 'react-router-dom';


function B() {
    const {nombre, apellido} = useParams();
    if (nombre === 'santiago') {
        return (
            <div>
                Bienvenido - {nombre} - {apellido}
            </div>
         ); 
    }
    else {
       return(
       <div>
           Eres un impostor
       </div>
    );}
}

export default B;