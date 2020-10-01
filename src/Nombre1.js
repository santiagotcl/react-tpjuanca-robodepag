import React from 'react';

const Nombre1 = ({nombre}) => {
    if(nombre === 'Santiago'){
        return(
            <div>
                {nombre}
            </div>
        )
    }
    else{
        return(
            <div>
                Nombre 'Santiago' no encontrado
            </div>
        )
    }
}

export default Nombre1;