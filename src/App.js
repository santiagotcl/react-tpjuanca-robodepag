import React from 'react';
import NewComponent from './new_component';
import Santiago from './Santiago';
//import mainN from './components/main_numbers.js';
//import logo from './logo.svg';
//import './App.css';
//import Usuarios from './components/usuarios.js'
//import C_P from './components/componente_P.js'
//import Nombre from './components/nombre.js'
//import Main from './components/main_numbers.js'

/* function App() {
  //JSX
  //azucar sintactico
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
const ubicacion = {
  pais: 'Argentina',
  ciudad: 'Tafi Viejo',
  lugar: 'Casa'
}

const fisico = {
  color: 'Blanco',
  altura: 1.8,
  peso: 85
}

const santiago = <h1>Hola Santiago!</h1>

const perfil = () => {
  alert('Hola, bienvenido a tu perfil!')
}

const App = () => (
    <div className="App">
      {/* <Usuarios/> */}
      {/* <MainComponent/> */}
      {/* <C_P/> */}
      {/* <Nombre nombre = 'matias'/> */}
      {/* <Main number = '100'/> */}
      <NewComponent 
        nombre= 'Matias'
        edad= {18}
        lenguajes= {['ingles', 'español', 'italiano']}
        esActivo= {false}
        direccion= {ubicacion}
        aspecto= {fisico}
        estadoCivil= 'casado'
        email= 'lopezk_matias@hotmail.com'
        alias= {24} 
        mostrarInfo= {perfil}
        santiago={santiago}
        />
    </div>
);

const SubApp = () => {
  console.log('este es un mensaje para la consola de SubApp desde App.js');
}

export default App;
export {SubApp};
