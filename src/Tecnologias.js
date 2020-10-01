import React from 'react';

const numbers = ['T1', 'T2', 'T3', 'T4', 'T5'];


const Tecnologias = () => {
   return (<ul>
        {numbers.map((number) => 
        {return(<li>{number}</li>)
        }
        )}
    </ul>)}


export default Tecnologias;