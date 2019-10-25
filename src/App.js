
/*
// default na criação de um projeto novo
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <p>
          Edit <code>src/App.js</code> and save to reload
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
  )
}
*/

/*
// Aula 01 - JS Basics 01: variáveis (var, let, const), hoisting, funções e arrow-functions
// Podendo ser reescrito como uma constante
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <p>
          Edit <code>src/App.js</code> and save to reload
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
  )
}
// Fim Aula 01
*/ 

// Aula 04 - JS Basics 04 - import / export módulos
import React, { useState } from 'react';
import Header from './Header'
import { Header1 } from './Header'
import { Header2 } from './Header'

const App = () => {
  return (
<div>
    <Header />
    <Header1 />
    <Header2 />

</div>

  )
}

export default App;
