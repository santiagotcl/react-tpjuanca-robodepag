import React from 'react';
import './App.css';

function Nombre(props) {
    console.log(props.nombres)
    return (
        <>
            {props.nombres.map((usuario, i) => {
                return(
                    <li key={i}>{usuario[0].toLowerCase() + usuario[1].toUpperCase() + usuario[(usuario.length)-1].toLowerCase}</li>
                )
            })}

        </>
    );
}

export default Nombre;