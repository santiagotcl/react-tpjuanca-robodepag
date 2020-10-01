import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './Menu';
import Inicio from './Inicio';
import Quiensoy from './Quiensoy';
import Tecnologias from './Tecnologias';
import contacto from './contacto';
import Footer from './Footer';
import Masthead from './masthead';
import Portfolio from './portfolio';
import {Switch,Link, Route,BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from 'history';
/*components*/
import A from './A';
import B from './B';
import C from './C';


const nombres = ['pepe', 'juan', 'jose']

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
    <Menu/>
    <Masthead/>
    <Portfolio/>
      </BrowserRouter>
      </React.StrictMode>,
  document.getElementById('page-top')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
