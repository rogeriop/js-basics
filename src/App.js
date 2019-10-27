
// MÓDULO 06 

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

/*
// Aula 04a - JS Basics 04 - import / export módulos
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
*/

/*
// Aula 04b - JS Basics 04 - import / export módulos
import React, { useState } from 'react';
import Header from './Header'

const App = () => {
  return (
<div>
    <Header.Header1 />
    <Header.Header2 />
</div>

  )
}
export default App;
*/

/*
// Aula 04c - JS Basics 04 - import / export módulos
import React, { useState } from 'react';
import Header from './Header'
import Table from './elements/Table/index'

const App = () => {
  return (
<div>
    <Header.Header1 />
    <Header.Header2 />
    <Table />
</div>

  )
}
export default App;
*/

// MÓDULO 07
// callback - função - vai ser chamada no futuro

/*
// Aula 02 - JS Basics: assincronismo em Javascript, callbacks, promises e async/await
import React, { useState, useEffect } from 'react';
import Header from './Header'
import Table from './elements/Table/index'

const App = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      console.log('olá1')
      setTimeout(() => {
        console.log('olá2')
      }, 1000)
    }, 2000)
    console.log(1)
  })

  return (
<div>
    <Header.Header1 />
    <Header.Header2 />
    <Table />
</div>

  )
}
export default App;
*/

// callback - função - vai ser chamada no futuro
// promise

// Aula 02b - JS Basics: assincronismo em Javascript, callbacks, promises e async/await
import React, { useState, useEffect } from 'react';
import Header from './Header'
import Table from './elements/Table/index'

const setTimoutPromise = (time, text) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(text)
    resolve()
  }, time)
})

const func = async() => {
  await setTimoutPromise(2000, 'olá 1')
  await setTimoutPromise(1000, 'olá 2')
  await setTimoutPromise(2000, 'olá 3')
  await setTimoutPromise(1000, 'olá 4')
}

const App = () => {
  useEffect(() => {

    /*
    // usando callback
    setTimeout(() => {
      console.log('olá1')
      setTimeout(() => {
        console.log('olá2')
      }, 1000)
    }, 2000)
    */

   /*
   // usando promise
   setTimoutPromise(2000, 'olá 1')
   .then(() => setTimoutPromise(1000, 'ola 2'))
   .then(() => setTimoutPromise(1000, 'ola 3'))
   .then(() => setTimoutPromise(1000, 'ola 4'))
   */

  // usando açucar sintático ( await )
  // pode ser assim:
  func()

  // ou assim, afinal de contas também é uma promise
  func().then (() => {
    console.log('terminou')
  })

})

  return (
<div>
    <Header.Header1 />
    <Header.Header2 />
    <Table />
</div>

  )
}
export default App;
