import React from 'react'
import Types from 'prop-types'
import Santiago from './Santiago'

// anexar un atributo a NewComponent llamado nacionalidad, el cual será un elemento, es decir otra función hook, este componente se va a pasar a NewComponent y se necesita verificar que sea un element y requerido.

// https://es.reactjs.org/docs/typechecking-with-proptypes.html


const NewComponent = function ({nombre, edad, lenguajes, esActivo, direccion, aspecto, estadoCivil, email, alias, mostrarInfo,santiago}) {
    return (
        <div>
            <p> Nombre {nombre} </p>
            <p> Edad {edad} </p>
            <p> Lenguajes {lenguajes} </p>
            <p> Estado {esActivo ? 'true' : 'false'} </p>
            <p> Direccion {direccion.pais} - {direccion.ciudad} - {direccion.lugar} </p>
            <p> Aspecto {aspecto.color} - {aspecto.altura} - {aspecto.peso} </p>
            <p> Estado Civil {estadoCivil} </p>
            <p> Correo {email} </p>
            <p> Apodo {alias} </p>
            <button onClick= {mostrarInfo}>
                Mostrar Perfil 
            </button>
            <p> {santiago} </p>
        </div>
    )
}

NewComponent.propTypes = { 
    nombre: Types.string,
    edad: Types.number,
    lenguajes: Types.array,
    esActivo: Types.bool,
    direccion: Types.object,
    aspecto: Types.shape({
        color: Types.string,
        altura: Types.number,
        peso: Types.number,
    }),
    estadoCivil: Types.oneOf(['casado', 'soltero', 'divorciado', 'viudo', 'poligamo', 'concubino']),
    email: Types.string.isRequired,
    alias: Types.any.isRequired,
    mostrarInfo: Types.func.isRequired,
    santiago: Types.element.isRequired
}

export default NewComponent;